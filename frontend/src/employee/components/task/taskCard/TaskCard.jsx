import React from 'react';
import './TaskCard.scss';

const TaskCard = ({ showDetails }) => {
  return (
    <section className="task-card-container">
      <section className="task-card-child">
        <section className="task-left">
          <h3>Rakesh Bellur</h3>
          <p>Water tank BTM Layout 9th D, BTM Layout, Bengaluru 560029</p>
        </section>
        <section className="task-right">
          <div className="status">Completed</div>
          <section className="work">
            <ul>
              <li>
                <p>Exterior & Interior</p>
                <span>₹ 900</span>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default TaskCard;
