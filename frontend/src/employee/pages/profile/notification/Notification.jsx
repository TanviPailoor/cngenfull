import React, { useState } from 'react';
import './Notification.scss';
import { Message, Notify } from '../../../components/index';
const Notification = () => {
  const [activeTab, setActiveTab] = useState('notifications');
  return (
    <>
      <section className="notification-container">
        <section className="notification-buttons">
          <button
            onClick={() => setActiveTab('notifications')}
            className={activeTab === 'notifications' ? 'active' : ''}
          >
            Notifications
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={activeTab === 'messages' ? 'active' : ''}
          >
            Messages
          </button>
        </section>
        <section className="notification-content">
          {activeTab === 'notifications' && (
            <section className="notifications">
              <Notify />
              <hr />
            </section>
          )}
          {activeTab === 'messages' && (
            <section className="messages">
              <Message />
              <hr />
            </section>
          )}
        </section>
      </section>
    </>
  );
};

export default Notification;
