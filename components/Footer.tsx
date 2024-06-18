import React from 'react'
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { BsTwitterX } from 'react-icons/bs';

export const SOCIAL = [
    {
        id: 1,
        link: "https://github.com/Tarunendra05",
        icon: <FaGithub />,
    },
    {
        id: 2,
        link: "https://www.linkedin.com/in/tarunendra-bahadur-singh-5b90a3203/",
        icon: <FaLinkedin />,
    },
    {
        id: 3,
        link: "https://twitter.com/Tarunendra_dev",
        icon: <BsTwitterX />,
    }
];

const Footer = () => {
    return (
        <footer className='w-full mb-[100px] md:mb-5 pb-10' id="contact">
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[55vw]'>
                    Join Me for a <span className='text-[#4D3C77]'>Project Collaboration</span> or a Game of Valorant
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>Contact me if you&apos;d like to work on a project together or simply enjoy some Valorant.</p>
                <a href='mailto:Tarunsingh4128@gmail.com'>
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Tarunendra</p>
                <div className='flex items-center md:gap-3 gap-6'>
                    {SOCIAL.map(({ id, link, icon }) => (
                        <div className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-[#191A19] rounded-lg border border-black-300">
                            <a
                                href={link}
                                key={id}
                                target="_black"
                                rel="noopener noreferrer"
                                className="cursor-pointer duration-300 ease-in-out hover:scale-125 hover:text-rose-600"
                            >
                                {icon}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer;