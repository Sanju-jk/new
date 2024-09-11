import React, { useState } from 'react';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Start with the first card

    const projects = [
        {
            title: 'Project 1',
            description: 'Description of Project 1',
            features: ['Feature 1', 'Feature 2'],
            image: 'https://via.placeholder.com/300',
        },
        {
            title: 'Project 2',
            description: 'Description of Project 2',
            features: ['Feature 1', 'Feature 2'],
            image: 'https://via.placeholder.com/300',
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
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="max-w-6xl mx-auto p-8 text-white">
            <h1 className="text-4xl font-bold mb-10 text-center">Projects</h1>

            {/* Carousel Container */}
            <div className="relative">
                {/* Previous Button */}
                <button
                    onClick={handlePrevious}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
                    style={{ fontSize: '2rem' }}
                >
                    &#8249;
                </button>

                {/* Carousel Items Container */}
                <div className="overflow-hidden relative">
                    <div className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-80 mx-auto bg-gray-800 text-white rounded-lg p-4 border border-gray-600"
                                style={{
                                    transform: index === currentIndex ? 'scale(1.1)' : 'scale(1)',
                                    opacity: index === currentIndex ? 1 : 0.8,
                                }}
                            >
                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-40 w-full object-cover rounded-t-lg mb-4 border-b border-gray-600"
                                />
                                {/* Title */}
                                <h3 className="text-lg font-bold mb-2 text-center">{project.title}</h3>
                                {/* Description */}
                                <p className="text-gray-300 mb-4 text-sm text-center">{project.description}</p>
                                {/* Features */}
                                <ul className="list-disc list-inside text-gray-400 mb-6 text-sm text-center">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
                    style={{ fontSize: '2rem' }}
                >
                    &#8250;
                </button>

                {/* Carousel Bubbles */}
                <div className="flex justify-center space-x-2 mt-8">
                    {projects.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500 w-6' : 'bg-gray-500'} transition-all duration-300`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
