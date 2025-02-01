import { items } from "../data/items";
const UpcomingEventsBody = () => {
  return (
    <section>
      <ul className="grid md:grid-cols-3 gap-4">
        {items.map((item) => (
          <li className="">
            <div className="">
              <div className="">
                <img src={`${item.source}`} alt={`${item.title}`} />
              </div>
              <div className="flex flex-col items-center bg-black text-white">
                <h1 className="font-bold text-xl mt-2 mb-3">{item.title}</h1>
                <p className="mb-3 flex items-center">
                  <img
                    className="w-5 h-5 bg-white rounded-full mr-2 "
                    src="/src/assets/calendar.png"
                    alt=""
                  />
                  {item.date}
                </p>
                <p className="mb-3 flex items-center">
                  <img
                    className="w-5 h-5 bg-white rounded-full mr-2 "
                    src="/src/assets/location.png"
                    alt=""
                  />
                  {item.venue}
                </p>
                <p className="mb-3 flex items-center">
                  <img
                    className="w-5 h-5 bg-white rounded-full mr-2"
                    src="/src/assets/supermarket.png"
                    alt=""
                  />
                  {item.price}
                </p>
                <button className="bg-white text-black mb-6 px-20 py-1 font-semibold">
                  Get Tickets
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UpcomingEventsBody;
