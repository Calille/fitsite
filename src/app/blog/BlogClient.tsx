'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaClock, FaUser, FaArrowRight, FaTags } from 'react-icons/fa';
import { useAnalytics } from '@/contexts/AnalyticsContext';

// Blog post data structure
interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
}

// Sample blog posts data - ordered by date (most recent first)
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Why Stress Is a Number One Killer Factor for Women in Menopause',
    summary: 'Menopause is a time of enormous physical and emotional transition—and chronic stress can intensify symptoms and become a major threat to overall health. Learn why stress management is non-negotiable during menopause.',
    content: `Menopause is a time of enormous physical and emotional transition—and for many women, it's also a time of heightened stress. While hot flashes, night sweats, and mood swings are well-known symptoms, what's often overlooked is how chronic stress can intensify these symptoms and become a major threat to overall health.

Let's break down why stress is a number one killer factor for women in menopause, and what you can do to manage it.

## 1. Stress Worsens Hormonal Imbalance

During menopause, oestrogen and progesterone levels decline. At the same time, if you're under constant stress, cortisol (the body's primary stress hormone) rises. High cortisol levels interfere with hormone production and worsen menopausal symptoms like:

• Fatigue
• Irritability
• Weight gain (especially belly fat)
• Sleep disturbances

**Research Insight:** A 2018 study published in Menopause found that women with high perceived stress reported more severe hot flashes, mood issues, and sleep problems, independent of hormone levels.

## 2. Stress Drives Belly Fat and Metabolic Dysfunction

Cortisol encourages the body to store fat—especially around the abdomen. This visceral fat is not just frustrating; it's dangerous. It increases the risk of:

• Heart disease
• Type 2 diabetes
• High blood pressure

During menopause, metabolism slows, and stress can make weight management even more difficult by increasing insulin resistance and promoting cravings for sugar and carbs.

**How to Break the Cycle:**
• Eat protein and healthy fats to keep blood sugar stable
• Prioritise strength training and walking
• Avoid excessive cardio, which can raise cortisol further

## 3. Stress Wrecks Sleep—Which Worsens Everything

Insomnia and broken sleep are common in menopause. Stress only makes it worse. Elevated cortisol in the evening disrupts melatonin production, making it hard to fall asleep or stay asleep. Poor sleep, in turn, leads to:

• Lower resilience to stress
• Increased appetite and cravings
• Poor recovery from workouts
• Greater emotional reactivity

**Tip:** Create a calming bedtime routine, reduce screen time, and try magnesium or herbal teas (like chamomile or valerian root) to support better sleep.

## 4. Chronic Stress Increases Risk of Heart Disease

Heart disease is the leading cause of death in postmenopausal women. Oestrogen plays a protective role for the heart, but as levels fall, stress compounds cardiovascular risks by:

• Raising blood pressure
• Increasing inflammation
• Elevating cholesterol and triglycerides

**Research Insight:** According to the North American Menopause Society, women who report high levels of chronic stress during menopause are at significantly higher risk of developing heart disease later in life.

## 5. Stress Impacts Mental Health and Quality of Life

Mood swings, anxiety, and even depression are more common during menopause—and stress can deepen them. Persistent stress affects neurotransmitters like serotonin and dopamine, which regulate mood and motivation.

Women who don't address stress often report:
• Feeling overwhelmed
• Loss of interest in daily life
• Low self-esteem and irritability

**Simple Stress-Reducing Strategies:**
• Daily walks in nature
• Practising mindfulness or deep breathing for 10 minutes
• Limiting caffeine and alcohol
• Talking to a professional or joining a supportive community

## Expert Insights: Why Managing Stress Is Non-Negotiable

Dr. Christiane Northrup, a leading expert in women's health, notes that emotional and lifestyle stressors are just as important as hormonal shifts during menopause. Without addressing stress, "you can do everything else right and still feel terrible."

Functional medicine expert Dr. Sara Gottfried adds that cortisol imbalance is one of the most common and overlooked causes of weight gain, fatigue, and anxiety in menopausal women—and restoring cortisol balance should be a top priority.

## The Bottom Line

Stress isn't just a side effect of menopause—it can be a primary driver of poor health, hormone chaos, and accelerated ageing. The good news? Managing stress isn't about being perfect—it's about making small, consistent changes that help your body and mind feel more supported.

At TP Health and Fitness, we support women through all stages of life with tailored training, lifestyle coaching, and stress-reducing strategies that work.

Need help balancing your hormones, reducing stress, and building strength? Contact us today and take control of your menopause journey.`,
    author: 'Sarah Mitchell',
    date: '2025-05-20',
    readTime: '8 min read',
    image: '/blog/blog11.webp',
    tags: ['Fat Loss', 'Lifestyle', 'Menopause', 'Mental Fitness', 'Snacking'],
    featured: true
  },
  {
    id: '2',
    title: 'The Importance of Recovery – And Why Sauna Therapy Is So Good for You',
    summary: 'We often think of training as the key to progress—but real transformation happens during recovery. Discover why sauna therapy could be one of the smartest things you do for your body and mind.',
    content: `We often think of training as the key to progress—but real transformation happens during recovery. Whether you're chasing performance goals, building strength, or simply managing stress, how well you recover determines how well you progress. And one of the most powerful (yet underrated) recovery tools available? Sauna therapy.

Let's dive into why recovery matters—and why stepping into a sauna could be one of the smartest things you do for your body and mind.

## 1. Recovery Is Where Results Happen

Training creates stress on the body—microtears in muscles, nervous system fatigue, and inflammation. It's during recovery that the body adapts, repairs, and comes back stronger. Without proper recovery, you increase your risk of:

• Injury
• Fatigue
• Hormonal disruption
• Plateaus in strength and performance

In other words, you can't train hard if you don't recover well.

**Signs You're Not Recovering Enough:**
• Constant soreness or stiffness
• Poor sleep
• Decreased motivation
• Stalled progress in strength or fat loss
• Mood swings or irritability

## 2. Why Sauna Therapy Supercharges Recovery

Sauna therapy—especially regular use of infrared or traditional heat saunas—can accelerate recovery, improve performance, and support overall health. Here's how:

### Improves Circulation & Muscle Repair

The heat from the sauna increases blood flow to muscles and joints, delivering more oxygen and nutrients where they're needed for repair. This helps reduce soreness and speeds up recovery after tough workouts.

### Flushes Toxins & Reduces Inflammation

As you sweat, your body eliminates heavy metals and other toxins. At the same time, heat exposure can lower inflammation levels, easing joint and muscle pain—great for active individuals and those dealing with chronic issues.

**Research Insight:** A 2018 study in Journal of Human Kinetics found that post-exercise sauna use improved neuromuscular recovery and reduced DOMS (delayed onset muscle soreness) in athletes.

### Boosts Mental Recovery & Lowers Stress

Sauna sessions help activate the parasympathetic nervous system—your rest-and-digest mode. That means:
• Lower cortisol levels (stress hormone)
• Improved mood and mental clarity
• Enhanced sleep quality

Regular sauna use is a natural, relaxing way to unwind, reduce anxiety, and promote a calmer, more resilient nervous system.

### Stimulates Growth Hormone & Heat Shock Proteins

Exposure to heat stress (like a sauna) triggers the release of heat shock proteins, which help protect and repair your cells. You also get a surge in growth hormone, which is key for:
• Muscle repair
• Fat metabolism
• Tissue regeneration

**Research Insight:** Finnish studies have shown that consistent sauna use is associated with lower risk of cardiovascular disease, dementia, and all-cause mortality. In fact, frequent sauna use was linked to a 40% lower risk of death from heart-related causes.

## 3. Sauna for Women in Menopause

Sauna therapy can be especially beneficial for women going through menopause, who often experience:
• Joint aches and stiffness
• Poor sleep
• Increased stress
• Slower metabolism

Sauna sessions can:
• Improve circulation and reduce joint pain
• Calm the nervous system and support hormone balance
• Support deeper, more restorative sleep
• Boost metabolism and aid in body composition

Infrared saunas in particular may be gentler and more accessible for women who are sensitive to high heat.

## How to Use Sauna for Recovery

Here's how to safely and effectively include sauna therapy in your recovery routine:

**Frequency:** 2–4 times per week is ideal
**Duration:** 15–25 minutes per session
**Hydration:** Drink plenty of water before and after
**Timing:** Post-workout or before bed to enhance relaxation

If you're new to saunas, start slow and build up your tolerance. Listen to your body and step out if you feel dizzy or overheated.

## Expert Take: Prioritise Recovery Like You Do Training

Performance expert and physiologist Dr. Rhonda Patrick has spoken extensively about sauna use, highlighting its ability to mimic the cardiovascular benefits of moderate exercise and reduce markers of chronic inflammation.

At TP Health and Fitness, we emphasise that recovery is just as important as reps, sets, and nutrition. Tools like sauna therapy aren't just luxurious extras—they're science-backed strategies to help you feel better, move better, and live stronger.

## The Bottom Line

If you're constantly pushing in the gym but not prioritising recovery, you're leaving gains on the table. Sauna therapy is a powerful, accessible tool that supports muscle repair, reduces stress, and boosts overall health—especially for active women and those navigating menopause.

Want to learn how to build recovery into your training plan? Book a session with us and ask about how sauna therapy fits into your routine.`,
    author: 'Teighlor',
    date: '2025-05-20',
    readTime: '7 min read',
    image: '/blog/blog12.webp',
    tags: ['Recovery', 'Sauna', 'Wellness'],
    featured: true
  },
  {
    id: '3',
    title: 'Importance of Eating Fat',
    summary: 'For years, fat was unfairly demonised as the enemy of weight loss and health. But the truth is, eating the right types of fat can actually help your body burn fat more efficiently. Learn why you need to eat fat to burn fat.',
    content: `For years, fat was unfairly demonised as the enemy of weight loss and health. But the truth is, eating the right types of fat can actually help your body burn fat more efficiently.

Whether you're trying to lose weight, boost energy, or balance hormones, dietary fat plays a crucial role. Here's why you need to eat fat to burn fat—and how to do it the right way.

## 1. Fat Fuels Your Metabolism

Dietary fat is a long-lasting energy source that keeps your metabolism running efficiently. Unlike carbs, which cause blood sugar spikes and crashes, fat provides steady energy and keeps you feeling fuller for longer.

**Best Metabolism-Boosting Fats:**
• Avocados (healthy monounsaturated fats)
• Coconut oil (contains MCTs that support fat-burning)
• Fatty fish (omega-3s help with metabolism and inflammation)

## 2. Fat Helps Regulate Hormones

Fats are essential for hormone production, especially in women. Hormones like oestrogen, progesterone, and testosterone rely on healthy fats to function properly. Without enough fat, you may experience fatigue, mood swings, and sluggish metabolism.

**Fat Sources for Hormone Balance:**
• Olive oil (rich in antioxidants and supports hormone health)
• Egg yolks (contain cholesterol, a building block for hormones)
• Nuts & seeds (provide essential fatty acids for hormone production)

## 3. Eating Fat Encourages Fat Loss

It may sound counterintuitive, but eating healthy fats helps your body burn stored fat. When you reduce carbs and increase fat intake, your body shifts into fat-burning mode (ketosis), using fat for fuel instead of sugar.

**Research Insight:** A 2021 study published in the Journal of the International Society of Sports Nutrition found that higher fat intake and lower carbohydrate intake improved fat oxidation and metabolic flexibility, leading to better body composition and weight management.

**Fat-Burning Fats to Include in Your Diet:**
• Grass-fed butter (supports metabolism and brain function)
• Full-fat dairy (helps with satiety and weight loss)
• Dark chocolate (85%+) (rich in healthy fats and antioxidants)

## 4. Fat Keeps You Full & Reduces Cravings

One of the biggest benefits of eating fat is increased satiety. Unlike low-fat diets that leave you hungry and craving sugar, fat slows digestion and stabilises blood sugar, preventing energy crashes and overeating.

**How to Stay Full with Healthy Fats:**
• Drizzle olive oil over salads instead of using fat-free dressings
• Add a handful of nuts to snacks for extra satiety
• Use grass-fed butter or ghee in cooking for a richer taste and better fat profile

## 5. Fat Supports Brain Function & Mental Clarity

Your brain is 60% fat, and consuming the right fats can improve memory, focus, and cognitive function. Omega-3 fatty acids, in particular, help reduce inflammation and support mental clarity.

**Research Insight:** A study in Frontiers in Aging Neuroscience (2020) found that omega-3 fatty acids improve cognitive function in menopausal and postmenopausal women, reducing the risk of cognitive decline.

**Brain-Boosting Fats to Eat Daily:**
• Salmon & sardines (rich in DHA & EPA for brain health)
• Walnuts & flaxseeds (great plant-based omega-3 sources)
• MCT oil (provides quick energy for the brain)

## 6. Eating Fat as a Vegan or Vegetarian

If you follow a vegan or vegetarian diet, you can still get plenty of healthy fats to support fat loss, hormone balance, and metabolism—without relying on animal products. The key is to focus on plant-based sources of monounsaturated and polyunsaturated fats while avoiding processed vegetable oils and trans fats.

**Best Healthy Fats for Vegans & Vegetarians:**
🌰 **Nuts & Nut Butters** – Almonds, walnuts, cashews, and macadamia nuts provide healthy fats and protein
🥑 **Avocados & Olive Oil** – Rich in monounsaturated fats that support heart health and hormone production
🌱 **Chia Seeds & Flaxseeds** – Excellent plant-based sources of omega-3 fatty acids (ALA) for brain and hormone health
🥥 **Coconut Oil & MCT Oil** – Provide quick-burning fats that can boost energy and fat metabolism
🌻 **Seeds (Pumpkin, Sunflower, Sesame)** – Packed with healthy fats, minerals, and fibre
🫛 **Soy-Based Foods (Tofu, Tempeh, Edamame)** – Good sources of fat and protein, plus phytoestrogens that may help with hormonal balance during menopause

Even without animal-based fats, a well-balanced vegan or vegetarian diet can provide the essential fats needed for energy, hormone balance, and fat-burning.

## 7. The Role of Fat in Menopause: Why It's Essential

Menopause brings hormonal changes that affect metabolism, fat storage, and energy levels. Healthy fats play a key role in balancing hormones, reducing inflammation, and preventing weight gain.

**Why Menopausal Women Need More Fat:**
🔹 **Supports oestrogen production:** As oestrogen declines, healthy fats provide the raw materials needed for hormone balance
🔹 **Reduces belly fat:** A study published in The American Journal of Clinical Nutrition found that a diet higher in monounsaturated fats (like olive oil and avocados) reduces abdominal fat, a common issue during menopause
🔹 **Fights joint pain & inflammation:** Omega-3s help reduce inflammation and joint discomfort, which can increase post-menopause
🔹 **Improves mood & brain function:** Fats support neurotransmitters that regulate mood, stress, and cognitive function

**Best Fats for Menopausal Women:**
🥑 **Avocados & olives** – Rich in monounsaturated fats for heart and hormone health
🐟 **Salmon, sardines & mackerel** – High in omega-3s for brain and joint health
🌰 **Nuts (walnuts, almonds, macadamia nuts)** – Provide healthy fats and fibre for satiety
🥚 **Egg yolks** – Contain cholesterol, essential for hormone production
🧈 **Ghee & grass-fed butter** – Healthy saturated fats that help with fat metabolism

## How Much Fat Should You Eat?

The right balance depends on your diet and activity level, but a good guideline is:
🥑 **40–50% of daily calories from healthy fats** if following a low-carb diet
🥚 **25–35% of daily calories from healthy fats** if following a balanced diet

## Expert Take: The Power of Fat for Fat Loss

Dr. Gabrielle Lyon and other experts emphasise that fat is not the enemy—sugar and processed carbs are. Eating the right fats helps control hunger, balance hormones, and promote long-term fat loss. The key is to focus on quality fats while avoiding processed vegetable oils and trans fats.

## The Bottom Line

If you want to burn fat, boost energy, and feel your best, don't fear fat—embrace it! By choosing healthy, high-quality fats, you'll keep your metabolism running strong, support your hormones, and naturally encourage fat loss.

Looking for a nutrition plan that supports fat loss and muscle gain?

**Book in a call with Will our in-house expert on nutrition and head of our Fat loss programme to dial in your diet and start achieving your goals 💪**

**JOIN our online 8 week fat loss course today!**

Email: info@tphealthfitness.com`,
    author: 'Teighlor',
    date: '2025-03-31',
    readTime: '9 min read',
    image: '/blog/blog10.webp',
    tags: ['Fat Loss', 'Lifestyle', 'Menopause', 'Mental Fitness', 'Snacking', 'Strength Training', 'Training over 50', 'Weight Loss'],
    featured: false
  },
  {
    id: '4',
    title: 'Why Protein Is the Number One Macronutrient for Women',
    summary: 'Menopause brings major changes—muscle loss, slower metabolism, and reduced bone density. But one simple nutritional adjustment can make a huge difference: increasing your protein intake.',
    content: `Menopause is a natural stage of life, but it comes with major changes—muscle loss, a slower metabolism, and reduced bone density, to name a few. These shifts can feel overwhelming, but one simple nutritional adjustment can make a huge difference: increasing your protein intake.

Protein isn't just about building muscle—it's the key to maintaining strength, managing weight, and supporting overall well-being during menopause. Here's why it should be your top dietary priority.

## 1. Preserving Lean Muscle Mass

As oestrogen levels decline, muscle loss accelerates, leading to a slower metabolism and increased fat storage. The good news? Protein helps preserve and rebuild lean muscle, keeping your body strong and active.

💡 **Pro Tip:** Aim for 1.2 to 2.0 grams of protein per kilogram of body weight daily, depending on your activity level. Prioritise high-quality protein sources like lean meats, eggs, dairy, tofu, and legumes.

## 2. Strengthening Bones

Menopausal bone loss increases the risk of osteoporosis and fractures. Protein plays a crucial role in bone formation and repair, working alongside calcium to maintain strength.

💡 **Pro Tip:** Pair protein-rich foods with calcium sources (e.g., leafy greens, fortified dairy) for optimal bone health.

## 3. Managing Weight and Reducing Cravings

Struggling with weight gain? Protein keeps you fuller for longer and helps regulate hunger hormones, reducing cravings and overeating. It also has a higher thermic effect, meaning your body burns more calories digesting protein than fats or carbs.

💡 **Pro Tip:** Include protein in every meal and snack. Try Greek yoghurt, cottage cheese, protein smoothies, or nuts for easy, high-protein options.

## 4. Supporting Hormonal Balance

While protein can't stop hormonal fluctuations, it plays a key role in hormone production and regulation. Amino acids from protein serve as building blocks for many essential hormones.

💡 **Pro Tip:** Focus on whole-food protein sources and limit processed foods to support hormonal balance.

## 5. Boosting Mood and Brain Function

Brain fog and mood swings? Protein fuels neurotransmitters that support mental clarity and emotional stability. Certain protein-rich foods, like salmon and walnuts, also provide omega-3s, which benefit brain health.

💡 **Pro Tip:** Add omega-3-rich proteins to your diet—think salmon, chia seeds, or flaxseeds—for an extra brain boost.

## Expert Insight: Why Protein Matters Most

Dr. Gabrielle Lyon, a leader in muscle-centric medicine, calls muscle the "organ of longevity"—especially for menopausal women.

To maintain muscle, boost metabolism, and stay lean, Dr. Lyon recommends:

✅ Prioritising high-quality protein (1.2–2.0g per kg of body weight)
✅ Strength training regularly to protect muscles and bones
✅ Eating leucine-rich foods (e.g., eggs, chicken, dairy) to stimulate muscle growth

By combining protein-rich nutrition with strength training, you can stay strong, lean, and energised throughout menopause.

## Key Takeaways

✔️ Protein is essential for women in menopause—it preserves muscle, strengthens bones, supports weight management, and enhances mood and cognition.
✔️ Aim for at least 1.2g of protein per kg of body weight daily.
✔️ Combine protein intake with strength training for optimal results.

## Ready to Optimise Your Nutrition?

If you're looking for personalised support to feel stronger, healthier, and more energised during menopause, we're here to help.

💬 **Book a call with our in-house nutrition expert, Will, today!** Let's build a custom plan that fits your body's needs.

📩 **Contact us now to get started!**`,
    author: 'Teighlor',
    date: '2025-02-20',
    readTime: '7 min read',
    image: '/blog/blog9.webp',
    tags: ['Fat Loss', 'Lifestyle', 'Menopause', 'Mental Fitness', 'Snacking', 'Strength Training', 'Training over 50', 'Weight Loss'],
    featured: false
  },
  {
    id: '5',
    title: '8 Surprisingly Easy Ways to Cut Calories',
    summary: 'Coming into the Summer you may be thinking, "it\'s time for me to lose weight, get fit and get back on track with my healthy lifestyle". The good news is, you don\'t need to starve yourself to lose weight!',
    content: `Coming into the Summer you may be thinking, "it's time for me to lose weight, get fit and get back on track with my healthy lifestyle". Well, the good news is, you don't need to starve yourself to lose weight! In fact, there are so many diets and fads out there that lure you into a false sense of hope that after two months of dieting you will be slim forever, frankly it doesn't work like that (sorry to say).

Without bringing calories into the equation, let's look at some simple and effective techniques that you can implement into your daily habits without feeling deprived.

## 1. Identify your daily eating routine

Many days we eat on a schedule – one we aren't even aware of! Take an inventory of what you eat and when you eat for 5 days. Use a journal or food diary to keep track.

## 2. Make subtle changes to start

When you're making a lifestyle change, it can't be done quickly or all at once. Accept and be aware that you'll be making this lifestyle change over an extended period of time. One way is to make subtle changes every week. For example, instead of having three eggs for breakfast, have two. Instead of eating full fat bacon, switch over to turkey bacon.

## 3. Make a list when shopping for groceries

Believe it or not, when we shop without a list, we're more prone to just grab things off the shelves that look and sound tasty. However, when we shop with a list, our impulse shopping is drastically reduced.

## 4. Read food labels

Sometimes we don't want to draw attention to ourselves by reading food labels whilst in the store. However, every processed food product has its label available online for easy viewing. Better still, simply go to your pantry and read some labels! You're looking for calorie content, sodium content, and sugar content specifically. Also ensure you're aware of what constitutes a serving.

## 5. Eat more fresh foods

Processed foods, by their nature, are far less healthy and contain many more calories than fresh foods. Sometimes it comes down to a choice: do you want to consume 100 calories of your favourite fresh fruit (about 1 large apple, or 200 grams) or do you want to eat one chocolate chip biscuit (78 grams)? You can get twice as much food in a fresh fruit.

## 6. Find alternatives

Let's say that you know, even though you want to lose weight, you can't give up pizza. You can still eat it – just change your pizza choice. Rather than having a deep dish, thick crust meat lovers pizza (loaded with calorie-laden carbs, soaring sodium, and lots of fatty oils), change to a thin crust pizza with just cheese or all veggies.

## 7. Drop the fizzy drinks

Carbonated sodas and other high sugar drinks are empty calories. Some people choose diet drinks, but the artificial sweeteners in those drinks can cause health issues (headaches, primarily). Just drink water! If you're a caffeine addict, you can still drink coffee – just not high calorie lattes, iced coffees, or frappés.

## 8. Limit alcohol intake

Whilst many of us enjoy a glass of wine or a beer with dinner, both are high in calories. You don't need to abstain altogether. Simply drink less.

By making these simple changes every day, you can cut a surprising number of calories. When pairing these activities with a suitable exercise plan, you can easily get your body to a place of health and vitality.

Why not give it a go this month? Even better, book in a free consultation with us to kickstart your resistance training.

Simply email **info@tphealthfitness.com**

**TP Health and Fitness Ltd**`,
    author: 'TP Team',
    date: '2024-05-15',
    readTime: '5 min read',
    image: '/blog/blog8.webp',
    tags: ['Fat Loss', 'Lifestyle', 'Weight Loss', 'Snacking'],
    featured: false
  },
  {
    id: '6',
    title: 'Why you must train with weights during the menopause',
    summary: '5 reasons to start strength training pre and during the menopause. Menopause will affect 33.94 million people in the UK and is not widely enough spoken about. Here\'s how strength training can help overcome symptoms.',
    content: `This blog is for everyone to read, you don't need to be going through the menopause to be aware and help others overcome symptoms and the effects of this natural process. Menopause will affect 33.94 million people in the UK and it is not widely enough spoken about. For husbands and partners to women, it is vital that you understand what can happen and how women are affected by the menopause. It can be tough, but we have outlined below why starting strength training can seriously help you overcome some of the symptoms.

## 1. HOT FLUSHES

Women who have a higher lean body mass will have reduced vasomotor symptoms by menopause by up to 78% according to studies from Dr Rosanne Woods. Strength training can help you control hot flushes and night sweats.

## 2. BOOST METABOLISM

No matter how much you train, you cannot out train a bad diet. We all know that no matter how much exercise or training you do, if your diet is bad you won't see any results.

To lose weight you need to be in a calorie deficit, and this must start with your diet. Once you have overcome this, you need to maintain your diet. Strength training helps you build lean muscle and lean muscle uses more calories efficiently.

## 3. LIVE LONGER

Evidence shows that building lean muscle can help you live longer. After menopause, women are at a higher risk of cardiovascular disease, osteoporosis and other risk factors. Strength training is proved to mitigate these.

## 4. REDUCE STRESS

Strength training and mental health are linked. Exercise and training help your mental health symptoms. Studies have shown that strength training can reduce anxiety and improve depression. With the reduction of oestrogen and progesterone, women are left feeling less able to cope with stress. Strength training boosts endorphins that will help our mental health and wellbeing.

## 5. INCREASE YOUR CONFIDENCE

Strength training can truly change your life, boost your confidence and self-belief. Feel great and take this into other aspects of your life such as relationships, work and hobbies.

## The Bottom Line

So, anyone can start strength training, you don't need to be a "gym goer" to master it. We have clients who have never stepped foot in a training environment and now would never look back. We have seen clients whose health has been transformed since training. Their wellbeing, confidence and overall self-belief has changed for the better! Don't suffer, rethink and invest in YOU today.

If you need any further advice, please don't hesitate to contact us! We hope that you have learnt something from this blog, and this has given you a boost to rethink your lifestyle and exercise regime.

Simply email **info@tphealthfitness.com** for more information on our programmes and what we can do to help you with your health and lifestyle.

**TP Health and Fitness Ltd**`,
    author: 'TP Team',
    date: '2024-05-15',
    readTime: '4 min read',
    image: '/blog/blog7.webp',
    tags: ['Menopause', 'Strength Training', 'Mental Fitness', 'Training over 50', 'Lifestyle'],
    featured: false
  },
  {
    id: '7',
    title: 'Resolutions for every month',
    summary: 'We\'ve hit the end of February and you may be thinking, what have I stuck with in terms of New Year\'s resolutions? Resolutions don\'t always need to be for January, we can make them every day or every week.',
    content: `We've hit the end of February and you may be thinking, what have I stuck with in terms of New Year's resolutions? Have you stuck to what you set out to achieve? Did you make some unambitious goals? Have you started a new routine or hobby which you are enjoying?

Resolutions don't always need to be for January, we can make them every day or every week. You may have come across a programme, new book, podcast or read an article which has inspired you to make some changes and believe us when we say, change is GOOD.

When it comes to your health and weight, there are some simple solutions you can make:

## 5 Resolutions for all year round

### 1. Find your happy weight
Work with your GP or personal trainer to understand what is your optimum and healthy weight which you can sustain.

### 2. Move your body every day
30 mins of exercise every day is your minimum, and this can include your housework or parking the car further away. Ideally however, you need to be training 3-4 times a week and doing 30 mins of movement every day.

### 3. Enjoy your favourite foods without guilt
Don't feel guilty when you have foods you enjoy. Savour them rather than feeling bad, don't deprive yourself from them, you'll only end up bingeing or feeling worse for it.

### 4. Cook more meals than you eat out
Eating out is your easy option but it should be a treat or something special. Cooking at home you can cook with wholefoods, know what is going into your food and also spend quality time with your loved ones. Cooking can also distract you from the day-to-day pressures of work or other responsibilities so enjoy it!

### 5. Set a regular bedtime
Lack of sleep can really have a strong impact on gaining weight and how we feel the next day. You need to aim for 7-9 hours of sleep per night to prevent you having cravings and giving you that energy boost.

## How to implement this in your lifestyle

So you might be thinking, there is a lot there but how can I implement this in my lifestyle. Start by doing the following:

### 1. Check your weight and do some research
Are you at the right point? If not then can you contact a personal trainer and start training and monitoring your diet.

### 2. Look at your diary
When are you moving? Can you plan some exercise into your week? Even just one walk a day.

### 3. Write down five of your favourite foods
Put next to them when you most want them. How can you stop yourself picking at these every day. Can you say right, no crisps until a packet on Friday, replace milk chocolate with dark of an evening?

### 4. Plan, plan, plan your meals
Whether you are on your own, with your partner or with your family. Planning meals helps massively so that you don't impulse buy the easiest meal in the shops or throw something in the freezer.

### 5. Set a realistic bedtime
When can you realistically go to bed? If it's 10pm then perfect, make sure you wind down by 9.30pm, pick up your book or just chill out and lights out!

If you need any further advice, please don't hesitate to contact us! We hope that you have learnt something from this blog, and this has given you a boost to rethink your lifestyle and exercise regime.

Simply email **info@tphealthfitness.com** for more information on our programmes and what we can do to help you with your health and lifestyle. Book your 30 mins consultation with us today!

**TP Health and Fitness Ltd**`,
    author: 'TP Team',
    date: '2024-05-15',
    readTime: '5 min read',
    image: '/blog/blog6.webp',
    tags: ['Lifestyle', 'Mental Fitness', 'Weight Loss', 'Fat Loss'],
    featured: false
  },
  {
    id: '8',
    title: 'Lifestyle & Mental Fitness',
    summary: 'Bridge the gap between mental and physical health. When it comes to living a healthy and balanced lifestyle, managing your mental health is just as significant as training 2-4 times per week.',
    content: `This week's blog is all about mental fitness and why it is so important to maintain your mental fitness to see results physically. When it comes to living a healthy and balanced lifestyle, managing your mental health is just as significant as training 2-4 times per week. Why? Well firstly because when it comes down to living a healthy, happy and sustainable lifestyle, it is all about MINDSET. How do you create a good mindset? Well it starts with how you are feeling, your thoughts, habits and creating a positive outlook every day.

## Have a Positive Outlook

1. **Good mental health**
2. **Active lifestyle**
3. **Balanced diet**

Once you accomplish and get comfortable with these three things then everything else will fall into place. Trust me.

But going back to mental health, how can we actually create a sustainable routine that you will be able to maintain and manage each day? Let's start with these three things:

## 1. Nail your morning routine

Morning routine? Well, firstly, do you make your bed every morning and is it the first thing you do? Do you draw your curtains after that before making a cup of tea or jumping in the shower? It might sound simple but once you make your bed, that is one productive and cleansing task done and you have set yourself up for the day.

## 2. Evaluate your social media usage

Social Media. Wow what a concept of the 21st century, a platform which has truly evolved over the last ten years and yes it can be very overwhelming. Ask yourself this, how many times a day do you go on Facebook, Twitter, Instagram and find yourself scrolling endlessly? Now I'm not saying you should stop entirely but just take a step back and be conscious as to how many hours you are on your phone. Is it for any benefit? Does it make you feel better about your life (probably not), is it the real world or people's real lives? (probably not). In January, I came off my personal IG account and I wouldn't look back, I didn't miss it at all which says a lot, what actual benefit does it bring to my life?

## 3. Review your exercise schedule

Exercise. Our mission at TP is to give everyone the opportunity to train, exercise and make it part of their lifestyle. It is possible for everyone to exercise and do this. As humans we tend to make too many excuses when it comes to exercise. Can't afford it, not enough time, not confident enough, I don't want to get "big". Let's find solutions, not excuses! 

The best way to exercise or train is plan it in your week like you would any appointment. Know when you are going to go to the gym, see your PT, go for those walks or weekly runs. It is possible, you can wake up earlier, block out your lunchtime or book in a session with your coach. 

Exercise and training are healthy drugs, especially resistance training. The benefits of resistance training are truly unending, check out our other blog posts for more information on this. Alternatively view our testimonies on our website to see true and real results! 

Most importantly, exercise is MASSIVE for your mental health. It reduces symptoms of anxiety, depression and feelings of low mood. It gives you a huge energy boost and lift which leaves you feeling fulfilled and ready to go for the rest of your day.

## Take Action This Week

So, taking this all in, can you prioritise your mental fitness this week? Take some time out to review your lifestyle, is there anything you can do to help your mental health to then support your overall health.

If you need any further advice, please don't hesitate to contact us! We hope that you have learnt something from this blog, and this has given you a boost to rethink your lifestyle and exercise regime.

Simply email **info@tphealthfitness.com** for more information on our programmes and what we can do to help you with your health and lifestyle. Book your 30 mins consultation with us today!

**TP Health and Fitness Ltd**`,
    author: 'TP Team',
    date: '2024-05-15',
    readTime: '6 min read',
    image: '/blog/blog5.webp',
    tags: ['Mental Fitness', 'Lifestyle', 'Strength Training'],
    featured: false
  },
  {
    id: '9',
    title: '7 Foods to Avoid for Weight Loss!!',
    summary: 'There are many foods that have been mistaken as healthy due to appealing labels that companies use in their marketing. Here are 7 surprising foods you should avoid when trying to lose weight.',
    content: `There are many foods that have been mistaken as healthy due to appealing labels that companies use in their marketing. You might see claims such as:

• Low fat
• Vegan
• Gluten Free
• Low carbs

## How do foods make you gain weight?

Certain foods are more likely to contribute to weight gain than others, including processed foods that are high in calories, fat, added sugar, and salt. When we eat more calories than we burn off over the course of the day, our bodies store those extra calories, usually in the form of fat.

Here are 7 surprising foods that you should avoid when trying to lose weight:

## 1. Granola and Granola Bars

Even though some granolas and granola bars are quite nutritious, many are packed with added sugar and very high in calories. For example, 1 Quaker Chewy Yoghurt Granola Bar packs 10 grams of added sugar per bar.

## 2. Flavoured Yoghurts

Yoghurt can be a healthy choice, but it's best to opt for unsweetened yoghurt whenever possible. Flavoured and "fruit on the bottom" yoghurts can contain a surprising amount of sugar in just a small serving. They can also contain processed additives and sweeteners which highly contribute to weight gain.

## 3. Shop-Bought Protein Shakes and Bars

Some foods that are naturally high in protein, like fish, eggs, and beans, are without a doubt healthy choices. However, items like protein bars and protein shakes can be loaded with added sugar and unnecessary ingredients, like:

• Artificial Sweeteners
• Artificial Colours
• Oils
• Thickeners

## 4. Sports Drinks and Energy Beverages

Whilst companies market sports drinks and energy beverages as ways to boost energy and athletic performance, these beverages are unnecessary for most people. They can be high in ingredients like added sugar, artificial colours, and large amounts of stimulants, such as caffeine. For example, there is 62 grams of sugar in a 500ml bottle of Lucozade Energy Orange.

## 5. Gluten Free Snack Foods

For people with gluten-related disorders, avoiding gluten is necessary. However, some processed gluten-free snack foods and sweets contain just as much, if not more, calories and added sugar as other snacks. Also, gluten-free snack foods and other gluten-free items tend to be lower in protein, fibre, and certain vitamins and minerals than their gluten-containing counterparts.

## 6. Some Low Fat and Fat Free Products

Just because a food is low in fat doesn't mean it's a healthier choice. Food manufacturers often replace fat with sugar in low fat and fat-free products to make up for the flavour loss. Also, fat-free products may be less filling than their full fat versions as fat is a macronutrient that supports feelings of fullness and makes food more pleasurable to eat. Fats are an essential part of your diet and eating nutritious high fat foods can help you reap their benefits.

## 7. Breakfast Cereal

Many breakfast cereals are made with refined grains, lack filling nutrients like protein and fibre, and can be very high in added sugar. Even cereals marketed toward adults can be packed with added sugar. For Example, Honey Nut Cheerios, which is marketed as "heart healthy," contains 12 grams of added sugar per cup.

## The Bottom Line

Don't be fooled by clever marketing claims. Always read nutrition labels and ingredient lists to make informed choices about the foods you're consuming. Focus on whole, unprocessed foods whenever possible for sustainable weight loss.`,
    author: 'TP Team',
    date: '2024-05-15',
    readTime: '5 min read',
    image: '/blog/blog4.webp',
    tags: ['Fat Loss', 'Weight Loss', 'Snacking', 'Lifestyle'],
    featured: false
  },
  {
    id: '10',
    title: 'PROTEIN! How do I eat more?',
    summary: 'Are you struggling to eat more protein in your diet? It is probably one of the hardest macronutrients to eat the right amount of each day. Here are 10 simple ways to help you add more protein to your diet.',
    content: `Are you struggling to eat more protein in your diet? It is probably one of the hardest macronutrients to eat the right amount of each day especially when you start training plus people are always not aware of the benefits of eating protein in every meal.

## 1. BENEFITS OF PROTEIN:

• Helps with muscle recovery after exercise
• Keeps you fuller for longer as opposed to carbs or fatty foods
• Helps you become leaner and build muscle
• Gives you more energy throughout the day
• Low in fat

## 2. Here are 10 simple ways to help you add more protein to your diet:

### Add Greek Yoghurt
Rich protein source, even just one serving can add about 18 grams of protein into your day.

### Prep Meat Strips
Preparing and cooking extra portions of meat or plant based protein, like chicken or fish is such a useful way to add to your meals throughout the week, it will also save you some money!

### Have Nuts Handy
Have a small tupperware of nuts on you if you're at work or on the go, even just a handful can add 4 grams of protein to a meal. They are also handy for adding to yoghurt, salad, breakfast or porridge.

### Add Beans to Anything
Beans are full of fibre and can average around 15 grams of protein per cup.

### Choose Quinoa Over Rice or Pasta
The seed in quinoa adds about 8 grams of protein per cup and you can substitute this with your rice and pasta.

### Eat Hard Boiled Eggs
Pre-cooked eggs are a great snack or addition to a meal such as a lunch salad. One hard-boiled egg can pack in 6 grams of protein.

### Mix in Seeds
A very easy way to add protein to your diet, add seeds such as hemp, chia, or flaxseed into smoothies, porridge or yoghurt. Two tablespoons can add around 3.5-6 grams of protein to your food.

### Give Peas a Chance
Did you know, one cup of peas contain 8 grams of protein?!

### Try Edamame Beans
Ever tried edamame beans? They are really tasty and packed full of protein! One half cup contains 9 grams of protein, bonus they are one of your omega-3 fatty acids.

### Make Protein Pancakes
Try making pancakes but substituting the bad stuff! A healthier version includes, oat flour, egg whites and protein powder, you can even add berries and bananas for your sweet fix!

## The Bottom Line

Increasing your protein intake doesn't have to be complicated. Start with one or two of these simple swaps and gradually build up your protein consumption throughout the day.

If you need any further advice, please don't hesitate to contact us! We hope that you have learnt something from this blog, and this has given you some great advice to help with your protein intake.

Simply email **info@tphealthfitness.com** for more information on our programmes and what we can do to help you with your health and lifestyle.

**TP Health and Fitness Ltd**`,
    author: 'TP Team',
    date: '2024-05-15',
    readTime: '4 min read',
    image: '/blog/blog3.webp',
    tags: ['Fat Loss', 'Snacking', 'Lifestyle', 'Weight Loss'],
    featured: false
  },
  {
    id: '11',
    title: 'Benefits of training over 50',
    summary: 'It\'s never too late to start lifting weights. Fitness has no age or ability limits and strength training can simply change your life as you start to get older.',
    content: `It's never too late to start lifting weights. Fitness has no age or ability limits and strength training can simply change your life as you start to get older. With age, you might be experiencing joint stiffness, loss of strength, balance and coordination and some people can experience these declines as early as 40. As we get older, the muscle fibres shrink in number and size which leads to a loss of strength. What else can contribute to this decline? Genetics, diet, smoking, alcohol use and a lack of physical activity.

## Positive effects of resistance training as we age

Lifting weights can prevent and even reverse this decline by increasing the size of these reduced muscle fibres. As we build muscle, we are adding more weight to the skeleton, our bones are stimulated to strengthen and grow. As we increase bone mass, we can also reduce the risk of developing osteoporosis and fractures.

This is not to say you shouldn't keep doing your aerobic exercise such as walking, running, cycling, swimming as it is key to be looking after the lungs, however resistance training can significantly slow or reverse the decline of muscle mass, bone density and strength. In addition to this, there is evidence that strength training over 50 improves sleep and moods (this also happens at any age!).

## Strong muscles = strong bones!

As we grow older, our bone mass naturally decreases, and this puts us at greater risk of developing osteoporosis. Our bones become less dense as we get older for a number of reasons such as inactive lifestyles and hormonal changes. For women, menopause triggers the loss of minerals in bone tissue as we drop in oestrogen and for men, the decline in sex hormones can lead to a later development of osteoporosis. Resistance training can help to protect any loss in bone strength, and we put stress on our bones which promotes bone forming cells into action.

## Cardiovascular health

Resistance training not only promotes bone density, but it also helps maintain cardiovascular health.

You may wonder which type of exercise we should prioritise, aerobic or resistance? My advice would be resistance as it is healthier for the heart than going for a walk or a run.

## Chronic disease

A decrease in muscle mass and muscle metabolic quality as we grow old are thought to be the primary drivers of insulin resistance and type 2 diabetes in the older population. Resistance training can actually help improve insulin sensitivity. This refers to how sensitive the body's cells are in response to insulin. High insulin sensitivity allows the cells of the body to use blood glucose more effectively, reducing blood sugar. Low insulin sensitivity is known as insulin resistance. The cells do not absorb as much glucose, which might lead to excessively high blood sugar levels. Without proper management this can lead to type 2 diabetes.

How can we improve this? More resistance training! This can reduce the signs and symptoms of other chronic diseases such as heart disease, and arthritis, whilst also improving sleep and reducing depression.

## How does resistance training improve mental health?

• Positive effect on the mind
• You feel empowered, confident and more satisfied
• Improved cognitive functions such as memory, attention and how people do tasks
• Improved energy levels
• Better blood flow to the brain which keeps nerve cells healthy and supplied with oxygen, lower inflammation and less cellular damage

## Conclusion

Lifting weights can have a positive effect on your mind as well as your muscles and help you to live your best life for longer.

If you need any more advice on our programmes or over 60s training classes, please email us or fill in our form on the website.

Best wishes,

**TP Health and Fitness Ltd**

**info@tphealthfitness.com**`,
    author: 'TP Team',
    date: '2024-05-15',
    readTime: '6 min read',
    image: '/blog/blog2.webp',
    tags: ['Training over 50', 'Strength Training', 'Mental Fitness', 'Lifestyle'],
    featured: false
  },
  {
    id: '12',
    title: 'Joint Health: Five ways you can help prevent and live well with arthritis',
    summary: 'Did you know, there are actually 100 types of arthritis? The most common is osteoarthritis (OA). Here are five ways you can help prevent it and reduce its impact on your life.',
    content: `Did you know, there are actually 100 types of arthritis?

The most common of these is osteoarthritis (OA) – the condition I will be discussing in this blog.

OA tends to affect the synovial joints of the fingers and thumbs, knees, hip joints and lower spine and neck. It results in narrowed 'joint space' and changes in the bone structure.

Symptoms are joint pain and stiffness, weak grip and even instability in the knees and hips.

It has traditionally been thought of as inevitable 'wear and tear' or 'just part of ageing'. But science is now rethinking the causes of this painful and often quite debilitating condition.

So, what factors typically cause OA, and what can we do to help prevent it and to reduce its impact on our lives? Some (non-modifiable) factors we can't do much about, but others… we can certainly modify to improve outcomes:

## NON-MODIFIABLE FACTORS:

• **AGE:** OA tends to become more noticeable after the age of 50
• **GENDER:** it's a lot more prevalent in females
• **GENETICS:** though problems may also be due to similar lifestyle and body dynamics
• **CO-EXISTING CONDITIONS:** e.g. a high incidence of OA in people with diabetes
• **ABNORMAL JOINT STRUCTURE or BONE DENSITY:** both can cause joint damage
• **JOINT INJURY:** severe (even historic) injuries to joint tissues can cause OA

*These last three factors are conventionally thought of as non-modifiable, but all can be helped through a well-planned programme of diet and exercise.*

## MODIFIABLE FACTORS (these are the ones we can really work on together!)

• **DIET:** a poorly planned diet with insufficient variety
• **SMOKING:** believe it or not, smokers have more pain and cartilage loss!
• **POOR MUSCLE TONE:** weak muscles can fail to sufficiently support joints
• **OBESITY:** excessive weight will overload joints, particularly the knees – but obesity can be associated with poor diet and de-conditioning – neither being helpful to OA
• **OVERUSE and MISUSE:** generally occupational use or very poor exercise planning

In this blog, we'll explore ways you can improve your joint health by making just small changes to your lifestyle (and yes, they could even help you live longer and healthier!).

There are two big practices that can really help: exercising and healthy eating.

## 1. Eat Omega 3

Omega 3 is a polyunsaturated fat that can reduce inflammation in the body.

**Recommendation:** eat 3.5 ounces of fish twice a week, or, if you are vegetarian or vegan, there are non-fish sources such as: walnuts, chia seeds and flax seeds, plant oils, soya beans and soya beverages.

**Other supplements:** fish, krill cod liver and algae oils.

## 2. Manage your weight

Managing your weight is key to preventing joint pain and damage - especially in your knees. Our knees take a lot of the support to our body weight. Even being just 10lbs overweight can contribute to 30-60 pounds increased weight through our knees on every step (our poor knees!). SO… weight management is essential.

## 3. Be conscious of blood sugar levels

There is a clear statistical correlation between the existence of type 2 diabetes and osteoarthritis. This may be due to common factors that can drive both conditions e.g. diet and deconditioning.

## 4. Training

You knew that was coming! But, if this sounds worrying, you might be surprised to hear that studies repeatedly suggest that runners have no higher incidence of knee or hip arthritis than those of us who choose a more sedentary lifestyle. Runners did, however, live longer, healthier lives!

The four key types of training that reduce the risk of OA are:

• **AEROBIC:** cardiovascular – 30 mins FIVE TIMES a week!
• **STRENGTH:** weight/resistance-based training x 2-3 times a week
• **FLEXIBILITY:** stretching, increasing your range of motion e.g., through yoga/Pilates 4-5 days a week (not for too long)
• **BALANCE:** eg Tai Chi, walk outs etc. these all help with our balance and posture

All of the above we incorporate in our sessions at TP Health & Fitness. By maintaining a balance every week you can fight back against the problems of OA.

## 5. Get more ergonomic

If you do deskwork from home, be body-aware and naturally active:

Here are some easy and efficient ways to do just that:

• Make sure you are set up correctly: have the right office chair, make sure your feet are planted, the screen is at a good head height, so you are not straining your neck
• Ensure your back is always straight when working and your arms are rested and at 90 degrees to your desk
• It's easy to get cold if sitting still for long periods at your desk. Keep moving those stiff joints and, if you can, keep your workspace warm
• Stand every hour – it's easy and there are NO excuses. Stand up and walk around your workspace. Even better, block out 30 mins each day to take a walk
• Being conscious of joint issues and protect your joints: when you feel niggles in any joints don't be tempted to 'just finish this job'! Stop, move and try to massage the painful area. Please mention it when you come to the gym.

## 6. Quit smoking

Enough said!

## Conclusion

So, did that make you rethink even part of your daily regime? Are you at risk of developing arthritis and do you need some support in managing your lifestyle, exercise and diet? If you have any further questions, then please don't hesitate to contact us!

Simply email **info@tphealthfitness.com** for more information on our programmes and what we can do to help you with your health and lifestyle. Book your 30 mins consultation with us today!

**TP Community**`,
    author: 'TP Team',
    date: '2024-02-18',
    readTime: '8 min read',
    image: '/blog/blog1.webp',
    tags: ['Training over 50', 'Lifestyle', 'Mental Fitness'],
    featured: false
  }
];

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const { trackInteraction } = useAnalytics();

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];
  
  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(selectedCategory));

  // Featured posts (first 3 featured posts)
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);

  // Track page view
  useEffect(() => {
    trackInteraction('blog_page_view');
  }, [trackInteraction]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    trackInteraction('blog_category_filter', { category });
  };

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    trackInteraction('blog_post_view', { postId: post.id, title: post.title });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  // Show individual blog post if selected
  if (selectedPost) {
  return (
    <>
      <Header />
      <main>
          {/* Blog Post Header */}
          <section className="relative h-[400px] md:h-[500px] flex items-end bg-gray-900 text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                  <Image
                src={selectedPost.image}
                alt={selectedPost.title}
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            
            <div className="container-custom relative z-10 pb-16">
              <button 
                onClick={() => setSelectedPost(null)}
                className="mb-6 text-white/80 hover:text-white flex items-center transition-colors"
              >
                ← Back to Blog
              </button>
              
              <div className="max-w-4xl">
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                  <span className="flex items-center">
                    <FaCalendar className="mr-2" />
                    {formatDate(selectedPost.date)}
                  </span>
                  <span className="flex items-center">
                    <FaUser className="mr-2" />
                    {selectedPost.author}
                  </span>
                  <span className="flex items-center">
                    <FaClock className="mr-2" />
                    {selectedPost.readTime}
                  </span>
                </div>
                
                <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
                  {selectedPost.title}
                </h1>
                
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-[#56b5bd] text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
            ))}
          </div>
              </div>
          </div>
        </section>

          {/* Blog Post Content */}
          <section className="section-padding bg-white">
          <div className="container-custom">
              <div className="max-w-4xl mx-auto prose prose-lg">
                <div className="text-gray-700 leading-relaxed text-base max-w-none">
                  <div 
                    className="blog-content"
                    dangerouslySetInnerHTML={{ 
                      __html: selectedPost.content
                        .replace(/\n\n/g, '</p><p class="mb-6 text-base">')
                        .replace(/^/, '<p class="mb-6 text-base">')
                        .replace(/$/, '</p>')
                        .replace(/## (.*?)\n/g, '<h2 class="text-xl font-bold text-gray-800 mt-8 mb-4">$1</h2>')
                        .replace(/### (.*?)\n/g, '<h3 class="text-lg font-semibold text-gray-800 mt-6 mb-3">$1</h3>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
                        .replace(/• /g, '<br/>• ')
                        .replace(/✅ /g, '<br/>✅ ')
                        .replace(/🔹 /g, '<br/>🔹 ')
                        .replace(/🥑 /g, '<br/>🥑 ')
                        .replace(/🥚 /g, '<br/>🥚 ')
                        .replace(/🌰 /g, '<br/>🌰 ')
                        .replace(/🌱 /g, '<br/>🌱 ')
                        .replace(/🥥 /g, '<br/>🥥 ')
                        .replace(/🌻 /g, '<br/>🌻 ')
                        .replace(/🫛 /g, '<br/>🫛 ')
                        .replace(/🐟 /g, '<br/>🐟 ')
                        .replace(/🧈 /g, '<br/>🧈 ')
                        .replace(/💡 /g, '<br/>💡 ')
                        .replace(/💬 /g, '<br/>💬 ')
                        .replace(/📩 /g, '<br/>📩 ')
                        .replace(/✔️ /g, '<br/>✔️ ')
                    }}
                  />
                </div>
                
                {/* Author Bio */}
                <div className="border-t border-gray-200 pt-8 mt-12">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-[#56b5bd] rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {selectedPost.author.charAt(0)}
                  </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">About {selectedPost.author}</h4>
                      <p className="text-gray-600">
                        Professional fitness coach at TP Health & Fitness, dedicated to helping clients achieve their health and fitness goals.
                      </p>
                  </div>
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

  return (
    <>
      <Header />
      <main>


        {/* All Blog Posts Grid */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Transform Your Knowledge, Transform Your Body</h2>
              <p className="text-gray-600">
                Discover expert insights, proven strategies, and game-changing tips from our qualified trainers. 
                Your fitness transformation starts with the right knowledge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  onClick={() => handlePostClick(post)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    {post.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#56b5bd] text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <span className="flex items-center">
                        <FaCalendar className="mr-2" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center">
                        <FaClock className="mr-2" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 text-base">
                      {post.summary}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-sm text-gray-500">
                        <FaUser className="mr-2" />
                        {post.author}
                      </span>
                      <span className="text-[#56b5bd] hover:text-[#45a4ac] flex items-center text-sm font-medium">
                        Read More <FaArrowRight className="ml-2" />
                      </span>
                  </div>
                  </div>
                </div>
              ))}
                </div>
              </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-[#56b5bd] text-white text-center">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Put Knowledge into Action?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
              Reading about fitness is great, but experiencing it firsthand is even better. 
              Join us for a consultation and start your transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-[#56b5bd] hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition-all inline-block"
              >
                Book a Consultation
              </Link>
              <Link 
                href="/services" 
                className="bg-[#45a4ac] text-white hover:bg-[#3a8c93] font-bold py-3 px-8 rounded-md transition-all inline-block"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}