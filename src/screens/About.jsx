import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-10 relative text-gray-200 min-h-screen">
            {/* Download Resume and Contact Button */}
            <div className="absolute top-6 right-6">
                <a
                    href="/resume.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white border border-blue-500 px-6 py-3 rounded-md shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                    View Resume
                </a>
                <Link to="/contact" className="text-white border mx-4 border-blue-500 px-6 py-3 rounded-md shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300">
                    Contact Me
                </Link>
            </div>

            {/* Main Content */}
            <div className="lg:w-2/3 text-center lg:text-left mt-12 lg:mt-0 lg:mx-14 space-y-6">
                <h1 className="text-5xl lg:text-6xl font-extrabold mb-4">
                    Hello, I'm <span className="text-blue-500">Sanju</span>
                </h1>
                <p className="text-xl lg:text-2xl font-light text-gray-400 leading-relaxed">
                    A dedicated web developer specializing in creating responsive, intuitive web applications using React and JavaScript.
                </p>

                <p className="text-lg lg:text-xl text-slate-100 leading-relaxed">
                    With over a year of experience, I focus on clean, user-centered interfaces and seamless user experiences. I’m also enhancing my skills in full-stack development.
                </p>

                {/* Hobbies and Interests Section */}
                <h2 className="text-2xl font-semibold text-white mt-8">Hobbies & Interests</h2>
                <p className="text-lg text-gray-300">
                    Outside of coding, I enjoy exploring new tech, cooking, and traveling.
                </p>

                {/* Career Goals Section */}
                <h2 className="text-2xl font-semibold text-gray-200 mt-8">Career Goals</h2>
                <p className="text-lg text-gray-300">
                    My goal is to master full-stack development, integrating design and functionality to build complete web solutions.
                </p>
            </div>
        </div>
    );
};

export default About;
