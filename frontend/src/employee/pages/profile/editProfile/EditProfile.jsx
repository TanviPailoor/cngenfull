import React, { useState } from 'react';
import { MdOutlineCloudUpload } from 'react-icons/md';
import './EditProfile.scss';
import { useNavigate } from 'react-router-dom';
const EditProfile = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    description: '',
    image: '',
    previewImg: '',
  });

  const isValidName = (name) => {
    const nameRegex = /^[A-Za-z][A-Za-z0-9_]{2,29}$/;
    return nameRegex.test(name);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    const phoneNumberRegex = /^\d{10}$/;
    return phoneNumberRegex.test(phone);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!data.name) {
      newErrors.name = 'Name is required';
    } else if (!isValidName(data.name)) {
      newErrors.name =
        'Name should be 3-30 characters long and start with a letter';
    }

    if (!data.email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!data.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!isValidPhoneNumber(data.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/profile/:id');
    }
  };
  // const handleChange = (e) => {
  // 		const { name, value, files } = e.target;

  // 		if (name === "image") {
  // 			if (files && files.length !== 0) {
  // 				let imgsrc = URL.createObjectURL(files[0]);
  // 				console.log(imgsrc);

  // 				setData((prevData) => ({
  // 					...prevData,
  // 					previewImg: imgsrc,
  // 					[name]: files[0],
  // 				}));
  // 			}
  // 		} else {
  // 			setData((prevData) => ({
  // 				...prevData,
  // 				[name]: value,
  // 			}));
  // 		}
  // 	};
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == 'image') {
      if (e.target.files.length !== 0) {
        let imgsrc = URL.createObjectURL(e.target.files[0]);
        console.log(imgsrc);

        setData({
          ...data,
          previewImg: imgsrc,
          [name]: e.target.files[0],
        });
      }
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };

  return (
    <>
      <section className="editpro-container">
        <section className="editpro-mid">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={data.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={data.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              required
              value={data.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
            <input
              type="text"
              name="location"
              placeholder="Location"
              required
              value={data.location}
              onChange={handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              required
              value={data.description}
              onChange={handleChange}
            />
            <label htmlFor="edit-photo" className="edit-photo-label">
              Image
              <MdOutlineCloudUpload className="upload-icon" />
            </label>
            <input
              id="edit-photo"
              type="file"
              className="edit-photo-input"
              name="image"
              onChange={handleChange}
            />

            <img src={data?.previewImg} alt="" />
            <section className="submit-btn">
              <button type="submit">Submit</button>
            </section>
          </form>
        </section>
      </section>
    </>
  );
};

export default EditProfile;
