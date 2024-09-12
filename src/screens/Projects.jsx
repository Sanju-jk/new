import React, { useState, useEffect } from 'react';

//images for projects
// import portfolioImage from './assets/images/portfolio.jpg'; 




const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animateDirection, setAnimateDirection] = useState('');

    const projects = [
        {
            title: 'Foodify',
            description: 'A food delivery app built using the MERN stack.',
            features: ['Registration/Login', 'JWT Authentication', 'Cart System', 'View Past Orders'],
            image: 'https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=600', // Free image of food delivery
        },

        {
            title: 'Portfolio Website',
            description: 'A personal portfolio website built with React. It features a modern design and a responsive layout.',
            features: [
                'Sidebar Navigation Menu',
                'Contact Form',
                'Carousel for Project Showcase'
            ],
            image: "", // Free image of a modern workspace
        },
        {
            title: 'Project 3',
            description: 'Description of Project 3',
            features: ['Feature 1', 'Feature 2'],
            image: 'https://via.placeholder.com/300',
        },
        {
            title: 'Project 4',
            description: 'Description of Project 4',
            features: ['Feature 1', 'Feature 2'],
            image: 'https://via.placeholder.com/300',
        },
        {
            title: 'Project 5',
            description: 'Description of Project 5',
            features: ['Feature 1', 'Feature 2'],
            image: 'https://via.placeholder.com/300',
        },
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
            const timer = setTimeout(() => setAnimateDirection(''), 500);
            return () => clearTimeout(timer);
        }
    }, [currentIndex]);

    return (
        <div className="max-w-7xl  mx-auto p-8 text-white relative">
            <h1 className="text-4xl font-poppins mb-10 text-center">Projects</h1>

            <div className="relative flex justify-center  items-center">
                {/* Previous Button */}
                <button
                    onClick={handlePrevious}
                    className=" absolute left-16 top-1/2 transform -translate-y-1/2 p-4 rounded-full hover:text-purple-600 text-white  transition"
                    style={{ fontSize: '8rem', zIndex: 10 }}
                >
                    &#8249;
                </button>

                {/* Project Card */}
                <div className="w-full max-w-lg mx-auto px-4 overflow-hidden relative" >
                    <div
                        className={`flex transition-transform duration-500 ${animateDirection === 'left' ? 'animate-slide-left' : animateDirection === 'right' ? 'animate-slide-right' : ''}`}
                        style={{ width: '100%' }}
                    >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 w-full ${index === currentIndex ? 'block' : 'hidden'} bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg`}
                                style={{ height: '400px' }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-11/12 h-48 object-cover rounded-xl mx-auto"
                                />
                                <div className="p-4 flex flex-col text-center">
                                    <h3 className="text-xl font-bold mb-2 text-center">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-green-300 mb-2 text-center">
                                        {project.description}
                                    </p>
                                    <p className="text-lg text-purple-500 mb-2 text-left mx-6">
                                        Features
                                    </p>
                                    <ul className="list-none p-0 m-0  text-gray-400 grid grid-cols-2 gap-4">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="flex items-center text-sm ">
                                                <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="absolute right-16 top-1/2 transform -translate-y-1/2 p-4 hover:text-purple-600  text-white  transition"
                    style={{ fontSize: '8rem', zIndex: 10 }}
                >
                    &#8250;
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 mt-8">
                {projects.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-purple-500 w-6' : 'bg-gray-500'} transition-all duration-300`}
                    />
                ))}
            </div>

            <style jsx>{`
                @keyframes slide-left {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(0); }
                }

                @keyframes slide-right {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(0); }
                }

                .animate-slide-left {
                    animation: slide-left 0.5s ease-in-out;
                }

                .animate-slide-right {
                    animation: slide-right 0.5s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default Projects;
