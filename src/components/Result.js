import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const { score, questions } = useSelector((state) => state.quiz);
  const percentage = (score / questions.length) * 100;

  return (
    <div>
      <h2>Quiz Result</h2>
      <p>Your Score: {score} / {questions.length}</p>
      <p>Percentage : {percentage} %</p>
    </div>
  );
};

export default Result;
