'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

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

interface QuizPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuizPopup({ isOpen, onClose }: QuizPopupProps) {
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

  // Validate email format
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate email
    if (!isValidEmail(answers.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      // Send email with quiz results
      const emailResponse = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers)
      });

      if (!emailResponse.ok) {
        const emailError = await emailResponse.json();
        throw new Error(emailError.error || 'Failed to send email');
      }

      // TODO: Momence integration disabled until correct API endpoint is confirmed
      // Contact Momence support for API documentation
      // Uncomment below when endpoint is available:
      /*
      const momenceResponse = await fetch('/api/momence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers)
      });

      if (!momenceResponse.ok) {
        const momenceError = await momenceResponse.json();
        console.error('Momence API error:', momenceError);
      }
      */

      // Show success message
      setIsSuccess(true);

      // Close popup after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);

    } catch (err) {
      console.error('Quiz submission error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Calculate progress percentage
  const progressPercentage = (step / 8) * 100;

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
                className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden sticky top-20"
                onClick={(e) => e.stopPropagation()}
              >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close quiz"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {/* Progress bar */}
            <div className="h-2 bg-gray-200">
              <motion.div
                className="h-full bg-[#56b5bd]"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Content */}
            <div className="p-10 md:p-16">
              {/* Quiz Header - Show on first question only */}
              {step === 1 && !isSuccess && (
                <div className="mb-12 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    What's Really Blocking Your Menopause Fat Loss?
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600">
                    Take 60 seconds to discover which evidence-backed factor is most likely holding you back — plus get your free actionable plan to start turning it around.
                  </p>
                </div>
              )}

              {!isSuccess ? (
                <>
                  {/* Question steps 1-7 */}
                  {step <= 7 && (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-2 text-sm font-semibold text-cyan-600 uppercase tracking-wide">
                        {questions[step - 1].category}
                      </div>
                      <div className="mb-3 text-xs font-medium text-gray-500">
                        Question {step} of 7
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                        {questions[step - 1].question}
                      </h3>

                      <div className="space-y-3">
                        {questions[step - 1].options.map((option, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleAnswer(option)}
                            className="w-full p-5 text-left bg-gray-50 hover:bg-cyan-50 border-2 border-gray-200 hover:border-cyan-500 rounded-xl transition-all duration-200 text-gray-800 font-medium text-lg"
                          >
                            {option}
                          </motion.button>
                        ))}
                      </div>

                      {/* Back button (except on first step) */}
                      {step > 1 && (
                        <button
                          onClick={() => setStep(step - 1)}
                          className="mt-6 text-gray-600 hover:text-gray-900 font-medium"
                        >
                          ← Back
                        </button>
                      )}
                    </motion.div>
                  )}

                  {/* Email collection step */}
                  {step === 8 && (
                    <motion.div
                      key="email-step"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        See Your Biggest Fat-Loss Blocker + Get a 3-Step Fix
                      </h3>
                      <p className="text-gray-600 mb-10 text-lg">
                        Enter your email below and I'll send your full personalised breakdown and simple actions you can start today — straight from The Menopause Way method.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <input
                              type="text"
                              id="firstName"
                              value={answers.firstName}
                              onChange={(e) => setAnswers({ ...answers, firstName: e.target.value })}
                              className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors text-lg"
                              placeholder="First name"
                              required
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              id="lastName"
                              value={answers.lastName}
                              onChange={(e) => setAnswers({ ...answers, lastName: e.target.value })}
                              className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors text-lg"
                              placeholder="Last name"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <input
                            type="email"
                            id="email"
                            value={answers.email}
                            onChange={(e) => setAnswers({ ...answers, email: e.target.value })}
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors text-lg"
                            placeholder="your@email.com"
                            required
                          />
                        </div>

                        <div>
                          <input
                            type="tel"
                            id="phoneNumber"
                            value={answers.phoneNumber}
                            onChange={(e) => setAnswers({ ...answers, phoneNumber: e.target.value })}
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors text-lg"
                            placeholder="Phone number (e.g. 07123456789)"
                            required
                          />
                        </div>

                        {error && (
                          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                            {error}
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full px-8 py-5 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-xl transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-lg shadow-lg"
                        >
                          {isLoading ? 'Sending...' : 'Show Me My Results'}
                        </button>
                        
                        <p className="text-center text-sm text-gray-500">
                          Evidence-based strategies only. No fads. Unsubscribe anytime.
                        </p>

                        <button
                          type="button"
                          onClick={() => setStep(7)}
                          className="w-full text-center text-gray-600 hover:text-gray-900 font-medium text-sm"
                        >
                          ← Back
                        </button>
                      </form>
                    </motion.div>
                  )}
                </>
              ) : (
                // Success message
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <FaCheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Check Your Email!
                  </h3>
                  <p className="text-gray-600 text-xl mb-4">
                    We've sent your personalized fat-loss blocker results and 3-step fix to <strong>{answers.email}</strong>
                  </p>
                  <p className="text-gray-500 mt-2 text-lg">
                    This window will close automatically...
                  </p>
                </motion.div>
              )}
            </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
