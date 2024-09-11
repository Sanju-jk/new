import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import About from './screens/About';
import Experience from './screens/Experience';
import Projects from './screens/Projects';
import Skills from './screens/Skills';
import Contact from './screens/Contact';

const App = () => {
    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="ml-64 w-full">
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;