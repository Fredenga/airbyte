const Navbar = () => {
  return (
    <nav className="bg-gray-100 h-24 flex items-center justify-between md:px-36">
      <div id="left-nav" className="">
        <img
          src="/src/assets/logo.jpg"
          alt="logo"
          className="h-12 w-12 cursor-pointer"
        />
      </div>
      <div id="middle-nav" className="">
        <ul className="flex">
          <li className="mr-10 font-bold">HOME</li>
          <li className="mr-10">BIO</li>
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
