import { events } from '../constants';
import EventCard from '../components/EventCard';

const Events = () => {
  return (
    <section id="events" class="py-2 px-4 mx-auto max-w-screen-xl lg:px-6 gap-4 items-center">
      <h1 class="max-w-screen-md b-4 text-[40px] tracking-tight font-extrabold text-gray-900 dark:text-white font-ibm">
        2024 Event Attendance Plans
      </h1>
      <div class="max-container flex justify-center flex-wrap gap-5 lg:gap-9 py-4">
      {events.map((event) => (
        <EventCard key={event.label} {...event}/>
      ))}
      </div>
    </section>
  )
}

export default Events