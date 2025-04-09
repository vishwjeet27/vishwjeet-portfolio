import React from "react";

const projects = [
  {
    name: "WiseWish",
    description:
      "WiseWish is a comprehensive educational website providing tools, study guides, roadmaps, and book recommendations for students. Built as part of the MCA curriculum, this is a non-commercial project.",
    image: "./wisewishthumb.png",
    link: "https://wisewish.vercel.app/"
  },
  {
    name: "WishTree",
    description:
      "Wish-Tree is a tech-themed personal landing page for developers and enthusiasts, built with HTML & CSS. It features a dark theme with gray accents and a responsive design.",
    image: "./wishtreethumb.png",
    link: "https://vishwjeet27.github.io/wish-tree/"
  },
  {
    name: "Devotee's Wish",
    description:
      "Devotee's Wish is a devotional platform offering Aartis, Chalisas, Stutis, Kathas, and spiritual videos in an ad-free, distraction-free environment.",
    image: "./devoteeswishthumb.png",
    link: "https://vishwjeet27.github.io/devotess_wish/"
  }
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
