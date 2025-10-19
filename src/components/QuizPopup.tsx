'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

// TypeScript declarations for Mailchimp global variables
declare global {
  interface Window {
    $mcSite?: {
      optinFeatures: (() => void)[];
      loadingPrerequisites: Promise<any>[];
      permissionProviders: { [key: string]: Promise<boolean> };
      registerPermissionProvider: (permission: string, permissionResolutionPromise: Promise<boolean>) => void;
      enableOptIn: () => void;
      runIfOptedIn: (fn: () => void, additionalPermissions?: string[]) => void;
      hasOptedIn: () => boolean;
      createCookie: (name: string, value: any, expirationDays: number) => void;
      readCookie: (name: string) => string | undefined;
    };
  }
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

export default function QuizPopup({ isOpen, onClose }: QuizPopupProps) {
  // COMMENTED OUT QUIZ STATE - KEPT FOR FUTURE USE
  /*
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswers>({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  */

  // COMMENTED OUT QUIZ RESET EFFECT - KEPT FOR FUTURE USE
  /*
  // Reset state when popup opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setAnswers({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
      });
      setError('');
      setIsSuccess(false);
    }
  }, [isOpen]);
  */

  // Load Mailchimp script when popup opens
  useEffect(() => {
    if (isOpen) {
      // Check if script already exists
      if (!document.getElementById('mcjs')) {
        const script = document.createElement('script');
        script.id = 'mcjs';
        script.innerHTML = `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/544185a2a64d9a3a17da102d4/4533c3de0cacd48a8a17dbd8a.js");`;
        document.head.appendChild(script);
      }

      // Force enable Mailchimp opt-in and bypass permissions
      setTimeout(() => {
        if (window.$mcSite) {
          // Enable opt-in immediately
          window.$mcSite.enableOptIn();
          
          // Grant all required permissions
          window.$mcSite.registerPermissionProvider('preferencesProcessingAllowed', Promise.resolve(true));
          window.$mcSite.registerPermissionProvider('analyticsProcessingAllowed', Promise.resolve(true));
          window.$mcSite.registerPermissionProvider('marketingAllowed', Promise.resolve(true));
          
          // Force trigger any pending opt-in features
          if (window.$mcSite.optinFeatures && window.$mcSite.optinFeatures.length > 0) {
            window.$mcSite.optinFeatures.forEach((fn: () => void) => fn());
            window.$mcSite.optinFeatures = [];
          }
        }
      }, 1000);
    }
  }, [isOpen]);

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
                <div className="p-10 md:p-16 text-center">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Stay Connected!
                    </h2>
                    <p className="text-lg text-gray-600">
                      Loading our newsletter signup form...
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
                    </div>
                    
                    <div className="space-y-3">
                      <p className="text-sm text-gray-500">
                        If the form doesn't appear, try the button below:
                      </p>
                      <button
                        onClick={() => {
                          // Force load Mailchimp form
                          if (window.$mcSite) {
                            window.$mcSite.enableOptIn();
                            window.$mcSite.registerPermissionProvider('preferencesProcessingAllowed', Promise.resolve(true));
                            window.$mcSite.registerPermissionProvider('analyticsProcessingAllowed', Promise.resolve(true));
                            window.$mcSite.registerPermissionProvider('marketingAllowed', Promise.resolve(true));
                            
                            // Try to load the form directly
                            const script = document.createElement('script');
                            script.src = 'https://form-assets.mailchimp.com/snippet/account/245732778?site=4533c3de0cacd48a8a17dbd8a';
                            script.type = 'text/javascript';
                            document.body.appendChild(script);
                          }
                        }}
                        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"
                      >
                        Load Mailchimp Form
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}