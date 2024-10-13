import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialCard = ({imgURL, label, href}) => {
  return (
    <a href={href}>
        <div class="flex-1 flex gap-5 min-w-[200px] lg:min-w-[250px] w-full rounded-[20px] px-3 py-2 lg:py-3 ring-1 items-center ring-slate-900/15 dark:bg-slate-300/5">
            <div class="flex w-11 h-11 justify-center items-center rounded-xl dark:hidden">
                <FontAwesomeIcon icon={imgURL} size="xl"/>
            </div>
            <div class="hidden w-11 h-11 justify-center items-center rounded-xl dark:flex">
                <FontAwesomeIcon icon={imgURL} size="xl" style={{color: "#ffffff",}} />
            </div>
            <div class="font-ibm">
                <h3 class="text-gray-900 dark:text-white font-regular text-xl">{label}</h3>
            </div>
        </div>
    </a>

  )
}

export default SocialCard