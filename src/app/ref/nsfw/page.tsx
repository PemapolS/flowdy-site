import { RefFlowdyNSFW } from "../../../../public/images";

export default function NsfwPage() {
    return (
        <div className="flex flex-col mx-auto max-w-screen-xl gap-4 bg-slate-300 dark:bg-slate-800 rounded-xl p-6">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white font-ibm">Flowdy the Husky</h2>
            <p className="text-gray-700 sm:text-md dark:text-gray-300 font-ibm">Description WIP</p>
            
            <div className="mb-4">
                <h3 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white font-ibm">
                    Reference Sheet
                </h3>
                <div className="flex flex-col items-center gap-4">
                    <img
                        src={RefFlowdyNSFW.src}
                        alt="Flowdy Reference Sheet"
                        width={500}
                        className="rounded-lg"
                    />
                    <p className="text-gray-500 sm:text-md dark:text-gray-400 font-ibm">
                        Art by <a href ="https://trashmutt.com/" className="over:text-purple-600 dark:hover:text-purple-300 transition-colors">
                            Kota (TrashMutt)
                        </a>
                    </p>
                </div>
            </div>
            
        </div>
    );
}