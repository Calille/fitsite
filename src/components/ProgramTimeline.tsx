'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

interface WeekData {
  week: number;
  title: string;
  description: string;
  highlights: string[];
}

const weekData: WeekData[] = [
  {
    week: 1,
    title: "Foundation & Setup",
    description: "We start by understanding your current habits, metabolism, and unique challenges. You'll learn the Plate Method basics and set up your personalized tracking system.",
    highlights: [
      "Complete your health assessment",
      "Learn the Plate Method fundamentals",
      "Set realistic, achievable goals",
      "Join the private support community"
    ]
  },
  {
    week: 2,
    title: "Protein Mastery",
    description: "This week focuses on optimizing your protein intake to protect your metabolism and control hunger. You'll discover easy protein sources and meal ideas.",
    highlights: [
      "Master protein portions for your body",
      "Learn hunger management strategies",
      "Receive personalized meal templates",
      "First check-in and progress review"
    ]
  },
  {
    week: 3,
    title: "Energy Balance",
    description: "Understanding how to balance your energy without feeling deprived. You'll learn to manage portions naturally while enjoying the foods you love.",
    highlights: [
      "Fine-tune your portion sizes",
      "Learn sustainable eating strategies",
      "Address energy slumps and cravings",
      "Navigate social eating situations"
    ]
  },
  {
    week: 4,
    title: "Midpoint Review",
    description: "Time to assess your progress and make any necessary adjustments. Most women start seeing noticeable changes by now.",
    highlights: [
      "Comprehensive progress assessment",
      "Adjust your plan based on results",
      "Troubleshoot any challenges",
      "Celebrate your wins so far"
    ]
  },
  {
    week: 5,
    title: "Social Eating Confidence",
    description: "Master the art of enjoying dinners out, holidays, and celebrations without derailing your progress. This is where true freedom begins.",
    highlights: [
      "Restaurant navigation strategies",
      "The 'flex day' approach",
      "Maintaining progress during events",
      "Building long-term flexibility"
    ]
  },
  {
    week: 6,
    title: "Plateau Prevention",
    description: "Learn the Plateau Protocol to keep results coming. We'll implement strategies to ensure your metabolism stays responsive.",
    highlights: [
      "Introduction to the Plateau Protocol",
      "Metabolic adaptation strategies",
      "Advanced portion adjustments",
      "Maintaining momentum"
    ]
  },
  {
    week: 7,
    title: "Lifestyle Integration",
    description: "Making these habits stick for life. You'll learn how to maintain your results without constant effort or restriction.",
    highlights: [
      "Create your maintenance plan",
      "Develop long-term habits",
      "Learn to navigate setbacks",
      "Build sustainable routines"
    ]
  },
  {
    week: 8,
    title: "Completion & Beyond",
    description: "Final measurements, celebration of your transformation, and your personalized roadmap for continued success beyond the program.",
    highlights: [
      "Final progress assessment",
      "Receive your personalized maintenance guide",
      "Celebrate your transformation",
      "Access to continued community support"
    ]
  }
];

export default function ProgramTimeline() {
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [hoveredWeek, setHoveredWeek] = useState<number | null>(null);

  // Load saved progress from localStorage
  useEffect(() => {
    const savedWeek = localStorage.getItem('menopause-way-current-week');
    if (savedWeek) {
      setSelectedWeek(parseInt(savedWeek, 10));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('menopause-way-current-week', selectedWeek.toString());
  }, [selectedWeek]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && selectedWeek > 1) {
        setSelectedWeek(selectedWeek - 1);
      } else if (e.key === 'ArrowRight' && selectedWeek < 8) {
        setSelectedWeek(selectedWeek + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedWeek]);

  const currentWeekData = weekData[selectedWeek - 1];
  const progressPercentage = (selectedWeek / 8) * 100;

  return (
    <section className="py-20 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Your 8-Week Transformation Journey
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A clear, step-by-step roadmap to sustainable fat loss. Click any week to see what you'll accomplish.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative h-2 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-cyan-400"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Week 1</span>
            <span>Week 8</span>
          </div>
        </motion.div>

        {/* Timeline - Desktop Zigzag / Mobile Vertical */}
        <div className="relative mb-16">
          {/* Mobile Vertical Timeline */}
          <div className="md:hidden space-y-4">
            {weekData.map((week) => (
              <motion.button
                key={week.week}
                onClick={() => setSelectedWeek(week.week)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: week.week * 0.05 }}
                viewport={{ once: true }}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                  selectedWeek === week.week
                    ? 'bg-cyan-500/20 border-cyan-500'
                    : 'bg-zinc-900/50 border-zinc-800 hover:border-cyan-500/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      selectedWeek === week.week
                        ? 'bg-cyan-500 text-white'
                        : 'bg-zinc-800 text-gray-400'
                    }`}
                  >
                    {week.week}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Week {week.week}</div>
                    <div className="font-semibold text-white">{week.title}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Desktop Zigzag Timeline */}
          <div className="hidden md:block">
            <div className="grid grid-cols-4 gap-8">
              {/* Top Row - Weeks 1-4 */}
              {weekData.slice(0, 4).map((week, index) => (
                <motion.div
                  key={week.week}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <button
                    onClick={() => setSelectedWeek(week.week)}
                    onMouseEnter={() => setHoveredWeek(week.week)}
                    onMouseLeave={() => setHoveredWeek(null)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 ${
                      selectedWeek === week.week
                        ? 'bg-cyan-500/20 border-cyan-500 transform scale-105'
                        : hoveredWeek === week.week
                        ? 'bg-zinc-800 border-cyan-500/50 transform scale-102'
                        : 'bg-zinc-900/50 border-zinc-800'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center font-bold text-lg ${
                        selectedWeek === week.week
                          ? 'bg-cyan-500 text-white'
                          : 'bg-zinc-800 text-gray-400'
                      }`}
                    >
                      {week.week}
                    </div>
                    <div className="text-xs text-gray-500 mb-1">Week {week.week}</div>
                    <div className="font-semibold text-white text-sm">{week.title}</div>
                  </button>
                  
                  {/* Connector Line */}
                  {index < 3 && (
                    <div className="absolute top-6 -right-4 w-8 h-0.5 bg-zinc-700" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Vertical Connector */}
            <div className="flex justify-end my-4">
              <div className="w-0.5 h-12 bg-zinc-700" />
            </div>

            <div className="grid grid-cols-4 gap-8">
              {/* Bottom Row - Weeks 5-8 (reversed) */}
              {weekData.slice(4, 8).reverse().map((week, index) => (
                <motion.div
                  key={week.week}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <button
                    onClick={() => setSelectedWeek(week.week)}
                    onMouseEnter={() => setHoveredWeek(week.week)}
                    onMouseLeave={() => setHoveredWeek(null)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 ${
                      selectedWeek === week.week
                        ? 'bg-cyan-500/20 border-cyan-500 transform scale-105'
                        : hoveredWeek === week.week
                        ? 'bg-zinc-800 border-cyan-500/50 transform scale-102'
                        : 'bg-zinc-900/50 border-zinc-800'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center font-bold text-lg ${
                        selectedWeek === week.week
                          ? 'bg-cyan-500 text-white'
                          : 'bg-zinc-800 text-gray-400'
                      }`}
                    >
                      {week.week}
                    </div>
                    <div className="text-xs text-gray-500 mb-1">Week {week.week}</div>
                    <div className="font-semibold text-white text-sm">{week.title}</div>
                  </button>
                  
                  {/* Connector Line */}
                  {index < 3 && (
                    <div className="absolute top-6 -left-4 w-8 h-0.5 bg-zinc-700" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Detail Panel */}
        <motion.div
          key={selectedWeek}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
              {currentWeekData.week}
            </div>
            <div>
              <div className="text-sm text-gray-500">Week {currentWeekData.week}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {currentWeekData.title}
              </h3>
            </div>
          </div>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {currentWeekData.description}
          </p>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">What You'll Accomplish:</h4>
            <div className="space-y-3">
              {currentWeekData.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="text-cyan-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Hint */}
          <div className="mt-8 pt-6 border-t border-zinc-800 text-center text-sm text-gray-500">
            Use arrow keys ← → or click weeks above to explore the timeline
          </div>
        </motion.div>
      </div>
    </section>
  );
}

