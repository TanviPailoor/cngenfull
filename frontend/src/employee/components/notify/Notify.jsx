import React from 'react';
import './Notify.scss';
import notify from '../../../assets/images/notify.png';
const Notify = () => {
  return (
    <>
      <section className="notify-container">
        <section className="notify-content">
          <h2>You won a coupon</h2>
          <p>20 mins ago</p>
        </section>
        <section className="notify-image">
          <img src={notify} alt="" />
        </section>
      </section>
    </>
  );
};

export default Notify;
