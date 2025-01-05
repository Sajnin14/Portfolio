// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import eduimg from '../../assets/2025-01-05.png';
import eduimg1 from '../../assets/Edu/2025-01-05 (1).png';
import eduimg2 from '../../assets/Edu/2025-01-05 (2).png';
import eduimg3 from '../../assets/Edu/2025-01-05 (3).png';
import eduimg4 from '../../assets/Edu/2025-01-05 (4).png';
import eduimg5 from '../../assets/Edu/2025-01-05 (5).png';
import eduimg6 from '../../assets/Edu/2025-01-05 (6).png';
import eduimg7 from '../../assets/Edu/2025-01-05 (7).png';
import eduimg8 from '../../assets/Edu/2025-01-05 (8).png';
import eduimg9 from '../../assets/Edu/2025-01-05 (9).png';

const Edu = () => {
    return (
        <div>
            <h3 className='my-5 text-center text-5xl font-bold text-[#2E2568]'>EduElevate</h3>
            <p className='w-2/3 md:w-1/2 mx-auto text-center mb-10'>A platform that enhances learning through resources like books and tools, designed to inspire and empower learners of all ages.</p>
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
                    <img src={eduimg} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={eduimg1} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={eduimg2} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={eduimg3} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={eduimg6} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={eduimg4} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={eduimg5} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={eduimg7} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={eduimg8} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={eduimg9} className='py-3 px-5' />
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
                        <li><span className='font-semibold'>1. Educational Services:</span> Anyone can see the services
                            we provide. We sell books here. we sell new and old books.We started providing academic and skill based courses also. We are still working on it.</li>
                        <li>
                            <span className='font-semibold'>2. Add Books:</span> Authentic user can add books for sell.
                        </li>
                        <li>
                            <span className='font-semibold'> 3. Buy Books:</span> Authentic User can purchase books from
                            here at the best price.
                        </li>
                        <li>
                            <span className='font-semibold'>4. Manage Books:</span> Authentic User can manage( update and
                            delete) the books he/she added. and can update the status of booked services information where the serviceProvider is you

                        </li>
                        <li>
                            <span className='font-semibold'>5. Privacy:</span> Only you can see your purchase/booked list.
                            anyone can not see your info.
                            And only the service provider can manage his/her given service.
                        </li>

                        <li>
                            <span className='font-semibold'>6. Can Learn Versatile Things:</span> User can learn versatile
                            things as we provided youtube link also.
                        </li>
                    </ul></p>

                <div className='space-y-4'>
                    <p className='font-bold text-lg'><span className=''>Live Site URL: </span>
                        <a href="https://assessment-11.web.app" target='blank' className='text-blue-600 underline'>https://assessment-11.web.app </a> </p>


                    <p className='font-bold text-lg'><span className=''>Client-side code GitHub repository: </span>
                        <a href="https://github.com/programming-hero-web-course2/b10a11-client-side-Sajnin14" target='blank' className='text-blue-600 underline'>https://github.com/programming-hero-web-course2/b10a11-client-side-Sajnin14 </a> </p>

                    <p className='font-bold text-lg'><span className=''>Server-side code GitHub repository : </span>
                        <a href="https://github.com/programming-hero-web-course2/b10a11-server-side-Sajnin14" target='blank' className='text-blue-600 underline'>https://github.com/programming-hero-web-course2/b10a11-server-side-Sajnin14 </a> </p>

                </div>

                <p className='my-5'><span className='font-bold text-lg'>Lackings: </span>
                    <ul>
                        <li>1. User and Admin is in same site</li>
                        <li>2. Email should be verified. But here email is not verified </li>
                        <li>3.Lack of Payment Gateway Information: Details about secure payment methods or gateways are not mentioned, which might deter users from making purchases.</li>
                        <li>4.User Authentication Dependency: Features like adding, buying, and managing books rely heavily on user authentication. Any security loophole could lead to unauthorized access or misuse. </li>

                    </ul>
                </p>

            </div>


        </div>
    );
};

export default Edu;