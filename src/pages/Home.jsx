import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {

    const [showMessage, setShowMessage] = useState(false);

    function handleSubmit(event) {

        event.preventDefault();

        setShowMessage(true);

        setTimeout(() => {
            setShowMessage(false);
        }, 5000);

        event.target.reset();
    }

    return (
        <div>

            <Header />

            <main className="min-h-[80vh] bg-[#cdb695] p-5 lg:p-[50px]">

                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[35%_minmax(0,1fr)] gap-[35px]">

                    <section className="bg-[#a8a58b] p-5 lg:p-[35px] rounded-[20px] flex items-center justify-center">

                        <div className="w-full max-w-[500px] mx-auto bg-[#e6d5b8] p-5 lg:p-[35px] border-[8px] border-white/85 rounded-[20px] shadow-[0_5px_20px_rgba(0,0,0,0.25)] text-center">

                            <h2 className="text-[28px] lg:text-[32px] text-[#4b4b3e] mb-[15px]">
                                Welcome to Timeless Legacy
                            </h2>

                            <p className="text-[16px] lg:text-[18px] leading-[1.6] text-[#4b4b43] mb-[25px]">
                                Discover the rich history, culture,
                                and heritage of Cebu.
                            </p>

                            <form
                                id="login-form"
                                onSubmit={handleSubmit}
                                className="text-left"
                            >

                                <div className="mb-5">

                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-[#4b4b3e] font-bold"
                                    >
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                        className="w-full p-3 bg-[#f3e8d2] border border-[#9c8c70] rounded-[5px] text-[#4b4b3e] text-base focus:outline-2 focus:outline-[#777866]"
                                    />

                                </div>

                                <div className="mb-5">

                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-[#4b4b3e] font-bold"
                                    >
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        required
                                        className="w-full p-3 bg-[#f3e8d2] border border-[#9c8c70] rounded-[5px] text-[#4b4b3e] text-base focus:outline-2 focus:outline-[#777866]"
                                    />

                                </div>

                                <button
                                    type="submit"
                                    className="block mx-auto mt-[10px] px-[30px] py-3 border-0 rounded-[5px] bg-[#5b5042] text-white text-base cursor-pointer transition duration-200 hover:bg-[#777866]"
                                >
                                    Login
                                </button>

                            </form>

                            {showMessage && (

                                <p className="mt-5 p-3 bg-[#d9d4b8] text-[#4b4b3e] border border-[#8f8d72] rounded-[5px] font-bold">
                                    Login successful!
                                </p>

                            )}

                        </div>

                    </section>

                    <div className="flex flex-col gap-[25px]">

                        <section className="p-5 lg:p-[35px] bg-[#e6d5b8] border-[8px] border-white/85 rounded-[20px] text-left shadow-[0_5px_20px_rgba(0,0,0,0.15)]">

                            <h2 className="text-[28px] lg:text-[32px] text-[#4b4b3e] mb-5">
                                Explore Cebu's Heritage
                            </h2>

                            <p className="text-[16px] lg:text-[18px] leading-[1.7] text-[#4b4b43] mb-[15px]">
                                Timeless Legacy is a website dedicated
                                to showcasing the historical places and
                                cultural heritage of Cebu.
                            </p>

                            <p className="text-[16px] lg:text-[18px] leading-[1.7] text-[#4b4b43] mb-[15px]">
                                Explore the different landmarks and
                                discover the stories behind Cebu's
                                rich history.
                            </p>

                        </section>

                        <section className="p-5 lg:p-[30px] bg-[#e6d5b8] border-[8px] border-white/85 rounded-[20px] text-left shadow-[0_5px_20px_rgba(0,0,0,0.15)]">

                            <h2 className="text-[26px] lg:text-[30px] text-[#4b4b3e] mb-[25px]">
                                Featured Historical Places
                            </h2>

                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px]">

                                <img
                                    src="/media/magellan1.jfif"
                                    alt="Magellan's Cross"
                                    className="w-full h-[180px] object-cover rounded-[10px] border-4 border-white/70 shadow-[0_3px_10px_rgba(0,0,0,0.2)]"
                                />

                                <img
                                    src="/media/cathedral1.jfif"
                                    alt="Cebu Metropolitan Cathedral"
                                    className="w-full h-[180px] object-cover rounded-[10px] border-4 border-white/70 shadow-[0_3px_10px_rgba(0,0,0,0.2)]"
                                />

                                <img
                                    src="/media/fort1.jfif"
                                    alt="Fort San Pedro"
                                    className="w-full h-[180px] object-cover rounded-[10px] border-4 border-white/70 shadow-[0_3px_10px_rgba(0,0,0,0.2)]"
                                />

                                <img
                                    src="/media/museo1.jfif"
                                    alt="Museo Sugbo"
                                    className="w-full h-[180px] object-cover rounded-[10px] border-4 border-white/70 shadow-[0_3px_10px_rgba(0,0,0,0.2)]"
                                />

                            </div>

                        </section>

                    </div>

                </div>

            </main>

            <Footer />

        </div>
    );
}

export default Home;
