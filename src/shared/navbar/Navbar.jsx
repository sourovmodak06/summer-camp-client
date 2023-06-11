import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import logo from "../../assets/logo.png";
import ActiveLink from "../../components/activeLink/ActiveLink";
import useAuth from "../../hooks/useAuth";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import useClasses from "../../hooks/useClasses";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  const [classItems] = useClasses()
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
      {user && (
        <li className="flex items-center gap-2">
          <ActiveLink to={"/dashboard/homeDashboard"}>Dashboard</ActiveLink>
          <p className="relative">
          <MdNotifications></MdNotifications>
          <span className="absolute font-bold text-[#D31A50] -top-3 -right-1">{classItems?.length || 0}</span>
          </p>
        </li>
      )}
    </>
  );
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-10 md:mb-20">
      <div className="shadow-md bg-[#03203C] dark:bg-[#0D0D0D] w-full fixed top-0 left-0 z-50">
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
            className={`flex flex-col md:flex-row gap-5 md:items-center md:py-0 py-8 text-white absolute md:static bg-[#03203C] dark:bg-[#0D0D0D] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-150 md:duration-0 ease-in ${
              open ? "top-14 " : "top-[-500px]"
            }`}
          >
            {navItems}
            <div>
              {user ? (
                <>
                  <div className="flex gap-3 flex-col md:flex-row">
                    <img
                      src={user?.photoURL}
                      alt="UserImg"
                      className="w-12 h-12 rounded-full mr-2"
                    />
                    <button
                      onClick={handleLogout}
                      className="border-2 p-1 mr-5 md:mr-0 rounded-xl"
                    >
                      Sign Out
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <ActiveLink to={"/login"}>Log In</ActiveLink>
                </>
              )}
            </div>
            <button
              onClick={handleThemeSwitch}
              className=" text-white rounded-full w-12 h-12 border-2 flex justify-center items-center"
            >
              {theme === "light" ? <BsMoonFill /> : <BsFillSunFill />}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
