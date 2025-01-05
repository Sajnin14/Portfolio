import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import movie1 from '../../assets/movie/2025-01-05 (10).png'
import movie2 from '../../assets/movie/2025-01-05 (11).png'
import movie3 from '../../assets/movie/2025-01-05 (12).png'
import movie4 from '../../assets/movie/2025-01-05 (13).png'
import movie5 from '../../assets/movie/2025-01-05 (14).png'
import movie6 from '../../assets/movie/2025-01-05 (15).png'
import movie7 from '../../assets/movie/2025-01-05 (16).png'
import movie8 from '../../assets/movie/2025-01-05 (17).png'
import movie9 from '../../assets/movie/2025-01-05 (18).png'
import movie10 from '../../assets/movie/2025-01-05 (19).png'
import movie11 from '../../assets/movie/2025-01-05 (20).png'
import movie12 from '../../assets/movie/2025-01-05 (21).png'
import movie13 from '../../assets/movie/2025-01-05 (22).png'
const Flick = () => {
    return (
        <div>
            <h3 className='my-5 text-center text-5xl font-bold text-[#2E2568]'>FlickNest</h3>
            <p className='w-2/3 md:w-1/2 mx-auto text-center mb-10'>A cozy hub for all your favourite films</p>
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
                    <img src={movie1} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={movie2} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={movie3} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={movie4} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={movie5} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={movie6} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={movie7} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={movie8} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={movie9} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={movie10} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={movie11} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={movie12} className='py-3 px-5' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={movie13} className='py-3 px-5' />
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
                        <li>MongoDB</li>
                        <li>Express</li>
                    </ul> </p>

                <p><span className='text-lg font-bold'>React Packages :</span>
                    <ul>
                        <li>react icons</li>
                        <li>React Framer-motion</li>
                        <li>react toast</li>
                        <li>Sweet alert</li>
                        <li>Axios</li>
                    </ul> </p>
            </div>

            <div className='w-2/3 mx-auto'>
                <p className='my-5' ><span className='text-lg font-bold'>Features:</span>
                    <ul>
                        <li><span className='font-semibold'>1. Movie Listings: </span> Display all movies available in the
                        database with titles, posters, genres, and ratings.</li>
                        <li>
                            <span className='font-semibold'>2. Movie Details Page: </span> In movie detail page there are rating,
                            summery and all the information about the specific movie. (user need to login/register)
                        </li>
                        <li>
                            <span className='font-semibold'> 3. Favourite list: </span>Enable users to save movies to a personalized
                            favouritelist.
                        </li>
                        <li>
                            <span className='font-semibold'>4. User Authentication:</span>Support for user accounts, including 
                                 login/signup functionality.
                                 Social media login options (Google).
                        </li>
                        <li>
                            <span className='font-semibold'>5. Update Info: </span>User can update the movie information.
                        </li>

                        <li>
                            <span className='font-semibold'>6. Celebrity Information: </span> user can see and explore there
                            favourite celebs new from here.(even they do not need to login/register)
                        </li>
                    </ul></p>

                <div className='space-y-4'>
                    <p className='font-bold text-lg'><span className=''>Live Site URL: </span>
                        <a href=" https://movie-flicknest.web.app/" target='blank' className='text-blue-600 underline'> https://movie-flicknest.web.app/ </a> </p>


                    <p className='font-bold text-lg'><span className=''>Client-side code GitHub repository: </span>
                        <a href="https://github.com/programming-hero-web-course2/b10-a10-client-side-Sajnin14" target='blank' className='text-blue-600 underline'>https://github.com/programming-hero-web-course2/b10-a10-client-side-Sajnin14 </a> </p>

                    <p className='font-bold text-lg'><span className=''>Server-side code GitHub repository : </span>
                        <a href="https://github.com/programming-hero-web-course2/b10-a10-server-side-Sajnin14" target='blank' className='text-blue-600 underline'>https://github.com/programming-hero-web-course2/b10-a10-server-side-Sajnin14 </a> </p>

                </div>

                <p className='my-5'><span className='font-bold text-lg'>Lackings: </span>
                    <ul>
                        <li>1. Privacy Concerns: Although privacy is emphasized, ensuring robust protection of user data and preventing breaches will be critical.</li>
                        <li>2. Email should be verified. But here email is not verified </li>
                        <li>3.Lack of Payment Gateway Information: Details about secure payment methods or gateways are not mentioned, which might deter users from making purchases.</li>
                        <li>4.User Authentication  </li>

                    </ul>
                </p>

            </div>


        </div>
    );
};

export default Flick;