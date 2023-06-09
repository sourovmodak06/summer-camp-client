import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-auto">
      <div className="w-full bg-[#03203C] dark:bg-[#0D0D0D] text-white md:py-5 md:px-10 px-7 pt-20">
        <div className="flex flex-col md:flex-row justify-between mb-5">
          <Link to="/">
            <img src={logo} alt="logo" className="" />
          </Link>
          <div className="w-72">
            <h2 className="font-bold text-2xl pb-5">PROGRAMS</h2>
            <ul>
              <li>
                <Link>ROCK 101</Link>
              </li>
              <li>
                <Link>PERFORMANCE</Link>
              </li>
              <li>
                <Link>ROOKIES</Link>
              </li>
              <li>
                <Link>SONGWRITING</Link>
              </li>
              <li>
                <Link>ONLINE</Link>
              </li>
              <li>
                <Link>LITTLE WING</Link>
              </li>
              <li>
                <Link>HOUSE BAND</Link>
              </li>
              <li>
                <Link>ALLSTARS</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-2xl pb-5">MUSIC LESSONS</h2>
            <ul>
              <li>
                <Link>GUITAR LESSONS</Link>
              </li>
              <li>
                <Link>DRUM LESSONS</Link>
              </li>
              <li>
                <Link>SINGING LESSONS</Link>
              </li>
              <li>
                <Link>BASS GUITAR LESSONS</Link>
              </li>
              <li>
                <Link>KEYBOARD + PIANO LESSONS</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-2xl pb-5 uppercase">OFFICE</h2>
            <p>
              Rose View Plaza (7th Floor) <br /> 185 Elephant Road, Hatirpool <br />
              Dhaka-1205, Bangladesh
            </p>
            <p>Phone : (+88) 02223363369</p>
          </div>
          <div>
            <h2 className="font-bold text-2xl pb-5 uppercase">Social Links</h2>
            <div className="flex gap-5">
              <Link>
                <FaFacebook className="text-2xl md:text-3xl"></FaFacebook>
              </Link>
              <Link>
                <FaTwitter className="text-2xl md:text-3xl"></FaTwitter>
              </Link>
              <Link>
                <FaInstagram className="text-2xl md:text-3xl"></FaInstagram>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-5">
          <div>
            <h2 className="py-5 md:py-0 font-normal">
              <small>&copy;{year} School of Rock. All Rights Reserved</small>
            </h2>
          </div>
          <div>
            <p className="font-normal">
              <small>Powered by School of Rock</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
