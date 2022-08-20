import React from "react"
import './app.css';

const App = () => {
    return (
        <div>
            {/* Hero Section */}
            <section id="hero" className="pt-20 px-4 lg:px-0">
                <div className="content">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <div className="mt-2">
                                <img src="logo192.png" className="profile max-w-full mx-auto" />
                                <h2 className="text-center mt-2 font-bold text-3xl">Wahyu Pratama</h2>
                            </div>
                        </div>

                        <div className="w-full mt-2 text-center bg-neutral-800 py-3 px-6 rounded-md">
                            <h2>
                                A Web Developer who focuses more on the Backend using PHP and Laravel as the main technology used and would be a fast learner to doing new things and build good teamwork either.
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero Section End */}

            <section id="portfolio" className="mt-6 px-4 lg:px-0">
                <div className="content">
                <div className="w-full">
                    <h2 className="text-2xl">Portfolio</h2>

                    <div className="portfolio-item mt-4">
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            <div class="rounded overflow-hidden shadow-lg bg-white">
                                <img class="w-full" src="/thumb-kado-kemerdekaan-yatim.jpeg" alt="Sunset in the mountains" />
                                <div class="px-6 py-4">
                                    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                                    <p class="text-gray-700 text-base">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                </div>
                                <div class="px-6 pt-4 pb-2">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default App