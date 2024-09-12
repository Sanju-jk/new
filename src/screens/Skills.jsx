import React from 'react';

const skills = [
    {
        skill: "JavaScript",
        description: 'Knowledge in ES6+, asynchronous programming, and DOM manipulation.',
        progress: 75,
        color: 'text-yellow-500',
        icon: 'fa-brands fa-js'
    },
    {
        skill: "React",
        description: 'Experience with hooks, components, and state management.',
        progress: 80,
        color: 'text-blue-500',
        icon: 'fa-brands fa-react'
    },
    {
        skill: "Node.js",
        description: 'Knowledge of server frameworks and APIs.',
        progress: 70,
        color: 'text-green-500',
        icon: 'fa-brands fa-node-js'
    },
    {
        skill: "HTML",
        description: 'Proficient in HTML5 and semantic HTML.',
        progress: 85,
        color: 'text-orange-500',
        icon: 'fa-brands fa-html5'
    },
    {
        skill: "CSS",
        description: 'Knowledge of CSS3, Flexbox, Grid, and responsive design.',
        progress: 80,
        color: 'text-blue-500',
        icon: 'fa-brands fa-css3-alt'
    },
    {
        skill: "Express.js",
        description: 'Knowledge of routing, middleware, and building RESTful APIs.',
        progress: 65,
        color: 'text-black',
        icon: 'fa-brands fa-node-js'  // Using Node.js icon as placeholder
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
        icon: 'fa fa-database' // Using CSS3 icon as placeholder
    },
    {
        skill: "Bootstrap",
        description: 'Knowledge in developing responsive and mobile-first websites.',
        progress: 75,
        color: 'text-info',
        icon: 'fa-brands fa-bootstrap'
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
    }
];

function Skills() {
    return (
        <div className="min-h-screen p-4">
            <h1 className="text-4xl font-poppins text-center text-gray-200 mb-8 mt-3"> Technical Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-slate-100 p-4 rounded-xl  flex flex-col items-center"
                    >
                        {/* Skill Icon */}
                        <i className={`${skill.icon} ${skill.color} text-4xl mb-4  bg-slate-100 `}></i>
                        <p className="text-center text-gray-700 mb-4 font-semibold">{skill.skill}</p>
                        <p className="text-center text-gray-600 mb-4">{skill.description}</p>
                        
                        {/* Progress Bar */}
                        <div className="w-full mt-auto">
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <div className="text-xs font-medium text-purple-600">{`${skill.progress}%`}</div>
                                </div>
                                <div className="flex h-2 mb-4 overflow-hidden text-xs flex rounded bg-gray-200">
                                    <div
                                        style={{ width: `${skill.progress}%` }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-400"
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
