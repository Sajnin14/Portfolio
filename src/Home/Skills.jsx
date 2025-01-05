
import html from '../assets/html5-emblem-orange-shield-and-white-text-vector.jpg';
import css from '../assets/CSS-Logo-2011.png';
import boot from '../assets/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail.png';
import tailwind from '../assets/Tailwind_CSS_Logo.svg.png';
import java from '../assets/JavaScript-Logo.png';
import c from '../assets/cprogramming.png';
import react from '../assets/react.png';
import mongo from '../assets/png-transparent-mongodb-plain-wordmark-logo-icon.png';
import daisy from '../assets/images.png';
import node from '../assets/images (1).png';
import c2 from '../assets/c++.png';


const Skills = () => {
    return (
        <div id='skills'>
            <h3 className="text-center text-4xl font-bold text-[#2E2568] my-4">Professional Skills</h3>
            <p className='w-1/2 mx-auto text-center'>Passionate about creating responsive, interactive websites and scalable applications using modern web technologies.</p>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">

                <div className=" text-center rounded-xl border border-[#2E2568] shadow-xl hover:scale-x-105 overflow-hidden p-3 ">
                    <img src={html} className="w-24 mx-auto" />
                    <p className="text-xl font-bold text-[#2E2568]">HTML</p>
                    <p>Proficient in leveraging HTML5 for modern, responsive, and interactive web design.</p>
                </div>

                <div className=" text-center rounded-xl border border-[#2E2568] shadow-xl hover:scale-x-105 overflow-hidden p-3 ">
                    <img src={css} className="w-24 mx-auto" />
                    <p className="text-xl font-bold text-[#2E2568]">CSS</p>
                    <p>Proficient in styling and creating responsive, visually engaging designs for websites.</p>
                </div>

                <div className=" text-center rounded-xl border border-[#2E2568] shadow-xl hover:scale-x-105 overflow-hidden p-3 ">
                    <img src={boot} className="w-24 mx-auto" />
                    <p className="text-xl font-bold text-[#2E2568]">BootStrap</p>
                    <p>Skilled in using Bootstrap to build responsive, mobile-first websites with pre-designed components.</p>
                </div>

                <div className=" text-center rounded-xl border border-[#2E2568] shadow-xl hover:scale-x-105 overflow-hidden p-3 ">
                    <img src={tailwind} className="w-24 mx-auto" />
                    <p className="text-xl font-bold text-[#2E2568]">Tailwind CSS</p>
                    <p> Proficient in using Tailwind CSS to create custom, responsive designs with utility-first classes.</p>
                </div>

                <div className=" text-center rounded-xl border border-[#2E2568] shadow-xl hover:scale-x-105 overflow-hidden p-3 ">
                    <img src={daisy} className="w-24 mx-auto" />
                    <p className="text-xl font-bold text-[#2E2568]">daisyUi</p>
                    <p>Experienced in leveraging DaisyUI for creating beautifully styled components with Tailwind CSS simplicity.</p>
                </div>

                <div className=" text-center rounded-xl border border-[#2E2568] shadow-xl hover:scale-x-105 overflow-hidden p-3 ">
                    <img src={java} className="w-24 mx-auto" />
                    <p className="text-xl font-bold text-[#2E2568]">JavaScript</p>
                    <p>Skilled in writing dynamic and interactive functionality for websites and applications.</p>
                </div>

                <div className=" text-center rounded-xl border border-[#2E2568] shadow-xl hover:scale-x-105 overflow-hidden p-3 ">
                    <img src={c} className="w-24 mx-auto" />
                    <p className="text-xl font-bold text-[#2E2568]">C programming</p>
                    <p>Proficient in writing efficient and optimized code for system-level programming and problem-solving.</p>
                </div>

                <div className=" text-center rounded-xl border border-[#2E2568] shadow-xl hover:scale-x-105 overflow-hidden p-3 ">
                    <img src={react} className="w-24 mx-auto" />
                    <p className="text-xl font-bold text-[#2E2568]">React</p>
                    <p>Experienced in building dynamic, responsive user interfaces and single-page applications using React.</p>
                </div>

                <div className=" text-center rounded-xl border border-[#2E2568] shadow-xl hover:scale-x-105 overflow-hidden p-3 ">
                    <img src={node} className="w-24 mx-auto" />
                    <p className="text-xl font-bold text-[#2E2568]">nodeJS</p>
                    <p>Proficient in building scalable, server-side applications and APIs using Node.js.</p>
                </div>

                <div className=" text-center rounded-xl border border-[#2E2568] shadow-xl hover:scale-x-105 overflow-hidden p-3 ">
                    <img src={mongo} className="w-24 mx-auto" />
                    <p className="text-xl font-bold text-[#2E2568]">MongoDB</p>
                    <p>Skilled in working with MongoDB to design, query, and manage NoSQL databases for modern applications.</p>
                </div>

                <div className=" text-center rounded-xl border border-[#2E2568] shadow-xl hover:scale-x-105 overflow-hidden p-3 ">
                    <img src={c2} className="w-24 mx-auto" />
                    <p className="text-xl font-bold text-[#2E2568]">C++</p>
                    <p>Have basic knowledgeand idea about C++ and object oriented programming</p>
                </div>








            </div>
        </div>
    );
};

export default Skills;