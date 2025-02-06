import { Link } from 'react-router-dom';
import eduimg from '../assets/2025-01-05.png';
import movieimg from '../assets/movie/2025-01-05 (10).png';
import travelimg from '../assets/travel/2025-01-05 (23).png';
import microEarn from '../assets/microEarn/banner.png';

const Project = () => {
    return (
        <div>
            <h3 className="text-center text-4xl font-bold text-[#2E2568] my-20">Projects</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            <div className="card bg-base-100 rounded-xl shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={microEarn}
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">MicroEarn</h2>
                        <p>Micro Earn is a dynamic platform designed to help users earn through micro-tasks, gigs, and online opportunities. Our goal is to provide a seamless and accessible earning experience for everyone. With a user-friendly interface and a wide range of earning options, Micro Earn empowers individuals to monetize their time and effort efficiently.</p>
                        <div className="card-actions">
                            <Link to='/micro'>
                                <button className="btn bg-[#2E2568] text-white my-3">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 rounded-xl shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={eduimg}
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">EduElevate</h2>
                        <p>A platform that enhances learning through resources like books and tools, designed to inspire and empower learners of all ages. your trusted platform for buying and selling educational books. Whether you are a student, educator, or lifelong learner, EduElevate makes it easy to find the books you need or sell the ones you no longer use.</p>
                        <div className="card-actions">
                            <Link to='/edu'>
                                <button className="btn bg-[#2E2568] text-white my-3">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 rounded-xl shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={movieimg}
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">FlickNest</h2>
                        <p>Welcome to FlickNest, your ultimate movie portal! Whether you are a casual viewer or a passionate cinephile, FlickNest is your go-to platform for discovering, exploring, and keeping track of your favorite films.</p>
                        <div className="card-actions">
                            <Link to='/flick'>
                                <button className="btn bg-[#2E2568] text-white my-3">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 rounded-xl shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={travelimg}
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">EcoAdventura</h2>
                        <p>The purpose of EcoAdventura is to inspire, educate, 
                        and facilitate responsible exploration of nature while promoting sustainability and environmental conservation.Offer details about eco-friendly adventure activities such as hiking, kayaking, bird watching, or camping.</p>
                        <div className="card-actions">
                            <Link to='/eco'>
                                <button className="btn bg-[#2E2568] text-white my-3">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Project;