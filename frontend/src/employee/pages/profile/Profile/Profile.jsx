import React, { useEffect, useState } from 'react';
import './Profile.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { TiSpanner } from 'react-icons/ti';
import { IoMdSettings } from 'react-icons/io';
import { RiDiscountPercentLine } from 'react-icons/ri';
import { MdLogout } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../redux/slices/authslice';

const Profile = () => {
  const dispatch = useDispatch();
  const { loginInfo } = useSelector((state) => state.aslice);
  console.log(loginInfo);
  const [userdata, setUserdata] = useState(null);
  //   useEffect(() => {
  //     dispatch();
  //   }, []);
  console.log('profile');

  const handleLogout = () => {
    dispatch(logout());
  };
  console.log(loginInfo);
  return (
    <>
      <section className="profile-container">
        <section className="profile-top">
          <section className="profile-heading">
            <h2>My Profile</h2>
          </section>
          <section className="personal-profile">
            <section className="profile-img">
              <img
                src={`http://localhost:8600/uploads/${loginInfo?.image}`}
                alt={loginInfo?.name}
              />
            </section>
            <section className="profile-details">
              <h2>{loginInfo?.name}</h2>
              <h3>{loginInfo?.location}</h3>
              <h3>{loginInfo?.email}</h3>
              <h3>{loginInfo?.phone}</h3>
            </section>
            <section className="profile-edit-option">
              <Link to="/editprofile">
                <FaRegEdit className="edit-icon" />
              </Link>
            </section>
          </section>
        </section>
        <section className="profile-mid">
          <h2>Description</h2>
          <p>{userdata?.description}</p>
        </section>
        <section className="profile-bottom">
          <section className="profile-fields">
            <FaLocationDot className="field-icon" />
            <p>Location</p>
          </section>
          <hr />
          <section className="profile-fields">
            <TiSpanner className="field-icon" />
            <p>Service</p>
          </section>
          <hr />
          <section className="profile-fields">
            <IoMdSettings className="field-icon" />
            <p>Car Wash</p>
          </section>
          <hr />
          <section className="profile-fields">
            <Link to="/referral" className="links">
              <RiDiscountPercentLine className="field-icon" />
              <p>Referrals</p>
            </Link>
          </section>
          <hr />
          <section className="profile-fields" onClick={handleLogout}>
            <MdLogout className="field-icon" />
            <p>Logout</p>
          </section>
          <hr />
        </section>
      </section>
    </>
  );
};

export default Profile;
