const AboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row mt-24 md:px-36">
      <div id="left-side" className="w-1/2">
        <img
          className="w-full h-full"
          src="/src/assets/about-us.jpg"
          alt="about-us"
        />
      </div>
      <div id="right-side" className="w-1/2 md:pt-32">
        <div id="top" className="flex items-center">
          <img src="/src/assets/line.jpg" alt="" className="h-1/2 mr-4" />
          <span className="font-bold">KNOW ABOUT US</span>
        </div>
        <h1 className="text-3xl font-bold uppercase mt-2">
          A successful event starts with <br /> the guest experience, that’s{" "}
          <br />
          where we can help.
        </h1>

        <p className="text-sm text-gray-500 mt-4">
          Airbeat global entertainment ltd also known as Airbeat LLC is a SME
          organization
          <br /> that was founded in late 2017 by CEO G Founder,Kasey Omwanda.
          The idea behind
          <br /> airbeat global entertainment ltd started in 2016 when we held
          our first event under
          <br /> the alias ‘ku5’.We saw a space in the industry and the
          formation of airbeat Llc
          <br /> commenced. <br />
          <br /> The drive was to create a seat for other young entertainment
          moguls At the table which had proven hard to penetrate since way back.
          In 2017 after the afterglow
          <br /> event, we saw a passion and drive that we did not know was
          there to make people
          <br /> connect and feel happy through an experience that was curatedby
          us. Later on in the
          <br /> year, airbeat llc was launched.
        </p>

        <button className="mt-12 bg-black text-white flex items-center rounded-xl px-6 py-2 cursor-pointer">
          Learn More
          <img
            src="/src/assets/arrow.png"
            alt="arrow"
            className="h-5 w-5 ml-2"
          />
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
