import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
const Private = () => {
  const { loginInfo } = useSelector((state) => state.aslice);
  const user = loginInfo;
  console.log(user);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default Private;
