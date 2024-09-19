import React, { useState, useEffect } from 'react';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animateDirection, setAnimateDirection] = useState('');

    const projects = [
        {
            title: 'Admin Panel | EasyToHire',
            description: 'Developed an admin panel for the EasyToHire recruitment platform using React and Bootstrap during a course at Infocampus. The panel allows admins to manage job listings, user accounts, and applications.',
            features: ['Job Listing Management', 'User Account Management', 'Application Tracking'],
            technologies: [
              { name: 'React', iconClass: 'fab fa-react', color: '#61DBFB' },
              { name: 'Bootstrap', iconClass: 'fab fa-bootstrap', color: '#563d7c' }
            ],
            github: '' // You can add a GitHub link if applicable
          },
        {
            title: 'Foodify',
            description: 'A fullstack food app built using React, Express, and MongoDB.',
            features: ['Registration/Login', 'JWT Authentication', 'Cart System', 'View Past Orders'],
            technologies: [
                { name: 'React', iconClass: 'fab fa-react', color: '#61DBFB' },
                { name: 'Node.js', iconClass: 'fab fa-node', color: '#3C873A' },
                { name: 'Express.js', iconClass: 'fas fa-server', color: '#666666' },
                { name: 'MongoDB', iconClass: 'fas fa-database', color: '#4DB33D' }
            ],
            github: 'https://github.com/your-repo/foodify'
        },
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio website built with React and Tailwind Css. It features a modern design and a responsive layout.',
            features: ['Sidebar Navigation Menu', 'Contact Form', 'Carousel for Project Showcase'],
            technologies: [
                { name: 'React', iconClass: 'fab fa-react', color: '#61DBFB' }
            ],
            github: 'https://github.com/your-repo/portfolio'
        }

    ];

    const handlePrevious = () => {
        setAnimateDirection('left');
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setAnimateDirection('right');
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    useEffect(() => {
        if (animateDirection) {
            const timer = setTimeout(() => setAnimateDirection(''), 300);
            return () => clearTimeout(timer);
        }
    }, [currentIndex]);

    return (
        <div className="max-w-5xl mx-auto p-8 text-white relative">
            <h1 className="text-4xl font-bold font-poppins mb-12 text-center text-gray-300">
                <i className='fa fa-diagram-project text-teal-500'></i> Projects
            </h1>

            <div className="relative flex justify-center items-center">
                {/* Previous Button */}
                <button
                    onClick={handlePrevious}
                    className="absolute left-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-gray-400 hover:text-teal-400 transition duration-300"
                    style={{ fontSize: '3rem', zIndex: 10 }}
                >
                    &#8249;
                </button>

                {/* Project Card */}
                <div className="w-full max-w-lg mx-auto px-4 overflow-hidden relative">
                    <div
                        className={`flex transition-transform duration-300 ${animateDirection === 'left' ? 'animate-fade-left' : animateDirection === 'right' ? 'animate-fade-right' : ''}`}
                    >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 w-full rounded-lg ${index === currentIndex ? 'block' : 'hidden'} bg-gray-800 text-gray-200 shadow-lg`}
                                style={{ height: '450px' }}
                            >
                                <div className="w-full h-40 bg-gray-900 border border-gray-700 rounded-lg mx-auto">
                                    <h3 className="text-3xl mt-4 font-poppins font-bold text-center text-teal-400">
                                        {project.title}
                                    </h3>

                                    {/* Technology Icons */}
                                    <div className="flex justify-center mt-4 space-x-8">
                                        {project.technologies.map((tech, index) => (
                                            <i
                                                key={index}
                                                className={`${tech.iconClass} text-4xl`}
                                                style={{ color: tech.color }}
                                                title={tech.name}
                                            ></i>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-4 bg-gray-800 text-center">
                                    <p className="text-lg text-gray-400 mb-2 text-left mx-6">
                                        {project.description}
                                    </p>

                                    <p className="text-md text-teal-400 mb-2 mx-6 text-left">
                                        Features
                                    </p>
                                    <ul className="list-none p-0 m-0 text-gray-400 grid grid-cols-2 gap-2">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-sm">
                                                <svg className="w-4 h-4 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* GitHub Link */}
                                    {project.github && (
                                        <div className="mt-10">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-teal-400 hover:underline hover:text-white flex items-center justify-center"
                                            >
                                                <i className="fab fa-github mr-2"></i>
                                                View GitHub Repo
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="absolute right-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-gray-400 hover:text-teal-400 transition duration-300"
                    style={{ fontSize: '3rem', zIndex: 10 }}
                >
                    &#8250;
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-6">
                {projects.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-teal-400 w-6' : 'bg-gray-600'} transition-all duration-300`}
                    />
                ))}
            </div>

            <style jsx>{`
                @keyframes fade-left {
                    0% { opacity: 0; transform: translateX(50%); }
                    100% { opacity: 1; transform: translateX(0); }
                }

                @keyframes fade-right {
                    0% { opacity: 0; transform: translateX(-50%); }
                    100% { opacity: 1; transform: translateX(0); }
                }

                .animate-fade-left {
                    animation: fade-left 0.3s ease-in-out;
                }

                .animate-fade-right {
                    animation: fade-right 0.3s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default Projects;
