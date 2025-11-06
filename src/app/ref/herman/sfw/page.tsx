import { RefHermanSFW, OT03_002, HB03_001 } from "../../../../../public/images";

export default function SfwPage() {
    return (
        <div className="font-ibm flex flex-col mx-auto max-w-screen-xl gap-4 bg-slate-300 dark:bg-slate-800 rounded-xl p-6">
            <h2 className=" text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white font-ibm">Herman the Collie Mix</h2>
            <h2 className="text-2xl tracking-tight font-medium text-gray-700 dark:text-gray-300 font-ibm">Herman Alexander Marshall</h2>
            <p className="text-gray-700 sm:text-md dark:text-gray-300 font-ibm">Herman works as an environmental scientist, specializing in the study of plant biology and ecology. He is passionate about his field and often seen working in the field or conducting research in the lab. In his free time, he takes care of his own garden and enjoys spending time outdoors. Although he is shy and reserved, he can stand up for himself given the right situation.</p>
            
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
                      <td className="py-2 text-sm text-gray-900 dark:text-white">Dog (Border Collie + Shiba Inu)</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Gender</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">Male (He/Him)</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Birthdate</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">25th May</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Height</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">168 cm / 5'6"</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Aliases</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">"Plant Boy", "Chair Boy"</td>
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
                    Herman typically dresses in overalls and practical clothing for outdoor work, often with a wide brimmed hat to protect from the sun. During work at the university lab, he wears a lab coat with formal work attire underneath.
                </p>
                <div className="mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                    <div className="flex flex-col items-center gap-4">
                      <img
                        src={OT03_002.src}
                        alt="OT03-002"
                        className="w-40 h-40 lg:w-56 lg:h-56 object-cover object-top rounded-lg"
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
                        src={HB03_001.src}
                        alt="HB03-001"
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
                    <li>Nature and environment</li>
                    <li>Scientific research and discovery</li>
                    <li>Gardening</li>
                    <li>Hiking and nature walks</li>
                    <li>Outdoor activities</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">Dislikes</h4>
                  <ul className="mt-3 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Cold and rainy weather</li>
                    <li>Crowded</li>
                    <li>Being rushed or forced into situations</li>
                    <li>Sudden loud noises</li>
                    <li>Arbitrary rules</li>
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
                        src={RefHermanSFW.src}
                        alt="Herman Reference Sheet"
                        width={500}
                        className="rounded-lg"
                    />
                    <p className="text-gray-500 sm:text-sm dark:text-gray-400 font-ibm text-center">
                        Art by{' '}
                        <a className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors" href="https://wwoofington.carrd.co/" target="_blank" rel="noreferrer">
                          Kodapop
                        </a>
                    </p>
                </div>
            </div>
            
        </div>
    );
}