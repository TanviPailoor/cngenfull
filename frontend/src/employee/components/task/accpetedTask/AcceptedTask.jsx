import React from 'react';
import './AcceptedTask.scss';
import map from '../../../../assets/images/map.png';
import { IoCameraOutline } from 'react-icons/io5';

const AcceptedTask = () => {
  return (
    <section className="taskcard-container">
      <section className="taskcard-top">
        <p>Tirumalesh t</p>
        <div className="day-time">
          <p>Tuesday 04, </p>
          <p>11:00 AM</p>
        </div>
      </section>
      <section className="taskcard-mid">
        <section className="taskcard-mid-top">
          <p>Water tank btm layout 9th D btm layout Bengaluru 560029 </p>
          <img src={map} alt="" />
        </section>
        <section className="taskcard-mid-bottom">
          <section className="option-head">
            <p>Car Wash Option</p>
            <p>Total Amount</p>
          </section>
          <hr />
          <section className="purchase">
            <ul>
              <li>
                <div className="bill">
                  <p>Exterier & Interier</p>
                  <span> ₹ 900</span>
                </div>
              </li>
            </ul>
          </section>
        </section>
      </section>
      <section className="taskcard-bottom">
        <button className="accept">Accept</button>
        <button>Complete the task</button>
        <button className="photo">
          <IoCameraOutline />
          Add photo
        </button>
        <button>Referral code</button>
      </section>
    </section>
  );
};

export default AcceptedTask;
