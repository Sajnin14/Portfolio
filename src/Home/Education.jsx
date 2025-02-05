import graduation from '../assets/graduation.jpg';
import secondary from '../assets/secondary.png';
import higher2 from '../assets/Dinajpur-Board.png';

const Education = () => {
    return (
        <div id='education'>
            <h3 className="text-center text-4xl font-bold text-[#2E2568] my-4">Education</h3>

            <div className="mt-10 w-3/4 mx-auto flex items-center gap-4 border border-[#2E2568] md:px-16 rounded-lg shadow-lg">
                <div>
                    <img src={graduation} className='rounded-lg w-32 m-2' />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Bechelor Of Computer Science and Engineering</h3>
                    <p>National University (Dhaka City College)</p>
                    <p className="font-bold">CGPA - 3.63</p>

                </div>
            </div>


            <div className="mt-10 w-3/4 mx-auto flex items-center justify-around border border-[#2E2568] p-2 rounded-lg shadow-lg">

                <div>
                    <h3 className="text-xl font-semibold">Higher Secondary Certificate</h3>
                    <p>Thakurgaon Govt. College</p>
                    <p className="font-bold">GPA: 4.75</p>
                </div>

                <div>
                    <img src={higher2} className='rounded-lg w-48 h-32 m-2' />
                </div>
            </div>


            <div className="my-10 w-3/4 mx-auto flex gap-4 items-center md:px-16 border border-[#2E2568] rounded-lg shadow-lg">
                <div>
                    <img src={secondary} className='rounded-lg w-36 m-2' />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Secondary School Certificate</h3>
                    <p>Thakurgaon Govt. Girls High School</p>
                    <p className="font-bold">GPA: 5.00</p>

                </div>
            </div>

        </div>
    );
};

export default Education;