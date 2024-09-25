// Sidebar.js
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext'; // Import the context

const Sidebar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); // Get theme and toggle function


    return (
        <div className={`h-screen ${theme === 'dark' ? 'bg-neutral-900 text-white' : 'bg-white text-black'} w-64 fixed shadow-lg`}>

            {/* Profile Image */}
            <div className="p-6 text-center">
                <img
                    src='https://images.pexels.com/photos/7534339/pexels-photo-7534339.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                    alt='Profile'
                    className='h-36 w-36 rounded-full mx-auto border-4 border-gray-700 shadow-lg'
                />
                <h2 className="text-2xl mt-4 font-semibold">Sanju Jaikumar</h2>
                <p className="text-sm text-gray-400">Front-end Developer</p>
                <hr className="mt-4 border-blue-500" />
            </div>

            {/* Navigation Links */}
            <nav className="mt-6">
                <ul className="text-lg  space-y-6 mx-16">
                    {[
                        { to: "/", label: "About", icon: "fa-user" },
                        { to: "/experience", label: "Experience", icon: "fa-briefcase" },
                        { to: "/skills", label: "Skills", icon: "fa-code" },
                        { to: "/projects", label: "Projects", icon: "fa-diagram-project" },
                    ].map(({ to, label, icon }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    isActive ? "text-blue-500 font-semibold" : "hover:text-blue-400"
                                }
                            >
                                <i className={`fa-solid ${icon} mr-3`}></i> {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>



            {/* Social Links */}
            <div className='mt-auto mb-6 p-6'>
                <hr className="border-blue-500 mb-6 mt-4" />
                <div className='flex justify-center space-x-6'>
                    <a
                        href="https://www.linkedin.com/in/sanju-jai-kumar-929282203?trk=contact-info"
                        target='_blank'
                        rel="noopener noreferrer"
                        title="LinkedIn Profile"
                        className="text-blue-400 hover:text-blue-500 transition-colors duration-300 text-2xl"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a
                        href="https://github.com/Sanju-jk"
                        target='_blank'
                        rel="noopener noreferrer"
                        title="GitHub Profile"
                        className="text-gray-400 hover:text-gray-200 transition-colors duration-300 text-2xl"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>

            {/* Theme Switcher */}
            <div className="mt-6 flex justify-center">
                <label className="inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="hidden"
                        onChange={toggleTheme}
                        checked={theme === 'dark'}
                    />
                    <div className="toggle-bg w-14 h-8 bg-gray-400 rounded-full p-1 duration-300 ease-in-out">
                        <div className={`dot w-6 h-6 bg-white rounded-full shadow-md transform ${theme === 'dark' ? 'translate-x-6' : ''}`}></div>
                    </div>
                    <span className="ml-3 text-sm">
                        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                    </span>
                </label>
            </div>
        </div>
    );
}

export default Sidebar;
