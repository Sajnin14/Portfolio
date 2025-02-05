import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import eco from '../../assets/travel/2025-01-05 (23).png';
import eco1 from '../../assets/travel/2025-01-05 (24).png';
import eco2 from '../../assets/travel/2025-01-05 (25).png';
import eco3 from '../../assets/travel/2025-01-05 (26).png';
import eco4 from '../../assets/travel/2025-01-05 (27).png';
import eco5 from '../../assets/travel/2025-01-05 (28).png';
import eco6 from '../../assets/travel/2025-01-05 (29).png';
import eco7 from '../../assets/travel/2025-01-05 (30).png';
import eco8 from '../../assets/travel/2025-01-05 (31).png';

const Eco = () => {
    return (
        <div>
            <h3 className='my-5 text-center text-5xl font-bold text-[#2E2568]'>EcoAdventura</h3>
            <p className='w-2/3 md:w-1/2 mx-auto text-center mb-10'>The purpose of EcoAdventura is to inspire, educate,
                and facilitate responsible exploration of nature while promoting sustainability and environmental conservation.Offer details about eco-friendly adventure activities such as hiking, kayaking, bird watching, or camping.</p>
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
                    <img src={eco} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={eco1} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={eco2} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={eco3} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={eco6} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={eco4} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={eco5} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={eco7} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={eco8} className='py-3 px-5' />
                </SwiperSlide>

            </Swiper>


            <div className='w-2/3 mx-auto md:flex gap-40 justify-start'>
                <p><span className='text-lg font-bold'>Technology Used :</span>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>TailwindCSS</li>
                        <li>daisyUi</li>
                        <li>Node js</li>
                    </ul> </p>

                <p><span className='text-lg font-bold'>React Packages :</span>
                    <ul>
                        <li>react icons</li>
                        <li>react toast</li>
                        <li>Recharts</li>
                        <li>npm AOS</li>
                        <li>firebase</li>
                    </ul> </p>
            </div>

            <div className='w-2/3 mx-auto'>
                <p className='my-5' ><span className='text-lg font-bold'>Features:</span>
                    <ul>
                        <li><span className='font-semibold'>1.</span> User can explore various kind of adventure</li>
                        <li>
                            <span className='font-semibold'>2.</span> User can directly talk or consult with Experts
                        </li>
                        <li>
                            <span className='font-semibold'> 3.</span>User can easily know details information(everything about the adventure)
                        </li>
                        <li>
                            <span className='font-semibold'>4.</span> User can see category wise adventure options.
                        </li>
                        <li>
                            <span className='font-semibold'>5.</span> User can login with both email and google
                        </li>

                        <li>
                            <span className='font-semibold'>6.</span>User can change/update profile photo and name if they want
                        </li>
                    </ul></p>

                

                <div className='space-y-4'>
                    <p className='font-bold text-lg'><span className=''>Live Site URL: </span>
                        <a href="https://assessment-9-8129d.web.app" target='blank' className='text-blue-600 underline'>https://assessment-9-8129d.web.app </a> </p>


                    <p className='font-bold text-lg'><span className=''>GitHub Repo Link:  </span>
                        <a href="https://github.com/Sajnin14/EcoAdventura-9" target='blank' className='text-blue-600 underline'>https://github.com/Sajnin14/EcoAdventura-9 </a> </p>

                </div>

                <p className='my-5'><span className='font-bold text-lg'>Lackings: </span>
                    <ul>
                        <li>1. Beckend is not implemented</li>
                        <li>2. Authentication is not implemented</li>
                        <li>3. Privacy is not implemented</li>

                    </ul>
                </p>

            </div>


        </div>
    );
};

export default Eco;