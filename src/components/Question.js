// src/components/Question.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswer } from '../redux/actions';

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const answer = useSelector((state) => state.quiz.answers[question.id]);

  const handleChange = (e) => {
    dispatch(setAnswer(question.id, e.target.value));
  };

  const renderOptions = () => {
    if (question.type === 'multiple') {
      return question.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            value={option}
            checked={answer === option}
            onChange={handleChange}
          />
          {option}
        </div>
      ));
    } else if (question.type === 'dropdown') {
      return (
        <select value={answer || ''} onChange={handleChange}>
          <option value="" disabled>Select an option</option>
          {question.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      );
    } else if (question.type === 'text') {
      return (
        <input
          type="text"
          value={answer || ''}
          onChange={handleChange}
        />
      );
    }
    return null;
  };

  return (
    <div>
      <p>{question.text}</p>
      {renderOptions()}
    </div>
  );
};

export default Question;
