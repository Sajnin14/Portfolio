import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import banner from '../../assets/microEarn/banner.png';
import about from '../../assets/microEarn/about.png';
import testimonial from '../../assets/microEarn/testimonial.png';
import best1 from '../../assets/microEarn/bestworker.png';
import best2 from '../../assets/microEarn/bestworkers.png';
import img from '../../assets/microEarn/2025-01-31 (5).png';
import img2 from '../../assets/microEarn/2025-01-31 (6).png';
import img3 from '../../assets/microEarn/2025-01-31 (7).png';
import img4 from '../../assets/microEarn/2025-01-31 (8).png';
import img5 from '../../assets/microEarn/2025-01-31 (9).png';
import img6 from '../../assets/microEarn/2025-01-31 (10).png';
import img7 from '../../assets/microEarn/2025-01-31 (11).png';
import img8 from '../../assets/microEarn/2025-01-31 (12).png';
import img9 from '../../assets/microEarn/2025-01-31 (13).png';
import img10 from '../../assets/microEarn/2025-01-31 (14).png';
import img11 from '../../assets/microEarn/2025-01-31 (16).png';
import img12 from '../../assets/microEarn/2025-01-31 (17).png';
import img13 from '../../assets/microEarn/2025-01-31 (18).png';
import img14 from '../../assets/microEarn/2025-01-31 (19).png';

const MicroEarn = () => {
    return (
        <div>
            <h3 className='my-5 text-center text-5xl font-bold text-[#2E2568]'>MicroEarn</h3>
            <p className='w-2/3 md:w-1/2 mx-auto text-center mb-10'>Micro Earn is a platform that helps you earn through micro-tasks, gigs, and online opportunities. Whether you are looking for a side hustle or passive income, Micro Earn makes earning easy, flexible, and accessible for everyone! </p>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={banner} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={about} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={testimonial} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={best1} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={best2} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img7} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img8} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img9} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img10} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img11} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img12} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img13} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img14} className='py-3 px-5' />
                </SwiperSlide>
            </Swiper>

            <p className='w-2/3 mx-auto my-5'> <span className='font-bold text-lg'>Description: </span>A platform that enhances learning through resources like books and tools, designed to inspire and empower learners of all ages. Explore a world of knowledge with our collection of new and pre-loved books, spanning various genres and subjects. Enhance your learning journey with our expertly designed courses, tailored to help you gain valuable skills and achieve your goals. Your one-stop destination for books and education!</p>

            <div className='w-2/3 mx-auto md:flex gap-40 justify-start'>
                <p><span className='text-lg font-bold'>Technology Used :</span>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>TailwindCSS</li>
                        <li>daisyUi</li>
                        <li>Node js</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                    </ul> </p>

                <p><span className='text-lg font-bold'>React Packages :</span>
                    <ul>
                        <li>tanStack-query</li>
                        <li>react icons</li>
                        <li>React Framer-motion</li>
                        <li>react toast</li>
                        <li>Sweet alert</li>
                        <li>Lottiefiles</li>
                        <li>Axios</li>
                        <li>jwt web token</li>
                    </ul> </p>
            </div>

            <div className='w-2/3 mx-auto'>
                <p className='my-5' ><span className='text-lg font-bold'>Features:</span>
                    <ul>
                        <li className='font-semibold my-3'># Worker Feature---</li>
                        <li>1. Worker can participate on tasks that buyer added. and by approving those tasks worker can get points.</li>
                        <li>
                            2. Worker can see their tasks, get notifications when buyer approve his/her tasks.
                        </li>
                        <li>
                            3. worker can withdraw money if they have minimum 200 coin.

                        </li>

                        <li className='font-semibold my-3'> # Buyer Features----</li>
                        <li>
                            4. Buyer can add tasks, can edit or delete his tasks also.
                        </li>
                        <li>
                            5. Buyer can purchase coin with a small ammount if they needed
                        </li>
                        <li>
                            6. Buyer can see his/her payment history also. (the payment of buying coin)
                        </li>
                        <li>
                            7. Buyer have the right to review, approve and reject the tasks, that an worker submitted
                        </li>

                        <li className='font-semibold my-3'> # Admin Features------</li>
                        <li>
                            8. Admin have the right to make any user worker or admin or buyer.
                        </li>
                        <li>
                            9. Admin can delete tasks.
                        </li>
                        <li>
                            10. worker need approval for withdraw money.If admin approved the withdrawal than he/she can withdraw the money
                        </li>

                    </ul></p>

                <div className='space-y-4'>
                    <p className='font-bold text-lg'><span className=''>Live Site URL: </span>
                        <a href=" https://microearn-dbc85.web.app/" target='blank' className='text-blue-600 underline'> https://microearn-dbc85.web.app/ </a> </p>


                    <p className='font-bold text-lg'><span className=''>Client-side code GitHub repository: </span>
                        <a href="https://github.com/Sajnin14/MicroEarn-Client" target='blank' className='text-blue-600 underline'>https://github.com/Sajnin14/MicroEarn-Client </a> </p>

                    <p className='font-bold text-lg'><span className=''>Server-side code GitHub repository : </span>
                        <a href="https://github.com/Sajnin14/MicroEarn-server" target='blank' className='text-blue-600 underline'>https://github.com/Sajnin14/MicroEarn-server </a> </p>

                </div>

                <p className='my-5'><span className='font-bold text-lg'>Future Works: </span>
                    <ul>
                        <li>1. bKash, Nagad, Rocket payment implementation </li>
                        <li>2. Make sure that only verified email users can login to the website</li>
                        
                    </ul>
                </p>

            </div>


        </div>
    );
};

export default MicroEarn;