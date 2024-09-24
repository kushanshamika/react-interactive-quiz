import React from "react";

const Results = ({ score, totalQuestions, questions }) => {

    if (!questions) {
        return <div>Loading...</div>;
    }
    return (
        <div className="results-container" style={{ background: `linear-gradient(90deg, hsla(185, 64%, 51%, 1) 0%, hsla(277, 74%, 24%, 1) 100%)` }}>
        <h1>Quiz Completed!</h1>
        <p>Your Score: {score}/{totalQuestions}</p>
        <h2>Correct Answers:</h2>
        <ul style={{textAlign: "left"}}>
            {questions.map((q, index) => (
            <li key={index}>
                {q.question} - <strong>{q.answers[q.correct]}</strong>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default Results;
