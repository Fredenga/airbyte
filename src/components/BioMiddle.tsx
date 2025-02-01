const BioMiddle = () => {
  return (
    <section className="relative">
      <div className="mt-10 md:px-44 relative">
        <img src="/src/assets/bioImg.jpg" alt="bio" />
        <img
          src="/src/assets/play.jpg"
          alt="bio"
          className="absolute top-1/2 left-[calc(28%+16.67%)] rounded-full cursor-pointer"
        />
      </div>
    </section>
  );
};

export default BioMiddle;
