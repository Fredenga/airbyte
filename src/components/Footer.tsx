const Footer = () => {
  return (
    <section className="md:px-36 mt-20 py-10 w-screen bg-black">
      <div className="w-full items-center flex justify-between">
        <img
          className="h-10 w-10 border border-1 border-gray-500 rounded-full"
          src="/src/assets/footerIcon.jpg"
          alt=""
        />
        <button className="bg-white text-black font-semibold rounded-xl px-6 py-2 cursor-pointer">
          Explore Events
        </button>
      </div>
    </section>
  );
};

export default Footer;
