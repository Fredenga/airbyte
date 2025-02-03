import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-24 z-10 bg-gray-100  flex items-center justify-between md:px-36">
      <div id="left-nav" className="">
        <img
          src="/src/assets/logo.jpg"
          alt="logo"
          className="h-12 w-12 cursor-pointer"
        />
      </div>
      <div id="middle-nav" className="">
        <ul className="flex">
          <li className="mr-10 hover:text-gray-500 transition-all duration-300 ease-in cursor-pointer hover:text-xl font-bold">
            <Link to="/">HOME</Link>
          </li>
          <li className="mr-10 hover:text-gray-500 transition-all duration-300 ease-in cursor-pointer hover:text-xl">
            <Link to="/bio">BIO</Link>
          </li>
          <li className="mr-10 hover:text-gray-500 transition-all duration-300 ease-in cursor-pointer hover:text-xl">
            PORTFOLIO
          </li>
          <li className="mr-10 hover:text-gray-500 transition-all duration-300 ease-in cursor-pointer hover:text-xl">
            HISTORY
          </li>
          <li className="mr-10 hover:text-gray-500 transition-all duration-300 ease-in cursor-pointer hover:text-xl">
            AIRBYTE FOUNDATION
          </li>
        </ul>
      </div>
      <div id="right-nav" className="">
        <button className="bg-black text-white rounded-xl px-6 py-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-120 hover:bg-gray-500">
          Explore Events
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
