import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_IMG_API;

const UpdateClassItem = () => {
  const { register, handleSubmit } = useForm();
  const classItem = useLoaderData();
  console.log(classItem);
  const { _id, name, instructorName, price, email, availableSeats } = classItem;
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const onSubmit = (data) => {
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
            availableSeats,
            price,
            email: instructorEmail,
          };
          fetch(`https://school-of-rock-server.vercel.app/classes/${_id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newItem),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Update successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
  };
  return (
    <div className="bg-[#ffffff4d] shadow-2xl drop-shadow-2xl rounded-2xl h-[95vh] p-6 overflow-scroll">
      <h2 className="text-2xl bg-white text-center rounded-3xl mb-5">
        Update : {name}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
        <div>
          <p className="text-2xl uppercase">
            Class name<span className="text-[#1ad31a]">*</span>
          </p>
          <input
            type="text"
            {...register("name")}
            defaultValue={name}
            className="border-2 border-[#03203C] rounded-xl py-2 px-5 w-full"
            required
          />
        </div>
        <div>
          <p className="text-2xl uppercase">
            Class Image<span className="text-[#1ad31a]">*</span>
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
              defaultValue={instructorName}
              className="border-2 border-[#03203C] rounded-xl py-2 px-5 w-full"
              readOnly
            />
          </div>
          <div className="w-1/2">
            <p className="text-2xl uppercase">Instructor email</p>
            <input
              type="email"
              {...register("instructorEmail")}
              defaultValue={email || "No Email Send"}
              className="border-2 border-[#03203C] rounded-xl py-2 px-5 w-full"
              readOnly
            />
          </div>
        </div>
        <div className="flex justify-between gap-5">
          <div className="w-1/2">
            <p className="text-2xl uppercase">
              Available seats<span className="text-[#1ad31a]">*</span>
            </p>
            <input
              type="number"
              {...register("availableSeats")}
              className="border-2 border-[#03203C] rounded-xl py-2 px-5 w-full"
              required
            />
          </div>
          <div className="w-1/2">
            <p className="text-2xl uppercase">
              Price<span className="text-[#1ad31a]">*</span>
            </p>
            <input
              type="number"
              {...register("price")}
              className="border-2 border-[#03203C] rounded-xl py-2 px-5 w-full"
              required
            />
          </div>
        </div>
        <input
          type="submit"
          value="UPDATE CLASS"
          className="bg-[#03203C]  text-white w-[80%] md:w-[60%] md:m-auto md:block cursor-pointer hover:bg-white border-2 border-[#03203C]  hover:text-[#03203C]  py-2 rounded-2xl"
        />
      </form>
    </div>
  );
};

export default UpdateClassItem;
