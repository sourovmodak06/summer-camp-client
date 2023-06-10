import { Zoom } from "react-awesome-reveal";
import useAuth from "../../../hooks/useAuth";
import useTitle from "../../../hooks/useTitle";

const StudentHome = () => {
  useTitle("Dashboard | Student");
  const { user } = useAuth();
  return (
    <div>
      <div className="bg-[#ffffff4d] shadow-2xl drop-shadow-2xl rounded-2xl h-[90vh] p-6 overflow-hidden">
        <Zoom>
          <h2 className="text-2xl font-semibold  text-center">
            Welcome Back{" "}
            <span className="text-[#D31A50]">{user?.displayName}</span>
          </h2>
        </Zoom>
        <div className="mt-10 flex gap-10 items-center">
          <div className="border-2 flex justify-center flex-col items-center p-4 rounded-2xl bg-slate-100 border-[#03203C] w-64 h-48 gap-5">
            <img
              src={user?.photoURL}
              alt="user"
              className="w-32 h-32 rounded-full border-4 border-[#03203C]"
            />
            <h2 className="">{user?.email}</h2>
          </div>
          <div className="border-2 flex justify-center flex-col items-center p-4 rounded-2xl bg-slate-100 border-[#03203C] w-full h-48 gap-5"></div>
        </div>
        <div className="flex gap-10 mt-5">
          <div className="border-2 flex justify-center flex-col items-center p-4 rounded-2xl bg-slate-100 border-[#03203C] w-full h-48 gap-5"></div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
