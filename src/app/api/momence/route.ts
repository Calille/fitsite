import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route: Momence API Integration
 * 
 * This endpoint sends quiz data to the Momence CRM/booking system
 * to create a new lead with the user's quiz responses.
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { q1, q2, q3, q4, q5, q6, q7, firstName, lastName, email, phoneNumber } = body;

    // Validate required fields
    if (!email || !firstName || !lastName || !phoneNumber || !q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get Momence API credentials from environment variables
    const momenceApiKey = process.env.MOMENCE_API_KEY;
    const momenceHostId = process.env.MOMENCE_HOST_ID;
    const momenceSourceId = process.env.MOMENCE_SOURCE_ID;

    if (!momenceApiKey || !momenceHostId || !momenceSourceId) {
      console.error('Momence API not fully configured');
      return NextResponse.json(
        { error: 'Momence API not configured' },
        { status: 500 }
      );
    }

    // Format quiz answers for Momence API
    // Exact payload structure as specified by user
    const momencePayload = {
      host_id: momenceHostId,
      source_id: momenceSourceId,
      email: email,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      custom_fields: {
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        q5: q5,
        q6: q6,
        q7: q7
      }
    };

    // Try multiple possible Momence API endpoints
    // Based on the plugin code structure
    const possibleEndpoints = [
      'https://momence.com/public-api/v1/leads',
      'https://api.momence.com/public/v1/leads',
      'https://momence.com/api/leads',
      'https://api.momence.com/leads',
      'https://momence.com/plugin/lead-form/submit',
    ];

    let response: Response | null = null;
    let successUrl = '';

    for (const endpoint of possibleEndpoints) {
      console.log(`\n=== TRYING ENDPOINT: ${endpoint} ===`);
      console.log('Method:', 'POST');
      console.log('Headers:', {
        'Authorization': `Bearer ${momenceApiKey}`,
        'Content-Type': 'application/json'
      });
      console.log('Payload:', JSON.stringify(momencePayload, null, 2));
      
      try {
        response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${momenceApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(momencePayload)
        });

        console.log('Response Status:', response.status, response.statusText);

        // If we get a 2xx response, we found the right endpoint!
        if (response.ok) {
          successUrl = endpoint;
          console.log('✅ SUCCESS! Found working endpoint:', endpoint);
          break;
        }

        // If not 404, might be auth issue or wrong payload format
        if (response.status !== 404) {
          const errorText = await response.text();
          console.log('⚠️ Non-404 error (might be close!):', response.status);
          console.log('Error body:', errorText.substring(0, 500));
          // Keep trying other endpoints
        } else {
          console.log('❌ 404 - endpoint doesn\'t exist, trying next...');
        }

      } catch (err) {
        console.error('❌ Fetch error:', err);
        // Continue to next endpoint
      }
    }

    if (!response || !response.ok) {
      console.error('\n❌ ALL ENDPOINTS FAILED');
      console.error('Tried:', possibleEndpoints);
      console.error('Contact Momence support for the correct API endpoint.');
      console.log('===========================\n');

      return NextResponse.json(
        { 
          error: 'Could not find working Momence API endpoint',
          tried: possibleEndpoints,
          suggestion: 'Contact Momence support for API documentation'
        },
        { status: 500 }
      );
    }

    // Parse successful response
    const data = await response.json();
    console.log('\n=== ✅ MOMENCE API SUCCESS ===');
    console.log('Working Endpoint:', successUrl);
    console.log('Response:', JSON.stringify(data, null, 2));
    console.log('============================\n');

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead sent to Momence successfully',
        data: data
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Momence API integration error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to integrate with Momence',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * Alternative Momence Integration Approaches:
 * 
 * 1. If Momence uses webhook subscriptions instead of direct API:
 *    - Create a webhook endpoint and configure it in Momence dashboard
 *    - Store leads in your database first, then sync via webhook
 * 
 * 2. If Momence uses OAuth authentication:
 *    - Implement OAuth flow to get access tokens
 *    - Store refresh tokens securely
 *    - Refresh access token when expired
 * 
 * 3. If using Momence embedded forms/widgets:
 *    - Submit data to Momence's form endpoint
 *    - Use their provided form ID or widget ID
 * 
 * Consult Momence API documentation for specific implementation details:
 * https://docs.momence.com/api (or your Momence account API docs)
 */
