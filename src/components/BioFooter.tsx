const BioFooter = () => {
  const items = [1, 2, 3, 4];
  return (
    <section className="md:px-36  pt-30 pb-5 bg-black text-white">
      <div className="flex flex-wrap text-white my-10">
        <div className="w-1/4">
          <h1 className="text-center mb-3 text-2xl">OUR MISSION</h1>
          <p>
            To continue creating unforgettable experiences to the masses in the
            entertainment scene in Kenya and beyond.
          </p>
        </div>
        <div className="w-1/2  ">
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center">
              <h1 className="mb-3 text-2xl">VISION</h1>
              <p className="text-center">
                To renovate the African entertainment scene
                <br /> as a whole
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <h1 className="mb-3 text-2xl">VALUES</h1>
          <ul className="list-disc">
            <li>Integrity</li>
            <li>Respect</li>
            <li>Unity</li>
            <li>Love</li>
          </ul>
        </div>
      </div>
      <h1 className="text-xl">OUR SPONSORS</h1>
      <div className="flex w-3/5 justify-between mt-10">
        {items.map((item) => (
          <img
            className="h-16 w-16"
            src={`/src/assets/icon${item}.jpg`}
            alt="icon"
          />
        ))}
      </div>
    </section>
  );
};

export default BioFooter;
