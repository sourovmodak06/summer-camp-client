import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import ActiveLink from "../../components/activeLink/ActiveLink";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <ActiveLink to={"/"}>Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to={"/instructors"}>Instructors</ActiveLink>
      </li>
      <li>
        <ActiveLink to={"/classes"}>Classes</ActiveLink>
      </li>
      <li>
        <ActiveLink to={"/dashboard"}>Dashboard</ActiveLink>
      </li>
    </>
  );
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-16">
      <div className="shadow-md bg-[#03203C] w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
          <div className="cursor-pointer flex items-center">
            <img src={logo} alt="logo" />
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden text-white"
          >
            {open ? "✕" : <FaBars></FaBars>}
          </div>

          <ul
            className={`md:flex gap-5 md:items-center md:py-0 py-8 text-white absolute md:static bg-[#03203C] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-150 ease-in ${
              open ? "top-14 " : "top-[-500px]"
            }`}
          >
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
