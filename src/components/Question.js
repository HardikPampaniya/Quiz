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
    switch (question.type) {
      case 'multiple':
        return question.options.map((option) => (
          <div key={option}>
            <input
              type="radio"
              value={option}
              checked={answer === option}
              onChange={handleChange}
              aria-label={option}
            />
            {option}
          </div>
        ));
      case 'dropdown':
        return (
          <select value={answer || ''} onChange={handleChange} aria-label="Select an option">
            <option value="" disabled>Select an option</option>
            {question.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'text':
        return (
          <input
            type="text"
            value={answer || ''}
            onChange={handleChange}
            aria-label="Enter your answer"
          />
        );
      default:
        return <p>Unknown question type</p>;
    }
  };

  return (
    <div>
      <p>{question.text}</p>
      {renderOptions()}
    </div>
  );
};

export default Question;
