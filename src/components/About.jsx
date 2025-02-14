import React from 'react';
import { FileText, Briefcase, GraduationCap, Music, Gamepad, Code } from 'lucide-react';

function About() {
  const skills = [
    { icon: <Code size={24} />, text: "Web Development" },
    { icon: <Briefcase size={24} />, text: "UI/UX Design" },
    { icon: <Code size={24} />, text: "Software Development" },
    { icon: <Music size={24} />, text: "Video Editing" },
    { icon: <Briefcase size={24} />, text: "Graphic Design" }
  ];

  return (
    <section id="about" className="py-1 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
        <h1 className="mb-5 mt-25 text-4xl font-extrabold leading-none text-center tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        About Me
      </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl  text-gray-600 dark:text-gray-300 font-semibold">Education</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• MCA from SAGE University</li>
                <li>• B.Com from DAVV University</li>
              </ul>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex flex-col items-center justify-center space-y-2 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-300">
                  <div className="text-blue-600 dark:text-blue-400">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {skill.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
              Hi! I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Vishwjeet Singh Vilkhu</span>, 
              a Tech Enthusiast from India. With a strong educational background and diverse skill set, 
              I specialize in creating innovative digital solutions. Passionate about technology, 
              I love solving real-world problems through creative and efficient solutions.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
              When I'm not coding, you'll find me expressing creativity through guitar, 
              sharing thoughts through writing, or exploring virtual worlds in gaming.
            </p>
            
            <a
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FileText className="w-5 h-5 mr-2" />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;