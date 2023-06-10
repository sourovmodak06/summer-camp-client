import { useState } from "react";
import {
  FaBars,
  FaClipboardList,
  FaHome,
  FaHouseUser,
  FaIdCard,
  FaRegMoneyBillAlt,
} from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { Link, Outlet } from "react-router-dom";
import ActiveLink from "../components/activeLink/ActiveLink";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  // USER Dashboard Start
  const userHomeSmall = (
    <>
      <Link to={"/dashboard/studentHome"}>
        <h2 className="text-white text-2xl">
          <FaHouseUser></FaHouseUser>
        </h2>
      </Link>
      <Link to={"/dashboard/studentClasses"}>
        <h2 className="text-white text-2xl">
          <FaClipboardList></FaClipboardList>
        </h2>
      </Link>
      <Link to={"/"}>
        <h2 className="text-white text-2xl">
          <FaIdCard></FaIdCard>
        </h2>
      </Link>
      <Link to={"/"}>
        <h2 className="text-white text-2xl">
          <FaRegMoneyBillAlt></FaRegMoneyBillAlt>
        </h2>
      </Link>

      <div className="w-full h-[2px] bg-white"></div>
      {/* Small Device */}
      <Link to={"/"}>
        <h2 className="text-white text-2xl">
          <FaHome></FaHome>
        </h2>
      </Link>
      <Link to={"/classes"}>
        <h2 className="text-white text-2xl">
          <SiGoogleclassroom></SiGoogleclassroom>
        </h2>
      </Link>
    </>
  );

  const userHomeLarge = (
    <>
      <ActiveLink to={"/dashboard/studentHome"}>
        <h2 className="text-xl">User Home</h2>
      </ActiveLink>
      <ActiveLink to={"/dashboard/studentClasses"}>
        <h2 className="text-xl">Selected Classes</h2>
      </ActiveLink>
      <ActiveLink to={"/"}>
        <h2 className="text-xl">Enrolled</h2>
      </ActiveLink>
      <ActiveLink to={"/"}>
        <h2 className="text-xl">Payments</h2>
      </ActiveLink>

      <div className="w-full h-[2px] bg-white"></div>
      {/* Small Device */}
      <ActiveLink to={"/"}>
        <h2 className="text-xl">Home</h2>
      </ActiveLink>
      <ActiveLink to={"/classes"}>
        <h2 className="text-xl">Classes</h2>
      </ActiveLink>
    </>
  );

  // USER Dashboard End

  return (
    <div className="flex h-[100vh]">
      <div className={`${open === !true ? "w-72" : "w-14"}`}>
        <div className="bg-[#03203C] text-white h-[100vh]">
          <div className="flex justify-between flex-row-reverse items-center">
            <FaBars
              onClick={() => setOpen(!open)}
              className="text-2xl cursor-pointer text-[#D31A50] m-3"
            ></FaBars>
            <div>
              {!open && (
                <h2 className="text-[#D31A50] text-2xl ml-1">Dashboard</h2>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            {!open ? userHomeLarge : userHomeSmall}
          </div>
        </div>
      </div>
      <div className="w-full p-5 bg-[#0000008a]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
