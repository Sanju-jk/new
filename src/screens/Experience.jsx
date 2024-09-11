
const Experience = () => {
  const experiences = [
    {
      title: "Front-end Developer",
      company: "ABC Tech",
      date: "June 2022 - Present",
      description: "Developed responsive websites using React, Tailwind CSS, and JavaScript. Collaborated with cross-functional Developed responsive websites using React, Tailwind CSS, and JavaScript. Collaborated with cross-functional tDeveloped responsive websites using React, Tailwind CSS, and JavaScript. Collaborated with cross-functional t teams to deliver high-quality web applications."
    },
    {
      title: "Junior Web Developer",
      company: "XYZ Solutions",
      date: "Jan 2021 - May 2022",
      description: "Worked on enhancing UI components and fixing bugs in a variety of client projects using HTML, CSS, and JavaScript."
    },
    {
      title: "Junior Web Developer",
      company: "XYZ Solutions",
      date: "Jan 2021 - May 2022",
      description: "Worked on enhancing UI components and fixing bugs in a variety of client projects using HTML, CSS, and JavaScript."
    },
    {
      title: "Junior Web Developer",
      company: "XYZ Solutions",
      date: "Jan 2021 - May 2022",
      description: "Worked on enhancing UI components and fixing bugs in a variety of client projects using HTML, CSS, and JavaScript."
    }
    // Add more experiences here
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Experience</h1>
      <div className="relative border-l-4 border-blue-500">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 pl-8 relative">
            {/* Dot */}
            <div className="absolute w-6 h-6 bg-blue-500 rounded-full -left-3 top-1.5"></div>

            {/* Timeline content */}
            <p className="text-sm text-gray-500 mb-1">{experience.date}</p>
            <h2 className="text-xl font-bold">{experience.title}</h2>
            <h3 className="text-md text-gray-700">{experience.company}</h3>
            <p className="text-gray-600 mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;