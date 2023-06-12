import { Fade } from "react-awesome-reveal";
import useAuth from "../../../hooks/useAuth";
import WImg from "../../../assets/welcome.gif";
import logo from "../../../assets/dark-logo.png";
import useTitle from "../../../hooks/useTitle";

const InstructorHome = () => {
  useTitle("Instructors | Home");
  const { user } = useAuth();
  return (
    <div>
      <div className="bg-[#ffffff4d] shadow-2xl drop-shadow-2xl rounded-2xl h-[90vh] p-6 overflow-scroll">
        <Fade>
          <h2 className="text-3xl py-1 bg-white text-center rounded-2xl">
            Hi,{user.displayName}
          </h2>
        </Fade>
        <div className="flex items-center justify-center bg-white -mt-4 flex-col rounded-br-2xl rounded-bl-2xl">
          <img src={WImg} alt="img" className="w-[30%]" />
          <h2 className="text-orange-700 text-xl">TO</h2>
          <img src={logo} alt="img" className="w-[25%]" />
        </div>
      </div>
    </div>
  );
};

export default InstructorHome;
