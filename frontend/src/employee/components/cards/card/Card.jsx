import React, { useState } from 'react';
import './Card.scss';
import map from '../../../../assets/images/map.png';
import configuredUrl from '../../../../employee/utilities/request';
import { FaPhone } from 'react-icons/fa6';
import { IoCameraOutline } from 'react-icons/io5';
const Card = ({
  location,
  username,
  phone,
  time,
  _id,
  employee_id,
  amount,
  carwash,
}) => {
  const [taskAccepted, setTaskAccepted] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const handlePendingClick = () => {
    setIsPending(false);
  };
  const handlePhotoUpload = (event) => {
    if (event.target.files.length > 0) {
      setPhotoUploaded(true);
    }
  };

  //accept task

  const handleAcceptTask = async () => {
    try {
      const { data } = await configuredUrl.post(
        `/tasks/accept-task?employee_id=${employee_id}&taskId=${_id}`
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  //reject task
  const handleReject = async () => {
    try {
      const { data } = await configuredUrl.post(
        `/tasks/reject-task?employee_id=${employee_id}&taskId=${_id}`
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCompleteClick = () => {
    setIsCompleted(true);
  };
  return (
    <section className={`card-container ${isCompleted ? 'completed' : ''}`}>
      <section className="card-top">
        <p>{username}</p>
        <div className="day-time">
          <p>Tuesday 04, </p>
          <p>11:00 AM</p>
          <p>{phone}</p>
        </div>
      </section>
      <section className="card-mid">
        <section className="card-mid-top">
          <p>{location}</p>
          <img src={map} alt="" />
        </section>
        <section className="card-mid-bottom">
          <section className="option-head">
            <p>Car Wash Option</p>
            <p>Total Amount</p>
          </section>
          <hr />
          <section className="purchase">
            <div className="bill">
              <p>{carwash}</p>

              <span>&#8377; {amount}</span>
            </div>
          </section>
        </section>
      </section>
      <section className="card-bottom">
        <>
          <button className="accept" onClick={handleAcceptTask}>
            Accept Task
          </button>
          <button onClick={handleReject} className="phone">
            Reject Task
          </button>
        </>
      </section>
    </section>
  );
};

export default Card;
