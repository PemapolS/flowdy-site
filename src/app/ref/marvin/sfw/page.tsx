import { RefMarvinSFW, HB00_005, HB00_007, YC02_001, FB02_006 } from "../../../../../public/images";

export default function SfwPage() {
    return (
        <div className="font-ibm flex flex-col mx-auto max-w-screen-xl gap-4 bg-slate-300 dark:bg-slate-800 rounded-xl p-6">
            <h2 className=" text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white font-ibm">Marvin the Sika Deer</h2>
            <h2 className="text-2xl tracking-tight font-medium text-gray-700 dark:text-gray-300 font-ibm">Marthew "Marvin" Dearmond</h2>
            <p className="text-gray-700 sm:text-md dark:text-gray-300 font-ibm">Marvin is a sika deer with a love for adventure and thrills. He is confident and expressive about his feelings. Professionally, he works as an aerospace engineer for a government space agency. On occasions, he also works as an astronaut. In an alternate universe where the world works a little differently, he is a magical deer wizard with the power of flight.</p>
            
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
                      <td className="py-2 text-sm text-gray-900 dark:text-white">Sika Deer</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Gender</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">Male (He/Him)</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Birthdate</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">27th February</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Height</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">200 cm / 6'7"</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Aliases</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">"Marv", "The Durr", "Space Deer", "Magic Deer", "Deer God"</td>
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
                  During work, he normally wears a workshop uniform consisting of a blue jumpsuit, safety goggles, and hardhat. When he has the opportunity, he gets to wear his astronaut suit for missions. Outside of work, he likes to dress formally in button-up shirts, slacks, dress shoes, and occasionally a suit jacket.
                </p>

                {/* Outdated designs warning */}
                <div role="status" className="mt-3 mb-4 rounded-md bg-yellow-50 dark:bg-yellow-900/40 border-l-4 border-amber-400 dark:border-amber-300 p-3 text-amber-800 dark:text-amber-100">
                  <p className="text-sm">
                    <strong className="font-semibold">Note:</strong>{' '}
                    The images below may show outdated character design. The reference sheet shown later on this page supersedes any older designs — please refer to it for the current character design.
                  </p>
                </div>
                
                <div className="mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    <div className="flex flex-col items-center gap-4">
                      <img
                        src={HB00_005.src}
                        alt="HB00-005"
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
                        src={HB00_007.src}
                        alt="HB00-007"
                        className="w-40 h-40 lg:w-56 lg:h-56 object-cover rounded-lg"
                      />
                      <p className="text-gray-500 sm:text-sm dark:text-gray-400 font-ibm text-center">
                        Art by{' '}
                        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="http://pupsonar.carrd.co/">
                          PupSonar
                        </a>
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <img
                        src={YC02_001.src}
                        alt="YC02-001"
                        className="w-40 h-40 lg:w-56 lg:h-56 object-cover rounded-lg"
                      />
                      <p className="text-gray-500 sm:text-sm dark:text-gray-400 font-ibm text-center">
                        Art by{' '}
                        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://bsky.app/profile/marleemutt.bsky.social">
                          Marleemutt
                        </a>
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <img
                        src={FB02_006.src}
                        alt="FB02-006"
                        className="w-40 h-40 lg:w-56 lg:h-56 object-cover object-top rounded-lg"
                      />
                      <p className="text-gray-500 sm:text-sm dark:text-gray-400 font-ibm text-center">
                        Art by{' '}
                        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://wwoofington.carrd.co/">
                          Kodapop
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
            </div>

            <section aria-labelledby="likes-dislikes" className="w-full">
              <h3 id="likes-dislikes" className="sr-only">Likes and Dislikes</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">Likes</h4>
                  <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li><a href="https://youtu.be/SNgNBsCI4EA">Solving practical problems</a></li>
                    <li>Partying and hanging out with friends</li>
                    <li>Exploration and adventure</li>
                    <li>High energy environments</li>
                    <li>Physical affection and skinship</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">Dislikes</h4>
                  <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Abstract concepts</li>
                    <li>Isolation</li>
                    <li>Lack of physical connection</li>
                    <li>Rigid environments</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="">
                <h3 className="mt-4 mb-2 text-2xl font-semibold text-gray-900 dark:text-white font-ibm">
                    Reference Sheet
                </h3>
                <div className="flex flex-col items-center gap-4">
                    <img
                        src={RefMarvinSFW.src}
                        alt="Marvin Reference Sheet"
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
            
        </div>
    );
}