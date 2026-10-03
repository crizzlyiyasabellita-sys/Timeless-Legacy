import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import places from "../data/places";

function Highlights() {

    const [search, setSearch] = useState("");

    const filteredPlaces = places.filter((place) =>
        place.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>

            <Header />

            <main className="min-h-[80vh] bg-[#cdb695] p-5 lg:p-[40px]">

                {/* Introduction */}
                <section className="max-w-[1000px] mx-auto text-center mb-[25px]">

                    <h2 className="text-[32px] lg:text-[40px] text-[#4b4b3e] font-bold mb-[10px]">
                        Cebu Heritage Highlights
                    </h2>

                    <p className="text-[17px] lg:text-[19px] leading-[1.5] text-[#4b4b43]">
                        Explore the historical places and cultural landmarks featured by Timeless Legacy.
                    </p>

                </section>

                {/* Search Bar */}
                <section className="max-w-[600px] mx-auto mb-[30px]">

                    <input
                        type="text"
                        placeholder="Search historical places..."
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        className="w-full p-3 bg-[#f3e8d2] border border-[#9c8c70] rounded-[8px] text-[#4b4b3e] text-base shadow-[0_3px_8px_rgba(0,0,0,0.15)] focus:outline-2 focus:outline-[#777866]"
                    />

                </section>

                {/* Places */}
                <section className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[20px]">

                    {filteredPlaces.map((place) => (

                        <div
                            key={place.id}
                            className="h-[300px] bg-[#e6d5b8] rounded-[15px] overflow-hidden border-[5px] border-white/85 shadow-[0_5px_15px_rgba(0,0,0,0.18)] flex flex-col"
                        >

                            {/* Image */}
                            <img
                                src={place.image}
                                alt={place.name}
                                className="w-full h-[120px] object-cover"
                            />

                            {/* Content */}
                            <div className="p-[15px] flex flex-col flex-1">

                                <h3 className="text-[21px] text-[#4b4b3e] font-bold mb-[8px]">
                                    {place.name}
                                </h3>

                                <p className="text-[14px] leading-[1.5] text-[#4b4b43] mb-[10px] line-clamp-2">
                                    {place.description}
                                </p>

                                <button
                                    onClick={() => {
                                        window.location.href = `/place/${place.id}`;
                                    }}
                                    className="mt-auto self-start px-[20px] py-[8px] bg-[#5b5042] text-white rounded-[5px] font-bold text-[14px] cursor-pointer transition duration-200 hover:bg-[#777866]"
                                >
                                    Learn More
                                </button>

                            </div>

                        </div>

                    ))}

                </section>
                
                {filteredPlaces.length === 0 && (
                    <p className="text-center text-[#4b4b3e] font-bold text-[18px] mt-[30px]">
                        No historical places found.
                    </p>
                )}

            </main>

            <Footer />

        </div>
    );
}

export default Highlights;
