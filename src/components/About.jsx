function About() {
  return (
    <>
      <div className="mt-25 mb-7 bg-white border-gray-200 dark:bg-gray-900 flex flex-row flex-wrap items-center justify-around mx-auto p-5 text-gray-900 dark:text-white">
        <h1 className="mb-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          About Me!
        </h1>
        <p className="mb-7 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Hi! I'm Vishwjeet Singh Vilkhu, a Tech Enthusiast from India. With a
          B.Com from DAVV University and an MCA from SAGE University, I
          specialize in Web Development, UI/UX Design, Software Development,
          Video Editing, and Graphic Design. Passionate about technology, I love
          solving real-world problems. Outside of tech, I enjoy playing guitar,
          writing, and gaming. Let’s connect and create something amazing
        </p>
        <a
          href="resume.pdf" target="__blank"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-3xl hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          My Resume
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </>
  );
}

export default About;
