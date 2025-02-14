function Education() {
  return (
    <>
      <h1 id="education" className="mb-5 py-5 mt-25 text-4xl font-extrabold leading-none text-center tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        My Education
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
      <p className=" text-lg max-w-400 m-auto p-4 font-normal text-center text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          With a dynamic academic journey that bridges the worlds of commerce
          and technology, my education reflects a passion for growth and
          adaptability. From foundational business insights to mastering the
          intricacies of computer science, I've cultivated a diverse skill set
          that enables me to approach problems with a unique, multidimensional
          perspective.
        </p>
      <div className="mt-5 mb-7 max-w-320 m-auto bg-white border-gray-200 dark:bg-gray-900 flex flex-row flex-wrap items-center justify-around mx-auto p-5 text-gray-900 dark:text-white">
        <div className="max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Higher Secondary Education
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Completed my higher education under the CBSE curriculum, building a
            strong academic foundation with a focus on analytical thinking and
            adaptability.
          </p>
          <a
            href="https://www.cbse.gov.in/cbsenew/cbse.html"
            target="__blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            CBSE's Website
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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

        <div className="max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Under Graduation
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Graduated with a bachelor's degree from DAVV University, gaining
            valuable insights into the world of commerce and business
            fundamentals.
          </p>
          <a
            href="https://www.dauniv.ac.in/"
            target="__blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            DAVV's Website
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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

        <div className="max-w-sm p-6 mb-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Post Graduation
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Completed my master's degree from SAGE University, transitioning
            into the field of computer science and strengthening my technical
            expertise.
          </p>
          <a
            href="https://sageuniversity.in/"
            target="__blank"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            SUI's Website
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
      </div>
    </>
  );
}

export default Education;
