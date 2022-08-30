import "./App.css";
import { Routes, Route } from "react-router-dom";
import Bags from "./Components/Bags/Bags";
import Dresses from "./Components/Dresses/Dresses";

import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Jewellery from "./Components/Jewellery/Jewellery";

import Navbar from "./Components/Navbar/Navbar";

import Shoes from "./Components/Shoes/Shoes";
import Signup from "./Components/Signup/Signup";
import Sunglasses from "./Components/Sunglasses/Sunglasses";
import Watches from "./Components/Watches/Watches";
import Contact from "./Components/Contact/Contact";
import NoMatch from "./Components/NoMatch/NoMatch";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dresses" element={<Dresses/>} />
        <Route path="shoes" element={<Shoes />} />
        <Route path="bags" element={<Bags />} />
        <Route path="watches" element={<Watches />} />
        <Route path="sunglasses" element={<Sunglasses />} />
        <Route path="jewellery" element={<Jewellery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />

      </Routes>
      <Signup/>
      <Footer/>
    </div>

    // <div className="App">
    //   <Navbar/>
    //   <Home/>
    //   <Product/>
    //   <Explore/>
    //    {/* <Banner/> */}
    //    {/* <Dresses/> */}
    //    {/* <Shoes/> */}
    //    {/* <Bags/> */}
    //    {/* <Watches/> */}
    //    {/* <Sunglasses/> */}
    //    {/* <Jewellery/> */}

    //   <Signup/>

    //   <Footer/>
    // </div>
  );
}

export default App;
