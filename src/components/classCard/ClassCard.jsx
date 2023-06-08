import { Slide, Zoom } from "react-awesome-reveal";

const ClassCard = ({ item }) => {
  const {
    image,
    name,
    instructorName,
    availableSeats,
    price,
    enrolledStudent,
  } = item;
  return (
    <div className="bg-white md:shadow-2xl md:drop-shadow-2xl h-[80vh] md:h-[90vh] border-4 md:border-none border-[#03203C]">
      <div>
        <img src={image} alt="" className="w-screen h-[50vh] p-2 md:p-0" />
        <div className="flex gap-3 m-1">
          <Slide>
            <h2 className="text-xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-[#FF4331] to-[#D31A50]">
              ClassName:
            </h2>
          </Slide>
          <Zoom>
            <h2 className="text-xl font-bold">{name}</h2>
          </Zoom>
        </div>
        <div className="flex gap-3 m-1">
          <Zoom>
            <h2 className="text-xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-[#FF4331] to-[#D31A50]">
              Instructor:
            </h2>
          </Zoom>
          <Slide>
            <h2 className="text-xl font-bold">{instructorName}</h2>
          </Slide>
        </div>
        <div className="flex gap-3 m-1">
          <Slide>
            <h2 className="text-xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-[#FF4331] to-[#D31A50]">
            Available Seats:
            </h2>
          </Slide>
          <Zoom>
            <h2 className="text-xl font-bold">{availableSeats}</h2>
          </Zoom>
        </div>
        <div className="flex gap-3 m-1">
          <Zoom>
            <h2 className="text-xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-[#FF4331] to-[#D31A50]">
            Price:
            </h2>
          </Zoom>
          <Slide>
            <h2 className="text-xl font-bold">${price} <span className="text-gray-500">/month</span></h2>
          </Slide>
        </div>
        <div className="flex gap-3 m-1">
          <Slide>
            <h2 className="text-xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-[#FF4331] to-[#D31A50]">
            Enrolled Student:
            </h2>
          </Slide>
          <Zoom>
            <h2 className="text-xl font-bold">{enrolledStudent}</h2>
          </Zoom>
        </div>
        <button className="bg-[#03203C] w-3/4 m-auto block mt-5 p-1 text-white text-2xl">Enrolled Now</button>
      </div>
    </div>
  );
};

export default ClassCard;
