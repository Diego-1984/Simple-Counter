import React, { useState, useEffect } from 'react';

const Value3 =()=>  {
  const [seconds, setSecondsRemaining] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds < 9) {
        setSecondsRemaining(seconds +1);
      } else {
        setSecondsRemaining(0);
      }
    }, 100000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <div>
      <h1>{seconds}</h1>
    </div>
  );
}

export default Value3;