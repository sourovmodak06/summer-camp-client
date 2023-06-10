import { useState } from "react";
import { Outlet } from "react-router-dom";
import useUserSideNavSmall from "../hooks/useUserSideNavSmall";
import useUserSideNavLarge from "../hooks/useUserSideNavLarge";
import useAdminSideNavLarge from "../hooks/useAdminSideNavLarge";
import useAdminSideNavSmall from "../hooks/useAdminSideNavSmall";
import { FaBars } from "react-icons/fa";
import useInstructorHomeSmall from "../hooks/useInstructorHomeSmall";
import useInstructorHomeLarge from "../hooks/useInstructorHomeLarge";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const isAdmin = true;
  const isInstructor = false;

  // USER Dashboard Start
  const userHomeSmall = useUserSideNavSmall();
  const userHomeLarge = useUserSideNavLarge();
  // USER Dashboard End

  // Instructor Dashboard Start
  const instructorHomeSmall = useInstructorHomeSmall();
  const instructorHomeLarge = useInstructorHomeLarge();
  // Instructor Dashboard End

  // Admin Dashboard Start
  const adminHomeSmall = useAdminSideNavSmall();
  const adminHomeLarge = useAdminSideNavLarge();
  // Admin Dashboard End

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
            {!open
              ? isAdmin
                ? adminHomeLarge
                : isInstructor
                ? instructorHomeLarge
                : userHomeLarge
              : isAdmin
              ? adminHomeSmall
              : isInstructor
              ? instructorHomeSmall
              : userHomeSmall}
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
