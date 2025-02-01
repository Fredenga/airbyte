import UpcomingEventsBody from "./UpcomingEventsBody";
import UpcomingEventsTitle from "./UpcomingEventsTitle";

const UpcomingEvents = () => {
  return (
    <section className="md:px-36 relative">
      <UpcomingEventsTitle />
      <UpcomingEventsBody />
      <button className="bg-black text-white rounded-xl mt-16 px-6 py-2 cursor-pointer absolute left-[calc(30%+16.67%)]">
        View all
      </button>
    </section>
  );
};

export default UpcomingEvents;
