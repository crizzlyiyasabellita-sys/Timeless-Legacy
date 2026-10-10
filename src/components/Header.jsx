function Header() {
    return (
        <header className="min-h-[140px] bg-[#777866] px-5 py-5 lg:px-[50px] flex flex-col lg:flex-row lg:items-center">

            <h1 className="m-0 text-white font-bold font-serif text-[36px] lg:text-[50px] text-center lg:text-left whitespace-normal lg:whitespace-nowrap drop-shadow-[3px_3px_4px_rgba(0,0,0,0.35)]">
                Timeless Legacy
            </h1>

            <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-[50px] mt-5 lg:mt-0 lg:ml-auto">

                <nav className="flex flex-col lg:flex-row items-center gap-3 lg:gap-[30px]">

                    <a
                        href="/"
                        className="text-white no-underline font-bold text-[40px] lg:text-[25px] whitespace-nowrap transition duration-200 hover:text-[#e4d2ae]"
                    >
                        Home
                    </a>

                    <a
                        href="/about"
                        className="text-white no-underline font-bold text-[40px] lg:text-[25px] whitespace-nowrap transition duration-200 hover:text-[#e4d2ae]"
                    >
                        About Us
                    </a>

                    <a
                        href="/highlights"
                        className="text-white no-underline font-bold text-[40px] lg:text-[25px] whitespace-nowrap transition duration-200 hover:text-[#e4d2ae]"
                    >
                        Highlights
                    </a>

                    <a
                        href="/gallery"
                        className="text-white no-underline font-bold text-[40px] lg:text-[25px] whitespace-nowrap transition duration-200 hover:text-[#e4d2ae]"
                    >
                        Gallery
                    </a>

                    <a
                        href="/contact"
                        className="text-white no-underline font-bold text-[40px] lg:text-[25px] whitespace-nowrap transition duration-200 hover:text-[#e4d2ae]"
                    >
                        Contact
                    </a>

                </nav>

                <div className="flex items-center shrink-0">
                    <img
                        src="/media/logo.png"
                        alt="Timeless Legacy Logo"
                        className="w-[90px] h-[90px] lg:w-[120px] lg:h-[120px] object-cover rounded-full border-[3px] border-[#cdb695] shadow-[0_3px_10px_rgba(0,0,0,0.25)]"
                    />
                </div>

            </div>

        </header>
    );
}

export default Header;
