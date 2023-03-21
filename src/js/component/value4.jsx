import React, { useState } from "react";

function Clock() {
  const [count, setCount] = useState(0);

  useState(() => {
    const interval = setInterval(() => {
      setCount(count => (count + 1) % 10);
    }, 1000000);

    return () => clearInterval(interval);
  }, []);

  return <div>{count}</div>;
}

export default Clock;