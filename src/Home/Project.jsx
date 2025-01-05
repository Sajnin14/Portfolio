import { Link } from 'react-router-dom';
import eduimg from '../assets/2025-01-05.png';
import movieimg from '../assets/movie/2025-01-05 (10).png';
import travelimg from '../assets/travel/2025-01-05 (23).png'
const Project = () => {
    return (
        <div>
            <h3 className="text-center text-4xl font-bold text-[#2E2568] my-4">Projects</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                <div className="card bg-base-100 rounded-xl shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={eduimg}
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">EduElevate</h2>
                        <p>A platform that enhances learning through resources like books and tools, designed to inspire and empower learners of all ages.</p>
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
                        <p>A cozy hub for all your favourite films</p>
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