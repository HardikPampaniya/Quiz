import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import { useDispatch, useSelector } from 'react-redux';
import { submitQuiz } from '../redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Timer = () => {
  const { questions } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + questions.length * 60);

  const { seconds, minutes, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => dispatch(submitQuiz()), 
  });

  useEffect(() => {
    start();
  }, [questions]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem' }}>
      <FontAwesomeIcon icon={faClock} style={{ marginRight: '0.5rem' }} />
      <div>
        <span>{minutes}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    </div>
  );
};

export default Timer;
