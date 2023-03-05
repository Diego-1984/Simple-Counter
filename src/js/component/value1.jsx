import React, { useState, useEffect } from 'react';

const Clock =()=>  {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds < 9) {
        setSeconds(seconds +1);
      } else {
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <div>
      <h1>{seconds}</h1>
    </div>
  );
}

export default Clock;