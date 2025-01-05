
import simage from '../../assets/image1.jpeg'
import './Navbar.css'
const Navbar = () => {
    const links = <>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact Me</a></li>
    </>
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50 p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="w-10 rounded-full">
                    <img
                        className="rounded-full"
                        src={simage} />

                </div>
                <a className="ml-2 text-2xl font-semibold text-[#2E2568]">Sajnin</a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="border-2 border-[#2E2568] text-[#2E2568] font-bold py-2 px-3 rounded-lg" href='https://drive.google.com/file/d/1hI_h8bzkFLQOsycfwMV3Vj6YXeg2eNLo/view?usp=sharing' target='blank'>View Resume</a>
            </div>
        </div>
    );
};

export default Navbar;