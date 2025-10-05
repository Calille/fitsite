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
    title: "The Foundation — Awareness & Daily Movement",
    description: "You'll start by building awareness — the skill that underpins every long-term change. This week focuses on understanding your current habits, tracking your movement, and introducing gentle daily activity. You'll learn how menopause affects metabolism and why non-exercise activity (steps, movement, posture) is your secret weapon. No calorie counting, no judgement — just awareness and action.",
    highlights: [
      "Build awareness of your current habits",
      "Learn how menopause affects metabolism",
      "Introduce gentle daily movement",
      "Understand non-exercise activity benefits"
    ]
  },
  {
    week: 2,
    title: "The Effortless Deficit — Eating for Fat Loss Without Dieting",
    description: "This week turns awareness into action. You'll learn how to create a gentle calorie deficit using the Menopause Plate Method — no tracking apps or meal plans required. You'll discover how to eat with your family, feel full, and still make progress. It's about eating smarter, not less, and finally dropping the \"dieting\" mindset for good.",
    highlights: [
      "Learn the Menopause Plate Method",
      "Create gentle calorie deficit naturally",
      "Eat with family without restriction",
      "Drop the dieting mindset for good"
    ]
  },
  {
    week: 3,
    title: "Protein Mastery — Your Secret Weapon for a Stronger Metabolism",
    description: "Protein becomes your best ally. You'll learn why it's crucial for strength, satiety, and metabolism during menopause — and how to easily hit your target without endless chicken and shakes. You'll get practical strategies, budget-friendly swaps, and snack ideas that keep you full for hours. This is the week your energy and body composition start to shift.",
    highlights: [
      "Understand protein's role in menopause",
      "Learn practical protein strategies",
      "Discover budget-friendly protein swaps",
      "Experience energy and body composition shifts"
    ]
  },
  {
    week: 4,
    title: "Your Complete Fitness Blueprint — Strength, Cardio & Bone Health",
    description: "This is where your training clicks. You'll understand why lifting weights and moving with purpose are essential for long-term fat loss, strength, and bone density. You'll learn how to combine strength and cardio effectively, what \"progressive overload\" means, and how to get results that go beyond the scale. The goal: feel stronger, move better, and own your workouts.",
    highlights: [
      "Understand strength training for menopause",
      "Learn effective cardio combinations",
      "Master progressive overload principles",
      "Get results beyond the scale"
    ]
  },
  {
    week: 5,
    title: "Mastering Your Inner World — Hunger, Cravings & Emotional Wellbeing",
    description: "Fat loss isn't just about food — it's about your mindset. This week helps you understand emotional hunger, cravings, and stress eating so you can stay in control without guilt. You'll build practical tools to manage poor sleep, stress, and hormonal shifts with calm and confidence. This is the week where peace of mind meets progress.",
    highlights: [
      "Understand emotional hunger patterns",
      "Build tools for stress management",
      "Manage hormonal shifts with confidence",
      "Achieve peace of mind with progress"
    ]
  },
  {
    week: 6,
    title: "Thriving in the Real World — Socials, Speed & Sanity",
    description: "Life doesn't stop for your goals — and now you won't need it to. This week teaches you how to handle meals out, travel, social events, and busy evenings without losing momentum. You'll master flexible eating, the 80/20 rule, and how to \"never miss twice.\" You'll learn to live, not diet — with confidence in any situation.",
    highlights: [
      "Master flexible eating strategies",
      "Learn the 80/20 rule approach",
      "Handle social events with confidence",
      "Never miss twice principle"
    ]
  },
  {
    week: 7,
    title: "From Dieting to Thriving — Building Your New Identity & Resilience",
    description: "You've built habits — now we make them who you are. This week focuses on identity, resilience, and navigating plateaus without frustration. You'll learn how to shift from \"doing\" healthy things to being a healthy person. You'll reframe self-talk, reconnect with your \"why,\" and build confidence that lasts beyond the programme.",
    highlights: [
      "Shift from doing to being healthy",
      "Build resilience and identity",
      "Reframe negative self-talk",
      "Reconnect with your deeper why"
    ]
  },
  {
    week: 8,
    title: "Future-Proofing Your Health — Graduation & Beyond",
    description: "This is your graduation week — and the start of lifelong results. You'll create your personal \"Owner's Manual\" for health, setting non-negotiables that keep you on track. You'll learn how to maintain results effortlessly, support bone and muscle health, and use smart supplementation if needed. This week ties everything together so you can live strong, confident, and energised for years to come.",
    highlights: [
      "Create your personal Owner's Manual",
      "Set non-negotiable health habits",
      "Learn effortless maintenance strategies",
      "Support long-term bone and muscle health"
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
    <section className="py-20 px-6 bg-[#56b5bd]">
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
            Welcome to Your Transformation
          </h2>
          <p className="text-lg text-white/90 max-w-4xl mx-auto">
            Your journey starts here. This programme is built for women who want lasting fat loss, renewed energy, and confidence through menopause — without restrictive dieting. You'll learn how to work with your body, not against it, by mastering science-backed nutrition, strength, and lifestyle habits. The focus is on real life: flexibility, consistency, and results that last.
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
          <div className="relative h-2 bg-white/30 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-white/70">
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
                    ? 'bg-white border-white text-gray-900 shadow-lg'
                    : 'bg-white/90 border-white/50 hover:border-white hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      selectedWeek === week.week
                        ? 'bg-[#56b5bd] text-white border-2 border-[#56b5bd]'
                        : 'bg-white/20 text-white border-2 border-white/30'
                    }`}
                  >
                    {week.week}
                  </div>
                  <div>
                    <div className={`text-sm ${selectedWeek === week.week ? 'text-gray-600' : 'text-white/80'}`}>Week {week.week}</div>
                    <div className={`font-semibold ${selectedWeek === week.week ? 'text-gray-900' : 'text-white'}`}>{week.title}</div>
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
                        ? 'bg-white border-white text-gray-900 transform scale-105 shadow-lg'
                        : hoveredWeek === week.week
                        ? 'bg-white/80 border-white/50 transform scale-102'
                        : 'bg-white/50 border-white/30 hover:border-white/50 hover:bg-white/70'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center font-bold text-lg ${
                        selectedWeek === week.week
                          ? 'bg-[#56b5bd] text-white border-2 border-[#56b5bd]'
                          : 'bg-white/20 text-white border-2 border-white/30'
                      }`}
                    >
                      {week.week}
                    </div>
                    <div className={`text-xs mb-1 ${selectedWeek === week.week ? 'text-gray-600' : 'text-white/80'}`}>Week {week.week}</div>
                    <div className={`font-semibold text-sm ${selectedWeek === week.week ? 'text-gray-900' : 'text-white'}`}>{week.title}</div>
                  </button>
                  
                  {/* Connector Line */}
                  {index < 3 && (
                    <div className="absolute top-6 -right-4 w-8 h-0.5 bg-white/50" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Vertical Connector */}
            <div className="flex justify-end my-4">
              <div className="w-0.5 h-12 bg-white/50" />
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
                        ? 'bg-white border-white text-gray-900 transform scale-105 shadow-lg'
                        : hoveredWeek === week.week
                        ? 'bg-white/80 border-white/50 transform scale-102'
                        : 'bg-white/50 border-white/30 hover:border-white/50 hover:bg-white/70'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center font-bold text-lg ${
                        selectedWeek === week.week
                          ? 'bg-[#56b5bd] text-white border-2 border-[#56b5bd]'
                          : 'bg-white/20 text-white border-2 border-white/30'
                      }`}
                    >
                      {week.week}
                    </div>
                    <div className={`text-xs mb-1 ${selectedWeek === week.week ? 'text-gray-600' : 'text-white/80'}`}>Week {week.week}</div>
                    <div className={`font-semibold text-sm ${selectedWeek === week.week ? 'text-gray-900' : 'text-white'}`}>{week.title}</div>
                  </button>
                  
                  {/* Connector Line */}
                  {index < 3 && (
                    <div className="absolute top-6 -left-4 w-8 h-0.5 bg-white/50" />
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
          className="bg-white/95 border border-white/50 rounded-xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-[#56b5bd] flex items-center justify-center text-white text-2xl font-bold">
              {currentWeekData.week}
            </div>
            <div>
              <div className="text-sm text-gray-500">Week {currentWeekData.week}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {currentWeekData.title}
              </h3>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {currentWeekData.description}
          </p>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">What You'll Accomplish:</h4>
            <div className="space-y-3">
              {currentWeekData.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="text-[#56b5bd] flex-shrink-0 mt-1" />
                  <span className="text-gray-900">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Hint */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
            Use arrow keys ← → or click weeks above to explore the timeline
          </div>
        </motion.div>
      </div>
    </section>
  );
}

