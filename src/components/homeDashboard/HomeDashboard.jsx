import { Bounce, Fade } from "react-awesome-reveal";
import welcomeImg from "../../assets/welcome.gif";
import darkLogo from "../../assets/dark-logo.png";

const HomeDashboard = () => {
  return (
    <div className="bg-white h-[95vh] rounded-2xl">
      <div className="flex flex-col justify-center items-center">
        <Fade>
          <img src={welcomeImg} alt="img" className="w-[40vw]" />
        </Fade>
        <Bounce>
          <img src={darkLogo} alt="logo" className="w-[20vw]" />
        </Bounce>
      </div>
    </div>
  );
};

export default HomeDashboard;
