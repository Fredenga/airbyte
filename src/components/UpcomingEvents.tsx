import UpcomingEventsBody from "./UpcomingEventsBody";
import UpcomingEventsTitle from "./UpcomingEventsTitle";

const UpcomingEvents = () => {
  return (
    <section className="md:px-36 relative md:mb-40">
      <UpcomingEventsTitle />
      <UpcomingEventsBody />
      <button
        className="absolute left-[calc(30%+16.67%)] bg-black 
      text-white rounded-xl mt-16 px-6 py-2 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-120 hover:bg-gray-500"
      >
        View all
      </button>
    </section>
  );
};

export default UpcomingEvents;
