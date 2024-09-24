import React, { useState, useEffect } from "react";
import Question from "./Question";
import Results from "./Results";
import questionsData from "../data/questions.json";

// Function to generate random gradient
const getRandomGradient = () => {
  const colors = [
    '#FF5733', '#33FF57', '#5733FF', '#FF33A1', '#33FFF5', '#FF8F33', '#33FF8F'
  ];
  const randomColors = colors.sort(() => 0.5 - Math.random()).slice(0, 2);
  return `linear-gradient(135deg, ${randomColors[0]}, ${randomColors[1]})`;
};

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds timer
  const [gameOver, setGameOver] = useState(false);
  const [background, setBackground] = useState(getRandomGradient());

  useEffect(() => {
    const shuffledQuestions = [...questionsData].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setGameOver(true);
    }
  }, [timeLeft]);

  const handleAnswerClick = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30); // reset timer for the next question
      setBackground(getRandomGradient()); // Update background for the next question
    } else {
      setGameOver(true);
    }
  };

  if (gameOver) {
    return <Results score={score} totalQuestions={questions.length} questions={questions}/>;
  }

  return (
    <div className="quiz-container" style={{ background: background }}>
      <Question
        data={questions[currentQuestion]}
        onAnswerClick={handleAnswerClick}
        timeLeft={timeLeft}
      />
    </div>
  );
};

export default Quiz;
