import { Link } from 'react-router-dom';
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
          <li className="mr-10 font-bold">
            <Link to="/">HOME</Link>
            </li>
          <li className="mr-10"><Link to="/bio">BIO</Link></li>
          <li className="mr-10">PORTFOLIO</li>
          <li className="mr-10">HISTORY</li>
          <li className="mr-10">AIRBYTE FOUNDATION</li>
        </ul>
      </div>
      <div id="right-nav" className="">
        <button className="bg-black text-white rounded-xl px-6 py-2 cursor-pointer">
          Explore Events
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
