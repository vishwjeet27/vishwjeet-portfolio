function Skills() {
  return (
    <>
    <h1 className="mb-5 mt-25 text-4xl font-extrabold leading-none text-center tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        My Skills
      </h1>
      <p className="mb-7 text-lg max-w-400 m-auto p-4 font-normal text-center text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
      A Diverse Set Of Skills, From Web Development To Design, Empowering Me To Create Seamless And Impactful Digital Solutions.
        </p>
      <div className="mt-10 mb-7 max-w-300 gap-3 m-auto bg-white border-gray-200 dark:bg-gray-900 flex flex-row flex-wrap items-center justify-around mx-auto p-5 text-gray-900 dark:text-white">
        <a
          href="#"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Frontend Development
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
          Creating dynamic, responsive, and visually appealing web experiences with modern technologies.
          </p>
        </a>

        <a
          href="#"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            UI/UX Design
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
          Designing intuitive, user-friendly interfaces that enhance digital experiences and engagement.
          </p>
        </a>

        <a
          href="#"
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Backend Development
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
          Developing robust, scalable, and efficient server-side architectures for seamless performance.
          </p>
        </a>
      </div>
    </>
  );
}
export default Skills;
