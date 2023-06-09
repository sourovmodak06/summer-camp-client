import { Slide, Zoom } from "react-awesome-reveal";
import useAuth from "../../hooks/useAuth";

const ClassCard = ({ item }) => {
  const { user } = useAuth();
  const {
    image,
    name,
    instructorName,
    availableSeats,
    price,
    enrolledStudent,
  } = item;
  return (
    <>
      <div className="bg-white dark:bg-[#0D0D0D] md:shadow-2xl md:drop-shadow-2xl h-[80vh] md:h-[90vh] border-4 md:border-2 border-[#03203C] dark:border-white">
        <div>
          <img src={image} alt="" className="w-screen h-[50vh] p-2 md:p-0" />
          <div className="flex gap-3 m-1">
            <Slide>
              <h2 className="text-xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-[#FF4331] to-[#D31A50]">
                ClassName:
              </h2>
            </Slide>
            <Zoom>
              <h2 className="text-xl font-bold dark:text-white">{name}</h2>
            </Zoom>
          </div>
          <div className="flex gap-3 m-1">
            <Zoom>
              <h2 className="text-xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-[#FF4331] to-[#D31A50]">
                Instructor:
              </h2>
            </Zoom>
            <Slide>
              <h2 className="text-xl font-bold dark:text-white">
                {instructorName}
              </h2>
            </Slide>
          </div>
          <div className="flex gap-3 m-1">
            <Slide>
              <h2 className="text-xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-[#FF4331] to-[#D31A50]">
                Available Seats:
              </h2>
            </Slide>
            <Zoom>
              <h2 className="text-xl font-bold dark:text-white">
                {availableSeats}
              </h2>
            </Zoom>
          </div>
          <div className="flex gap-3 m-1">
            <Zoom>
              <h2 className="text-xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-[#FF4331] to-[#D31A50]">
                Price:
              </h2>
            </Zoom>
            <Slide>
              <h2 className="text-xl font-bold dark:text-white">
                ${price}{" "}
                <span className="text-gray-500 dark:text-white">/month</span>
              </h2>
            </Slide>
          </div>
          <div className="flex gap-3 m-1">
            <Slide>
              <h2 className="text-xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-[#FF4331] to-[#D31A50]">
                Enrolled Student:
              </h2>
            </Slide>
            <Zoom>
              <h2 className="text-xl font-bold dark:text-white">
                {enrolledStudent}
              </h2>
            </Zoom>
          </div>
          {user ? (
            <button className="bg-[#03203C] dark:bg-transparent border-2 w-3/4 m-auto block mt-5 p-1 text-white text-2xl">
              Enrolled Now
            </button>
          ) : (
            <button className="bg-[#03203c18] dark:bg-transparent border-2 w-3/4 m-auto block mt-5 p-1 dark:border-gray-800 text-gray-400 dark:text-gray-800 text-2xl cursor-none">
              Enrolled Now
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ClassCard;
