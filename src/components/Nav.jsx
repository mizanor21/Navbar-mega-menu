import { RiArrowDropDownLine } from "react-icons/ri";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";
import "./Navbar.css";

const Navber = () => {
  const [on, setOn] = useState(false);

  const [service, setService] = useState(false);

  const toggleService = () => {
    setService(!service);
  };

  const toggleOn = () => {
    setOn(!on);
  };

  const A1 = () => {
    setIsActive("/");
    toggleOn();
  };
  const A2 = () => {
    setIsActive("/about");
    toggleOn();
  };
  const A3 = () => {
    setIsActive("/team");
    toggleOn();
  };
  const A4 = () => {
    setIsActive("/career");
    toggleOn();
  };
  const A5 = () => {
    setIsActive("/contact");
    toggleOn();
  };
  const A6 = () => {
    setIsActive("/getAppoinment");
    toggleOn();
  };
  const A7 = () => {
    setIsActive("/blog");
    toggleOn();
  };

  const [isHovered, setIsHovered] = useState(false);

  const [isActive, setIsActive] = useState("");

  const cardData = [
    {
      src: "https://i.postimg.cc/Tw59pfJs/sofa2.jpg",
      text: "Counselling",
    },
    {
      src: "https://i.postimg.cc/8zwwYyCZ/chair.jpg",
      text: "Corporate Service",
    },
    {
      src: "https://i.postimg.cc/s2XKCpQs/building.jpg",
      text: "Child Development",
    },
    {
      src: "https://i.postimg.cc/wBG2q7LJ/ghum.jpg",
      text: "Rehabilitation from Addiction",
    },
  ];

  return (
    <div className="navber pd container mx-auto">
      <div className="navber-logo">
        <div className="ml-[20%]">
          <img
            src="https://i.postimg.cc/fy4vdpHR/logo-1.png"
            className=""
            alt=""
          />
          {on && (
            <div className="side-menu">
              <div className="side-menu-2">
                <div className="side-menu-top">
                  <img src="https://i.postimg.cc/fy4vdpHR/logo-1.png" />
                  <div
                    className="side-menu-top-menu text-black"
                    onClick={toggleOn}
                  >
                    <ImCancelCircle />
                  </div>
                </div>

                <ul>
                  <li onClick={A1} className={`${isActive == "/" && "active"}`}>
                    <a className="link" href="/">
                      Mental Health Services
                    </a>
                  </li>
                  <li
                    onClick={A2}
                    className={`${isActive == "/about" && "active"}`}
                  >
                    <a className="link" href="/about">
                      About Us
                    </a>
                  </li>
                  <li>
                    <div className="ss" onClick={toggleService}>
                      Services{" "}
                      <div className="sso">
                        <IoMenu />
                      </div>
                    </div>
                  </li>
                  {service && (
                    <div className="vetore">
                      <ul>
                        <li>Counseling</li>
                        <li>Corporate Service</li>
                        <li>Child Development</li>
                        <li>Rehabilitation From Addiction</li>
                      </ul>
                    </div>
                  )}
                  <li
                    onClick={A3}
                    className={`${isActive == "/team" && "active"}`}
                  >
                    <a href="/team" className="link">
                      Team
                    </a>
                  </li>
                  <li
                    onClick={A4}
                    className={`${isActive == "/career" && "active"}`}
                  >
                    <a href="/career" className="link">
                      Career
                    </a>
                  </li>
                  <li
                    onClick={A5}
                    className={`${isActive == "/contact" && "active"}`}
                  >
                    <a href="/contact" className="link">
                      Contact Us
                    </a>
                  </li>
                  <li
                    onClick={A6}
                    className={`${isActive == "/getAppoinment" && "active"}`}
                  >
                    <a
                      onClick={() => setIsActive("/getAppoinment")}
                      href="/getAppoinment"
                      className="link"
                    >
                      Get Appoinment
                    </a>
                  </li>
                  <li
                    onClick={A7}
                    className={`${isActive == "/blog" && "active"}`}
                  >
                    <a href="/blog" className="link">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="navber-links ">
        <ul>
          {/* ----------------------------------------------- */}
          <li
            onClick={() => setIsActive("/")}
            className={`${isActive == "/" && "active"}`}
          >
            <a className="link" href="/">
              Home
            </a>
          </li>
          <li
            onClick={() => setIsActive("/about")}
            className={`${isActive == "/about" && "active"}`}
          >
            <a className="link" href="/about">
              About Us
            </a>
          </li>
          <li
            onClick={() => setIsActive("/services")}
            className={`dropdown ${isActive == "/services" ? "active" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a href="/services" className="link">
              Services
            </a>
            <RiArrowDropDownLine className="dropdown-icon" />
          </li>
          <li
            onClick={() => setIsActive("/team")}
            className={`${isActive == "/team" && "active"}`}
          >
            <a href="/team" className="link">
              Team
            </a>
          </li>
          <li
            onClick={() => setIsActive("/career")}
            className={`${isActive == "/career" && "active"}`}
          >
            <a href="/career" className="link">
              Career
            </a>
          </li>
          <li
            onClick={() => setIsActive("/contact")}
            className={`${isActive == "/contact" && "active"}`}
          >
            <a href="/contact" className="link">
              {" "}
              Contact Us{" "}
            </a>
          </li>
          <li
            onClick={() => setIsActive("/blog")}
            className={`${isActive == "/blog" && "active"}`}
          >
            <a href="/blog" className="link">
              {" "}
              Blog{" "}
            </a>
          </li>
        </ul>
        <button className="btn"> Get Appointment</button>
      </div>

      {isHovered && (
        <div
          className="card-containers min-w-screen"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="card_container flex">
            {cardData.map((item, index) => (
              <div key={index} className="card w-80">
                <div className="card_image">
                  <img src={item?.src} alt="" />
                </div>
                <p>{item?.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="navber-menu" onClick={toggleOn}>
        <IoMenu />
      </div>
    </div>
  );
};

export default Navber;
