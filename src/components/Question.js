import React from "react";

const Question = ({ data, onAnswerClick, timeLeft }) => {
    if (!data) {
      return <div>Loading...</div>; // or any loading spinner you prefer
    }
  
    return (
      <div className="question-container">
        <h2>{data.question}</h2>
        <div className="answers">
          {data.answers.map((answer, index) => (
            <button key={index} onClick={() => onAnswerClick(index)}>
              {answer}
            </button>
          ))}
        </div>
        <div className="timer">Time left: {timeLeft}s</div>
      </div>
    );
  };

export default Question;
