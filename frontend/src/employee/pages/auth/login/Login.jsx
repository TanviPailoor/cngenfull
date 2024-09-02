import { useState, useEffect } from 'react';
import './Login.scss';
import logo from '../../../../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineRemoveRedEye, MdVisibilityOff } from 'react-icons/md';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../../../employee/redux/actions/authactions';
const Login = () => {
  const dispatch = useDispatch();
  const { loading, error, loginInfo } = useSelector((state) => state.aslice);
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [fields, setFields] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginAction(fields));
    } catch (e) {
      console.log(e);
      toast.error(e);
    }
  };
  useEffect(() => {
    if (loginInfo) {
      setFields({ email: '', password: '' });
      navigate('/');
      toast.success('user logged in successfully');
    }
  }, [loading, error, loginInfo]);

  return (
    <>
      <section className="login-container">
        <section className="login-top">
          <img src={logo} alt="logo" />
        </section>
        <section className="login-bottom">
          <form onSubmit={handleSubmit} className="login-form">
            <section className="login-heading">
              <h2>Login </h2>
              <p>Please sign in to continue</p>
            </section>

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={fields.email}
              onChange={handleChange}
            />
            <div className="login-password-container">
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                required
                value={fields.password}
                onChange={handleChange}
                className="password-input"
              />
              <label
                onClick={togglePasswordVisibility}
                className="password-toggle-label"
              >
                {passwordVisible ? (
                  <MdVisibilityOff className="eye-icon" />
                ) : (
                  <MdOutlineRemoveRedEye className="eye-icon" />
                )}
              </label>
            </div>
            <section className="login-btn-link">
              <button>Sign in</button>
              <section className="login-link">
                <p>Don't have an account?</p>
                <Link to="/emp-register">Sign up</Link>
              </section>
            </section>
          </form>
        </section>
      </section>
    </>
  );
};

export default Login;
