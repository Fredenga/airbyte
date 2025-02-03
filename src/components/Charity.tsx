const Charity = () => {
  return (
    <section className="md:px-36 mt-20">
      <h1 className="text-2xl font-bold text-center mb-10">
        AIRBEAT FOUNDATION
      </h1>
      <div className="flex flex-col items-center md:items-start md:flex-row ">
        <div className="w-1/2 py-5 pr-5">
          <img src="/src/assets/postImg.jpg" alt="postImg" />
        </div>
        <div className="w-1/2 pt-5">
          <div id="top" className="flex items-center">
            <img src="/src/assets/line.jpg" alt="" className="h-1/2 mr-4" />
            <h2 className="font-bold">WELCOME TO CHARITY</h2>
          </div>
          <h1 className="font-semibold text-2xl mb-5">
            LET'S COME TOGETHER TO MAKE A <br /> DIFFERENCE
          </h1>
          <p className="text-gray-500 text-lg">
            The AIRBEAT Foundation, in collaboration with The Way to Womanhood
            and
            <br /> Summer Tides, is proud to host a charity event at the Edmund
            Rice Center in
            <br /> Nairobi, located along Kolobot road. This event is dedicated
            to gathering resources
            <br /> and support for our community, with a focus on providing
            essential items and
            <br /> monetary contributions. We are currently accepting donations
            of dry food items, school supplies, and toiletries (including
            sanitary products). For those who wish to contribute financially,
            donations can be made via <strong>PayBill 542542</strong>, with the
            account number <strong>176200</strong> under the name E.R.C.N. If
            you are able
            <br /> to facilitate the drop-off of donations, please contact us at
            @thewaytowomanhood.
            <br /> Join us in this compassionate cause and help us spread love
            and hope by making a<br />
            donation today!
          </p>
          <button
            className="mt-12 bg-black text-white flex 
          items-center rounded-xl px-6 py-2 cursor-pointer
          transition-all duration-300 ease-in-out transform hover:scale-120 hover:bg-gray-500"
          >
            Donate Now
            <img
              src="/src/assets/arrow.png"
              alt="arrow"
              className="h-5 w-5 ml-2"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Charity;
