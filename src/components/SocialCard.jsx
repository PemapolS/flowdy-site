import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialCard = ({imgURL, label, href}) => {
  return (
    <a href={href} className="group" aria-label={label} rel="noopener noreferrer">
        <div className="flex-1 flex gap-5 min-w-[200px] lg:min-w-[250px] w-full rounded-[20px] px-3 py-2 lg:py-3 items-center ring-1 ring-slate-900/10 bg-white/0 dark:bg-transparent transition-transform duration-200 ease-out transform hover:scale-[1.02] hover:shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500">
            <div className="flex w-11 h-11 justify-center items-center rounded-xl bg-transparent transition-colors duration-200 group-hover:bg-purple-600 group-hover:text-white">
                {/* ensure icon is white in dark mode and always turns white on hover */}
                <div className="text-slate-700 dark:text-white group-hover:text-white">
                  <FontAwesomeIcon icon={imgURL} size="xl" aria-hidden="true"/>
                </div>
            </div>

            <div className="font-ibm">
                <h3 className="text-gray-900 dark:text-white font-medium text-xl transition-colors duration-200 group-hover:text-purple-600 dark:group-hover:text-purple-300">
                  {label}
                </h3>
            </div>
        </div>
    </a>

  )
}

export default SocialCard