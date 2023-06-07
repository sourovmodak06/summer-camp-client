import {
  Rotate,
  Slide,
} from "react-awesome-reveal";
import img1 from "../../../assets/Abilities1.jpg";
import img2 from "../../../assets/Abilities2.jpg";
import img3 from "../../../assets/Abilities3.jpg";

const Abilities = () => {
  return (
    <div className="mb-10 overflow-hidden">
      <div className="flex flex-col items-center py-5">
        <span className="text-3xl md:text-7xl font-extrabold tracking-[0.5rem] uppercase textEffect bg-[#03203C] p-5">
          performance is the key
        </span>
        <Rotate delay={1e3} cascade damping={1e-1}>
          <h3 className="text-2xl font-bold">
            TO AMPLIFYING YOUR MUSICAL ABILITIES
          </h3>
        </Rotate>
      </div>
      <Slide>
        <div className="flex flex-col md:flex-row justify-around md:gap-5 gap-10 mx-4 mb-16">
          <div className="relative">
            <img src={img1} alt="img" />
            <div className="w-80 md:w-96 absolute -bottom-5 left-2 md:left-5">
              <span className="text-3xl font-black bg-black text-white">
                BUILD CONFIDENCE AND MUSICAL PROFICIENCY
              </span>
            </div>
          </div>
          <div className="relative">
            <img src={img2} alt="img" />
            <div className="w-80 md:w-96 absolute -bottom-5 left-2 md:left-5">
              <span className="text-3xl font-black bg-black text-white">
                PLAY SHOWS IN REAL ROCK VENUES
              </span>
            </div>
          </div>
          <div className="relative">
            <img src={img3} alt="img" />
            <div className="w-80 md:w-96 absolute -bottom-5 left-2 md:left-5">
              <span className="text-3xl font-black bg-black text-white">
                DEVELOP THE SKILLS TO BECOME A MUSICIAN
              </span>
            </div>
          </div>
        </div>
      </Slide>
      <Rotate>
        <h2 className="text-3xl md:text-9xl m-auto font-black bg-black text-white w-5/6 text-center">
          BE A MUSICIAN
        </h2>
      </Rotate>
    </div>
  );
};

export default Abilities;
