import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | TP Health & Fitness Coaching',
  description: 'Privacy Policy for TP Health & Fitness Coaching - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[200px] md:h-[250px] flex items-center bg-[#56b5bd] text-white">
          <div className="container-custom relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-white/90">
              Your privacy matters to us. Learn how we protect your information.
            </p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              <div className="text-sm text-gray-500 mb-8">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </div>

              <div className="space-y-8">
                
                {/* Introduction */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Introduction</h2>
                  <p className="text-gray-600 leading-relaxed">
                    TP Health & Fitness Coaching ("we", "our", or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                    you visit our website <strong>tphealthfitness.com</strong> (including its subdomains, such as 
                    our coaching guide and course pages) and use our services.
                  </p>
                </div>

                {/* Information We Collect */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">2.1 Personal Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Fill out our contact form</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Book a consultation or training session</li>
                    <li>Contact us via email or phone</li>
                  </ul>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    This personal information may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li><strong>Contact Information:</strong> Name, email address, phone number</li>
                    <li><strong>Communication Data:</strong> Messages, inquiries, and correspondence</li>
                    <li><strong>Service Information:</strong> Fitness goals, preferences, and requirements</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">2.2 Automatically Collected Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    On some of our pages, including our coaching guide and course landing pages, we use 
                    Google Analytics 4 (GA4) to understand how visitors use the site. GA4 only loads 
                    after you actively accept analytics cookies in our consent banner (see Section 8). 
                    If you reject analytics cookies, no Google Analytics scripts are loaded and no 
                    analytics data is sent to Google.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Where you have consented, GA4 may collect:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li><strong>Usage Data:</strong> Pages visited, time spent on pages, referring websites</li>
                    <li><strong>Device Information:</strong> Browser type, device type, operating system</li>
                    <li><strong>Technical Data:</strong> Approximate location (city level), page load times and Core Web Vitals performance metrics</li>
                    <li><strong>Interaction Data:</strong> Clicks on key buttons (such as checkout links), scrolling behaviour and general site engagement</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We use Google Consent Mode so that analytics storage remains denied until you accept. 
                    You can change your choice at any time using the cookie settings link in the footer 
                    of pages where the consent banner is shown.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">2.3 Local Storage</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We use browser local storage for limited purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li><strong>Cookie consent:</strong> Remembering whether you accepted or rejected analytics cookies, so your choice is respected on future visits</li>
                    <li><strong>Site functionality:</strong> Remembering preferences and settings needed for the site to work as expected</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Consent preferences are stored locally in your browser and are not shared with third 
                    parties. You can clear this data at any time through your browser settings, which will 
                    reset your cookie choice and show the consent banner again on your next visit.
                  </p>
                </div>

                {/* How We Use Information */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We use the information we collect for various purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li><strong>Service Delivery:</strong> To provide fitness coaching and training services</li>
                    <li><strong>Communication:</strong> To respond to inquiries and provide customer support</li>
                    <li><strong>Personalisation:</strong> To tailor our services to your fitness goals and preferences</li>
                    <li><strong>Website Improvement:</strong> To analyse usage patterns and improve functionality (with your consent for analytics cookies)</li>
                    <li><strong>Marketing:</strong> To send relevant information about our services (with your consent)</li>
                    <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    Our legal basis for using Google Analytics is your consent. You can withdraw consent at 
                    any time by rejecting analytics cookies or using the cookie settings option on relevant pages.
                  </p>
                </div>

                {/* Third-Party Services */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Third-Party Services</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our website uses the following third-party services:
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">4.1 Google Analytics</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We use Google Analytics 4 on selected pages (including our coaching guide landing pages) 
                    to understand how visitors use those pages. Google processes this data on our behalf as 
                    a data processor. Analytics only runs if you accept analytics cookies. Google may process 
                    data on servers outside the UK; where this occurs, appropriate safeguards apply under 
                    Google&apos;s data processing terms. For more information, see{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#56b5bd] hover:underline">Google&apos;s Privacy Policy</a>.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">4.2 Momence</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We use Momence for booking, class schedules, lead forms and webchat. When you use these 
                    features, your messages, booking details and contact information may be processed by 
                    Momence. Please refer to{' '}
                    <a href="https://momence.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#56b5bd] hover:underline">Momence&apos;s Privacy Policy</a>{' '}
                    for more information.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">4.3 Mailchimp</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    When you subscribe to our newsletter or submit certain forms on our website, your details 
                    may be processed by Mailchimp (The Rocket Science Group LLC). Please refer to{' '}
                    <a href="https://www.intuit.com/privacy/statement/" target="_blank" rel="noopener noreferrer" className="text-[#56b5bd] hover:underline">Mailchimp&apos;s Privacy Policy</a>{' '}
                    for more information.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">4.4 Stripe</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Some of our pages link to Stripe for secure payment processing when you purchase digital 
                    products or services. Payment details are handled directly by Stripe and are not stored 
                    on our website. Please refer to{' '}
                    <a href="https://stripe.com/gb/privacy" target="_blank" rel="noopener noreferrer" className="text-[#56b5bd] hover:underline">Stripe&apos;s Privacy Policy</a>{' '}
                    for more information.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">4.5 Social Media</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our website contains links to social media platforms including Instagram. When you interact with these links, 
                    you may be subject to the privacy policies of those platforms.
                  </p>
                </div>

                {/* Data Protection */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Data Protection and Security</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We implement appropriate technical and organisational measures to protect your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Secure data transmission using HTTPS encryption</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited access to personal information on a need-to-know basis</li>
                    <li>Secure storage of contact form submissions</li>
                  </ul>
                </div>

                {/* Data Retention */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Data Retention</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We retain your personal information only as long as necessary:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li><strong>Contact inquiries:</strong> Up to 2 years for follow-up and service improvement</li>
                    <li><strong>Client information:</strong> Duration of our business relationship plus 1 year</li>
                    <li><strong>Website analytics (GA4):</strong> Retained by Google according to its default retention settings (typically up to 14 months), or as configured in our analytics account</li>
                    <li><strong>Marketing data:</strong> Until you unsubscribe or request deletion</li>
                  </ul>
                </div>

                {/* Your Rights */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Your Rights</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Under UK data protection laws, you have the following rights:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li><strong>Right to Access:</strong> Request copies of your personal information</li>
                    <li><strong>Right to Rectification:</strong> Request correction of inaccurate information</li>
                    <li><strong>Right to Erasure:</strong> Request deletion of your personal information</li>
                    <li><strong>Right to Restrict Processing:</strong> Request limitation on how we use your data</li>
                    <li><strong>Right to Object:</strong> Object to processing for direct marketing purposes</li>
                    <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for analytics cookies at any time (this does not affect the lawfulness of processing before withdrawal)</li>
                    <li><strong>Right to Data Portability:</strong> Request transfer of your data in a usable format</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    To exercise any of these rights, please contact us using the information provided below.
                  </p>
                </div>

                {/* Cookies */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Cookies and Local Storage</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We use cookies and similar technologies (including browser local storage) in two broad categories:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li><strong>Essential:</strong> Required for basic website functionality, such as remembering your cookie consent choice</li>
                    <li><strong>Analytics (optional):</strong> Used to understand how visitors use selected pages via Google Analytics 4. These are only activated if you click Accept on our cookie banner</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">8.1 Cookie Consent</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    On pages where analytics is used, you will see a cookie consent banner when you first visit. 
                    You can choose to Accept or Reject analytics cookies. Reject means Google Analytics is not 
                    loaded, no analytics cookies are set, and no usage data is sent to Google. Your choice is 
                    saved in your browser so the banner does not reappear on every visit.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You can change your mind at any time using the &quot;Cookie settings&quot; link in the footer 
                    of pages that show the consent banner. This clears your saved choice and lets you accept 
                    or reject again.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">8.2 Managing Cookies in Your Browser</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You can also block or delete cookies and local storage through your browser settings at 
                    any time. Note that blocking essential storage may affect how the consent banner behaves 
                    on return visits.
                  </p>
                </div>

                {/* Changes to Policy */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Changes to This Privacy Policy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by 
                    posting the new Privacy Policy on this page and updating the "Last updated" date. 
                    You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600 mb-2"><strong>TP Health & Fitness Coaching</strong></p>
                    <p className="text-gray-600 mb-2">Email: <a href="mailto:info@tphealthfitness.com" className="text-[#56b5bd] hover:underline">info@tphealthfitness.com</a></p>
                    <p className="text-gray-600 mb-2">Phone: 07447 333743</p>
                    <p className="text-gray-600 mb-2">Address: Harpenden, Hertfordshire, AL5 3BL, England, UK</p>
                    <p className="text-gray-600">
                      Contact Form: <Link href="/contact" className="text-[#56b5bd] hover:underline">www.tphealthfitness.com/contact</Link>
                    </p>
                  </div>
                </div>

                {/* Back to Home */}
                <div className="pt-8 border-t border-gray-200">
                  <Link 
                    href="/" 
                    className="inline-flex items-center text-[#56b5bd] hover:text-[#45a4ac] font-medium"
                  >
                    ← Back to Home
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
