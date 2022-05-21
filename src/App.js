import { Route, Routes } from "react-router-dom";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/purchase" element={<Purchase/>}></Route>
         <Route path="/dashboard" element={<Dashboard/>}></Route>
         <Route path="/blogs" element={<Blog></Blog>}></Route>
         <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
         {/* <Route path="" element={}></Route>
         <Route path="" element={}></Route> */}
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
