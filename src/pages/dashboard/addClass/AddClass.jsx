import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useTitle from "../../../hooks/useTitle";

const image_hosting_token = import.meta.env.VITE_IMG_API;
const AddClass = () => {
  useTitle("Instructors | Class Add");
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure()
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const onSubmit = (data) => {
    const newAvailableSeats = parseInt(data.availableSeats);
    const newPrice = parseInt(data.price);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imgURL = imageResponse.data.display_url;
          const { name, instructorName, instructorEmail } = data;
          const newItem = {
            image: imgURL,
            name,
            instructorName,
            availableSeats: newAvailableSeats,
            price: newPrice,
            email: instructorEmail,
          };
          axiosSecure.post('/classes',newItem)
          .then(data => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Added Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }           
          })
        }
      });
  };
  return (
    <div>
      <div className="bg-[#ffffff4d] shadow-2xl drop-shadow-2xl rounded-2xl h-[95vh] p-6 overflow-scroll">
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-10"
          >
            <div>
              <p className="text-2xl uppercase">
                Class name<span className="text-[#D31A50]">*</span>
              </p>
              <input
                type="text"
                {...register("name")}
                placeholder="Enter your Class name"
                className="border-2 border-[#03203C] rounded-xl py-2 px-5 w-full"
                required
              />
            </div>
            <div>
              <p className="text-2xl uppercase">
                Class Image<span className="text-[#D31A50]">*</span>
              </p>
              <input
                type="file"
                {...register("image")}
                className="border-2 border-[#03203C] rounded-xl py-2 px-5 w-full"
                required
              />
            </div>
            <div className="flex justify-between gap-5">
              <div className="w-1/2">
                <p className="text-2xl uppercase">Instructor name</p>
                <input
                  type="text"
                  {...register("instructorName")}
                  defaultValue={user?.displayName}
                  className="border-2 border-[#03203C] rounded-xl py-2 px-5 w-full"
                  readOnly
                />
              </div>
              <div className="w-1/2">
                <p className="text-2xl uppercase">Instructor email</p>
                <input
                  type="email"
                  {...register("instructorEmail")}
                  defaultValue={user?.email}
                  className="border-2 border-[#03203C] rounded-xl py-2 px-5 w-full"
                  readOnly
                />
              </div>
            </div>
            <div className="flex justify-between gap-5">
              <div className="w-1/2">
                <p className="text-2xl uppercase">
                  Available seats<span className="text-[#D31A50]">*</span>
                </p>
                <input
                  type="number"
                  {...register("availableSeats")}
                  placeholder="Available seats"
                  className="border-2 border-[#03203C] rounded-xl py-2 px-5 w-full"
                  required
                />
              </div>
              <div className="w-1/2">
                <p className="text-2xl uppercase">
                  Price<span className="text-[#D31A50]">*</span>
                </p>
                <input
                  type="number"
                  {...register("price")}
                  placeholder="Enter your Class name"
                  className="border-2 border-[#03203C] rounded-xl py-2 px-5 w-full"
                  required
                />
              </div>
            </div>
            <input
              type="submit"
              value="ADD CLASS"
              className="bg-[#03203C]  text-white w-[80%] md:w-[60%] md:m-auto md:block cursor-pointer hover:bg-white border-2 border-[#03203C]  hover:text-[#03203C]  py-2 rounded-2xl"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
