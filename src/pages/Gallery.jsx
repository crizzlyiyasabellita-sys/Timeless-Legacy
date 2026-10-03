import Header from "../components/Header";
import Footer from "../components/Footer";

function Gallery() {
    return (
        <div>

            <Header />

            <main className="min-h-[80vh] bg-[#cdb695] p-5 lg:p-[40px]">

                {/* Gallery Introduction */}
                <section className="max-w-[1000px] mx-auto text-center mb-[30px]">

                    <h2 className="text-[32px] lg:text-[40px] text-[#4b4b3e] font-bold mb-[10px]">
                        Cebu Heritage Gallery
                    </h2>

                    <p className="text-[17px] lg:text-[19px] leading-[1.5] text-[#4b4b43]">
                        Explore images of Cebu's historical places and cultural landmarks.
                    </p>

                </section>

                {/* Gallery */}
                <section className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[20px]">

                    <div className="bg-[#e6d5b8] p-[15px] rounded-[15px] border-[5px] border-white/85 shadow-[0_5px_15px_rgba(0,0,0,0.18)]">
                        <img
                            src="/media/magellan1.jfif"
                            alt="Magellan's Cross"
                            className="w-full h-[250px] object-cover rounded-[10px]"
                        />
                        <h3 className="text-[21px] text-[#4b4b3e] font-bold text-center mt-[12px]">
                            Magellan's Cross
                        </h3>
                    </div>

                    <div className="bg-[#e6d5b8] p-[15px] rounded-[15px] border-[5px] border-white/85 shadow-[0_5px_15px_rgba(0,0,0,0.18)]">
                        <img
                            src="/media/cathedral1.jfif"
                            alt="Cebu Metropolitan Cathedral"
                            className="w-full h-[250px] object-cover rounded-[10px]"
                        />
                        <h3 className="text-[21px] text-[#4b4b3e] font-bold text-center mt-[12px]">
                            Cebu Metropolitan Cathedral
                        </h3>
                    </div>

                    <div className="bg-[#e6d5b8] p-[15px] rounded-[15px] border-[5px] border-white/85 shadow-[0_5px_15px_rgba(0,0,0,0.18)]">
                        <img
                            src="/media/fort1.jfif"
                            alt="Fort San Pedro"
                            className="w-full h-[250px] object-cover rounded-[10px]"
                        />
                        <h3 className="text-[21px] text-[#4b4b3e] font-bold text-center mt-[12px]">
                            Fort San Pedro
                        </h3>
                    </div>

                    <div className="bg-[#e6d5b8] p-[15px] rounded-[15px] border-[5px] border-white/85 shadow-[0_5px_15px_rgba(0,0,0,0.18)]">
                        <img
                            src="/media/museo1.jfif"
                            alt="Museo Sugbo"
                            className="w-full h-[250px] object-cover rounded-[10px]"
                        />
                        <h3 className="text-[21px] text-[#4b4b3e] font-bold text-center mt-[12px]">
                            Museo Sugbo
                        </h3>
                    </div>

                    <div className="bg-[#e6d5b8] p-[15px] rounded-[15px] border-[5px] border-white/85 shadow-[0_5px_15px_rgba(0,0,0,0.18)]">
                        <img
                            src="/media/casa1.jfif"
                            alt="Casa Gorordo Museum"
                            className="w-full h-[250px] object-cover rounded-[10px]"
                        />
                        <h3 className="text-[21px] text-[#4b4b3e] font-bold text-center mt-[12px]">
                            Casa Gorordo Museum
                        </h3>
                    </div>

                    <div className="bg-[#e6d5b8] p-[15px] rounded-[15px] border-[5px] border-white/85 shadow-[0_5px_15px_rgba(0,0,0,0.18)]">
                        <img
                            src="/media/yap-san1.jfif"
                            alt="Yap-San Diego Ancestral House"
                            className="w-full h-[250px] object-cover rounded-[10px]"
                        />
                        <h3 className="text-[21px] text-[#4b4b3e] font-bold text-center mt-[12px]">
                            Yap-San Diego Ancestral House
                        </h3>
                    </div>

                    <div className="bg-[#e6d5b8] p-[15px] rounded-[15px] border-[5px] border-white/85 shadow-[0_5px_15px_rgba(0,0,0,0.18)]">
                        <img
                            src="/media/heritage1.jfif"
                            alt="Heritage of Cebu Monument"
                            className="w-full h-[250px] object-cover rounded-[10px]"
                        />
                        <h3 className="text-[21px] text-[#4b4b3e] font-bold text-center mt-[12px]">
                            Heritage of Cebu Monument
                        </h3>
                    </div>

                    <div className="bg-[#e6d5b8] p-[15px] rounded-[15px] border-[5px] border-white/85 shadow-[0_5px_15px_rgba(0,0,0,0.18)]">
                        <img
                            src="/media/colon1.jfif"
                            alt="Colon Street"
                            className="w-full h-[250px] object-cover rounded-[10px]"
                        />
                        <h3 className="text-[21px] text-[#4b4b3e] font-bold text-center mt-[12px]">
                            Colon Street
                        </h3>
                    </div>

                    <div className="bg-[#e6d5b8] p-[15px] rounded-[15px] border-[5px] border-white/85 shadow-[0_5px_15px_rgba(0,0,0,0.18)]">
                        <img
                            src="/media/plaza1.jfif"
                            alt="Plaza Independencia"
                            className="w-full h-[250px] object-cover rounded-[10px]"
                        />
                        <h3 className="text-[21px] text-[#4b4b3e] font-bold text-center mt-[12px]">
                            Plaza Independencia
                        </h3>
                    </div>

                </section>

            </main>

            <Footer />

        </div>
    );
}

export default Gallery;