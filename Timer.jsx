import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(1500); //  30mins
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running && seconds > 0) {
      timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running, seconds]);

  const format = (s) => `${Math.floor(s / 60)}:${('0' + (s % 60)).slice(-2)}`;

  return (
    <div className="widget">
      <h2>⏳ Pomodoro Timer</h2>
      <h3>{format(seconds)}</h3>
      <button onClick={() => setRunning(!running)}>{running ? 'Pause' : 'Start'}</button>
      <button onClick={() => { setRunning(false); setSeconds(1800); }}>Reset</button>
    </div>
  );
}

export default Timer;
