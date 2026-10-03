import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutUs() {
    return (
        <div>

            <Header />

            <main className="min-h-[80vh] bg-[#cdb695] p-[50px]">

                <section className="max-w-[1200px] mx-auto bg-[#e6d5b8] p-[40px] rounded-[20px] border-[8px] border-white/85 shadow-[0_5px_20px_rgba(0,0,0,0.15)]">

                    <h2 className="text-[36px] text-[#4b4b3e] text-center mb-[25px]">
                        About Us
                    </h2>

                    <h3 className="text-[25px] text-[#4b4b3e] mb-[15px]">
                        Description:
                    </h3>

                    <p className="text-[18px] leading-[1.7] text-[#4b4b43] mb-[30px]">
                        The website is a digital guide showcasing Cebu's rich
                        history and cultural heritage through its iconic
                        landmarks. It offers detailed articles, photos, and
                        interactive maps to explore significant sites, such as
                        Magellan's Cross, Fort San Pedro, and the Basilica
                        Minore del Santo Niño. Designed for history enthusiasts,
                        tourists, and students, it provides insights into
                        Cebu's role in shaping Philippine history, including
                        its trade, culture, and religion. The site also
                        highlights cultural events, festivals, and practical
                        information for visitors, promoting the preservation
                        and appreciation of Cebu's heritage. With an engaging
                        interface, it serves as a valuable resource for both
                        locals and visitors interested in Cebu's past.
                    </p>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px] mb-[35px]">

                        <img
                            src="/media/magellan1.jfif"
                            alt="Magellan's Cross"
                            className="w-full h-[220px] object-cover rounded-[10px] border-4 border-white/70 shadow-[0_3px_10px_rgba(0,0,0,0.2)]"
                        />

                        <img
                            src="/media/fort1.jfif"
                            alt="Fort San Pedro"
                            className="w-full h-[220px] object-cover rounded-[10px] border-4 border-white/70 shadow-[0_3px_10px_rgba(0,0,0,0.2)]"
                        />

                        <img
                            src="/media/casa1.jfif"
                            alt="Casa Gorordo Museum"
                            className="w-full h-[220px] object-cover rounded-[10px] border-4 border-white/70 shadow-[0_3px_10px_rgba(0,0,0,0.2)]"
                        />

                        <img
                            src="/media/yap-san1.jfif"
                            alt="Yap-San Diego Ancestral House"
                            className="w-full h-[220px] object-cover rounded-[10px] border-4 border-white/70 shadow-[0_3px_10px_rgba(0,0,0,0.2)]"
                        />

                        <img
                            src="/media/heritage1.jfif"
                            alt="Heritage of Cebu Monument"
                            className="w-full h-[220px] object-cover rounded-[10px] border-4 border-white/70 shadow-[0_3px_10px_rgba(0,0,0,0.2)]"
                        />

                        <img
                            src="/media/cathedral1.jfif"
                            alt="Cebu Metropolitan Cathedral"
                            className="w-full h-[220px] object-cover rounded-[10px] border-4 border-white/70 shadow-[0_3px_10px_rgba(0,0,0,0.2)]"
                        />

                        <img
                            src="/media/museo1.jfif"
                            alt="Museo Sugbo"
                            className="w-full h-[220px] object-cover rounded-[10px] border-4 border-white/70 shadow-[0_3px_10px_rgba(0,0,0,0.2)]"
                        />

                        <img
                            src="/media/colon1.jfif"
                            alt="Colon Street"
                            className="w-full h-[220px] object-cover rounded-[10px] border-4 border-white/70 shadow-[0_3px_10px_rgba(0,0,0,0.2)]"
                        />

                        <img
                            src="/media/plaza1.jfif"
                            alt="Plaza Independencia"
                            className="w-full h-[220px] object-cover rounded-[10px] border-4 border-white/70 shadow-[0_3px_10px_rgba(0,0,0,0.2)]"
                        />

                    </div>


                    <section className="bg-[#d9c7a5] p-[30px] rounded-[15px]">

                        <h2 className="text-[30px] text-[#4b4b3e] mb-[20px]">
                            Our Objectives
                        </h2>

                        <ul className="list-disc pl-[30px] text-[18px] leading-[1.8] text-[#4b4b43]">

                            <li>
                                To showcase the historical landmarks of Cebu.
                            </li>

                            <li>
                                To provide information about Cebu's cultural
                                heritage.
                            </li>

                            <li>
                                To encourage people to appreciate Cebu's
                                history.
                            </li>

                            <li>
                                To preserve awareness of important historical
                                places.
                            </li>

                        </ul>

                    </section>

                </section>

            </main>

            <Footer />

        </div>
    );
}

export default AboutUs;
