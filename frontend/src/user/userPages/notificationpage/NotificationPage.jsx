import React, { useState } from 'react';
import Header from '../../../user/userComponents/header/Header';
import Navbar from '../../../user/userComponents/navbar/Navbar';
import './NotificationPage.scss';

const NotificationPage = () => {
  const [activeTab, setActiveTab] = useState('notifications');

  const notifications = [
    {
      id: 1,
      text: 'Your car service will be done today! See you at 9pm.',
      time: '20 min ago',
      icon: '',
    },
  ];

  const messages = [
    {
      id: 1,
      name: 'Royal Parvej',
      text: 'I Reached the Location',
      time: '19:37',
      unreadCount: 1,
    },
  ];

  return (
    <div className="notification-page">
      <Header />
      <div>
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
          </button>
          <button
            className={`tab-button ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            Messages {messages.length > 0 && `(${messages.length})`}
          </button>
        </div>
      </div>

      <div className="content">
        {activeTab === 'notifications' && (
          <div className="card">
            <div>
              <p className="text">{notifications[0].text}</p>
              <span className="time">{notifications[0].time}</span>
            </div>
            <div className="icon"></div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="card">
            <div className="message">
              <div className="avatar">{messages[0].name.charAt(0)}</div>
              <div className="message-info">
                <p className="name">{messages[0].name}</p>
                <p className="text">{messages[0].text}</p>
              </div>
            </div>
            <div className="message-meta">
              <span className="time">{messages[0].time}</span>
              {messages[0].unreadCount > 0 && (
                <span className="unread-count">{messages[0].unreadCount}</span>
              )}
            </div>
          </div>
        )}
      </div>
      <Navbar />
    </div>
  );
};

export default NotificationPage;
