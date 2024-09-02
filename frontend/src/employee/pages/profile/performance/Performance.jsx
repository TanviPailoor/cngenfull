import React from 'react';
import './Performance.scss';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import CompletedTask from '../../components/completedTask/CompletedTask';
import PendingTask from '../../components/pendingTask/PendingTask';
import { useSpring, animated } from 'react-spring';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';
const Performance = () => {
  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  const Array = [
    {
      day: 'Week1',
      earning: '60',
    },
    {
      day: 'Week2',
      earning: '40',
    },
    {
      day: 'Week3',
      earning: '30',
    },
    {
      day: 'Week4',
      earning: '70',
    },
  ];
  return (
    <>
      <section className="performance-container">
        <section className="performance-header">
          <Header />
        </section>
        <section className="perform-child">
          <section className="performance-top">
            <section className="perform-top-up">
              <h2>Daily Overview</h2>
              <p>Tuesday, 23/05/2024 10:02 AM</p>
            </section>
            <section className="perform-top-down">
              <section className="performance-card">
                <CompletedTask />
              </section>
              <section className="performance-card">
                <PendingTask />
              </section>
            </section>
          </section>
          <section className="performance-mid">
            <section className="perform-mid-up">
              <h2>Today’s Earning</h2>
              <p>Tuesday, 23/05/2024 10:02 AM</p>
            </section>
            <section className="perform-mid-down">
              <h1>
                <span>₹</span>
                <Number n={100} />
              </h1>
            </section>
          </section>
          <section className="performance-bottom">
            <h2>Weekly Service Chart</h2>
            <section className="weekly-graph">
              <p>23/05/2024 - 30/05/2024 </p>
              <ResponsiveContainer
                className="bar-graph-container"
                width="100%"
                aspect={1}
              >
                <BarChart data={Array} width="auto" height="auto">
                  <XAxis dataKey="day" tick={{ fill: 'white' }} />
                  {/* <YAxis tick={{ fill: "white" }} /> */}
                  <Bar
                    dataKey="earning"
                    fill="#1BA842"
                    radius={[15, 15, 0, 0]}
                    barSize={15}
                  />
                </BarChart>
              </ResponsiveContainer>
            </section>
          </section>
        </section>
        <Navbar />
      </section>
    </>
  );
};

export default Performance;
