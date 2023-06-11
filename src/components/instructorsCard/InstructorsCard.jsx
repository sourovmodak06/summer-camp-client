import { Slide } from "react-awesome-reveal";
import { FaAt, FaUserPlus } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

const InstructorsCard = ({ item }) => {
  const { image, name, classesName, classes, email,enrolledStudent } = item;
  return (
    <div>
      <div className="rounded-3xl bg-[#03203c17] border-2">
        <div className="flex items-center">
          <img
            src={image}
            alt="img"
            className="w-40 md:w-52 h-40 md:h-52 md:p-4 p-2 rounded-3xl"
          />
          <div>
            <Slide>
              <h2 className="text-xl dark:text-white">{classesName}</h2>
              <h2 className="text-gray-500 font-semibold">{name}</h2>
              <div className="flex gap-4">
                <h2 className="flex items-center gap-2 text-xl dark:text-white">
                  <SiGoogleclassroom className="text-[#D31A50] dark:text-white"></SiGoogleclassroom>
                  {classes} <span><small>classes</small></span>
                </h2>

                <h2 className="flex items-center gap-2 text-xl dark:text-white">
                  <FaUserPlus className="text-[#D31A50] dark:text-white"></FaUserPlus>
                  {enrolledStudent}K
                </h2>
              </div>
              <h2 className="flex items-center gap-2 dark:text-white">
                <FaAt className="text-[#D31A50] text-xl dark:text-white"></FaAt>
                {email}
              </h2>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsCard;
