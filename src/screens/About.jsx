import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-10 relative  text-gray-200 min-h-screen">
            {/* Download Resume Button */}
            <div className="absolute top-6 right-6">
                <a
                    href="/resume.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white border border-blue-500 px-6 py-3 rounded-md shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                    View Resume
                </a>
                {/* <a href="resume.pdf" className="text-white border mx-4 border-blue-500 px-6 py-3 rounded-md shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300">
                    Download Resume
                </a> */}
                <Link to="/contact" className="text-white border mx-4 border-blue-500 px-6 py-3 rounded-md shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300">
                    Contact Me
                </Link>
            </div>

            {/* Text content */}
            <div className="lg:w-2/3 text-center lg:text-left mt-12 lg:mt-0 lg:mx-14 space-y-6">
                <h1 className="text-5xl lg:text-6xl font-extrabold mb-4">
                    Hi, I'm <span className="text-blue-500">Sanju!</span>
                </h1>
                <p className="text-2xl lg:text-3xl font-light text-gray-400 leading-relaxed">
                    A web developer passionate about building dynamic, responsive, and intuitive web applications.
                    <span className="text-blue-500 font-poppins text-5xl lg:text-6xl block lg:inline-block mt-2">Turning ideas into reality with React and JavaScript.</span>
                </p>

                <p className="text-lg lg:text-xl text-slate-100 leading-relaxed">
                    With over a year of experience in JavaScript, React, and building modern web applications.
                    I specialize in creating smooth user interfaces and delivering clean, responsive designs. I am also expanding my knowledge in server-side technologies.
                </p>

                {/* Hobbies and Interests Section */}
                <h2 className="text-3xl font-semibold text-white mt-8">Hobbies and Interests</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    I’m always eager to explore new tools and frameworks in the web development space. When I’m not coding, I enjoy reading tech blogs, cooking, and travelling.
                </p>

                {/* Career Goals Section */}
                <h2 className="text-3xl font-semibold text-gray-200 mt-8">Career Goals</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    My goal is to deepen my expertise in front-end development while becoming proficient in back-end technologies. I aim to create comprehensive, full-stack solutions that combine great design with robust functionality.
                </p>
            </div>
        </div>
    );
};

export default About;
