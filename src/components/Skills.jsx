import React from 'react';
import { Code2, FileCode, Database, Coffee, Cpu, Phone as Python, RepeatIcon as ReactIcon, Server, Terminal, Figma, Palette, Globe, Layers } from 'lucide-react';

const skills = [
  { name: 'HTML', icon: FileCode, category: 'Frontend' },
  { name: 'CSS', icon: Layers, category: 'Frontend' },
  { name: 'JavaScript', icon: Code2, category: 'Frontend' },
  { name: 'React', icon: ReactIcon, category: 'Frontend' },
  { name: 'MySQL', icon: Database, category: 'Backend' },
  { name: 'MongoDB', icon: Database, category: 'Backend' },
  { name: 'Express.js', icon: Server, category: 'Backend' },
  { name: 'Node.js', icon: Server, category: 'Backend' },
  { name: 'Java', icon: Coffee, category: 'Programming' },
  { name: 'C++', icon: Cpu, category: 'Programming' },
  { name: 'C', icon: Terminal, category: 'Programming' },
  { name: 'Python', icon: Terminal, category: 'Programming' },
  { name: 'Figma', icon: Figma, category: 'Design' },
  { name: 'Canva', icon: Palette, category: 'Design' }
];


function Skills(){

  return (

    <>
    
    <section className="py-1 bg-white dark:bg-gray-900 max-w-290 m-auto transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div id='skills' className=" text-center mb-12">
        <h1 className="mb-5 mt-25 text-4xl font-extrabold leading-none text-center tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        My Skills
      </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-200">
                  <skill.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


    </>

  )
}

export default Skills