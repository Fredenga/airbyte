import { items } from "../data/items";
const UpcomingEventsBody = () => {
  return (
    <section>
      <ul className="grid md:grid-cols-3 gap-4">
        {items.map((item) => (
          <li>
            <div className="">
              <div className="">
                <img src={`${item.source}`} alt={`${item.title}`} />
              </div>
              <div className="">
                <h1>{item.title}</h1>
                <p>{item.date}</p>
                <p>{item.venue}</p>
                <p>{item.price}</p>
              </div>
              <button>Get Tickets</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UpcomingEventsBody;
