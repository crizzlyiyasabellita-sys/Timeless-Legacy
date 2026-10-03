function Header() {
    return (
        <header className="site-header">

            <h1>
                Timeless Legacy
            </h1>

            <nav>

                <a href="/">
                    Home
                </a>

                <a href="/about">
                    About Us
                </a>

                <a href="/highlights">
                    Highlights
                </a>

                <a href="/contact">
                    Contact
                </a>

            </nav>

            <div className="logo-container">

                <img
                    src="/media/logo.png"
                    alt="Timeless Legacy Logo"
                />

            </div>

        </header>
    );
}

export default Header;