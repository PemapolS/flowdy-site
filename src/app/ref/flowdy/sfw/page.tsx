import { RefFlowdySFW, FursuitFlowdy, FB01_014, HB01_006BG1, HB01_007, HB01_011 } from "../../../../../public/images";

export default function SfwPage() {
    return (
        <div className="font-ibm flex flex-col mx-auto max-w-screen-xl gap-4 bg-slate-300 dark:bg-slate-800 rounded-xl p-6">
            <h2 className=" text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white font-ibm">Flowdy the Husky</h2>
            <h2 className="text-2xl tracking-tight font-medium text-gray-700 dark:text-gray-300 font-ibm">Flowdy Martin</h2>
            <p className="text-gray-700 sm:text-md dark:text-gray-300 font-ibm">Flowdy is a friendly purple husky from Bangkok, Thailand. He works as an airport ground crew, specifically as an aircraft marshaller. He loves the cold and rain. Wanting to do everything by the book, he is a stickler for rules and regulations.</p>
            
            {/* Character bio table */}
            <section aria-labelledby="character-bio" className="w-full">
              <h3 id="character-bio" className="mt-4 mb-2 text-2xl font-semibold text-gray-900 dark:text-white font-ibm">Character Bio</h3>

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
            
            <div>
                <h3 className="mt-4 mb-2 text-2xl font-semibold text-gray-900 dark:text-white font-ibm">
                    Clothing Style
                </h3>
                <p className="text-gray-700 sm:text-md dark:text-gray-300 font-ibm">
                    During his day-to-day work as an airport ground crew, Flowdy typically wears a standard uniform which consists of a high-visibility vest over a blue t-shirt, dark cargo pants, and hearing protection earmuffs. For casual occasions, he prefers comfortable outfits such as hoodies of the same blue color or simple t-shirts paired with long pants or shorts. He can also go without any clothing at all depending on the setting.
                </p>
                <div className="mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    <div className="flex flex-col items-center gap-4">
                      <img
                        src={FB01_014.src}
                        alt="FB01-014"
                        className="w-40 h-40 lg:w-56 lg:h-56 object-cover rounded-lg"
                      />
                      <p className="text-gray-500 sm:text-sm dark:text-gray-400 font-ibm text-center">
                        Art by{' '}
                        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://linktr.ee/merridoodles">
                          Merridoodles
                        </a>
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <img
                        src={HB01_007.src}
                        alt="HB01-007"
                        className="w-40 h-40 lg:w-56 lg:h-56 object-cover object-top rounded-lg"
                      />
                      <p className="text-gray-500 sm:text-sm dark:text-gray-400 font-ibm text-center">
                        Art by{' '}
                        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://wwoofington.carrd.co/">
                          Kodapop
                        </a>
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <img
                        src={HB01_006BG1.src}
                        alt="HB01_006BG1"
                        className="w-40 h-40 lg:w-56 lg:h-56 object-cover rounded-lg"
                      />
                      <p className="text-gray-500 sm:text-sm dark:text-gray-400 font-ibm text-center">
                        Art by{' '}
                        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://wwoofington.carrd.co/">
                          Kodapop
                        </a>
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <img
                        src={HB01_011.src}
                        alt="HB01-011"
                        className="w-40 h-40 lg:w-56 lg:h-56 object-cover rounded-lg"
                      />
                      <p className="text-gray-500 sm:text-sm dark:text-gray-400 font-ibm text-center">
                        Art by{' '}
                        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://trashmutt.com/">
                          Kota (TrashMutt)
                        </a>
                      </p>
                    </div>
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
                    <img
                        src={RefFlowdySFW.src}
                        alt="Flowdy Reference Sheet"
                        width={500}
                        className="rounded-lg"
                    />
                    <p className="text-gray-500 sm:text-sm dark:text-gray-400 font-ibm text-center">
                        Art by{' '}
                        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://trashmutt.com/" target="_blank" rel="noreferrer">
                          Kota (TrashMutt)
                        </a>
                    </p>
                </div>
            </div>
            
            <div className="">
                <h3 className="mt-4 mb-2 text-2xl font-semibold text-gray-900 dark:text-white font-ibm">
                    Fursuit
                </h3>
                <div className="flex flex-col items-center gap-4">
                    <img
                        src={FursuitFlowdy.src}
                        alt="Flowdy Fursuit"
                        width={400}
                        className="rounded-lg"
                    />
                    <p className="text-gray-500 sm:text-sm dark:text-gray-400 font-ibm text-center">
                        Fursuit by{' '}
                        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://www.furaffinity.net/user/LazyLupe" target="_blank" rel="noreferrer">
                          LupeSuits
                        </a>{' '}
                        | Photo by{' '}
                        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://ryuuwolf.gay" target="_blank" rel="noreferrer">
                          Ryuu
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}