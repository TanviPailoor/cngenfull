import React, { useState, useEffect } from 'react';
import './CompletedTask.scss';
import { Circle } from 'rc-progress';

const CompletedTask = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const targetPercentage = 60;
    const interval = 20;

    const timer = setInterval(() => {
      setPercentage((prev) => {
        if (prev < targetPercentage) {
          return prev + 1;
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="completed-container">
      <section className="completed-child">
        <h2>Task Done</h2>
        <section className="circle-container">
          <Circle
            className="circle-progress"
            percent={percentage}
            strokeColor="#1BA842"
            strokeWidth={12}
            trailColor="none"
            trailWidth={12}
          />
          <section className="percentage-text">{percentage}%</section>
        </section>
      </section>
    </section>
  );
};

export default CompletedTask;
