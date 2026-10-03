import Header from "../components/Header";
import Footer from "../components/Footer";
import places from "../data/places";

function Place() {

    const path = window.location.pathname;
    const id = path.split("/")[2];

    const place = places.find((item) => item.id === id);

    if (!place) {
        return (
            <div>

                <Header />

                <main className="min-h-[80vh] bg-[#cdb695] p-5 lg:p-[50px] flex items-center justify-center">

                    <section className="w-full max-w-[900px] bg-[#e6d5b8] p-5 lg:p-[40px] border-[8px] border-white/85 rounded-[20px] text-center shadow-[0_5px_20px_rgba(0,0,0,0.18)]">

                        <h2 className="text-[30px] lg:text-[40px] text-[#4b4b3e] font-bold mb-[15px]">
                            Place Not Found
                        </h2>

                        <p className="text-[16px] lg:text-[18px] leading-[1.7] text-[#4b4b43] mb-[25px]">
                            The historical place you are looking for does not exist.
                        </p>

                        <a
                            href="/highlights"
                            className="inline-block px-[25px] py-3 bg-[#5b5042] text-white no-underline rounded-[5px] font-bold transition duration-200 hover:bg-[#777866]"
                        >
                            ← Back to Highlights
                        </a>

                    </section>

                </main>

                <Footer />

            </div>
        );
    }

    return (
        <div>

            <Header />

            <main className="min-h-[80vh] bg-[#cdb695] p-5 lg:p-[50px] flex items-center justify-center">

                <section className="w-full max-w-[1000px] bg-[#e6d5b8] p-5 lg:p-[40px] border-[8px] border-white/85 rounded-[20px] text-center shadow-[0_5px_20px_rgba(0,0,0,0.18)]">

                    <h2 className="text-[30px] lg:text-[40px] text-[#4b4b3e] font-bold mb-[25px]">
                        {place.name}
                    </h2>

                    <img
                        src={place.image}
                        alt={place.name}
                        className="w-full max-w-[800px] h-[300px] lg:h-[400px] mx-auto object-cover rounded-[10px] border-4 border-white/70 shadow-[0_3px_10px_rgba(0,0,0,0.2)] mb-[25px]"
                    />

                    <p className="text-[16px] lg:text-[18px] leading-[1.8] text-[#4b4b43] text-left mb-[25px]">
                        {place.description}
                    </p>

                    <a
                        href="/highlights"
                        className="inline-block px-[25px] py-3 bg-[#5b5042] text-white no-underline rounded-[5px] font-bold transition duration-200 hover:bg-[#777866]"
                    >
                        ← Back to Highlights
                    </a>

                </section>

            </main>

            <Footer />

        </div>
    );
}

export default Place;
