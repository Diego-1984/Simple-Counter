import React, { useState, useEffect } from "react";

function Clock() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => (count + 1) % 10);
    }, 10000000);

    return () => clearInterval(interval);
  }, []);

  return <div>{count}</div>;
}

export default Clock;