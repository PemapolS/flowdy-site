import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardUser } from '@fortawesome/free-solid-svg-icons';

const EventCard = ({imgURL, label, date, location, status = "Confirmed"}) => {
  const getStatusStyles = (status) => {
    const styles = {
      Confirmed: {
        card: 'bg-white/60 dark:bg-slate-800/60 ring-slate-900/5 dark:ring-slate-700/20 hover:shadow-lg',
        text: 'text-green-700 dark:text-green-300',
      },
      Planning: {
        card: 'bg-blue-100/60 dark:bg-blue-900/30 ring-blue-300/40 dark:ring-blue-700/40 hover:shadow-lg',
        text: 'text-blue-700 dark:text-blue-300',
      },
      Staff: {
        card: 'bg-white/60 dark:bg-slate-800/60 ring-slate-900/5 dark:ring-slate-700/20 hover:shadow-lg',
        text: 'text-green-700 dark:text-green-300',
      },
      Tentative: {
        card: 'bg-yellow-100/60 dark:bg-yellow-900/30 ring-yellow-300/40 dark:ring-yellow-700/40 hover:shadow-lg',
        text: 'text-yellow-700 dark:text-yellow-300',
      },
      Cancelled: {
        card: 'bg-red-100/60 dark:bg-red-900/30 ring-red-300/40 dark:ring-red-700/40 hover:shadow-lg',
        text: 'text-red-700 dark:text-red-300',
      },
    };
    return styles[status] || styles.Confirmed;
  };

  const statusStyles = getStatusStyles(status);

  return (
    <article
      role="article"
      className={`font-ibm group flex-none min-w-[240px] max-w-[400px] w-full rounded-[18px] ring-1 transition-transform duration-200 ease-out hover:-translate-y-1 px-4 py-3 flex items-center gap-3 justify-between ${statusStyles.card}`}
    >
        <div className="flex items-center gap-3 min-w-0 flex-1">
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
        </div>

        <div className="flex-shrink-0 ml-2">
          <p className={`${statusStyles.text} text-xs font-semibold uppercase tracking-wide text-right leading-tight`}>
            {status === "Staff" ? (
              <span className="inline-flex items-center justify-end gap-1">
                Confirmed
                <FontAwesomeIcon icon={faClipboardUser} aria-hidden="true" className="text-[16px]" />
              </span>
            ) : (
              status
            )}
          </p>
        </div>
    </article>
  )
}
  
export default EventCard