import { RefFlowdySFW, FursuitFlowdy, FB01_014, HB01_006BG1, HB01_007, HB01_011, Airport_ID, FI01_002 } from "../../../../../public/images";

export default function SfwPage() {
    // container for image + credit background / ring
    const boxClass = "rounded-lg overflow-hidden bg-white/60 dark:bg-slate-900/40 ring-1 ring-slate-900/5 dark:ring-slate-700/20 shadow-sm";
    // figcaption styling (no background — background applied to the whole box)
    const captionClass = "p-2 text-sm text-gray-600 dark:text-gray-300 font-ibm text-center";

    return (
        <div className="font-ibm flex flex-col mx-auto max-w-screen-xl gap-4 bg-slate-300 dark:bg-slate-800 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white font-ibm">Flowdy the Husky</h2>
                  <h2 className="text-2xl tracking-tight font-medium text-gray-700 dark:text-gray-300 font-ibm">Flowdy Martin</h2>
                  <p className="text-gray-700 sm:text-md dark:text-gray-300 font-ibm">
                    Flowdy is a friendly purple husky from Bangkok, Thailand. He works as an airport ground crew, specifically as an aircraft marshaller. He loves the cold and rain. Wanting to do everything by the book, he is a stickler for rules and regulations.
                  </p>
                </div>
                

                {/* Character bio table (stays in same left column) */}
                <section aria-labelledby="character-bio" className="w-full mt-6">
                  <h3 id="character-bio" className="mt-0 mb-2 text-2xl font-semibold text-gray-900 dark:text-white font-ibm">Character Bio</h3>

                  <div className="overflow-x-auto">
                    <table className="min-w-full max-w-2xl w-full table-fixed bg-transparent">
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
                          <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Birthdate</th>
                          <td className="py-2 text-sm text-gray-900 dark:text-white">8th November</td>
                        </tr>

                        <tr>
                          <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Height</th>
                          <td className="py-2 text-sm text-gray-900 dark:text-white">175 cm / 5'9"</td>
                        </tr>

                        <tr>
                          <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Aliases</th>
                          <td className="py-2 text-sm text-gray-900 dark:text-white">"Flower", "Flowerdy", "Flowder", "Flo", "Flowds"</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>

              {/* Single aside image that visually sits beside both the description and the bio */}
              <aside className="md:col-span-1">
                <figure className={`sticky top-20 w-full max-w-[280px] ${boxClass}`}>
                  <img src={Airport_ID.src} alt="Flowdy reference sheet" className="w-full h-auto object-cover" />
                  <figcaption className={captionClass}>
                    Employee ID | Art by{' '}
                    <a className="hover:text-purple-600 dark:hover:text-purple-300" href="https://betsuto.carrd.co/" target="_blank" rel="noreferrer">Betsuto</a>
                  </figcaption>
                </figure>
              </aside>
            </div>

            {/* Rest of page content (clothing, gallery, likes/dislikes, design notes, etc.) */}
            <div>
                <h3 className="mt-4 mb-2 text-2xl font-semibold text-gray-900 dark:text-white font-ibm">
                    Clothing Style
                </h3>
                <p className="text-gray-700 sm:text-md dark:text-gray-300 font-ibm">
                    During his day-to-day work as an airport ground crew, Flowdy typically wears a standard uniform which consists of a high-visibility vest over a blue t-shirt, dark cargo pants, and hearing protection earmuffs. He also wears a high-visibility rain jacket during wet weather. For casual occasions, he prefers comfortable outfits such as hoodies of the same blue color or simple t-shirts paired with long pants or shorts. He can also go without any clothing at all depending on the setting.
                </p>
                <div className="mt-4">
                  {/* Featured larger image above the grid */}
                  <div className="mb-6 flex justify-center">
                    <figure className={`w-full max-w-3xl ${boxClass}`}>
                      <img
                        src={FI01_002.src}
                        alt="FI01-002"
                        className="w-full h-auto object-cover"
                      />
                      <figcaption className={captionClass}>
                        Art by{' '}
                        <a className="hover:text-purple-600 dark:hover:text-purple-300" href="https://betsuto.carrd.co/" target="_blank" rel="noreferrer">
                          Betsuto
                        </a>
                      </figcaption>
                    </figure>
                  </div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                     {/* gallery items: keep square aspect ratio on all breakpoints */}
                     <figure className={`w-full rounded-lg overflow-hidden ${boxClass}`}>
                       <img
                         src={FB01_014.src}
                         alt="FB01-014"
                         className="w-full aspect-square object-cover rounded-lg"
                       />
                       <figcaption className={captionClass}>
                         Art by{' '}
                         <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://linktr.ee/merridoodles" target="_blank" rel="noreferrer">
                           Merridoodles
                         </a>
                       </figcaption>
                     </figure>

                     <figure className={`w-full rounded-lg overflow-hidden ${boxClass}`}>
                       <img
                         src={HB01_007.src}
                         alt="HB01-007"
                         className="w-full aspect-square object-cover object-top rounded-lg"
                       />
                       <figcaption className={captionClass}>
                         Art by{' '}
                         <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://wwoofington.carrd.co/" target="_blank" rel="noreferrer">
                           Kodapop
                         </a>
                       </figcaption>
                     </figure>

                     <figure className={`w-full rounded-lg overflow-hidden ${boxClass}`}>
                       <img
                         src={HB01_006BG1.src}
                         alt="HB01_006BG1"
                         className="w-full aspect-square object-cover rounded-lg"
                       />
                       <figcaption className={captionClass}>
                         Art by{' '}
                         <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://wwoofington.carrd.co/" target="_blank" rel="noreferrer">
                           Kodapop
                         </a>
                       </figcaption>
                     </figure>

                     <figure className={`w-full rounded-lg overflow-hidden ${boxClass}`}>
                       <img
                         src={HB01_011.src}
                         alt="HB01-011"
                         className="w-full aspect-square object-cover rounded-lg"
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

            {/* Likes / Dislikes side-by-side */}
            <section aria-labelledby="likes-dislikes" className="w-full">
              <h3 id="likes-dislikes" className="sr-only">Likes and Dislikes</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">Likes</h4>
                  <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Cold weather and snow</li>
                    <li>Working at the airport and orderly routines</li>
                    <li>Playful affection with friends</li>
                    <li>High-visibility vests and practical gear</li>
                    <li>Good familiar food and snacks</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">Dislikes</h4>
                  <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Hot, humid weather</li>
                    <li>Chaotic and uncontrollable environments</li>
                    <li>Being rushed or forced into situations</li>
                    <li>Unreliable equipment or breaking rules</li>
                    <li>Sudden loud noises</li>
                  </ul>
                </div>
              </div>
            </section>

            <section aria-labelledby="design-notes" className="w-full">
              <h3 id="design-notes" className="mt-6 mb-2 text-2xl font-semibold text-gray-900 dark:text-white font-ibm">
                Design Notes and Common Mistakes
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 font-ibm">
                <li>His nose color is different from his paw and outer ear color.</li>
                <li>The line marking runs from his mouth and ends on his tail.</li>
                <li>The four droplet markings on his back run vertically down his back and tail in a straight line.</li>
                <li>There are two droplets on his back and two on his tail.</li>
              </ul>
            </section>

            <div className="">
                <h3 className="mt-4 mb-2 text-2xl font-semibold text-gray-900 dark:text-white font-ibm">
                    Reference Sheet
                </h3>
                <div className="flex flex-col items-center gap-4">
                    <figure className={`w-full max-w-xl ${boxClass}`}>
                      <img
                        src={RefFlowdySFW.src}
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
            
            <div className="">
                <h3 className="mt-4 mb-2 text-2xl font-semibold text-gray-900 dark:text-white font-ibm">
                    Fursuit
                </h3>
                <div className="flex flex-col items-center gap-4">
                    <figure className={`w-full max-w-md ${boxClass}`}>
                      <img
                        src={FursuitFlowdy.src}
                        alt="Flowdy Fursuit"
                        className="w-full h-auto object-cover"
                      />
                      <figcaption className={captionClass}>
                        Fursuit by{' '}
                        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://www.furaffinity.net/user/LazyLupe" target="_blank" rel="noreferrer">
                          LupeSuits
                        </a>{' '}
                        | Photo by{' '}
                        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://ryuuwolf.gay" target="_blank" rel="noreferrer">
                          Ryuu
                        </a>
                      </figcaption>
                    </figure>
                 </div>
             </div>
         </div>
     );
 }