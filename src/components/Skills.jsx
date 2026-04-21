import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'CSS', level: 95 },
    { name: 'FIGMA', level: 85 },
    { name: 'HTML', level: 95 },
    { name: 'JS', level: 90 },
    { name: 'PHP', level: 80 },
    { name: 'SASS', level: 90 },
    { name: 'WORDPRESS', level: 85 },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                <div 
                  className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;