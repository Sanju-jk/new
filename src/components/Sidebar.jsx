import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="h-screen bg-neutral-900 text-white w-60 fixed">
            <div className="p-6 text-center">
                <img src='https://images.pexels.com/photos/7534339/pexels-photo-7534339.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='profile Image' className='h-40 w-40 rounded-full mx-auto mt-7'/>
                <br/><hr className="border-1 border-purple-500"/>
            </div>

            <nav className="mt-5 ">
                <ul className='text-4xl mx-12 text-gray-300'>
                    <li className="my-4">
                        <NavLink 
                            to="/about" 
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
            <br/>
            <hr className="border-1 border-purple-500"/>
            <div className='flex my-12 mx-12 text-2xl space-x-6'>
                <i className="fa-brands fa-linkedin hover:text-blue-800 cursor-pointer"></i>
                <i className="fa-brands fa-github hover:text-gray-600 cursor-pointer"></i>
                <i className="fa-brands fa-facebook hover:text-blue-400 cursor-pointer"></i>
            </div>
        </div>
    );
}

export default Sidebar;
