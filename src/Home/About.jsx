
const About = () => {
    return (
        <div id="about" className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/5 p-4">
                <img src="https://i.ibb.co.com/cT0x0Mq/andrew-neel-ute2-XAFQU2-I-unsplash.jpg" className="w-full rounded m-4 h-96 border-t-4 border-r-4 pt-4 pr-4 border-[#2E2568] shadow-xl" />
            </div>

            <div className="md:w-3/5 p-4">
                <h3 className="text-4xl font-bold text-[#2E2568] my-3">About Me</h3>
                <p> <span className="font-semibold">Hi, I&#8217;m Sajnin Akhter Saima</span>, a passionate frontend web developer dedicated to crafting beautiful, user-friendly websites and applications. I specialize in transforming ideas into interactive, responsive, and engaging digital experiences using modern technologies like HTML, CSS, JavaScript, and React. With an eye for design and a commitment to clean code, I aim to create web solutions that not only look great but perform seamlessly. Let’s build something amazing together!</p>

                <div className="my-4 text-lg">
                    <p><span className="font-bold text-[#2E2568]">Name:</span> Mst. Sajnin Akhter Saima</p>
                    <p><span className="font-bold text-[#2E2568]">Education:</span> Completed BSC in CSE.</p>
                    <p><span className="font-bold text-[#2E2568]">Nationality:</span> Bangladeshi</p>
                    <p><span className="font-bold text-[#2E2568]">Interests:</span> Web Development, Reading Books, Travelling, Gardening, Painting</p>
                    <p><span className="font-bold text-[#2E2568]">Address:</span> Dhaka, Bangladesh</p>
                    <p><span className="font-bold text-[#2E2568]">Email:</span> sajninsaima@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default About;