import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import loginImg from "../../assets/login.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  }
  return (
    <div className="flex flex-col-reverse md:flex-row gap-5">
      <img src={loginImg} alt="loginImg" className="md:w-1/2" />
      <div className="w-full">
        <h2 className="text-3xl text-center py-10 uppercase font-semibold">
          Sign in
        </h2>
        <form>
          <div className="pl-20 md:pl-0">
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
            <div className="py-5">
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
              <p onClick={handleShow} className="absolute top-[10px] right-20   md:right-36">
                {
                  show? <FaEyeSlash className="text-black"/> : <FaEye className="text-black" />
                }
              </p>
              </div>
            </div>
            <input
              type="submit"
              value="Sign In"
              className="bg-[#03203C] text-white w-[80%] md:w-[60%] md:m-auto md:block cursor-pointer hover:bg-white border-2 border-[#03203C] hover:text-[#03203C] py-2 rounded-2xl"
            />
            <div className="w-[80%] text-end py-5">
              <p>
                New here?{" "}
                <Link to={"/register"} className="underline hover:text-[#03203C] text-[#007dfe]">
                  Create a New Account
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
                    Sign in with Google
                  </h2>
                </div>
                <div className="flex items-center gap-2 justify-center bg-[#03203C] w-[80%] md:w-1/2 text-white rounded-2xl py-1 cursor-pointer drop-shadow-xl hover:text-[#007dfe]">
                  <FaGithub className="text-2xl"></FaGithub>
                  <h2 className="text-xl font-light uppercase">
                    Sign in with Github
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

export default Login;
