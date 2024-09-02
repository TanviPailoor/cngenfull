import React, { useEffect, useState } from 'react';
import './PendingTask.scss';
import { Circle } from 'rc-progress';
const PendingTask = () => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const targetPercentage = 40;
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
    <>
      <section className="pending-container">
        <section className="pending-child">
          <h2>Pending Task</h2>
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
    </>
  );
};

export default PendingTask;
