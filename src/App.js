import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Training from "./pages/Training";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/training" element={<Training />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
