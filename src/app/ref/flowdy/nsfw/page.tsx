import { RefFlowdyNSFW } from "../../../../../public/images";

export default function NsfwPage() {
    // container for image + credit background / ring
    const boxClass = "w-full max-w-xl rounded-lg overflow-hidden bg-white/60 dark:bg-slate-900/40 ring-1 ring-slate-900/5 dark:ring-slate-700/20 shadow-sm";
    const captionClass = "p-2 text-sm text-gray-500 dark:text-gray-400 font-ibm text-center";

    return (
        <div className="font-ibm flex flex-col mx-auto max-w-screen-xl gap-4 bg-slate-300 dark:bg-slate-800 rounded-xl p-6">
            {/* NSFW banner */}
            <div
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
            </div>

            <h2 className=" text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white font-ibm">Flowdy the Husky</h2>
            <h2 className="text-2xl tracking-tight font-medium text-gray-700 dark:text-gray-300 font-ibm">Flowdy Martin</h2>
            
            <p className="text-gray-700 sm:text-md dark:text-gray-300 font-ibm">
                Flowdy is an approachable but timid purple husky. Although, when he is comfortable around someone, he can be very playful and affectionate.
            </p>

            {/* Character bio table */}
            <section aria-labelledby="character-bio" className="w-full">
              <h3 id="character-bio" className="mt-4 mb-2 text-2xl font-semibold text-gray-900 dark:text-white font-ibm">Character Bio</h3>

              <div className="overflow-x-auto">
                <table className="min-w-full max-w-2xl w-full table-fixed bg-transparent">
                  {/* make first column smaller with a fixed width */}
                  <colgroup>
                    <col className="w-40" />
                    <col />
                  </colgroup>

                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    
                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Species</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">Dog (Husky)</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Gender</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">Male (He/Him)</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Sexual Orientation</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">Gay (Male and Transmasculine)</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Sexual Position</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">Switch</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Sexual Role</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">Submissive</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Height</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">175 cm / 5'9"</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Penis Length</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">14 cm / 5.5"</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Penis Diameter</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">54 mm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Likes / Dislikes side-by-side */}
            <section aria-labelledby="likes-dislikes" className="w-full">
              <h3 id="likes-dislikes" className="sr-only">Likes and Dislikes</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">Likes</h4>
                  <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Uniforms and formal wear, especially neck ties</li>
                    <li>Biting</li>
                    <li>Bondage and Shibari</li>
                    <li>Kissing and Teasing</li>
                    <li>Watersports</li>
                    <li>Exhibitionism</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">Don'ts</h4>
                  <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Create NSFW content without permission</li>
                    <li>Animal-like genitalia</li>
                    <li>Extreme kinks not specified</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <div className="mb-4">
                <h3 className="mt-4 mb-2 text-2xl font-semibold text-gray-900 dark:text-white font-ibm">
                    Reference Sheet
                </h3>
                  <div className="flex flex-col items-center gap-4">
                    <figure className={boxClass}>
                      <img
                        src={RefFlowdyNSFW.src}
                        alt="Flowdy Reference Sheet"
                        className="w-full h-auto object-cover"
                      />
                      <figcaption className={captionClass}>
                        Art by{' '}
                        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://trashmutt.com/" target="_blank" rel="noreferrer">
                          Kota (TrashMutt)
                        </a>
                      </figcaption>
                    </figure>
                </div>
            </div>
            
        </div>
    );
}