import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * API Route: Send Quiz Results Email
 * 
 * This endpoint sends a personalized email to the user with their quiz answers
 * and a thank you message from The Menopause Way team.
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

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Email credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Create transporter (using Gmail as example - configure based on your provider)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email HTML template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your Menopause Way Quiz Results</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f3f4f6;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">The Menopause Way</h1>
          </div>
          
          <!-- Content -->
          <div style="background-color: white; padding: 40px 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1f2937; margin-top: 0;">Hi ${firstName},</h2>
            
            <p style="color: #4b5563; line-height: 1.6; font-size: 16px;">
              Thank you for completing the quiz! Based on your answers, we've identified the key areas affecting your menopausal fat loss journey.
            </p>
            
            <p style="color: #4b5563; line-height: 1.6; font-size: 16px;">
              Here's your personalized assessment:
            </p>
            
            <!-- Quiz Answers -->
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <div style="margin-bottom: 20px;">
                <strong style="color: #06b6d4; display: block; margin-bottom: 5px;">Sleep & Recovery:</strong>
                <p style="color: #4b5563; margin: 0; line-height: 1.5;">${q1}</p>
              </div>
              
              <div style="margin-bottom: 20px;">
                <strong style="color: #06b6d4; display: block; margin-bottom: 5px;">Protein Intake:</strong>
                <p style="color: #4b5563; margin: 0; line-height: 1.5;">${q2}</p>
              </div>
              
              <div style="margin-bottom: 20px;">
                <strong style="color: #06b6d4; display: block; margin-bottom: 5px;">Strength Training:</strong>
                <p style="color: #4b5563; margin: 0; line-height: 1.5;">${q3}</p>
              </div>
              
              <div style="margin-bottom: 20px;">
                <strong style="color: #06b6d4; display: block; margin-bottom: 5px;">Energy Balance:</strong>
                <p style="color: #4b5563; margin: 0; line-height: 1.5;">${q4}</p>
              </div>

              <div style="margin-bottom: 20px;">
                <strong style="color: #06b6d4; display: block; margin-bottom: 5px;">Stress Management:</strong>
                <p style="color: #4b5563; margin: 0; line-height: 1.5;">${q5}</p>
              </div>

              <div style="margin-bottom: 20px;">
                <strong style="color: #06b6d4; display: block; margin-bottom: 5px;">Daily Movement:</strong>
                <p style="color: #4b5563; margin: 0; line-height: 1.5;">${q6}</p>
              </div>

              <div>
                <strong style="color: #06b6d4; display: block; margin-bottom: 5px;">Nutrition Consistency:</strong>
                <p style="color: #4b5563; margin: 0; line-height: 1.5;">${q7}</p>
              </div>
            </div>
            
            <p style="color: #4b5563; line-height: 1.6; font-size: 16px;">
              Based on your responses, you're an excellent fit for our 8-Week Transformation Programme. We'll be in touch soon with personalized support and next steps.
            </p>
            
            <!-- CTA Button -->
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://tphealthfitness.com/menopause-way" 
                 style="display: inline-block; background-color: #06b6d4; color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px;">
                Learn More About The Programme
              </a>
            </div>
            
            <p style="color: #4b5563; line-height: 1.6; font-size: 16px;">
              Have questions? Simply reply to this email and we'll be happy to help.
            </p>
            
            <p style="color: #4b5563; line-height: 1.6; font-size: 16px; margin-bottom: 0;">
              Warm regards,<br>
              <strong>The Menopause Way Team</strong>
            </p>
          </div>
          
          <!-- Footer -->
          <div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 12px;">
            <p style="margin: 5px 0;">© ${new Date().getFullYear()} TP Health & Fitness. All rights reserved.</p>
            <p style="margin: 5px 0;">You're receiving this email because you completed our quiz.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Plain text version (fallback for email clients that don't support HTML)
    const textContent = `
Your Fat-Loss Blocker Results

Thank you for completing the quiz! Based on your answers, we've identified the key areas affecting your menopausal fat loss journey.

Your Personalized Assessment:

Sleep & Recovery: ${q1}
Protein Intake: ${q2}
Strength Training: ${q3}
Energy Balance: ${q4}
Stress Management: ${q5}
Daily Movement: ${q6}
Nutrition Consistency: ${q7}

Based on your responses, you're an excellent fit for our 8-Week Transformation Programme. We'll be in touch soon with personalized support and next steps.

Have questions? Simply reply to this email and we'll be happy to help.

Warm regards,
The Menopause Way Team

© ${new Date().getFullYear()} TP Health & Fitness. All rights reserved.
    `;

    // Send email (with CC to will@coachwill.co.uk)
    const info = await transporter.sendMail({
      from: `"The Menopause Way" <${process.env.EMAIL_USER}>`,
      to: email,
      cc: 'will@coachwill.co.uk',
      subject: 'Your Fat-Loss Blocker Results + 3-Step Fix',
      text: textContent,
      html: htmlContent,
    });

    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        messageId: info.messageId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
