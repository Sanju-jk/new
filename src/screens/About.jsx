import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between p-10 relative">
            {/* Buttons on the top right */}
            <div className="absolute top-6 right-6 mx-12">
                <a href="resume.pdf" className="text-purple-500 border border-purple-500 px-6 py-3 rounded-md shadow hover:bg-slate-200 transition duration-300">
                    Download Resume
                </a>
            </div>

            {/* Text content */}
            <div className="lg:w-2/3 text-center lg:text-left mx-14">
                <h1 className="text-4xl text-gray-200 font-bold mb-4">Hi, I'm Sanju!</h1>
                <span className="text-lg text-gray-400 mb-4" style={{ fontSize: 50 }}>
                    Crafting seamless digital experiences, <font className='text-purple-600 text-7xl font-poppins'>one line of code at a time.</font>
                </span>

                <p className="text-lg text-gray-300 mb-6">
                    A passionate front-end developer with over a year of experience in building beautiful and
                    responsive web applications. I specialize in creating seamless user experiences using React
                    and Tailwind CSS, while also being proficient in the MERN stack.
                </p>
                
                {/* Hobbies and Interests */}
                <h2 className="text-2xl text-gray-200 font-bold mb-2">Hobbies and Interests</h2>
                <p className="text-lg text-gray-300 mb-4">
                    I love exploring new technologies, staying updated with the latest in the tech world, and
                    experimenting with creative coding projects. Outside of coding, I enjoy reading, hiking,
                    and spending time with my dog Roxy.
                </p>

                {/* Career Goals */}
                <h2 className="text-2xl text-gray-200 font-bold mb-2">Career Goals</h2>
                <p className="text-lg text-gray-600">
                    My goal is to become a versatile software engineer, proficient in both front-end and back-end development. 
                    I'm also keen to dive deeper into system design and cloud technologies. I aspire to create impactful software 
                    solutions that drive positive change in the world.
                </p>
            </div>
        </div>
    );
};

export default About;
