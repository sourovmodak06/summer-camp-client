import { Slide } from "react-awesome-reveal";
import { FaAt, FaUserPlus } from "react-icons/fa";

const InstructorsCard = ({ item }) => {
  const { image, name, classesName, classes, email } = item;
  return (
    <div>
      <div className="rounded-3xl bg-[#03203c17]">
        <div className="flex items-center">
          <img
            src={image}
            alt="img"
            className="w-40 md:w-52 h-40 md:h-52 md:p-4 p-2 rounded-3xl"
          />
          <div>
            <Slide>
              <h2 className="text-xl">{classesName}</h2>
              <h2 className="text-gray-500 font-semibold">{name}</h2>
              <h2 className="flex items-center gap-2 text-xl">
                <FaUserPlus className="text-[#D31A50]"></FaUserPlus>
                {classes}
              </h2>
              <h2 className="flex items-center gap-2">
                <FaAt className="text-[#D31A50] text-xl"></FaAt>
                {email}
              </h2>
            </Slide>
            <button className="bg-[#03203C] text-white py-1 rounded-lg w-full mt-2 md:mt-5">See Classes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsCard;
