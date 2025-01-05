import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaFacebookSquare, FaPhoneAlt, FaWhatsappSquare } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_k5motwr', 'template_i81ov5p', form.current, {
                publicKey: 'NPhAW9us6ePCIKkCB',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <div id='contact'>
            <h3 className="text-center text-4xl font-bold text-[#2E2568] my-4">Contact Me</h3>

            {/* for direct sending mail */}
            <div className='my-7 grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <form ref={form} onSubmit={sendEmail}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="user_name" placeholder="your name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="your email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>

                        <textarea name="message" rows='2' className="border rounded-lg p-4" placeholder='type your message' required></textarea>

                    </div>

                    <div className="form-control mt-6">
                        <input type="submit" value="Send" className='btn bg-[#2E2568] text-white' />
                    </div>
                </form>


                {/* for adding others contacting info */}
                <div className='p-10 flex flex-col justify-center space-y-6 border-b-2 border-l-2 border-[#2E2568] mr-10 mt-5 shadow-2xl'>
                    <div className='flex items-center gap-3'>
                        <BiLogoGmail className='text-3xl text-red-700' />
                        <p>sajninsaima@gmail.com</p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <FaPhoneAlt className='text-2xl text-green-700' />
                        <p>+88 01705896244</p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <FaLocationDot className='text-3xl text-red-600' />
                        <p>Dhaka, Bangladesh</p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <FaFacebookSquare className='text-2xl text-blue-700' />
                        <p>https://www.facebook.com/saima.sajnin.9/</p>
                    </div>

                    <div className='flex items-center gap-3'>
                        <FaWhatsappSquare className='text-2xl text-green-700' />
                        <p>+88 01705896244</p>
                    </div>




                </div>


            </div>


        </div>
    );
};

export default Contact;