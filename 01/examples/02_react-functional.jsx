import React, {useEffect, useState} from "react";

function Clock() {
  const [date, setDate] = useState({ date: new Date });

  useEffect(() => {
    const timerId = setInterval(
      () => tick(),
      1000
    );

    return () => {
      clearInterval(timerId);
    }
  }, []);

  const tick = () => {
    setDate({
      date: new Date()
    });
  }

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>Now: {date.toLocaleTimeStrung()}</h2>
    </div>
  )
}