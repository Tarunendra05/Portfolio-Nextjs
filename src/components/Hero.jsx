import React from "react";
import {FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaArrowDown} from "react-icons/fa"
import {SiLeetcode} from "react-icons/si";
import avatar from "../assets/avatar.png";

function Hero() {

    const SOCIAL = [
        {
            id: 1,
            link: "https://github.com/Tarunendra05",
            icon : <FaGithub />,
        },
        {
            id: 2,
            link: "https://www.linkedin.com/in/tarunendra-bahadur-singh-5b90a3203/",
            icon : <FaLinkedin />,
        },
        {
            id: 3,
            link: "https://www.instagram.com/tarun_o05/",
            icon : <FaInstagram />,
        },
        {
            id: 4,
            link: "https://www.facebook.com/profile.php?id=100006193604545",
            icon : <FaFacebook />,
        },
        {
            id: 5,
            link: "https://leetcode.com/tarun_005/",
            icon: <SiLeetcode />
        }
    ]

    window.addEventListener("scroll", function () {
        const downArrow = document.querySelector(".down-arrow");

        if(this.scrollY >= 110) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow");
    });

    return (
        <section className="min-h-screen flex flex-col justify-start items-center p-4 text-center">
            <h2 className="text-6xl text-rose-600 uppercase font-bold pb-2 head">Tarunendra Bahadur Singh</h2>
            <h3 className="pb-4 text-4xl">MERN Stack Developer</h3>
            <p className="max-w-3xl font-light text-gray-500 text-2xl">
                Hello <span className="animate-pulse text-5xl">👋</span>, welcome to my site. I am a MERN Stack Developer, I love to work on web development and also like competitive programming.  
            </p>

            <div className="flex justify-evenly py-6 lg:py-10 text-5xl lg:text-6xl w-full md:w-2/5 ">
                {SOCIAL.map(({id, link, icon}) => (
                    <a 
                        href={link} 
                        key={id} 
                        target="_black" 
                        rel="noopener noreferrer"
                        className="cursor-pointer duration-300 ease-in-out hover:scale-110 hover:text-rose-600"
                    >
                    {icon}
                    </a>
                ))}
            </div>

            <div>
                <img 
                    src={avatar} 
                    alt="avatar" 
                    className="w-60 h-50 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-xl"
                />
                <a href="/Tarunendra-Bahadur-Singh-Resume.pdf" 
                download={true} 
                className="flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg duration-300 ease-in-out hover:scale-110">
                    Resume
                </a>
            </div>

            <div className="mt-10 down-arrow animate-bounce">
                <FaArrowDown classname="text-gray-400 text-2xl" />
            </div>

        </section>
    );
}

export default Hero;