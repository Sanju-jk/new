import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="h-screen bg-neutral-900 text-white w-60 fixed">
            <div className="p-6 text-center">
                <img 
                    src='https://images.pexels.com/photos/7534339/pexels-photo-7534339.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' 
                    alt='profile Image' 
                    className='h-40 w-40 rounded-full mx-auto mt-7' 
                />
                <br /><hr className="border-1 border-purple-500" />
            </div>

            <nav className="mt-2 ">
                <ul className='text-4xl mx-12 text-gray-300'>
                    <li className="my-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-xl hover:text-purple-500 text-purple-500" : "text-xl hover:text-purple-500"
                            }
                        >
                            <i className="fa-solid fa-user me-2"></i> About
                        </NavLink>
                    </li>
                    <li className="my-4">
                        <NavLink
                            to="/experience"
                            className={({ isActive }) =>
                                isActive ? "text-xl hover:text-purple-500 text-purple-500" : "text-xl hover:text-purple-500"
                            }
                        >
                            <i className="fa-solid fa-briefcase me-2"></i> Experience
                        </NavLink>
                    </li>
                    <li className="my-4">
                        <NavLink
                            to="/skills"
                            className={({ isActive }) =>
                                isActive ? "text-xl hover:text-purple-500 text-purple-500" : "text-xl hover:text-purple-500"
                            }
                        >
                            <i className="fa-solid fa-code me-2"></i> Skills
                        </NavLink>
                    </li>
                    <li className="my-4">
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                isActive ? "text-xl hover:text-purple-500 text-purple-500" : "text-xl hover:text-purple-500"
                            }
                        >
                            <i className="fa-solid fa-diagram-project me-2"></i> Projects
                        </NavLink>
                    </li>
                    <li className="my-4">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "text-xl hover:text-purple-500 text-purple-500" : "text-xl hover:text-purple-500"
                            }
                        >
                            <i className="fa-solid fa-envelope me-2"></i> Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <br />
            <hr className="border-1 border-purple-500" />

            <div className='flex my-8  justify-center text-2xl space-x-6'>
                <a 
                    href="https://www.linkedin.com/in/sanju-jai-kumar-929282203?trk=contact-info" 
                    target='_blank' 
                    rel="noopener noreferrer" 
                    title="LinkedIn Profile"
                >
                    <i className="fa-brands fa-linkedin text-blue-500 hover:text-white cursor-pointer"></i>
                </a>
                <a 
                    href="https://github.com/Sanju-jk" 
                    target='_blank' 
                    rel="noopener noreferrer" 
                    title="GitHub Profile"
                >
                    <i className="fa-brands fa-github text-gray-400 hover:text-white cursor-pointer"></i>
                </a>
                <a 
                    href="mailto:sanju12jk@gmail.com" 
                    title="Telegram"
                >
                    <i className="fa-brands fa-whatsapp text-green-400  hover:text-gray-300 cursor-pointer"></i>
                </a>
            </div>
        </div>
    );
}

export default Sidebar;
