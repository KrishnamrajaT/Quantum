import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bullImage from '../Assets/bull.jpg';
import bull_bear from '../Assets/bull&Bear.png';
import teaching from '../Assets/teaching.jpeg';
import sessions from '../Assets/ZoomSessions.jpeg';
import learn from '../Assets/men_learning.png';
import "./Carousel.css"; // Create this CSS file


const cards = [
  { id: 1, bg: bull_bear, title: "Assisting 5K+ Traders & counting" },
  { id: 4, bg: teaching, title: "Learn Trading from Basics to Advance" },
  { id: 3, bg: sessions, title: "Weekly Sessions" },
  { id: 2, bg: learn, title: "Make Analysis like a Pro" },
];

export default function AutoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentIndex === index ? 1 : 0,
          }}
          transition={{ duration: 0.8 }}
          className="carousel-card"
          style={{ backgroundImage: `url(${card.bg})` }}
        >
          <div className="carousel-card-content">
            <h2>{card.title}</h2>
          </div>
        </motion.div>
      ))}
    </div>
  );
}