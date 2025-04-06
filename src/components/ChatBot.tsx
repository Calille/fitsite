'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  isCalculation?: boolean;
};

// FAQ data for common questions
const faqData = [
  {
    question: ['opening hours', 'when are you open', 'hours', 'schedule'],
    answer: 'Our gym is open Mon-Thu 06:00-21:00, Fri 06:00-19:00, Sat 08:00-14:00, and Sun by appointment only.'
  },
  {
    question: ['personal training', 'personal trainer', 'one on one', 'private session'],
    answer: 'Our personal training sessions are tailored to your specific goals and needs with experienced trainers. Prices start at £45 per session with discounts for packages.'
  },
  {
    question: ['group classes', 'classes', 'group sessions'],
    answer: 'We offer a variety of group classes including HIIT, yoga, cycling, and strength training. Check our schedule page for the full timetable.'
  },
  {
    question: ['nutrition', 'diet', 'eating', 'food', 'meal plan'],
    answer: 'Our nutrition coaching provides expert guidance on fueling your body for optimal performance and recovery. We can create custom meal plans based on your goals.'
  },
  {
    question: ['location', 'address', 'where are you', 'directions'],
    answer: 'We are located in Harpenden, Hertfordshire, AL5 3BL, England, United Kingdom. You can find directions on our contact page.'
  },
  {
    question: ['membership', 'pricing', 'cost', 'fee', 'price', 'join'],
    answer: 'Our membership options start at £49.99/month for basic access, with premium memberships at £79.99/month including classes. Visit our services page for more details.'
  }
];

// Activity level multipliers for calorie calculation
const activityLevels = {
  'sedentary': 1.2, // Little to no exercise
  'light': 1.375, // Light exercise 1-3 days/week
  'moderate': 1.55, // Moderate exercise 3-5 days/week
  'active': 1.725, // Hard exercise 6-7 days/week
  'very active': 1.9 // Very hard exercise & physical job or training twice a day
};

// Calculate BMR using Mifflin-St Jeor Equation
const calculateBMR = (
  age: number,
  gender: 'male' | 'female',
  weight: number, // in kg
  height: number // in cm
): number => {
  if (gender === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
};

// Calculate daily calorie needs
const calculateCalories = (
  age: number,
  gender: 'male' | 'female',
  weight: number,
  height: number,
  activityLevel: keyof typeof activityLevels,
  goal: 'maintain' | 'lose' | 'gain'
): number => {
  const bmr = calculateBMR(age, gender, weight, height);
  let calories = bmr * activityLevels[activityLevel];
  
  // Adjust based on goal
  if (goal === 'lose') {
    calories -= 500; // Deficit for weight loss
  } else if (goal === 'gain') {
    calories += 500; // Surplus for weight gain
  }
  
  return Math.round(calories);
};

// Parse user input to detect calorie calculation request
const parseCalorieRequest = (input: string): null | {
  age?: number;
  gender?: 'male' | 'female';
  weight?: number;
  height?: number;
  activityLevel?: keyof typeof activityLevels;
  goal?: 'maintain' | 'lose' | 'gain';
} => {
  const text = input.toLowerCase();
  
  // Check if this is a calorie calculation request - more flexible detection
  if (!(text.includes('calorie') || text.includes('calculator') || text.includes('bmr') || 
       text.includes('calculate') || text.includes('tdee') || text.includes('calories') ||
       text.includes('weight') || text.includes('diet'))) {
    return null;
  }
  
  const result: ReturnType<typeof parseCalorieRequest> = {};
  
  // Extract age - more flexible pattern
  const ageMatch = text.match(/\b(\d+)\s*(?:years|year|yr|y|yrs)?\s*(?:old)?\b/);
  if (ageMatch) result.age = parseInt(ageMatch[1]);
  
  // Extract gender
  if (text.includes('male') || text.includes('man') || text.includes('guy') || text.includes('boy')) {
    result.gender = 'male';
  } else if (text.includes('female') || text.includes('woman') || text.includes('girl') || text.includes('lady')) {
    result.gender = 'female';
  }
  
  // Extract weight - support both kg and lb (convert lb to kg)
  const weightKgMatch = text.match(/\b(\d+(?:\.\d+)?)\s*(?:kg|kilo|kilos|kilograms)\b/);
  const weightLbMatch = text.match(/\b(\d+(?:\.\d+)?)\s*(?:lb|lbs|pounds)\b/);
  
  if (weightKgMatch) {
    result.weight = parseFloat(weightKgMatch[1]);
  } else if (weightLbMatch) {
    // Convert pounds to kg (1 lb = 0.453592 kg)
    result.weight = Math.round(parseFloat(weightLbMatch[1]) * 0.453592);
  }
  
  // Extract height - support both cm and feet/inches
  const heightCmMatch = text.match(/\b(\d+(?:\.\d+)?)\s*(?:cm|centimeters|centimetres)\b/);
  const heightFtInMatch = text.match(/\b(\d+)['′](?:\s*(\d+)["″])?\b/); // matches 5'10" or 5' 10" or 5′10″
  
  if (heightCmMatch) {
    result.height = parseFloat(heightCmMatch[1]);
  } else if (heightFtInMatch) {
    const feet = parseInt(heightFtInMatch[1]);
    const inches = heightFtInMatch[2] ? parseInt(heightFtInMatch[2]) : 0;
    // Convert feet/inches to cm (1 ft = 30.48 cm, 1 in = 2.54 cm)
    result.height = Math.round((feet * 30.48) + (inches * 2.54));
  }
  
  // Extract activity level - more flexible
  for (const level of Object.keys(activityLevels) as Array<keyof typeof activityLevels>) {
    if (text.includes(level)) {
      result.activityLevel = level;
      break;
    }
  }
  // Additional activity level keywords
  if (!result.activityLevel) {
    if (text.includes('no exercise') || text.includes('desk job') || text.includes('inactive')) {
      result.activityLevel = 'sedentary';
    } else if (text.includes('walk') || text.includes('light exercise')) {
      result.activityLevel = 'light';
    } else if (text.includes('exercise 3') || text.includes('exercise three') || 
              text.includes('moderate')) {
      result.activityLevel = 'moderate';
    } else if (text.includes('exercise 6') || text.includes('exercise six') || 
              text.includes('daily exercise') || text.includes('very active')) {
      result.activityLevel = 'active';
    } else if (text.includes('twice a day') || text.includes('athlete') || 
              text.includes('intense training')) {
      result.activityLevel = 'very active';
    }
  }
  
  // Extract goal - more flexible
  if (text.includes('lose') || text.includes('cut') || text.includes('slim') || 
     text.includes('weight loss') || text.includes('fat loss')) {
    result.goal = 'lose';
  } else if (text.includes('gain') || text.includes('bulk') || text.includes('build muscle') ||
            text.includes('mass') || text.includes('bigger')) {
    result.goal = 'gain';
  } else {
    result.goal = 'maintain';
  }
  
  return result;
};

// Find answer from FAQ data
const findAnswer = (question: string): string | null => {
  const normalizedQuestion = question.toLowerCase();
  
  for (const faq of faqData) {
    for (const keyword of faq.question) {
      if (normalizedQuestion.includes(keyword)) {
        return faq.answer;
      }
    }
  }
  
  return null;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your TP Fitness assistant. Ask me about our services or use the calorie calculator by providing your age, gender, weight (kg), height (cm), and activity level.",
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState('');
  const [isCalculatingCalories, setIsCalculatingCalories] = useState(false);
  const [calorieInputs, setCalorieInputs] = useState({
    age: '',
    gender: 'male',
    weight: '',
    height: '',
    activityLevel: 'moderate',
    goal: 'maintain'
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);
    const userInput = input; // Store input before clearing
    setInput('');
    
    // Process user input
    setTimeout(() => {
      let botResponse = '';
      
      if (isCalculatingCalories) {
        handleCalorieCalculation();
        return;
      }
      
      // Check for calorie calculation request
      const calorieRequest = parseCalorieRequest(userInput);
      if (calorieRequest && Object.keys(calorieRequest).length > 0) {
        let missingFields = [];
        if (!calorieRequest.age) missingFields.push('age');
        if (!calorieRequest.gender) missingFields.push('gender');
        if (!calorieRequest.weight) missingFields.push('weight');
        if (!calorieRequest.height) missingFields.push('height');
        
        if (missingFields.length > 0) {
          setIsCalculatingCalories(true);
          
          // Pre-fill what we have
          if (calorieRequest.age) setCalorieInputs(prev => ({ ...prev, age: calorieRequest.age!.toString() }));
          if (calorieRequest.gender) setCalorieInputs(prev => ({ ...prev, gender: calorieRequest.gender! }));
          if (calorieRequest.weight) setCalorieInputs(prev => ({ ...prev, weight: calorieRequest.weight!.toString() }));
          if (calorieRequest.height) setCalorieInputs(prev => ({ ...prev, height: calorieRequest.height!.toString() }));
          if (calorieRequest.activityLevel) setCalorieInputs(prev => ({ ...prev, activityLevel: calorieRequest.activityLevel! }));
          if (calorieRequest.goal) setCalorieInputs(prev => ({ ...prev, goal: calorieRequest.goal! }));
          
          botResponse = `I'll help you calculate your daily calorie needs. Please fill in the following information: ${missingFields.join(', ')}.`;
        } else {
          // We have all needed info
          const calories = calculateCalories(
            calorieRequest.age!,
            calorieRequest.gender!,
            calorieRequest.weight!,
            calorieRequest.height!,
            calorieRequest.activityLevel || 'moderate',
            calorieRequest.goal || 'maintain'
          );
          
          botResponse = `Based on your information (${calorieRequest.age} years, ${calorieRequest.gender}, ${calorieRequest.weight}kg, ${calorieRequest.height}cm, ${calorieRequest.activityLevel || 'moderate'} activity), your estimated daily calorie needs to ${calorieRequest.goal || 'maintain'} weight are ${calories} calories.`;
        }
      } else {
        // Look for answer in FAQ
        const faqAnswer = findAnswer(userInput);
        if (faqAnswer) {
          botResponse = faqAnswer;
        } else {
          botResponse = "I'm not sure I understand. You can ask about our services, location, hours, or use the calorie calculator. Try asking 'What are your opening hours?' or 'Calculate calories for a 30 year old male'";
        }
      }
      
      const botMessage: Message = {
        id: Date.now(),
        text: botResponse,
        sender: 'bot',
        isCalculation: isCalculatingCalories
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  const handleCalorieCalculation = () => {
    // Validate inputs
    const age = parseInt(calorieInputs.age);
    const weight = parseInt(calorieInputs.weight);
    const height = parseInt(calorieInputs.height);
    
    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
      const botMessage: Message = {
        id: Date.now(),
        text: "Please enter valid numbers for age, weight, and height.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
      return;
    }
    
    // Calculate calories
    const calories = calculateCalories(
      age,
      calorieInputs.gender as 'male' | 'female',
      weight,
      height,
      calorieInputs.activityLevel as keyof typeof activityLevels,
      calorieInputs.goal as 'maintain' | 'lose' | 'gain'
    );
    
    // Create result message
    const resultMessage = `Based on your information (${age} years, ${calorieInputs.gender}, ${weight}kg, ${height}cm, ${calorieInputs.activityLevel} activity), your estimated daily calorie needs to ${calorieInputs.goal} weight are ${calories} calories.`;
    
    const botMessage: Message = {
      id: Date.now(),
      text: resultMessage,
      sender: 'bot'
    };
    
    setMessages(prev => [...prev, botMessage]);
    setIsCalculatingCalories(false);
    
    // Reset inputs
    setCalorieInputs({
      age: '',
      gender: 'male',
      weight: '',
      height: '',
      activityLevel: 'moderate',
      goal: 'maintain'
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setCalorieInputs(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[#56b5bd] text-white p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle chat assistant"
      >
        {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </motion.button>
      
      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 z-50 w-[350px] md:w-[400px] h-[500px] bg-white rounded-lg shadow-xl flex flex-col"
          >
            {/* Chat header */}
            <div className="bg-[#56b5bd] text-white p-4 rounded-t-lg">
              <h3 className="font-bold">TP Fitness Assistant</h3>
              <p className="text-sm">Ask questions or calculate your calorie needs</p>
            </div>
            
            {/* Messages area */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map(message => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 ${message.sender === 'user' ? 'text-right' : ''}`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-[#56b5bd] text-white rounded-tr-none'
                        : 'bg-gray-100 text-gray-800 rounded-tl-none'
                    } max-w-[85%]`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Calorie calculator form */}
            {isCalculatingCalories && (
              <div className="p-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={calorieInputs.age}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded text-sm text-gray-800"
                      placeholder="Years"
                    />
                  </div>
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      value={calorieInputs.gender}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded text-sm text-gray-800"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div>
                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight</label>
                    <input
                      type="number"
                      id="weight"
                      name="weight"
                      value={calorieInputs.weight}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded text-sm text-gray-800"
                      placeholder="kg"
                    />
                  </div>
                  <div>
                    <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height</label>
                    <input
                      type="number"
                      id="height"
                      name="height"
                      value={calorieInputs.height}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded text-sm text-gray-800"
                      placeholder="cm"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div>
                    <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-700">Activity Level</label>
                    <select
                      id="activityLevel"
                      name="activityLevel"
                      value={calorieInputs.activityLevel}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded text-sm text-gray-800"
                    >
                      <option value="sedentary">Sedentary</option>
                      <option value="light">Light Activity</option>
                      <option value="moderate">Moderate Activity</option>
                      <option value="active">Active</option>
                      <option value="very active">Very Active</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="goal" className="block text-sm font-medium text-gray-700">Goal</label>
                    <select
                      id="goal"
                      name="goal"
                      value={calorieInputs.goal}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded text-sm text-gray-800"
                    >
                      <option value="maintain">Maintain Weight</option>
                      <option value="lose">Lose Weight</option>
                      <option value="gain">Gain Weight</option>
                    </select>
                  </div>
                </div>
                
                <button
                  onClick={handleCalorieCalculation}
                  className="w-full bg-[#56b5bd] text-white p-2 rounded hover:bg-[#45a4ac] transition-colors"
                >
                  Calculate
                </button>
              </div>
            )}
            
            {/* Input area */}
            {!isCalculatingCalories && (
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#56b5bd] text-gray-800"
                  />
                  <button
                    onClick={handleSend}
                    className="bg-[#56b5bd] text-white p-2 rounded-r-lg hover:bg-[#45a4ac] transition-colors"
                  >
                    <FiSend size={20} />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot; 