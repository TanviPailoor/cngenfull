import { NavLink } from 'react-router-dom';
import { adminNav } from '../../../utilities';
import './sidenavbar.scss';

const Sidenavbar = () => {
  return (
    <>
      {adminNav.map((item, ind) => (
        <NavLink
          to={item.path}
          key={ind}
          className={({ isActive }) => `${isActive && 'active'} adminlink`}
        >
          {item.title}
        </NavLink>
      ))}
    </>
  );
};

export default Sidenavbar;
