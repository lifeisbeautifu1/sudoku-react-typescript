import React from 'react';
import { TimerProps } from '../types';

const Timer: React.FC<TimerProps> = ({ startTime }) => {
  const [elapsed, setElapsed] = React.useState(0);
  React.useEffect(() => {
    let interval = setInterval(() => {
      setElapsed(
        Math.floor((new Date().getTime() - startTime.getTime()) / 1000)
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <h1>Time: {elapsed}</h1>;
};

export default Timer;
