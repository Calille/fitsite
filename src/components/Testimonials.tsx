'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useAnalytics } from '@/contexts/AnalyticsContext';

/** Displayed total from Google (not every review is shown in the carousel). */
const REVIEW_COUNT = 72;

const staticTestimonials = [
  {
    id: 'review-1',
    name: 'Vicky Willson',
    timeAgo: 'a month ago',
    quote: 'I am just finishing an 8 week coaching course with Will and it has been fantastic. It was an easy to follow course with weekly check-ins, Will provided so much information, tips and quick wins. After 8 weeks I now think differently about food, prioritise sleep and do 2 strength training PT sessions per week, and have much more energy than I\'ve had in years.',
    rating: 5,
  },
  {
    id: 'review-2',
    name: 'Carole Jouin',
    timeAgo: '2 months ago',
    quote: 'This is more than a gym, it\'s a holistic approach to health that comes with a great community. The team helped me train before, during and after my pregnancy. Their bespoke training plan during my pregnancy meant I could stay healthy throughout. I highly recommend TP Health and Fitness.',
    rating: 5,
  },
  {
    id: 'review-3',
    name: 'Barbara Scrace',
    timeAgo: '2 months ago',
    quote: 'Been going for some time now but always leave pleased with the way I have been treated with friendliness and understanding. Feeling a lot stronger, so much better than before I started. All the trainers are great. A very friendly but professional outfit. Thank you TP.',
    rating: 5,
  },
  {
    id: 'review-4',
    name: 'Jo Hughes',
    timeAgo: '2 months ago',
    quote: 'Having worked out at a fair few places over the years, I can honestly say that TP is very welcoming and inclusive. You will find all ages and fitness levels working hard together for their own goals, with the expert help of kind, engaging and supportive coaches. It\'s a lovely community and I actually look forward to training! Big thanks to Ben, Sarah & Will.',
    rating: 5,
  },
  {
    id: 'review-5',
    name: 'Joan Schneider',
    timeAgo: '2 months ago',
    quote: 'I love coming to my training sessions at TP. Since my first meeting with Teighlor I knew this was the right place for me to get back into weight training. Teighlor never made me feel self conscious about where I am currently with my fitness. Teighlor and Sarah both push me especially in my early morning sessions! I leave feeling amazing.',
    rating: 5,
  },
  {
    id: 'review-6',
    name: 'Abigail Ansell',
    timeAgo: '3 months ago',
    quote: 'Teighlor is professional and knowledgeable. 10/10 would recommend.',
    rating: 5,
  },
  {
    id: 'review-7',
    name: 'Francesca Mottram',
    timeAgo: '4 months ago',
    quote: 'Can\'t recommend this gym enough. Friendly, supportive trainers who make it a safe space. I always leave feeling stronger, confident, and uplifted.',
    rating: 5,
  },
  {
    id: 'review-8',
    name: 'Lorraine Howell',
    timeAgo: '8 months ago',
    quote: 'Small PT sessions pushed me through my winter slump. Feeling stronger, more balanced, and motivated again.',
    rating: 5,
  },
  {
    id: 'review-9',
    name: 'Thomas Cooney',
    timeAgo: '2 weeks ago',
    quote: 'TP Fitness boosted my confidence and communication. Will Mitchell has especially helped with nutrition and building a strong workout routine.',
    rating: 5,
  },
  {
    id: 'review-10',
    name: 'John Hall',
    timeAgo: '10 months ago',
    quote: 'As a busy 40-something, I was out of shape. TP helped me regain fitness and confidence. The team is supportive and motivating.',
    rating: 5,
  },
  {
    id: 'review-11',
    name: 'K Barter',
    timeAgo: '2 months ago',
    quote: 'Joined TP through their 8-week programme. Teighlor was accommodating and welcoming. So glad I took that first step. Life-changing.',
    rating: 5,
  },
  {
    id: 'review-12',
    name: 'Vanessa Pepper',
    timeAgo: '8 months ago',
    quote: 'Great trainers who are knowledgeable and work well with a range of abilities. I love my time there and have seen how I’ve been pushed since joining all whilst working with the odd Injury or sore spot!',
    rating: 5,
  },
  {
    id: 'review-13',
    name: 'Una Harrison',
    timeAgo: '8 months ago',
    quote: 'I’ve been training with Ben for about 6 months now and wouldn’t hesitate to recommend him. I had a few injuries and was paranoid about hurting my back again but he has worked wonders. He’s extremely patient and really pays attention to form and technique. He’s clearly very knowledgeable about fitness and training and best of all he makes the sessions highly entertaining. They’re almost the highlight of my week !!',
    rating: 5,
  },
  {
    id: 'review-14',
    name: 'Emily Collins',
    timeAgo: '8 months ago',
    quote: 'The setup, and team at TP Gym are outstanding. From the moment I walked in, I felt welcomed and supported. I was quite hesitant about joining a gym — a previous trainer had given up on me for not being committed enough due to my work schedule — but Teighlor immediately put me at ease. She’s very engaging, and reassuring, and she helped alleviate the concerns I had about getting started. The atmosphere at TP is warm, encouraging, and free of judgment. Even on days when I’m low on energy or pressed for time, I feel better for having done my session. I’ve been training with Sarah for the past 16 months, and she’s absolutely brilliant. She’s a great listener, so encouraging, and knows exactly how to push me to do my best — without pushing me too far. Our sessions are challenging but fun, and we laugh a lot together, which makes the time fly by. When Sarah’s away, I normally train with Will or Seb, and they’re also fantastic. Seb‘s skill and experience in setting the programme to balance multiple aspects of strength and fitness means I know I’m under expert guidance, especially if I need to manage a niggle or injury. Will is very knowledgeable about health and wellness and I always come away having discussed an in interesting piece of research or learning. Both have a really supportive and motivating approach. They both challenge in the right way, and do it with an ideal balance of friendliness and professionalism. Best of all, whilst everyone takes the training seriously, no one takes themselves too seriously which creates a relaxed atmosphere for people to be themselves and train to their own limits. For anyone considering joining but feeling unsure, I’d say: just give it a go.',
    rating: 5,
  },
  {
    id: 'review-15',
    name: 'Grant Denny',
    timeAgo: '8 months ago',
    quote: 'We\'ve been training at TP for 2 years now and it has made a real difference. Mainly we train with Ben and Will and both are excellent. Over that time we have also trained with other coaches (Teighlor, Seb, Sarah) who have been great as well. They get to know what you are capable of, they push you to achieve more but it is all done in a very supportive and encouraging way. They are knowledgeable about alternatives that allow you to continue training even with slight injuries, finding ways to adapt the programme so you keep progressing. Highly recommended.',
    rating: 5,
  },
  {
    id: 'review-16',
    name: 'Keely Rushmore',
    timeAgo: '8 months ago',
    quote: 'I’ve been coming to TP training for just over two years now and really enjoy the classes- the trainers are all excellent, and the small group sizes are great. It’s very friendly and inclusive, and not at all intimidating. I’d highly recommend in particular to anyone wanting to start a fitness journey but are perhaps worried about going to large gyms or just don’t know where to start.',
    rating: 5,
  },
  {
    id: 'review-17',
    name: 'Doulla Stavrou',
    timeAgo: '8 months ago',
    quote: 'TP Health & Fitness is a fantastic gym led by an impressive female founder. Teighlor and her team of talented trainers each bring their own individual style and personality to each session (e.g. last week I did a wall sit whilst taking part in a quiz – I didn’t do very well, thank goodness for the other ladies in my group, otherwise we’d still be sitting there!) and you leave feeling stronger and reinvigorated, whilst having fun along the way! I joined nearly two years ago, starting with 1:1 sessions twice a week, then changing to small group classes twice a week as my confidence grew. I joined with a weakened core and legs due to lower back surgery, and Teighlor and the team have slowly built me back up, to the extent that I have now pretty much regained the strength I had lost in my legs and strengthened my core and upper body at the same time. Sessions are tough and focused, but as above, equally fun and enjoyable – it’s not a drag to keep coming back week after week. But I see it as more than just a place where I go to build my strength. It’s also a great community where you can make new connections and develop new friendships. I get to train with like-minded women (plus some equally fabulous men!) which makes every session really enjoyable. I leave feeling stronger and fitter, but also a little wiser – it’s amazing what you learn, be it a new restaurant opening in town, or a great Netflix recommendation! In a world of virtual/hybrid working, Teighlor’s community approach delivers value beyond just the physical – it really does help the mind, body and soul! I would highly recommend!',
    rating: 5,
  },
  {
    id: 'review-18',
    name: 'Fiona Rainsford',
    timeAgo: '8 months ago',
    quote: 'Teighlor, Seb and the whole team are amazing. The sessions are varied and balanced but push everyone to achieve the best they can in a really supportive way. I genuinely feel that the PT’s take pride in all the progress made - however big or small. A great place to train.',
    rating: 5,
  },
  {
    id: 'review-19',
    name: 'Hans Mueller',
    timeAgo: '8 months ago',
    quote: 'A great gym with a team that genuinly care about and are interested in their clients. Each session is hard work but very worth it.',
    rating: 5,
  },
  {
    id: 'review-20',
    name: 'Etta Stobs-Stobart',
    timeAgo: '8 months ago',
    quote: 'What a difference 2 1/2 years makes! I’m loving the resistance training program that the team run, and the results have been beyond expectation. Couldn’t recommend it more highly.',
    rating: 5,
  },
  {
    id: 'review-21',
    name: 'Kathryn Robbins',
    timeAgo: '9 months ago',
    quote: 'I\'ve been training here for over a year now and it\'s been absolutely brilliant. I\'ve joined regular sessions with Teighlor, Seb and Will; and occasionally with Ben and Sarah. They never fail to create challenging and varied exercises while making it fun and most importantly, keeping the focus on technique and safety. It\'s been just the best investment for my health and wellbeing.',
    rating: 5,
  },
  {
    id: 'review-22',
    name: 'Nichola Johnson-Marshall',
    timeAgo: '9 months ago',
    quote: 'I\'ve been training with TP Fitness since this summer (2025) and started with 1:1 PT sessions with trainer Will Mitchell then graduated to the small group trainer sessions. Will\'s great as he is encouraging and also really supports you by pointing out technically where you can improve too. He also makes the sessions light hearted and fun. Couldn\'t recommend TP Health and Fitness more highly and I have really enjoyed the sessions with the other trainers too.',
    rating: 5,
  },
  {
    id: 'review-23',
    name: 'Lanying Burley',
    timeAgo: '9 months ago',
    quote: 'I can highly recommend Ben. He is a great trainer and hugely supportive. I started at TP over a year ago to help recover from a knee injury and I have enjoyed it so much I have carried on. Ben has encouraged me all the way. He’s positive, enthusiastic and focused on helping me to improve. TP and all the team are welcoming and friendly. Training there has made a huge difference to me. I feel stronger, healthier and more positive.',
    rating: 5,
  },
  {
    id: 'review-24',
    name: 'Paul de Kort',
    timeAgo: '9 months ago',
    quote: 'I have been attending TP Fitness for over two years, twice a week and my strength and fitness levels are much improved. I have sessions led by Will, Sarah, Ben, Seb and, of course, Teighlor. They are all highly enjoyable with a slightly different twist with each. No injuries and a lot of good well being from sticking to a consistent but varied schedule.',
    rating: 5,
  },
  {
    id: 'review-25',
    name: 'Gautham Pandian',
    timeAgo: '9 months ago',
    quote: 'I have had an excellent experience with my personal trainer - Ben at TP Health. He is exceptionally kind, polite, and professional, demonstrating a high level of expertise in his craft. He takes the time to understand my specific requirements and works with me to achieve my fitness goals. His personalized approach and dedication have made a significant positive impact on my training journey. I am very pleased with the service and would highly recommend him to anyone seeking personal training lessons. Overall, my experience at TP Health has been truly fantastic.',
    rating: 5,
  },
  {
    id: 'review-26',
    name: 'Hannah Boyd',
    timeAgo: '9 months ago',
    quote: 'Fantastic gym offering bespoke training sessions. I have been working with Will’s PT sessions for 6 months and would highly recommend.',
    rating: 5,
  },
  {
    id: 'review-27',
    name: 'E Paley',
    timeAgo: '9 months ago',
    quote: 'Absolutely brilliant sessions! I’ve been training at TP PT for 2 years and the team worked hard to find a schedule which fitted my lifestyle. I’ve been training with Will Mitchell in the early mornings during that time. Will is a thoughtful PT and pushes me to achieve my goals but adjusts the sessions to how I’m feeling and what I need on the day. He really celebrates the wins with you. I’ve noticed a huge difference in how much stronger and fitter I feel and I look forward to my sessions. I always leave exhausted but happy having had a good laugh along the way! Highly recommend if you want to feel energized and supported on your fitness journey!',
    rating: 5,
  },
  {
    id: 'review-28',
    name: 'Eisha Pengelley',
    timeAgo: '9 months ago',
    quote: 'Before starting at TP I was constantly starting and quitting any form of exercise. Thanks to the encouraging team and accountability I have stuck to my goals and feel healthier, fitter and stronger. The group sessions are so enjoyable and all the laughs distract from the pain!',
    rating: 5,
  },
  {
    id: 'review-29',
    name: 'Jess Grimmel',
    timeAgo: '9 months ago',
    quote: 'We could not recommend TP Health and Fitness more, we are so glad we found you guys to help us build confidence and strength in the gym. Coach Will is the absolute best - he is friendly, supportive and so knowledgeable about both exercise and nutrition. The lessons he has taught us surrounding diet and nutrition will stay with us always. We started training with Will to get us ready for our wedding, but now that has passed we have no plans to stop - we have genuinely come to enjoy exercising and pushing ourselves to our limits. We would never have pushed ourselves so hard without Will and all the amazing trainers at TP!',
    rating: 5,
  },
  {
    id: 'review-30',
    name: 'Philippa Ellis',
    timeAgo: '9 months ago',
    quote: 'Will trains myself & my husband in a paired training session. He challenges us every week whilst making sure he looks after any niggles or injuries. Will pushes us to do more every week and we are stronger and more flexible since starting our training; we even manage to enjoy ourselves!!',
    rating: 5,
  },
  {
    id: 'review-31',
    name: 'Sophie Birkett',
    timeAgo: '9 months ago',
    quote: 'Ben is an excellent trainer who has a true passion for developing his clients. He also is extremely compassionate with everyone he greets in the studio, taking a true interest in their day to day life. I couldn’t have asked for anyone better to make the gym such a wonderful and welcoming environment. The credit truly goes to Teighlor and the team who I have worked with for over 3 years now, they have truly curated something unparalleled and life changing. I’ll never leave and I hope the trainers never do to.',
    rating: 5,
  },
  {
    id: 'review-32',
    name: 'Rita Dollar',
    timeAgo: '2 years ago',
    quote: 'It\'s been such a pleasure to have been part of Teighlor and her TP\'s team programme . I\'ve enjoyed the excerises, the comradeship and the benefits of the training. The team are specialists and one feels comfortable in their knowledge of their clients aspirations. For me it was maintaining health and fitness into my latter years. Teighlor and her team are excellent leaders in the Health and Fitness environment.',
    rating: 5,
  },
  {
    id: 'review-33',
    name: 'Nigel Taunt',
    timeAgo: '2 years ago',
    quote: 'A small private gym with great personal trainers, offering 1-2-1 training or small classes. I’ve completed an introductory course, followed by a Kick-start programme - and it’s certainly done that! Very personal training, and very personalised to individual needs (I hit 71 during my course). I really enjoyed my sessions, and have seen real benefit from them - lots to work on going forward. Highly recommend to anyone looking for that individual help to tailor a personal fitness programme',
    rating: 5,
  },
  {
    id: 'review-34',
    name: 'Sandra Bradley',
    timeAgo: '2 years ago',
    quote: 'I can highly recommend the TP kickstart program. I was a bit anxious having had an interruption in activity due to a fracture but the PT team were fantastic. It was just what I needed and the staff are knowledgeable and caring. I achieved a lot in a short space of time so it\'s worth the investment!',
    rating: 5,
  },
  {
    id: 'review-35',
    name: 'Lisa Le Grice',
    timeAgo: '2 years ago',
    quote: 'I’ve been meaning to write this review for quite some time now but actually think that leaving it until 9 months into joining is not such a bad thing. I joined TP Health and Fitness at the end of April last year after years of procrastination and getting to a point where I was very unhappy in my own skin and my self confidence was at an all time low. I knew as soon as I came across the website that it would be the place for me. I’ve gone from strength to strength since starting on the 8 week kick start, then continuing training twice a week with Teighlor, joining the running club and smashing the Herts 10k in October. I’m stronger, fitter, healthier, happier, over a stone and a half lighter and have dropped inches from all over my body. The friendly, warm atmosphere, coupled with being challenged every week means I’m completely hooked and can’t imagine my life without this gym in it. If you’re looking to kick-start your lifestyle change and are nervous about joining a gym, this is the place to come.',
    rating: 5,
  },
  {
    id: 'review-36',
    name: 'Sanjay Patel',
    timeAgo: '2 years ago',
    quote: 'I cannot recommend TP Health & Fitness highly enough, absolute life changers. From day one when I met Teighlor, I was won over be her warm, welcoming personality & studio. Things just got better when Alfie became my PT. An awesome PT who has a strong work ethic, is patient & selflessly dedicated to his clients. Alfie listens, he tailors workouts to your individual ability & strives for the best results for his clients. Layer on the excellent nutritional advice & guidance & you have the total package with Alfie. Ive just signed up for another 3 months with the TP Crew & look forward to getting even stronger, fitter & in the best shape I can with this amazing team supporting me, every step of the way. Forget the rest, these guys are the BEST!',
    rating: 5,
  },
  {
    id: 'review-37',
    name: 'Melissa de Lusignan',
    timeAgo: '2 years ago',
    quote: 'I cannot rate Teighlor and her team at TP Fitness highly enough. My husband and me have gone from never setting foot in a gym to training twice a week. In 9 months, we have progressed from barely being able to do 10 squats to regularly smashing dead lifts and bench presses. Our progress has been steady & surprising without it feeling hard or tedious. In fact, it’s been great fun and challenging in a good way. We’ve trained with all the coaches and they are all brilliant, motivating, knowledgeable and great fun. The gym itself is lovely & well equipped & not at all intimidating (except for the assault bike!!) Seriously, if you are considering joining a gym, join this one. You will thank yourself for it in no time.',
    rating: 5,
  },
  {
    id: 'review-38',
    name: 'Ian Poree',
    timeAgo: '2 years ago',
    quote: 'I can highly recommend ‘TP Health & Fitness’. I was full of trepidation because this was the very first time that I had set foot in any gym! Teighlor was warm, welcoming and reassuring at my induction session. I thoroughly enjoyed the eight week ‘kickstart programme’ and feel that I hugely benefitted from it. Sarah was my PT for most of my sessions and she is amazing - so encouraging and engaging. This has been a fantastic start to my ‘gym journey’. Thank you! Tracey',
    rating: 5,
  },
  {
    id: 'review-39',
    name: 'Kam Bains',
    timeAgo: '2 years ago',
    quote: 'I joined TP Health & Fitness about 6 weeks ago. In that period I’ve noticed a real change in body shape, more toned and muscle definition for the 1st time in my life! I love that it’s a real bespoke service and you don’t feel like ‘just another client’. The focus is on helping you progress and the workouts tailored specifically for you. I’m feeling fitter than ever and would strongly recommend TP Health & Fitness. Teighlor and Sarah, thank you so much for your expertise and dedication to helping me achieve my goals.',
    rating: 5,
  },
  {
    id: 'review-40',
    name: 'Jackie Worboys',
    timeAgo: '3 years ago',
    quote: 'Thoroughly recommend. At 64 things needed a bit of tightening!! Feel my posture improving and it has encouraged me to watch what I eat to see the benefits. Great programmes that can be adapted if there are bits you find difficult.',
    rating: 5,
  },
  {
    id: 'review-41',
    name: 'Rob Dennis (13robbo13)',
    timeAgo: '3 years ago',
    quote: 'Just love going to see Teighlor. not looking to become the next Mr Muscle but love the mobility I get from my little 2 weekly sessions. Would highly recommend',
    rating: 5,
  },
  {
    id: 'review-42',
    name: 'Jane Watson',
    timeAgo: '3 years ago',
    quote: 'I would highly recommend Teighlor to anyone. Her sessions are fun and challenging, and she\'s always very positive and motivating. Her gym is kitted out with a great variety of equipment, which makes every session different. I never thought I\'d look forward to going to the gym, but I do! I\'m definitely getting stronger and fitter, but the personal service and knowledge you get with Teighlor makes it above and beyond other places I\'ve tried.',
    rating: 5,
  },
  {
    id: 'review-43',
    name: 'Gemma Kerslake',
    timeAgo: '4 years ago',
    quote: 'Teigh is the best health and fitness coach! She understands your goals and tailors the workouts and nutritional plans to target your desires and needs. Teigh is incredibly supportive and challenges you during the sessions, motivating you to achieve your goals. I highly recommend Teigh to anyone looking to improve their health and fitness!!',
    rating: 5,
  },
  {
    id: 'review-44',
    name: 'Natascia Alden',
    timeAgo: '4 years ago',
    quote: 'I’ve been training with Teighlor for almost a year now and enjoy every single session. She’s helped me get into the best shape and I feel so confident and strong because of her training and guidance. Absolutely would recommend to anyone who’s looking to have fantastic, really personalised training.',
    rating: 5,
  },
  {
    id: 'review-45',
    name: 'Alex Rose',
    timeAgo: '4 years ago',
    quote: 'Teighlor is an amazing coach and motivator! Over the past 8 months I have gained so much strength as well as confidence and have really enjoyed my personal sessions. I can’t wait to continue and further my progression!',
    rating: 5,
  },
  {
    id: 'review-46',
    name: 'Ashley Douglas',
    timeAgo: '4 years ago',
    quote: 'We have been working with Teighlor for over 2 months now. She is professional and makes the classes fun and fast moving .... I now look forward to the class and feel great afterwards!',
    rating: 5,
  },
  {
    id: 'review-47',
    name: 'Rob Clack',
    timeAgo: '4 years ago',
    quote: 'Have been training with Teighlor for over a year. The sessions are motivating and varied and the results have been fantastic.',
    rating: 5,
  },
  {
    id: 'review-48',
    name: 'Andrew Meredith',
    timeAgo: '4 years ago',
    quote: 'Amazing health and fitness coach. The workouts, exercises and nutrition plans are completely targeted to the individuals needs and goals. Teighlor makes a genuine effort to get the best out of you and you can really tell she cares. After just a few sessions I could already physically see and feel the benefits. I would recommend Teighlor to anybody who wants to see positive changes in their health and fitness, regardless of shape, size, age and goals!',
    rating: 5,
  },
  {
    id: 'review-49',
    name: 'rosie maloney',
    timeAgo: '4 years ago',
    quote: 'Teighlor completely saved 2020 with her workouts, they have been so helpful in helping me keep fit, motivated and building structure into my day. Before doing them I used to dread doing exercise but Teighlor is such a great motivator and builds you up not down. Would highly recommend TP Heath and fitness coaching to anyone and everyone! Load more reviews ## Leave your review about TP Health & Fitness Coaching: Your name Rate the business from 1 to 5 5 4 3 2 1 1 = Poor5 = Excellent Security question: What is 10+3? Submit Review ## TP Health & Fitness Coaching appears in the following listings: #### Gyms in Harpenden 13 #### Gyms in Region of East England 1694 ## TP Health & Fitness Coaching appears in the following listings: #### Gyms in Harpenden 13 #### Gyms in Region of East England 1694 ## More Gyms you might be interested in 5 (73) ### MARCHON Harpenden https://gymsfitness.co.uk/en/i/14666-marchon-harpenden/ View address and contact details Highfield Oval - AL5 4BX, Harpenden 5 (1) ### St George\'s Fitness Centre https://gymsfitness.co.uk/en/i/26624-st-georges-fitness-centre/ View address and contact details St George\'s Sports Centre, 16 Sun Ln - AL5 4TD, Harpenden [email protected] +441582716229 5 (1) ### Bounce Harpenden https://gymsfitness.co.uk/en/i/41086-bounce-harpenden/ View address and contact details Wood End Primary School, Yeomans Ave - AL5 3EF, Harpenden [email protected] +447956676745 3.3 (157) ### Harpenden Leisure Centre https://gymsfitness.co.uk/en/i/36024-harpenden-leisure-centre/ View address and contact details Leyton Rd - AL5 2HU, Harpenden [email protected] +441582767722 5 (31) ### Davis Fitness https://gymsfitness.co.uk/en/i/15159-davis-fitness/ View address and contact details 385 Luton Rd - AL5 3NF, Harpenden [email protected] +441582767047 ### CORE Creativity Dance https://gymsfitness.co.uk/en/i/40520-core-creativity-dance/ View address and contact details 16 Someries Rd - AL5 5HU, Harpenden +447958914869 4.9 (44) ### The Little Gym Harpenden https://gymsfitness.co.uk/en/i/21152-the-little-gym-harpenden/ View address and contact details Rothamsted Experimental Station West Common, Rothamsted, West Common - AL5 2JQ, Harpenden [email protected] +441582712423 5 (21) ### FITT 41 https://gymsfitness.co.uk/en/i/15787-fitt-41/ View address and contact details Rothamsted Research Centre - AL5 2JQ, Harpenden [email protected] +447498879834 4.5 (2) ### HPO Fitness Pilates Yoga https://gymsfitness.co.uk/en/i/11373-hpo-fitness-pilates-yoga/ View address and contact details Alexandra House, Marlborough Park, Southdown Road - AL5 1NL, Harpenden [email protected] +44 1582 769993 5 (3) ### Louise Appel Personal Training https://gymsfitness.co.uk/en/i/14735-louise-appel-personal-training/ View address and contact details 33 Marquis Ln - AL5 5AE, Harpenden [email protected] +447851763593 5 (11) ### Classeswithrachel https://gymsfitness.co.uk/en/i/41906-classeswithrachel/ View address and contact details Katherine Warington School Sports Centre, Common Ln - AL5 5FH, Harpenden +447855946555 5 (1) ### Fieldgate https://gymsfitness.co.uk/en/i/18876-fieldgate/ View address and contact details Redbourn Ln - AL5 2AZ, Harpenden ## List your gym in our free directory If you manage a gym and want to appear on our website, send us your location information so we can include you in our directory. Listing in our guide is free!',
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { trackInteraction } = useAnalytics();

  const reviews = staticTestimonials;
  const prevIndex = current === 0 ? reviews.length - 1 : current - 1;
  const nextIndex = current === reviews.length - 1 ? 0 : current + 1;

  useEffect(() => {
    if (!isAutoplay) return;

    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isAutoplay, reviews.length]);

  const goTo = (index: number) => {
    setCurrent(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 12000);
    trackInteraction('testimonial_nav', { index });
  };

  return (
    <section className="relative overflow-hidden section-padding bg-[#F0F9FA]">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 0%, rgba(86,181,189,0.18), transparent 70%)',
        }}
      />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mb-10 text-center"
        >
          <h2 className="mb-3 text-3xl font-bold text-gray-800 md:text-4xl">
            What our clients say
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-base leading-relaxed text-gray-600">
            Honest feedback from members of the TP community.
          </p>
          <div className="inline-flex items-center gap-3 rounded-lg bg-white px-5 py-2.5 text-sm text-gray-600 shadow-sm">
            <span className="flex gap-0.5 text-[#56b5bd]" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="h-4 w-4" />
              ))}
            </span>
            <span className="font-bold text-gray-800">5.0</span>
            <span className="h-4 w-px bg-gray-200" aria-hidden="true" />
            <span>
              <span className="font-semibold text-[#56b5bd]">{REVIEW_COUNT}</span> Google reviews
            </span>
          </div>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <div className="relative min-h-[220px] overflow-hidden border-l-4 border-[#56b5bd] bg-white px-6 py-8 shadow-sm sm:px-10">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={reviews[current].id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center gap-1 text-[#56b5bd]" aria-hidden="true">
                  {[...Array(reviews[current].rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04, duration: 0.2 }}
                    >
                      <FaStar className="h-4 w-4" />
                    </motion.span>
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-gray-700 md:text-xl">
                  &ldquo;{reviews[current].quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <cite className="not-italic text-base font-bold text-[#56b5bd]">
                    {reviews[current].name}
                  </cite>
                  <p className="mt-1 text-sm text-gray-500">{reviews[current].timeAgo}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(prevIndex)}
              className="flex h-10 w-10 items-center justify-center border border-[#56b5bd]/40 bg-white text-[#56b5bd] transition-colors hover:bg-[#56b5bd] hover:text-white"
              aria-label="Previous review"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <p className="min-w-[4.5rem] text-center text-sm font-medium text-gray-600">
              {current + 1} / {reviews.length}
            </p>
            <button
              type="button"
              onClick={() => goTo(nextIndex)}
              className="flex h-10 w-10 items-center justify-center border border-[#56b5bd]/40 bg-white text-[#56b5bd] transition-colors hover:bg-[#56b5bd] hover:text-white"
              aria-label="Next review"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://g.page/r/Ccotkqk7ORnPEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#56b5bd] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#45a4ac]"
              onClick={() => trackInteraction('write_review_click', { source: 'testimonials' })}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Leave a Google Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
