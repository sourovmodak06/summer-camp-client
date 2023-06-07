import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "md:underline underline-offset-8 decoration-[#FF4331] delay-150 font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-[#FF4331] to-[#D31A50]"
          : " "
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
