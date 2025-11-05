const EventCard = ({imgURL, label, date, location}) => {
  return (
    <div className="flex-1 flex gap-5 sm:min-w-[350px] max-w-[450px] max-h-32 w-full rounded-[20px] shadow-3xl px-6 lg:px-8 py-5 lg:py-7 ring-1 ring-slate-900/5 dark:bg-slate-600 items-center">
        <div className="min-w-11 min-h-11 flex justify-center items-center rounded-xl bg-gray-400 dark:bg-slate-200 self-center">
            <img src={imgURL.src} alt={label} width={30} height={30} />
        </div>
        <div className="font-ibm">
            <h3 className="text-gray-900 dark:text-white font-bold text-xl lg:text-2xl">{label}</h3>
            <p className="text-gray-900 dark:text-white hidden lg:block">{location} | {date}</p> 
            <p className="text-gray-900 dark:text-white block lg:hidden">{location}<br/>{date}</p> 
        </div>
    </div>
  )
}

export default EventCard