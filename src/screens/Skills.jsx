import React from 'react';

const skills = [
    {
        skill: "React",
        description: 'Experience with hooks, components, and state management.',
        progress: 80,
        color: 'text-blue-500',
        icon: 'fa-brands fa-react'
    },
    {
        skill: "JavaScript",
        description: 'Knowledge in ES6+, asynchronous programming, and DOM manipulation.',
        progress: 75,
        color: 'text-yellow-500',
        icon: 'fa-brands fa-js'
    },
    {
        skill: "Node.js",
        description: 'Knowledge of server frameworks and APIs.',
        progress: 70,
        color: 'text-green-500',
        icon: 'fa-brands fa-node-js'
    },

    {
        skill: "Express.js",
        description: 'Knowledge of routing, middleware, and building RESTful APIs.',
        progress: 65,
        color: 'text-black',
        icon: 'fa-brands fa-node-js'
    },
    {
        skill: "MongoDB",
        description: 'Knowledge of data modeling and CRUD operations.',
        progress: 60,
        color: 'text-green-500',
        icon: 'fa-solid fa-database'
    },
    {
        skill: "Mongoose",
        description: 'Knowledge of schema definitions, validation, and querying.',
        progress: 70,
        color: 'text-red-600',
        icon: 'fa fa-database'
    },

    {
        skill: "Roku",
        description: 'Experience with Roku’s development environment and APIs for TV App development.',
        progress: 50,
        color: 'text-purple-500',
        icon: 'fa-solid fa-tv'
    },
    {
        skill: "Git",
        description: 'Knowledge of branching, merging, and pull requests.',
        progress: 80,
        color: 'text-red-600',
        icon: 'fa fa-code-branch'
    },
    {
        skill: "Bootstrap",
        description: 'Knowledge in developing responsive and mobile-first websites.',
        progress: 75,
        color: 'text-info',
        icon: 'fa-brands fa-bootstrap'
    },
    {
        skill: "CSS",
        description: 'Knowledge of CSS3, Flexbox, Grid, and responsive design.',
        progress: 80,
        color: 'text-blue-500',
        icon: 'fa-brands fa-css3-alt'
    },
    {
        skill: "HTML",
        description: 'Proficient in HTML5 and semantic HTML.',
        progress: 85,
        color: 'text-orange-500',
        icon: 'fa-brands fa-html5'
    }
];

function Skills() {
    return (
        <div className="min-h-screen p-6 bg-gray-900">
            <h1 className="text-5xl font-bold text-center text-white mb-12">Technical Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center"
                    >
                        {/* Skill Icon */}
                        <i className={`${skill.icon} ${skill.color} text-5xl mb-4`}></i>
                        <p className="text-xl font-semibold text-white mb-2">{skill.skill}</p>
                        <p className="text-gray-400 text-center mb-6">{skill.description}</p>
                        
                        {/* Progress Bar */}
                        <div className="w-full mt-auto">
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <div className="text-sm font-medium text-gray-300">{`${skill.progress}%`}</div>
                                </div>
                                <div className="h-2 bg-gray-700 rounded-full">
                                    <div
                                        style={{ width: `${skill.progress}%` }}
                                        className="h-full rounded-full bg-gradient-to-r from-green-400 to-green-600"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
