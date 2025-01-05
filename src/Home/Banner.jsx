import { FaDownload, FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from "motion/react";
import simage from '../assets/image1.jpeg';
import resume from '../assets/sajninResume.pdf'
import { easeOut } from 'motion';


const Banner = () => {
    return (
        <div className=" bg-base-200 ">
            <div className="flex items-center justify-around gap-14 flex-col lg:flex-row-reverse">
                <div className=''>
                    <img
                        src={simage}
                        className="max-w-sm shadow-2xl m-4 rounded-lg p-4" />
                    
                </div>
                <div className=''>
                    <p className='text-6xl font-light mb-2'>Hello!</p>
                    <motion.h1 animate={{x: 100}} 
                    transition={{duration: 2, delay: 2, ease: easeOut, repeat: Infinity}}
                    className="text-5xl">I&#8217;m <motion.span animate={{color: ['#171334', '#2E2568' ,'#2E2568', '#6D6695']}} className='font-bold text-[#2E2568]'>Sajnin Akhter</motion.span></motion.h1>
                    <p className="py-6 text-lg font-semibold text-[#2E2568]">
                        Frontend Developer
                    </p>
                    <div className='text-2xl text-[#2E2568] flex text-center gap-3 mb-5'>
                        <a href="https://github.com/Sajnin14" target='blank'><FaGithub></FaGithub> </a>
                        <a href="www.linkedin.com/in/saima-sajnin-a93131296" target='blank'><FaLinkedin></FaLinkedin> </a>
                        <a href="https://www.facebook.com/saima.sajnin.9/" target='blank'><FaFacebookSquare /> </a>
                    </div>
                    <button className="btn bg-[#2E2568] text-white"> <a href={resume} download>Download Resume</a><FaDownload></FaDownload> </button>



                </div>
            </div>
        </div>
    );
};

export default Banner;