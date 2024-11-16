const EventCard = ({imgURL, label, date, location}) => {
  return (
    <div class="flex-1 flex gap-5 min-w-[300px] max-w-[450px] max-h-32 w-full rounded-[20px] shadow-3xl px-6 lg:px-8 py-5 lg:py-7 ring-1 ring-slate-900/5 dark:bg-slate-600 items-center">
        <div class="min-w-11 min-h-11 flex justify-center items-center rounded-xl bg-gray-400 dark:bg-slate-200 self-center">
            <img src={imgURL} alt={label} width={30} height={30} />
        </div>
        <div class="font-ibm">
            <h3 class="text-gray-900 dark:text-white font-bold text-xl lg:text-2xl">{label}</h3>
            <p class="text-gray-900 dark:text-white hidden lg:block">{location} | {date}</p> 
            <p class="text-gray-900 dark:text-white block lg:hidden">{location}<br/>{date}</p> 
        </div>
    </div>
  )
}

export default EventCard