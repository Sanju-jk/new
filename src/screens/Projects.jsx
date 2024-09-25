import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../ThemeContext'; // Import the context

const Projects = () => {
    const { theme } = useContext(ThemeContext); // Get the current theme
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
            github: '' // GitHub link
        },
        {
            title: 'GoFood',
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
            description: 'A personal portfolio website built with React and Tailwind CSS.',
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
        <div className={`${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'} min-h-screen`}>

            <div className={`max-w-5xl mx-auto p-8 ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-white'} relative`}>
                <h1 className={`text-4xl font-bold font-poppins mb-12 text-center  ${theme === 'light' ? 'text-dark' : 'text-gray-200'}`}>
                    <i className={`fa fa-diagram-project  ${theme === 'light' ? 'text-blue-700' : 'text-teal-400'}`}></i> Projects
                </h1>

                <div className="relative flex justify-center items-center">
                    {/* Previous Button */}
                    <button
                        onClick={handlePrevious}
                        className={`absolute left-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} hover:text-teal-300 transition duration-300`}
                        style={{ fontSize: '3rem', zIndex: 10 }}
                    >
                        &#8249;
                    </button>

                    {/* Project Card */}
                    <div className={`w-full max-w-lg mx-auto px-4 overflow-hidden relative ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'} text-gray-300 shadow-md`} style={{ height: '450px' }}>
                        <div
                            className={`flex transition-transform duration-300 ${animateDirection === 'left' ? 'animate-fade-left' : animateDirection === 'right' ? 'animate-fade-right' : ''}`}
                        >
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 w-full rounded-lg ${index === currentIndex ? 'block' : 'hidden'} ${theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-800 text-gray-300'}`}
                                >
                                    <div className={`w-full h-40 ${theme === 'light' ? 'bg-gray-300' : 'bg-gray-700'} border border-gray-600 rounded-lg mx-auto`}>
                                        <h3 className={`text-3xl mt-4 font-poppins font-bold text-center  ${theme === 'light' ? 'text-dark' : 'text-teal-400'}`}>
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

                                    <div className={`p-4 text-center ${theme === 'light' ? 'bg-gray-200 text-gray-800' : 'bg-gray-800 text-gray-300'}`}>
                                        <p className={`text-lg mb-2 text-left mx-6`}>
                                            {project.description}
                                        </p>

                                        <p className={`text-md  mb-2 mx-6 text-left  ${theme === 'light' ? 'text-blue-700' : 'text-teal-400'}`}>
                                            Features
                                        </p>
                                        <ul className={`list-none p-0 m-0  grid grid-cols-2 gap-2 ${theme === 'light' ? 'text-gray-900' : 'text-gray-400'}`}>
                                            {project.features.map((feature, index) => (
                                                <li key={index} className="flex items-center text-sm">
                                                    <svg
                                                        className={`w-4 h-4 mr-2 ${theme === 'light' ? 'text-blue-700' : 'text-teal-400'}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
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
                                                    className={` hover:underline hover:text-teal-200 flex items-center justify-center ${theme === 'light' ? 'text-blue-700' : 'text-teal-400'}`}
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
                        className={`absolute right-10 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} hover:text-teal-300 transition duration-300`}
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
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? (theme === 'light' ? 'bg-blue-700 w-6' : 'bg-teal-400 w-6')  // Active dot color
                                    : (theme === 'light' ? 'bg-gray-400' : 'bg-gray-600')  // Inactive dot color
                                }`} />
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
        </div>
    );
};

export default Projects;
