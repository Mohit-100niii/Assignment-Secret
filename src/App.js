import "./styles/app.sass";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Carousel } from "./components";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Carousel />
        <Footer/>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
