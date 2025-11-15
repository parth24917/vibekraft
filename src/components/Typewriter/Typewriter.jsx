import React, { useState, useEffect, useRef } from 'react';
import './Typewriter.css';

const lines = [
  "Innovative solutions that inspire.",
  "Building digital experiences.",
  "Driving your brand forward.",
  "Captivating your audience.",
  "Transforming ideas into reality."
];

export default function Typewriter() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100); // typing speed in ms
  const timeoutRef = useRef(null);

  useEffect(() => {
    const fullText = lines[currentLineIndex];

    if (!isDeleting) {
      // Typing phase
      if (displayedText.length < fullText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        // Pause before deleting
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // faster deleting
        }, 1500);
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        }, typingSpeed);
      } else {
        // Move to next line
        setIsDeleting(false);
        setTypingSpeed(100);
        setCurrentLineIndex((prev) => (prev + 1) % lines.length);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayedText, isDeleting, currentLineIndex, typingSpeed]);

  return (
    <p className="typewriter-text">
      {displayedText}
      <span className="caret" />
    </p>
  );
}
