import Picture from "./Picture";

const Hero = () => {
  return (
    <section className="md:px-36 pt-5 relative mt-24">
      <Picture />
      <button className="absolute left-[calc(28%+16.67%)] bottom-[-28px] border border-2 border-gray-300 px-10 py-4 text-white bg-black rounded-lg mx-auto cursor-pointer">
        Explore Events
      </button>
    </section>
  );
};

export default Hero;
