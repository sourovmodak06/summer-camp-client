import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import signUpImg from "../../assets/signUp.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  useTitle("Register");
  const { createUser, profileUpdate } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        profileUpdate(data.name, data.url)
          .then()
          .catch((error) => {
            toast.error(error.message);
          });
        toast.success("Successfully Register");
        reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const [showCP, setShowCP] = useState(false);
  const handleShowCP = () => {
    setShowCP(!showCP);
  };
  return (
    <div>
      <ToastContainer theme="colored" />
      <div className="flex flex-col-reverse md:flex-row gap-5 pb-20">
        <img src={signUpImg} alt="signUpImg" className="md:w-1/2" />
        <div className="w-full">
          <h2 className="text-3xl text-center py-10 uppercase font-semibold">
            Sign up
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pl-20 md:pl-0">
              <div className="py-3">
                <p className="text-2xl">
                  Name<span className="text-[#D31A50]">*</span>
                </p>
                <input
                  type="text"
                  {...register("name", {
                    required: true,
                  })}
                  placeholder="Enter your name"
                  className="border-2 border-[#03203C] rounded-xl py-1 px-5 w-[80%]"
                />
                {errors.name?.type === "required" && (
                  <p className="text-[#D31A50]">Name is required</p>
                )}
              </div>
              <div>
                <p className="text-2xl">
                  Email<span className="text-[#D31A50]">*</span>
                </p>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                  placeholder="Enter your email"
                  className="border-2 border-[#03203C] rounded-xl py-1 px-5 w-[80%]"
                />
                {errors.email?.type === "required" && (
                  <p className="text-[#D31A50]">Email is required</p>
                )}
              </div>
              <div className="py-3">
                <p className="text-2xl">
                  Password<span className="text-[#D31A50]">*</span>
                </p>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="Enter your password"
                    className="border-2 border-[#03203C] rounded-xl py-1 pl-5 pr-10 w-[80%]"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-[#D31A50]">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password is less than 6 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-[#D31A50]">
                      do not have a capital letter and do not have a special
                      character
                    </p>
                  )}
                  <p
                    onClick={handleShow}
                    className="absolute top-[10px] right-20   md:right-36"
                  >
                    {show ? (
                      <FaEyeSlash className="text-black" />
                    ) : (
                      <FaEye className="text-black" />
                    )}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-2xl">
                  Confirm Password<span className="text-[#D31A50]">*</span>
                </p>
                <div className="relative">
                  <input
                    type={showCP ? "text" : "password"}
                    {...register("CPassword", {
                      required: true,
                      validate: (value) => {
                        if (watch("password") != value) {
                          return "Your passwords do no match";
                        }
                      },
                    })}
                    placeholder="Enter your confirm password"
                    className="border-2 border-[#03203C] rounded-xl py-1 pl-5 pr-10 w-[80%]"
                  />
                  {errors.CPassword?.type === "required" && (
                    <p className="text-[#D31A50]">
                      Confirm Password is required
                    </p>
                  )}
                  <p className="text-[#D31A50]">{errors.CPassword?.message}</p>
                  <p
                    onClick={handleShowCP}
                    className="absolute top-[10px] right-20   md:right-36"
                  >
                    {showCP ? (
                      <FaEyeSlash className="text-black" />
                    ) : (
                      <FaEye className="text-black" />
                    )}
                  </p>
                </div>
              </div>
              <div className="py-3">
                <p className="text-2xl">
                  Photo URL<span className="text-[#D31A50]">*</span>
                </p>
                <input
                  type="url"
                  {...register("url", {
                    required: true,
                  })}
                  placeholder="Enter your Photo URL"
                  className="border-2 border-[#03203C] rounded-xl py-1 px-5 w-[80%]"
                />
                {errors.url?.type === "required" && (
                  <p className="text-[#D31A50]">Photo URL is required</p>
                )}
              </div>
              <div>
                <label htmlFor="gender" className="text-2xl">
                  Gender :{" "}
                </label>
                <select
                  {...register("gender")}
                  className="border-2 border-[#03203C] w-36 md:w-[65%] rounded-xl py-1"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="py-3">
                <p className="text-2xl">Phone Number</p>
                <input
                  type="number"
                  {...register("number")}
                  placeholder="Enter your number"
                  className="border-2 border-[#03203C] rounded-xl py-1 px-5 w-[80%]"
                />
              </div>
              <input
                type="submit"
                value="Sign Up"
                className="bg-[#03203C] text-white w-[80%] md:w-[60%] md:m-auto md:block cursor-pointer hover:bg-white border-2 border-[#03203C] hover:text-[#03203C] py-2 rounded-2xl"
              />
              <div className="w-[80%] text-end py-5">
                <p>
                  Already registered?{" "}
                  <Link
                    to={"/login"}
                    className="underline hover:text-[#03203C] text-[#007dfe]"
                  >
                    Go to log in
                  </Link>
                </p>
              </div>
              <div>
                <div className="bg-[#007dfe] h-[1px] w-[60%] m-auto"></div>
                <h2 className="text-center uppercase">Or</h2>
                <div className="bg-[#007dfe] h-[1px] w-[60%] m-auto"></div>
                <div className="flex gap-2 flex-col md:flex-row mt-5 md:mt-10 md:w-[80%]">
                  <div className="flex items-center gap-2 justify-center bg-[#03203C] w-[80%] md:w-1/2 text-white rounded-2xl py-1 cursor-pointer drop-shadow-xl hover:text-[#007dfe] ">
                    <FaGoogle className="text-2xl"></FaGoogle>
                    <h2 className="text-xl font-light uppercase">
                      Sign up with Google
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 justify-center bg-[#03203C] w-[80%] md:w-1/2 text-white rounded-2xl py-1 cursor-pointer drop-shadow-xl hover:text-[#007dfe]">
                    <FaGithub className="text-2xl"></FaGithub>
                    <h2 className="text-xl font-light uppercase">
                      Sign up with Github
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
