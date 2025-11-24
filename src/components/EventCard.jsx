const EventCard = ({imgURL, label, date, location}) => {
  return (
    <article
      role="article"
      className="group flex-none min-w-[220px] max-w-[360px] w-full rounded-[18px] bg-white/60 dark:bg-slate-800/60 ring-1 ring-slate-900/5 dark:ring-slate-700/20 hover:shadow-lg transition-transform duration-200 ease-out hover:-translate-y-1 px-4 py-3 flex items-center gap-3"
    >
        <div className="w-12 h-10 flex-shrink-0 rounded-md overflow-hidden bg-slate-100 dark:bg-slate-700 flex items-center justify-center ring-1 ring-slate-900/5 dark:ring-0">
            {imgURL ? (
              <img src={imgURL.src} alt={label} className="w-full h-full p-1 object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-sm font-ibm text-gray-700 dark:text-white">
                {label.charAt(0)}
              </div>
            )}
        </div>

        <div className="font-ibm min-w-0">
            <h3 className="text-gray-900 dark:text-white font-bold text-base lg:text-lg truncate">{label}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm truncate">{location}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{date}</p>
        </div>
    </article>
  )
}
  
export default EventCard