'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

interface CountryData {
  countryCode: string;
  placeholder: string;
  helpText: string;
  countryCallingCode: string;
  name: string;
}

// COMMENTED OUT QUIZ INTERFACES - KEPT FOR FUTURE USE
/*
interface QuizAnswers {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}
*/

interface QuizPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

// Country data for phone number support
const COUNTRY_DATA: CountryData[] = [
  { countryCode: 'US', placeholder: '+1 000 000 0000', helpText: 'Include the US country code +1 before the phone number', countryCallingCode: '+1', name: 'United States' },
  { countryCode: 'GB', placeholder: '+44 0000 000000', helpText: 'Include the GB country code +44 before the phone number', countryCallingCode: '+44', name: 'United Kingdom' },
  { countryCode: 'CA', placeholder: '+1 000 000 0000', helpText: 'Include the CA country code +1 before the phone number', countryCallingCode: '+1', name: 'Canada' },
  { countryCode: 'AU', placeholder: '+61 000 000 000', helpText: 'Include the AU country code +61 before the phone number', countryCallingCode: '+61', name: 'Australia' },
  { countryCode: 'DE', placeholder: '+49 000 0000000', helpText: 'Fügen Sie vor der Telefonnummer die DE-Ländervorwahl +49 ein', countryCallingCode: '+49', name: 'Germany' },
  { countryCode: 'FR', placeholder: '+33 0 00 00 00 00', helpText: 'Incluez le code pays FR +33 avant le numéro de téléphone', countryCallingCode: '+33', name: 'France' },
  { countryCode: 'ES', placeholder: '+34 000 000 000', helpText: 'Incluya el código de país ES +34 antes del número de teléfono', countryCallingCode: '+34', name: 'Spain' },
  { countryCode: 'NL', placeholder: '+31 0 00000000', helpText: 'Voeg de NL-landcode +31 toe vóór het telefoonnummer', countryCallingCode: '+31', name: 'Netherlands' },
  { countryCode: 'BE', placeholder: '+32 000 00 00 00', helpText: 'Incluez le code pays BE +32 avant le numéro de téléphone', countryCallingCode: '+32', name: 'Belgium' },
  { countryCode: 'CH', placeholder: '+41 00 000 00 00', helpText: 'Fügen Sie vor der Telefonnummer die CH-Ländervorwahl +41 ein', countryCallingCode: '+41', name: 'Switzerland' },
  { countryCode: 'AT', placeholder: '+43 000 000 0000', helpText: 'Fügen Sie vor der Telefonnummer die AT-Ländervorwahl +43 ein', countryCallingCode: '+43', name: 'Austria' },
  { countryCode: 'IE', placeholder: '+353 00 000 0000', helpText: 'Include the IE country code +353 before the phone number', countryCallingCode: '+353', name: 'Ireland' },
  { countryCode: 'IT', placeholder: '+39 000 000 0000', helpText: 'Includere il prefisso internazionale IT +39 prima del numero di telefono', countryCallingCode: '+39', name: 'Italy' },
];

export default function QuizPopup({ isOpen, onClose }: QuizPopupProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('GB');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Get country flag emoji
  const getCountryFlag = (countryCode: string) => {
    return countryCode.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
  };

  // Get browser language for default country
  const getBrowserCountry = () => {
    const language = navigator.language?.split('-')[1];
    return language || 'GB';
  };

  // Initialize country based on browser language
  useEffect(() => {
    if (isOpen) {
      const browserCountry = getBrowserCountry();
      const country = COUNTRY_DATA.find(c => c.countryCode === browserCountry) ? browserCountry : 'GB';
      setSelectedCountry(country);
      const countryData = COUNTRY_DATA.find(c => c.countryCode === country);
      if (countryData) {
        setPhoneNumber(countryData.countryCallingCode);
      }
      
      // Reset form
      setEmail('');
      setFirstName('');
      setLastName('');
      setShowSuccess(false);
      setShowError(false);
    }
  }, [isOpen]);

  // Update phone number when country changes
  const handleCountryChange = (countryCode: string) => {
    setSelectedCountry(countryCode);
    const countryData = COUNTRY_DATA.find(c => c.countryCode === countryCode);
    if (countryData) {
      setPhoneNumber(countryData.countryCallingCode);
    }
  };

  // Get current country data
  const currentCountry = COUNTRY_DATA.find(c => c.countryCode === selectedCountry) || COUNTRY_DATA[1];

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    try {
      // Submit to Mailchimp using the actual form action
      const formData = new FormData();
      formData.append('EMAIL', email);
      formData.append('FNAME', firstName);
      formData.append('LNAME', lastName);
      formData.append('PHONE', phoneNumber);

      // Submit directly to Mailchimp
      const response = await fetch('https://tphealthfitness.us7.list-manage.com/subscribe/post?u=544185a2a64d9a3a17da102d4&id=160ece17a1&f_id=0094e4e3f0', {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Mailchimp doesn't support CORS, so we use no-cors mode
      });

      // With no-cors, we can't read the response, so we assume success
      setShowSuccess(true);
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Subscription error:', error);
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // COMMENTED OUT QUIZ QUESTIONS AND FUNCTIONS - KEPT FOR FUTURE USE
  /*
  // Quiz questions and options
  const questions = [
    {
      question: "How often do you wake up feeling rested and alert?",
      category: "Sleep & Recovery",
      options: [
        "Every day",
        "A few days a week",
        "Rarely",
        "Almost never"
      ]
    },
    {
      question: "Roughly how much protein do you eat in a typical day?",
      category: "Protein Intake",
      options: [
        "I include protein at every meal",
        "I have some most days but not always",
        "I mostly rely on carbs or snacks",
        "Not sure / I don't track"
      ]
    },
    {
      question: "How many times a week do you do resistance or weight-based exercise?",
      category: "Strength Training",
      options: [
        "3+ times",
        "1–2 times",
        "Occasionally",
        "Never"
      ]
    },
    {
      question: "When you try to lose weight, which statement fits you best?",
      category: "Energy Balance",
      options: [
        "I track calories or portions consistently",
        "I eat 'healthy' but don't measure amounts",
        "I often undereat in the day and overeat later",
        "I'm not sure how much I eat"
      ]
    },
    {
      question: "How well do you manage stress or daily overwhelm?",
      category: "Stress Management",
      options: [
        "I have reliable stress outlets (exercise, downtime, breathing)",
        "I cope okay but it builds up sometimes",
        "I often feel wired or anxious",
        "I feel constantly on edge or tired-but-wired"
      ]
    },
    {
      question: "On an average day, how active are you outside of workouts?",
      category: "Daily Movement",
      options: [
        "I walk or move regularly (8k+ steps/day)",
        "I move some (4–8k steps)",
        "I sit most of the day (<4k steps)",
        "Not sure"
      ]
    },
    {
      question: "How often do weekends or social events knock you off track?",
      category: "Nutrition Consistency",
      options: [
        "Hardly ever",
        "Sometimes",
        "Most weekends",
        "Every weekend"
      ]
    }
  ];

  // Handle answer selection
  const handleAnswer = (answer: string) => {
    const questionKey = `q${step}` as keyof QuizAnswers;
    setAnswers({ ...answers, [questionKey]: answer });
    
    // Automatically move to next step after short delay
    setTimeout(() => {
      if (step < 7) {
        setStep(step + 1);
      } else {
        setStep(8); // Move to email collection
      }
    }, 300);
  };

  // Validate email format - more lenient regex
  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate email with better error message
    if (!isValidEmail(answers.email)) {
      setError(`Please enter a valid email address. You entered: "${answers.email}"`);
      return;
    }

    setIsLoading(true);

    try {
      // Send quiz results to PHP file for personalized email generation
      const formData = new FormData();
      formData.append('firstName', answers.firstName);
      formData.append('lastName', answers.lastName);
      formData.append('email', answers.email);
      formData.append('phoneNumber', answers.phoneNumber);
      formData.append('q1', answers.q1);
      formData.append('q2', answers.q2);
      formData.append('q3', answers.q3);
      formData.append('q4', answers.q4);
      formData.append('q5', answers.q5);
      formData.append('q6', answers.q6);
      formData.append('q7', answers.q7);

      console.log('Sending form data:', Object.fromEntries(formData));
      
      // UPDATED: Use /api/ path
      const response = await fetch('/api/send-quiz-email.php', {
        method: 'POST',
        body: formData
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Response data:', result);
      
      if (result.success) {
        // Log success
        console.log('✅ Quiz submitted successfully via PHP');
        
        // Show success message
        setIsSuccess(true);

        // Close popup after 3 seconds
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        throw new Error(result.error || 'Failed to send email');
      }

    } catch (err) {
      console.error('Quiz submission error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate progress percentage
  const progressPercentage = (step / 8) * 100;
  */

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm overflow-hidden"
          onClick={onClose}
        >
          <div className="h-full overflow-y-auto">
            <div className="min-h-screen flex items-start justify-center p-4 py-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden sticky top-20"
                onClick={(e) => e.stopPropagation()}
              >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close popup"
            >
              <FaTimes className="w-6 h-6" />
            </button>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      Menopause Guide Download
                    </h2>
                    <p className="text-sm text-gray-500">
                      <span className="text-red-500">*</span> indicates required
                    </p>
                  </div>

                  {/* Success Message */}
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                    >
                      <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                      <div>
                        <p className="text-green-800 font-medium">Successfully subscribed!</p>
                        <p className="text-green-600 text-sm">Check your email for the guide.</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Error Message */}
                  {showError && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                    >
                      <p className="text-red-800 text-sm">
                        Something went wrong. Please try again or contact us directly.
                      </p>
                    </motion.div>
                  )}
                  
                  {/* Mailchimp Form */}
                  <form 
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {/* Email Field */}
                    <div>
                      <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="EMAIL"
                        id="mce-EMAIL"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* First Name Field */}
                    <div>
                      <label htmlFor="mce-FNAME" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="FNAME"
                        id="mce-FNAME"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Jane"
                      />
                    </div>

                    {/* Last Name Field */}
                    <div>
                      <label htmlFor="mce-LNAME" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="LNAME"
                        id="mce-LNAME"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Smith"
                      />
                    </div>

                    {/* Phone Number Field with Country Selector */}
                    <div>
                      <label htmlFor="mce-PHONE" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <div className="flex gap-2">
                        {/* Country Selector */}
                        <div className="relative">
                          <button
                            type="button"
                            className="h-full px-3 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors flex items-center gap-2"
                            onClick={() => {
                              const select = document.getElementById('country-select-PHONE') as HTMLSelectElement;
                              select?.focus();
                            }}
                          >
                            <span className="text-2xl" aria-label={`${selectedCountry} flag`}>
                              {getCountryFlag(selectedCountry)}
                            </span>
                          </button>
                          <select
                            id="country-select-PHONE"
                            value={selectedCountry}
                            onChange={(e) => handleCountryChange(e.target.value)}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                          >
                            {COUNTRY_DATA.map((country) => (
                              <option key={country.countryCode} value={country.countryCode}>
                                {country.name} {country.countryCallingCode}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        {/* Phone Input */}
                        <input
                          type="tel"
                          name="PHONE"
                          id="mce-PHONE"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder={currentCountry.placeholder}
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        />
                      </div>
                      <p className="mt-1 text-xs text-gray-500">{currentCountry.helpText}</p>
                    </div>

                    {/* Honeypot */}
                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                      <input
                        type="text"
                        name="b_544185a2a64d9a3a17da102d4_160ece17a1"
                        tabIndex={-1}
                        value=""
                        readOnly
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting || showSuccess}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Subscribing...
                          </>
                        ) : showSuccess ? (
                          <>
                            <FaCheckCircle />
                            Subscribed!
                          </>
                        ) : (
                          'Subscribe'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}