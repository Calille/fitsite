import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service | TP Health & Fitness Coaching',
  description: 'Terms of Service for TP Health & Fitness Coaching - Our terms and conditions for using our website and services.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[200px] md:h-[250px] flex items-center bg-[#56b5bd] text-white">
          <div className="container-custom relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-white/90">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </section>

        {/* Terms of Service Content */}
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
                    Welcome to TP Health & Fitness Coaching ("we", "our", or "us"). These Terms of Service ("Terms") 
                    govern your use of our website <strong>tphealthfitness.com</strong> and our fitness coaching services. 
                    By accessing our website or using our services, you agree to be bound by these Terms.
                  </p>
                </div>

                {/* Acceptance of Terms */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Acceptance of Terms</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    By accessing and using our website and services, you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    If you are under 18 years of age, you may only use our services with the involvement and consent 
                    of a parent or guardian.
                  </p>
                </div>

                {/* Services */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Our Services</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    TP Health & Fitness Coaching provides:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Personal training sessions (one-to-one and group)</li>
                    <li>8-week structured fitness programmes</li>
                    <li>Fat loss coaching and nutrition guidance</li>
                    <li>Recovery and wellness services including Pilates</li>
                    <li>Specialty workshops and educational sessions</li>
                    <li>Online consultation and support</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed">
                    All services are provided by qualified fitness professionals and are subject to availability.
                  </p>
                </div>

                {/* Booking and Payment */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Booking and Payment</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">4.1 Booking Policy</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>All bookings must be made in advance through our booking system or by contacting us directly</li>
                    <li>Bookings are confirmed upon receipt of payment or deposit as required</li>
                    <li>We reserve the right to refuse service at our discretion</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">4.2 Payment Terms</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Payment is due in full at the time of booking unless otherwise agreed</li>
                    <li>Package deals and programmes require payment before commencement</li>
                    <li>Prices are subject to change with reasonable notice</li>
                    <li>All payments are non-refundable except as outlined in our cancellation policy</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">4.3 Cancellation Policy</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li><strong>Individual Sessions:</strong> 24 hours' notice required for cancellation or rescheduling</li>
                    <li><strong>Group Sessions:</strong> 12 hours' notice required</li>
                    <li><strong>8-Week Programmes:</strong> Cancellation within 48 hours of start date forfeits payment</li>
                    <li>Late cancellations or no-shows may result in full session charges</li>
                    <li>Emergency cancellations will be considered on a case-by-case basis</li>
                  </ul>
                </div>

                {/* Health and Safety */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Health and Safety</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">5.1 Health Disclosure</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You must disclose any health conditions, injuries, or medical concerns that may affect your ability 
                    to participate safely in physical exercise. You should consult with a healthcare provider before 
                    beginning any exercise programme.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">5.2 Assumption of Risk</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You acknowledge that physical exercise involves inherent risks and you voluntarily assume all 
                    risks associated with participation in our training programmes.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">5.3 Safety Requirements</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Follow all instructions provided by your trainer</li>
                    <li>Inform your trainer immediately of any discomfort, pain, or concerns</li>
                    <li>Wear appropriate exercise clothing and footwear</li>
                    <li>Stay hydrated and rest when needed</li>
                    <li>Do not exceed your physical limitations</li>
                  </ul>
                </div>

                {/* Liability and Insurance */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Liability and Insurance</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">6.1 Limitation of Liability</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    To the fullest extent permitted by law, TP Health & Fitness Coaching shall not be liable for any 
                    direct, indirect, incidental, special, consequential, or punitive damages arising from your use of 
                    our services or website.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">6.2 Professional Insurance</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We maintain appropriate professional indemnity and public liability insurance. However, you are 
                    encouraged to maintain your own personal insurance coverage.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">6.3 Indemnification</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You agree to indemnify and hold harmless TP Health & Fitness Coaching from any claims arising 
                    from your use of our services, violation of these terms, or infringement of any third-party rights.
                  </p>
                </div>

                {/* Intellectual Property */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Intellectual Property</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    All content on our website, including text, graphics, logos, images, and training materials, 
                    is the property of TP Health & Fitness Coaching and is protected by copyright and other intellectual 
                    property laws.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>You may not reproduce, distribute, or commercially use our content without written permission</li>
                    <li>Training programmes and methodologies are proprietary and confidential</li>
                    <li>You may not record or photograph sessions without explicit consent</li>
                  </ul>
                </div>

                {/* User Conduct */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">8. User Conduct</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You agree to use our services and website responsibly and in accordance with these terms:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Treat all staff and other clients with respect and courtesy</li>
                    <li>Arrive punctually for scheduled sessions</li>
                    <li>Follow studio rules and guidelines</li>
                    <li>Do not engage in disruptive or inappropriate behaviour</li>
                    <li>Respect the privacy and personal space of others</li>
                    <li>Do not use our facilities or services for any unlawful purpose</li>
                  </ul>
                </div>

                {/* Privacy and Data Protection */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Privacy and Data Protection</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Your privacy is important to us. Please review our 
                    <Link href="/privacy" className="text-[#56b5bd] hover:underline"> Privacy Policy</Link> to 
                    understand how we collect, use, and protect your personal information.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>We collect information necessary to provide our services effectively</li>
                    <li>Your health and fitness data will be kept confidential</li>
                    <li>We may use anonymised data for service improvement and research</li>
                    <li>You have rights regarding your personal data under UK data protection laws</li>
                  </ul>
                </div>

                {/* Website Use */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Website Use</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-700 mb-3">10.1 Permitted Use</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    You may use our website for lawful purposes related to learning about and booking our services.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-700 mb-3">10.2 Prohibited Activities</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>Attempting to gain unauthorised access to our systems</li>
                    <li>Introducing viruses, malware, or malicious code</li>
                    <li>Scraping or automated downloading of content</li>
                    <li>Impersonating TP Health & Fitness Coaching or our staff</li>
                    <li>Using the website in any way that could damage or overload our servers</li>
                  </ul>
                </div>

                {/* Third-Party Services */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Third-Party Services</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our website may contain links to third-party websites or integrate with third-party services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
                    <li>We use Momence for booking and webchat functionality</li>
                    <li>Social media links may direct you to external platforms</li>
                    <li>We are not responsible for the content or privacy practices of third-party sites</li>
                    <li>Your use of third-party services is subject to their terms and conditions</li>
                  </ul>
                </div>

                {/* Force Majeure */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Force Majeure</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We shall not be liable for any failure to perform our obligations where such failure results 
                    from acts of nature, government restrictions, war, terrorism, pandemic, or other circumstances 
                    beyond our reasonable control. In such cases, we may suspend services temporarily and work with 
                    clients to reschedule or provide alternative arrangements.
                  </p>
                </div>

                {/* Termination */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Termination</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We reserve the right to terminate or suspend your access to our services immediately, without 
                    prior notice, for conduct that we believe violates these Terms or is harmful to other users, 
                    us, or third parties.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    You may terminate your use of our services at any time, subject to our cancellation policy 
                    and any outstanding obligations.
                  </p>
                </div>

                {/* Changes to Terms */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">14. Changes to Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right to modify these Terms at any time. We will notify users of any material 
                    changes by posting the updated Terms on our website with a new "Last updated" date. Your 
                    continued use of our services after such changes constitutes acceptance of the new Terms.
                  </p>
                </div>

                {/* Governing Law */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">15. Governing Law</h2>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of England and Wales. 
                    Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the 
                    courts of England and Wales.
                  </p>
                </div>

                {/* Severability */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">16. Severability</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision shall 
                    be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise 
                    remain in full force and effect.
                  </p>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">17. Contact Information</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600 mb-2"><strong>TP Health & Fitness Coaching</strong></p>
                    <p className="text-gray-600 mb-2">Email: <a href="mailto:info@tphealthfitness.com" className="text-[#56b5bd] hover:underline">info@tphealthfitness.com</a></p>
                    <p className="text-gray-600 mb-2">Phone: +44 7123 456789</p>
                    <p className="text-gray-600 mb-2">Address: Harpenden, Hertfordshire, AL5 3BL, England, UK</p>
                    <p className="text-gray-600">
                      Contact Form: <Link href="/contact" className="text-[#56b5bd] hover:underline">www.tphealthfitness.com/contact</Link>
                    </p>
                  </div>
                </div>

                {/* Acknowledgment */}
                <div className="bg-[#56b5bd]/10 p-6 rounded-lg">
                  <p className="text-gray-700 font-medium mb-2">Acknowledgment</p>
                  <p className="text-gray-600 leading-relaxed">
                    By using our website and services, you acknowledge that you have read, understood, and agree 
                    to be bound by these Terms of Service and our Privacy Policy.
                  </p>
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
