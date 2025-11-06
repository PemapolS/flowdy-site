
export default function NsfwPage() {
    return (
        <div className="font-ibm flex flex-col mx-auto max-w-screen-xl gap-4 bg-slate-300 dark:bg-slate-800 rounded-xl p-6">

            {/* <div
              role="alert"
              aria-label="NSFW content warning"
              className="w-full p-4 mb-2 rounded-md bg-amber-50 dark:bg-amber-900 border-l-4 border-amber-400 dark:border-amber-300 text-amber-800 dark:text-amber-100"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl leading-none" aria-hidden>⚠️</span>
                <div>
                  <p className="font-semibold">Not Safe For Work (NSFW) Content Warning</p>
                  <p className="text-sm">This page contains adult content. You must be 18 years (or the age of majority according to your local laws) or older to view this content. Viewer discretion is advised.</p>
                </div>
              </div>
            </div> */}

            <h2 className=" text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white font-ibm">Herman the Collie Mix</h2>
            <h2 className="text-2xl tracking-tight font-medium text-gray-700 dark:text-gray-300 font-ibm">Herman Alexander Marshall</h2>
            
            <p className="text-gray-700 sm:text-md dark:text-gray-300 font-ibm">
                Currently, Herman does not engage in NSFW activities and is strictly SFW.
            </p>
            
        </div>
    );
}