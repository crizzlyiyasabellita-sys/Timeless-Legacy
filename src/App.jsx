import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Highlights from "./pages/Highlights";
import Place from "./pages/Place";
import ContactUs from "./pages/ContactUs";

function App() {

    const path = window.location.pathname;

    // Home
    if (path === "/") {
        return <Home />;
    }

    // About Us
    if (path === "/about") {
        return <AboutUs />;
    }

    // Highlights
    if (path === "/highlights") {
        return <Highlights />;
    }

    // Contact
    if (path === "/contact") {
        return <ContactUs />;
    }

    // Individual historical place
    if (path.startsWith("/place/")) {
        return <Place />;
    }

    // If the URL does not match anything,
    // show the Home page
    return <Home />;
}

export default App;