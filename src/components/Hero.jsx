import VishwjeetImage from "../assets/images/vishwjeetimage.jpg";
function Hero() {
  return (
    <>
      <div className="mt-6 mb-6 bg-white border-gray-200 dark:bg-gray-900 flex flex-row flex-wrap-reverse items-center justify-around mx-auto p-5 text-gray-900 dark:text-white">
        <div className="w-2xl">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Hi! I Am{" "}
            <span class="text-blue-600 dark:text-blue-500">Vishwjeet Singh Vilkhu</span>{" "}
          </h1>
          <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Welcome To My Portfolio! I'm Vishwjeet Singh Vilkhu, A Dedicated Tech Enthusiast With A Fervent Passion For All Things Technology.
          </p>
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mt-5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><a href="https://www.linkedin.com/in/vishwjeet27" target="__blank">Linkedin</a></button>
          <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"><a href="https://github.com/vishwjeet27" target="__blank">GitHub</a></button>
          <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"><a href="./resume.pdf" target="__blank">My Resume</a></button>
        </div>
        <div>
          <img
            class="rounded-full w-96 h-96 mb-4"
            src={VishwjeetImage}
            alt="image description"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
