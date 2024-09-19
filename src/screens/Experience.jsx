import React from 'react';

const experiences = [
  {
    title: "Career Development and Upskilling",
    company: "Infocampus Bangalore",
    date: "May 2024 - Present",
    description: "Currently focusing on upskilling in the MERN stack. Engaged in advanced web development projects and self-learning to enhance skills in modern technologies and stay updated with industry trends."
  },
  {
    title: "Embedded Systems Course",
    company: "Emertxe",
    date: "September 2023 - March 2024",
    description: "Completed an intensive course in Embedded Systems, covering Linux, C programming, and data structures. Gained practical knowledge and hands-on experience in embedded systems development. Transitioned to another course at Infocampus to further specialize in web development."
  },
  {
    title: "Software Engineer",
    company: "Saranyu Technologies",
    date: "May 2022 - August 2023",
    description: "Worked on a media player built with Vanilla JavaScript, focusing on bug fixes and feature enhancements. Developed and optimized the UI for a Roku TV app, gaining hands-on experience with Roku and BrightScript. Enhanced web development skills through practical application of modern technologies."
  },
  {
    title: "Career Break",
    company: "Self-Directed",
    date: "July 2021 - April 2022",
    description: "Took a break to address personal matters and reflect on career goals. Continued self-study and completed additional projects to stay connected with industry developments during this period."
  },
  {
    title: "Data Engineer Intern",
    company: "ITTSTAR Private Ltd",
    date: "February 2021 - July 2021",
    description: "Supported data engineering tasks, including data collection, transformation, and analysis. Worked closely with senior engineers to gain insights into data engineering workflows and best practices."
  },
  {
    title: "Bachelor of Engineering in Electronics and Communication",
    company: "Sri Venkateshwara College Of Engineering",
    date: "Graduated in August 2020",
    description: "Completed a Bachelor of Engineering in Electronics and Communication, gaining foundational knowledge in electronics, communication systems, and embedded systems."
  }
];

const Experience = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-12 text-center">
        <i className='fa fa-briefcase text-yellow-500'></i> Experience
      </h1>
      <div className="relative border-l-4 border-blue-500">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-12 pl-8 relative">
            {/* Dot */}
            <div className="absolute w-8 h-8 bg-blue-500 rounded-full -left-4 top-1.5 shadow-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
            </div>

            {/* Timeline content */}
            <p className="text-sm text-gray-400 mb-1">{experience.date}</p>
            <h2 className="text-2xl font-bold mb-1">{experience.title}</h2>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">{experience.company}</h3>
            <p className="text-gray-400">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
