import React, { useState, useEffect } from 'react';

const quotes = [
  "Stay focused and never give up.",
  "Work hard in silence, let success make the noise.",
  "Don’t wish for it. Work for it.",
  "Small steps every day.",
  "Discipline is doing what needs to be done.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Believe you can and you're halfway there.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream bigger. Do bigger.",
    "Don’t stop when it’s hard. Stop when you’re done.",

    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",

    "The key to success is to focus on goals, not obstacles.",
    "Dream it. Believe it. Build it.",
    "Success is not for the lazy.",
    "The future depends on what you do today.",
    "Act as if what you do makes a difference. It does.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Opportunities don’t happen. You create them.",

    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Success is not in what you have, but who you are.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "If you love what you are doing, you will be successful.",

    "Success is not about being the best. It’s about always getting better.",

    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Success is not the absence of failure; it’s the persistence through failure.",
    "Success is not just about what you accomplish in your life, it’s about what you inspire others to do.",
    "Success is not about how much money you make, but the difference you make in people’s lives.",
    "Success is not about being perfect. It’s about making progress.",
    "Success is not about luck. It’s about hard work, perseverance, and determination.",   
];

function QuoteBox() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className="widget">
      <h2>💬 Daily Motivation</h2>
      <p>{quote}</p>
      <button onClick={() => setQuote(quotes[Math.floor(Math.random() * quotes.length)])}>
        New Quote
      </button>
    </div>
  );
}

export default QuoteBox;
