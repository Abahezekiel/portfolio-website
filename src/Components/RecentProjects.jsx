import { FaArrowRightLong } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-32 px-8 sm:px-16 md:px-32">
      <div className="flex items-center justify-center flex-col">
        <button className="bg-gradient-to-r from-orange-400 to-orange-600 w-32 p-2 rounded-md font-bold">
          PROJECTS
        </button>
        <h2 className="text-2xl mt-4">RECENT PROJECTS</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        {/* Project 1 */}
        <div className="border-black border p-4 hover:cursor-pointer rounded-tl-3xl">
          <p className="font-bold pb-2">CALENDLY</p>
          <p className="font-light pb-2">
            Scalable Schedule manager, You connect your work and/or personal
            calendar(s) to Calendly and set your available hours. Calendly uses
            this info to show your available meeting times.
          </p>
          <div className="flex gap-2">
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 p-1 rounded-md font-light text-xs">
              React
            </button>
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 p-1 rounded-md font-light text-xs">
              Tailwind
            </button>
          </div>
        </div>

        {/* Project 2 */}
        <div className="border-black border p-4 hover:cursor-pointer rounded-tr-3xl">
          <p className="font-bold pb-2">KONGA E-Commerce Web-App</p>
          <p className="pb-2 font-light">
            This Konga Clone, it adds category, add, product, delete products.
          </p>
          <div className="flex gap-2 pt-6">
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 p-1 rounded-md font-light text-xs">
              React
            </button>
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 p-1 rounded-md font-light text-xs">
              Tailwind
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        {/* Project 3 */}
        <div className="border-black border p-4 hover:cursor-pointer rounded-bl-3xl">
          <p className="font-bold pb-2">QUIZ APP</p>
          <p className="font-light pb-2">
            A front-end development quiz App that helps Front-end developers get accustomed to software tools and trends
          </p>
          <div className="flex gap-2 pt-6">
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 p-1 rounded-md font-light text-xs">
              React
            </button>
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 p-1 rounded-md font-light text-xs">
              Tailwind
            </button>
          </div>
        </div>

        {/* Project 4 */}
        <div className="border-black border p-4 hover:cursor-pointer rounded-br-3xl">
          <p className="font-bold pb-2">TO-DO APP</p>
          <p className="font-light pb-2">
            This To-do App helps assist you to organize your tasks, tick completed tasks, and retrieve deleted tasks from recently deleted.
          </p>
          <div className="flex gap-2">
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 p-1 rounded-md font-light text-xs">
              React
            </button>
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 p-1 rounded-md font-light text-xs">
              Tailwind
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
