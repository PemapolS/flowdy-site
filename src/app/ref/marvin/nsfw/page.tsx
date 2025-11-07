import { RefMarvinSFW, YC02_002_01 } from "../../../../../public/images";

export default function NsfwPage() {
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

            <h2 className=" text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white font-ibm">Marvin the Sika Deer</h2>
            <h2 className="text-2xl tracking-tight font-medium text-gray-700 dark:text-gray-300 font-ibm">Marthew "Marvin" Dearmond</h2>
            
            <p className="text-gray-700 sm:text-md dark:text-gray-300 font-ibm">
                Marvin is a passionate and confident deer who enjoys expressing his sexuality and exploring new experiences. He clearly communicates his boundaries and consents enthusiastically to activities he enjoys.
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
                      <td className="py-2 text-sm text-gray-900 dark:text-white">Sika Deer</td>
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
                      <td className="py-2 text-sm text-gray-900 dark:text-white">Top</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Sexual Role</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">Versatile</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Height</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">200 cm / 6'7"</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Penis Length</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">20 cm / 8"</td>
                    </tr>

                    <tr>
                      <th scope="row" className="text-left py-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Penis Diameter</th>
                      <td className="py-2 text-sm text-gray-900 dark:text-white">56 mm</td>
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
                    <li>Uniforms and formal wear</li>
                    <li>Biting</li>
                    <li>Vore as predator and prey</li>
                    <li>Teasing</li>
                    <li>Size difference</li>
                    <li>Excessive cum</li>
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

                {/* Outdated designs warning */}
                <div role="status" className="mt-3 mb-4 rounded-md bg-yellow-50 dark:bg-yellow-900/40 border-l-4 border-amber-400 dark:border-amber-300 p-3 text-amber-800 dark:text-amber-100">
                  <p className="text-sm">
                    Note: The image below may show outdated character design. The reference sheet shown above supersedes any older designs — please refer to it for the current character design.
                  </p>
                </div>

                <div className="pt-2 flex flex-col items-center gap-4">
                    <img
                        src={YC02_002_01.src}
                        alt="YC02-002-01"
                        width={300}
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