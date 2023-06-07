import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import signUpImg from "../../assets/signUp.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const [showCP, setShowCP] = useState(false);
  const handleShowCP = () => {
    setShowCP(!showCP);
  };
  return (
    <div className="flex flex-col-reverse md:flex-row gap-5 pb-20">
      <img src={signUpImg} alt="signUpImg" className="md:w-1/2" />
      <div className="w-full">
        <h2 className="text-3xl text-center py-10 uppercase font-semibold">
          Sign up
        </h2>
        <form>
          <div className="pl-20 md:pl-0">
            <div className="py-3">
              <p className="text-2xl">
                Name<span className="text-[#D31A50]">*</span>
              </p>
              <input
                type="text"
                placeholder="Enter your name"
                className="border-2 border-[#03203C] rounded-xl py-1 px-5 w-[80%]"
                required
              />
            </div>
            <div>
              <p className="text-2xl">
                Email<span className="text-[#D31A50]">*</span>
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="border-2 border-[#03203C] rounded-xl py-1 px-5 w-[80%]"
                required
              />
            </div>
            <div className="py-3">
              <p className="text-2xl">
                Password<span className="text-[#D31A50]">*</span>
              </p>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  className="border-2 border-[#03203C] rounded-xl py-1 pl-5 pr-10 w-[80%]"
                  required
                />
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
            <div >
              <p className="text-2xl">
                Confirm Password<span className="text-[#D31A50]">*</span>
              </p>
              <div className="relative">
                <input
                  type={showCP ? "text" : "password"}
                  placeholder="Enter your confirm password"
                  className="border-2 border-[#03203C] rounded-xl py-1 pl-5 pr-10 w-[80%]"
                  required
                />
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
                placeholder="Enter your Photo URL"
                className="border-2 border-[#03203C] rounded-xl py-1 px-5 w-[80%]"
                required
              />
            </div>
            <div>
              <p className="text-2xl">Gender</p>
              <div className="flex gap-5">
                <div>
                  <input type="radio" id="male" name="gender" value="male" />
                  <label htmlFor="male" className="ml-2">
                    Male
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                  />
                  <label htmlFor="female" className="ml-2">
                    Female
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="notSay"
                    name="gender"
                    value="notSay"
                  />
                  <label htmlFor="notSay" className="ml-2">
                    I prefer not to say
                  </label>
                </div>
              </div>
            </div>
            <div className="py-3">
                <p className="text-2xl">Phone Number</p>
                <input type="number" placeholder="Enter your number" className="border-2 border-[#03203C] rounded-xl py-1 px-5 w-[80%]" />
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
  );
};

export default Register;
