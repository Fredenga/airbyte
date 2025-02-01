const Footer = () => {
  const items = ["ig", "fb", "yt"];
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
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
      <div className="flex flex-wrap text-white my-10">
        <div className="w-1/3">
          <h3 className="font-semibold mb-1">Address</h3>
          <address>Nairobi, Kenya</address>
        </div>
        <div className="w-1/3 leading-10">
          <h3 className="font-semibold">Info</h3>
          <p>Home</p>
          <p>Bio</p>
          <p>Portfolio</p>
          <p>History</p>
          <p>Airbeat Foundation</p>
        </div>
        <div className="w-1/6">
          <h3 className="font-semibold mb-1">Contact Us</h3>
          <address>+254 728476008</address>
          <address>airbeatkenya@gmail.com</address>
        </div>
        <div className="w-1/6 flex  justify-between">
          {items.map((item) => (
            <div className="flex items-center justify-center">
              <img
                className="w-10 h-10 rounded-full"
                src={`/src/assets/${item}.jpg`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex text-white">
        <div className="w-1/3">
          <h4>© 2023 — Copyright</h4>
        </div>
        <div className="w-4/9">
          <h4>Certificate</h4>
        </div>
        <div className="w-2/9">
          <div
            className="h-10 w-10 bg-white flex items-center justify-center rounded-full cursor-pointer"
            onClick={scrollToTop}
          >
            <img className="w-5 h-5 " src="/src/assets/up-arrow.png" alt="up" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
