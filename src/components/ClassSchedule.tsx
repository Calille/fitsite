'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// Sample class data
const classData = [
  {
    id: 1,
    name: 'HIIT Circuit',
    instructor: 'Teighlor',
    time: '6:00 AM - 7:00 AM',
    day: 'Monday',
    category: 'Cardio',
    level: 'Intermediate'
  },
  {
    id: 2,
    name: 'Strength Foundations',
    instructor: 'Sarah',
    time: '8:00 AM - 9:00 AM',
    day: 'Monday',
    category: 'Strength',
    level: 'Beginner'
  },
  {
    id: 3,
    name: 'Yoga Flow',
    instructor: 'Will',
    time: '6:00 PM - 7:00 PM',
    day: 'Monday',
    category: 'Wellness',
    level: 'All Levels'
  },
  {
    id: 4,
    name: 'CrossTraining',
    instructor: 'Ben',
    time: '7:30 AM - 8:30 AM',
    day: 'Tuesday',
    category: 'Strength',
    level: 'Advanced'
  },
  {
    id: 5,
    name: 'Spin Class',
    instructor: 'Teighlor',
    time: '5:30 PM - 6:30 PM',
    day: 'Tuesday',
    category: 'Cardio',
    level: 'All Levels'
  },
  {
    id: 6,
    name: 'Mobility & Recovery',
    instructor: 'Sarah',
    time: '7:00 PM - 8:00 PM',
    day: 'Tuesday',
    category: 'Wellness',
    level: 'All Levels'
  },
  {
    id: 7,
    name: 'Powerlifting',
    instructor: 'Seb',
    time: '6:00 AM - 7:15 AM',
    day: 'Wednesday',
    category: 'Strength',
    level: 'Intermediate'
  },
  {
    id: 8,
    name: 'Boxing Conditioning',
    instructor: 'Ben',
    time: '6:00 PM - 7:00 PM',
    day: 'Wednesday',
    category: 'Cardio',
    level: 'Intermediate'
  },
  {
    id: 9,
    name: 'Olympic Lifting',
    instructor: 'Seb',
    time: '7:00 AM - 8:15 AM',
    day: 'Thursday',
    category: 'Strength',
    level: 'Advanced'
  },
  {
    id: 10,
    name: 'Pilates',
    instructor: 'Will',
    time: '9:00 AM - 10:00 AM',
    day: 'Thursday',
    category: 'Wellness',
    level: 'All Levels'
  },
  {
    id: 11,
    name: 'Endurance Training',
    instructor: 'Sarah',
    time: '6:00 PM - 7:15 PM',
    day: 'Thursday',
    category: 'Cardio',
    level: 'Intermediate'
  },
  {
    id: 12,
    name: 'Full Body Strength',
    instructor: 'Ben',
    time: '6:00 AM - 7:00 AM',
    day: 'Friday',
    category: 'Strength',
    level: 'All Levels'
  },
  {
    id: 13,
    name: 'HIIT & Core',
    instructor: 'Teighlor',
    time: '12:00 PM - 1:00 PM',
    day: 'Friday',
    category: 'Cardio',
    level: 'Intermediate'
  },
  {
    id: 14,
    name: 'Weekend Warrior',
    instructor: 'Seb',
    time: '9:00 AM - 10:15 AM',
    day: 'Saturday',
    category: 'Strength',
    level: 'Intermediate'
  },
  {
    id: 15,
    name: 'Community Workout',
    instructor: 'Teighlor',
    time: '10:30 AM - 11:30 AM',
    day: 'Saturday',
    category: 'Mixed',
    level: 'All Levels'
  },
  {
    id: 16,
    name: 'Recovery Yoga',
    instructor: 'Will',
    time: '11:00 AM - 12:00 PM',
    day: 'Sunday',
    category: 'Wellness',
    level: 'All Levels'
  }
];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const categories = ['All', 'Strength', 'Cardio', 'Wellness', 'Mixed'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced', 'All Levels'];

const ClassSchedule = () => {
  const [activeDay, setActiveDay] = useState('Monday');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLevel, setActiveLevel] = useState('All');

  const filteredClasses = classData.filter((cls) => {
    return (
      (activeDay === cls.day) &&
      (activeCategory === 'All' || activeCategory === cls.category) &&
      (activeLevel === 'All' || activeLevel === cls.level)
    );
  });

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Weekly Class Schedule</h2>
          <p className="text-black">
            Find the perfect class that fits your schedule and fitness goals. Pre-booking is recommended as classes may fill up quickly.
          </p>
        </motion.div>

        {/* Day Selection */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeDay === day 
                    ? 'bg-[#56b5bd] text-white font-semibold' 
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium mb-2 text-black">Filter by Category:</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1 text-sm rounded-md transition-all ${
                    activeCategory === category 
                      ? 'bg-[#56b5bd] text-white font-semibold' 
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-black">Filter by Level:</label>
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setActiveLevel(level)}
                  className={`px-3 py-1 text-sm rounded-md transition-all ${
                    activeLevel === level 
                      ? 'bg-[#56b5bd] text-white font-semibold' 
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Class List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {filteredClasses.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {filteredClasses.map((cls) => (
                <motion.li
                  key={cls.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-black">{cls.name}</h3>
                      <p className="text-sm text-black">Instructor: {cls.instructor}</p>
                    </div>
                    <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                      <span className="text-black font-medium">{cls.time}</span>
                      <span className="text-xs bg-white border border-[#56b5bd] text-black px-2 py-1 rounded mt-1">
                        {cls.category} - {cls.level}
                      </span>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          ) : (
            <div className="p-8 text-center">
              <p className="text-black">No classes found for the selected filters.</p>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-black mb-4">
            Want to book a class or have questions?
          </p>
          <a
            href="/contact"
            className="btn-primary inline-block"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClassSchedule; 