import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext'; // Import the context

const skills = [
    {
        skill: "React",
        description: 'Experience with hooks, components, and state management.',
        color: 'text-blue-400',
        icon: 'fa-brands fa-react'
    },
    {
        skill: "JavaScript",
        description: 'Knowledge in ES6+, asynchronous programming, and DOM manipulation.',
        color: 'text-yellow-400',
        icon: 'fa-brands fa-js'
    },
    {
        skill: "Node.js",
        description: 'Knowledge of server frameworks and APIs.',
        color: 'text-green-400',
        icon: 'fa-brands fa-node-js'
    },
    {
        skill: "Express.js",
        description: 'Knowledge of routing, middleware, and building RESTful APIs.',
        color: 'text-gray-300',
        icon: 'fa-brands fa-node-js'
    },
    {
        skill: "MongoDB",
        description: 'Knowledge of data modeling and CRUD operations. Familiar with schema definitions, validation, and querying using Mongoose.',
        color: 'text-green-500',
        icon: 'fa-solid fa-database'
    },
    {
        skill: "Roku",
        description: 'Experience with Roku’s development environment and APIs for TV App development.',
        color: 'text-purple-500',
        icon: 'fa-solid fa-tv'
    },
    {
        skill: "Git",
        description: 'Knowledge of version control, branching, merging, and pull requests.',
        color: 'text-red-500',
        icon: 'fa fa-code-branch'
    },
    {
        skill: "Bootstrap",
        description: 'Knowledge in developing responsive and mobile-first websites.',
        color: 'text-indigo-500',
        icon: 'fa-brands fa-bootstrap'
    },
    {
        skill: "CSS",
        description: 'Knowledge of CSS3, Flexbox, Grid, and responsive design.',
        color: 'text-blue-400',
        icon: 'fa-brands fa-css3-alt'
    },
    {
        skill: "HTML",
        description: 'Proficient in HTML5 and semantic HTML.',
        color: 'text-orange-400',
        icon: 'fa-brands fa-html5'
    }
];

function Skills() {
    const { theme } = useContext(ThemeContext); // Get the current theme

    return (
        <div className={`${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'} min-h-screen p-8`}>
            <h1 className={`text-4xl font-bold text-center mb-12 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                <i className={`fa fa-code ${theme === 'light' ? 'text-blue-600' : 'text-blue-400'}`}></i> Technical Skills
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} p-6 rounded-lg shadow-lg hover:${theme === 'light' ? 'bg-gray-100' : 'bg-gray-700'} transition transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center`}
                    >
                        {/* Skill Icon */}
                        <i className={`${skill.icon} ${skill.color} text-5xl mb-4`}></i>
                        <p className={`text-xl font-semibold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{skill.skill}</p>
                        <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} text-center`}>{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
