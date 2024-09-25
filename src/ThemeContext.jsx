// ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const ThemeContext = createContext();

// ThemeProvider component to provide the theme state and toggle function
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    // Update the theme in the document root when the state changes
    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
    }, [theme]);

    // Function to toggle the theme
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
