import { Zoom } from "react-awesome-reveal";
import useAuth from "../../../hooks/useAuth";
import useTitle from "../../../hooks/useTitle";
import useClasses from "../../../hooks/useClasses";
import { FaClipboardList, FaMoneyBillAlt } from "react-icons/fa";

const StudentHome = () => {
  useTitle("Dashboard | Student");
  const { user } = useAuth();
  const [classItems] = useClasses();
  const total = classItems.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <div className="bg-[#ffffff4d] shadow-2xl drop-shadow-2xl rounded-2xl h-[90vh] p-6 overflow-hidden">
        <div className="mt-10 flex gap-10 items-center">
          <div className="border-2 flex justify-center flex-col items-center p-4 rounded-2xl bg-slate-100 border-[#03203C] w-64 h-48 gap-5">
            <img
              src={user?.photoURL}
              alt="user"
              className="w-32 h-32 rounded-full border-4 border-[#03203C]"
            />
            <h2 className="">{user?.email}</h2>
          </div>
          <div className="border-2 flex justify-center flex-col items-center p-4 rounded-2xl bg-slate-100 border-[#03203C] w-full h-48 gap-5">
            <Zoom>
              <h2 className="text-2xl font-semibold  text-center">
                Welcome Back{" "}
                <span className="text-[#D31A50]">{user?.displayName}</span>
              </h2>
            </Zoom>
          </div>
        </div>
        <div className="flex gap-10 mt-5">
          <div className="border-2 flex justify-around items-center p-4 rounded-2xl bg-slate-100 border-[#03203C] w-full h-48 gap-5">
            <div className="bg-[#03203C] text-[#D31A50] p-10 rounded-2xl text-2xl flex flex-col items-center gap-5 w-1/2">
              <FaClipboardList className="text-4xl"></FaClipboardList>
              <h2>Selected Classes : {classItems.length}</h2>
            </div>
            <div className="bg-[#03203C] text-[#D31A50] p-10 rounded-2xl text-2xl flex flex-col items-center gap-5 w-1/2">
              <FaMoneyBillAlt className="text-4xl"></FaMoneyBillAlt>
              <h2>Total Price : ${total}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
