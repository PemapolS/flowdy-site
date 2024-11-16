import { events } from '../constants';
import EventCard from '../components/EventCard';

const Events = () => {
  return (
    <section id="events" className="py-2 px-4 mx-auto max-w-screen-xl lg:px-6 gap-4 items-center">
      <h1 className="max-w-screen-md b-4 text-[34px] lg:text-[40px] tracking-tight font-extrabold text-gray-900 dark:text-white font-ibm">
        2024 - 2025 Event Attendance Plans
      </h1>
      <div className="max-container flex justify-center flex-wrap gap-5 lg:gap-9 py-4">
      {events.map((event) => (
        <EventCard key={event.label} {...event}/>
      ))}
      </div>

      <h2 className="max-w-screen-md text-xl font-medium text-gray-900 dark:text-white font-ibm pt-4">
        and more coming soon!
      </h2>
    </section>
  )
}

export default Events