import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between p-10 relative">
            {/* Optional image section */}
            {/* <div className="lg:w-1/3 mb-8 lg:mb-0">
                <img src="path_to_your_image.jpg" alt="Sanju" className="rounded-full shadow-lg" />
            </div> */}

            {/* Buttons on the top right */}
            <div className="absolute top-6 right-6 mx-12">
                <a href="resume.pdf" className="text-purple-500 border border-purple-500 px-6 py-3 rounded-md shadow hover:bg-slate-200 transition duration-300">
                    Download Resume
                </a>
                {/* <a href="#contact" className="text-purple-500 border border-purple-500 px-6 py-3 rounded-md ml-4 hover:bg-slate-200 transition duration-300">
                    Contact Me
                </a> */}
            </div>

            {/* Text content */}
            <div className="lg:w-2/3 text-center lg:text-left mx-14">
                <h1 className="text-4xl text-gray-200 font-bold mb-4">Hi, I'm Sanju!</h1>
                <span className=" text-lg text-gray-400 mb-4 " style={{fontSize:50}}>Crafting seamless digital experiences, <font className='text-purple-600  text-7xl font-poppins'>one line of code at a time.</font></span>

                <p className="text-lg text-gray-300 mb-6 ">
                    A passionate front-end developer with over a year of experience in building beautiful and
                    responsive web applications. I specialize in creating seamless user experiences using React
                    and Tailwind CSS, while also being proficient in the MERN stack.
                </p>
                <p className="text-lg text-gray-600">
                    I'm always eager to learn new technologies, build creative solutions, and collaborate with
                    teams on impactful projects. Let's connect and create something awesome together!
                </p>
            </div>
        </div>
    );
}

export default About;
