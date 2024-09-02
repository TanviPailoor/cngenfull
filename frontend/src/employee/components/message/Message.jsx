import React from 'react';
import './Message.scss';
import profile from '../../../assets/images/profile.jpg';
const Message = () => {
  return (
    <>
      <section className="message-container">
        <section className="message-content">
          <section className="profile-photo">
            <img src={profile} alt="" />
          </section>
          <section className="profile-name">
            <h2>Royal Parvej</h2>
            <p>I Reached the Location</p>
          </section>
        </section>
        <section className="message-time">
          <p>19:37</p>
          <div className="messages">
            <p>1</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Message;
