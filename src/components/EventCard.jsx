const EventCard = ({imgURL, label, date, location}) => {
  return (
    <article
      role="article"
      className="group flex-1 min-w-[300px] max-w-[450px] w-full rounded-[20px] bg-white/60 dark:bg-slate-800/60 ring-1 ring-slate-900/5 dark:ring-slate-700/20 hover:shadow-lg transition-transform duration-200 ease-out hover:-translate-y-1 px-4 lg:px-6 py-4 lg:py-5 flex items-center gap-4"
    >
        <div className="w-12 h-10 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 flex items-center justify-center ring-1 ring-slate-900/5 dark:ring-0">
            <img src={imgURL.src} alt={label} className="p-1 object-cover" />
        </div>

        <div className="font-ibm">
            <h3 className="text-gray-900 dark:text-white font-bold text-lg lg:text-xl">{label}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-sm">{location}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{date}</p>
        </div>
    </article>
  )
}

export default EventCard