const BioTop = () => {
  return (
    <section className="flex flex-col md:flex-row mt-44 md:px-36">
      <div id="left" className="w-1/2">
        <div id="top" className="flex items-center mb-3">
          <img src="/src/assets/line.jpg" alt="" className="h-1/2 mr-4" />
          <span className="font-bold">KNOW ABOUT US</span>
        </div>
        <h1 className="uppercase text-3xl font-bold">
          A successful event starts with <br /> the guest experience, that’s{" "}
          <br />
          where we can help.
        </h1>
      </div>
      <div id="right" className="w-1/2">
        <p className="font-sm text-gray-700">
          Airbeat global entertainment ltd also known as Airbeat LLC is a SME
          organization that was founded in late 2017 by CEO G Founder,Kasey
          Omwanda. The idea behind airbeat global entertainment ltd started in
          2016 when we held our first event under the alias ‘ku5’.We saw a space
          in the industry and the formation of airbeat Llc commenced. <br /> The
          drive was to create a seat for other young entertainment moguls At the
          table which had proven hard to penetrate since way back. In 2017 after
          the afterglow event, we saw a passion and drive that we did not know
          was there to make people connect and feel happy through an experience
          that was curatedby us. Later on in the year, airbeat llc was launched.
        </p>
      </div>
    </section>
  );
};

export default BioTop;
