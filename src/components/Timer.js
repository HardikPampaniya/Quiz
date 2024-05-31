// src/components/Timer.js
import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import { useDispatch, useSelector } from 'react-redux';
import { submitQuiz } from '../redux/actions';

const Timer = () => {
  const { questions } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + questions.length * 60);

  const { seconds, minutes, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => dispatch(submitQuiz(0)), // Adjust score calculation here
  });

  useEffect(() => {
    start();
  }, [questions]);

  return (
    <div>
      <div>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
};

export default Timer;
