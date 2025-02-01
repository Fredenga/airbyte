const Picture = () => {
  return (
    <div className="w-full relative">
      <img src="/src/assets/hero.jpg" className="h-full w-full" alt="hero" />
      <h1 className="text-white text-7xl font-bold absolute top-[calc(25%+16.67%)] left-1/16 -translate-y-1/2">
        Unforgettable <br></br> Experiences, <br></br> Beautifully Delivered{" "}
        <br></br>
        Across Africa
      </h1>
      <p className="absolute bottom-[calc(10%+16.67%)] text-white left-1/16 text-xl">
        At Airbeat, we are dedicated to delivering exceptional entertainment
        <br></br>
        experiences that leave lasting memories. Join us as we celebrate the
        <br></br>
        vibrant culture and artistry of Africa through our stunning events.
        <br></br>
      </p>
    </div>
  );
};

export default Picture;
