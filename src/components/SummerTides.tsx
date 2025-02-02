const SummerTides = () => {
  const sources = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section className="md:px-36 mt-20">
      <h1 className="text-2xl font-bold text-center mb-10">SUMMER TIDES</h1>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 md:px-0">
        {sources.map((src) => (
          <li>
            <img src={`/src/assets/summer${src}.jpg`} alt="" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SummerTides;
