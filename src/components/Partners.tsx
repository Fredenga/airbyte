const Partners = () => {
  const sources = [1, 2, 3, 4];
  return (
    <section className="md:px-40 flex flex-col items-center">
      <h1 className="md:my-10 text-2xl font-bold">OUR PARTNERS</h1>
      <ul className="flex">
        {sources.map((source) => (
          <li className="md:mr-24">
            <img src={`/src/assets/partner${source}.jpg`} alt="" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Partners;
