import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaRegFilePdf } from 'react-icons/fa'
import { BackgroundBeams } from './ui/BackgroundBeams'

const Hero = () => {
    return (
        <div id="home" className="pb-20 pt-32">
            <div className="h-screen w-full dark:bg-[#0A0A0A]  flex items-center justify-center absolute top-0 left-0">
                <BackgroundBeams />
            </div>
            <div className="flex justify-center relative my-20 z-10">
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 pb-3'>
                        Welcome to My Portfolio Powered by Next.js!
                    </h2>
                    <TextGenerateEffect
                    className="text-center text-[40px] md:text-5xl lg:text-6xl pb-2"
                    words="Crafting digital experiences with Code and Creativity." 
                    />
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi, I&apos;m Tarunendra, a MERN Stack Developer.
                    </p>
                    <a href='/Tarunendra-Resume.pdf' download={true}>
                        <MagicButton 
                            title="Download Resume" icon={<FaRegFilePdf />} position={'right'}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero