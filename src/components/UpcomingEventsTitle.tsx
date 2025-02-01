const UpcomingEventsTitle = () => {
  return (
    <section className="w-full flex flex-col md:flex-row md:items-center md:justify-between mt-20 mb-10">
      <h1 className="text-2xl font-bold">UPCOMING EVENTS</h1>
      <ul className="flex">
        <li className="mr-8">
          <select
            className="px-6 py-2 bg-gray-300 rounded-2xl focus:outline-none"
            name="Yearly"
            id="Yearly"
          >
            <option value="Yearly">Yearly</option>
          </select>
        </li>
        <li className="mr-8">
          <select
            className="px-6 py-2 bg-gray-300 rounded-2xl focus:outline-none"
            name="Event Type"
            id="Event Type"
          >
            <option value="Event Type">Event Type</option>
          </select>
        </li>
        <li className="mr-8">
          <select
            className="px-6 py-2 bg-gray-300 rounded-2xl focus:outline-none"
            name="Any Category"
            id="Any Category"
          >
            <option value="Any Category">Any Category</option>
          </select>
        </li>
      </ul>
    </section>
  );
};

export default UpcomingEventsTitle;
