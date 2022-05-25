import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Authentication/ProtectedRoute";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Register from "./Pages/Register/Register";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Purchase from "./Pages/Purchase/Purchase";
import PartsDetail from "./Pages/PartsDetails/PartsDetail";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import AllUsers from "./Pages/Dashboard/AllUsers";
import AdminProtection from "./Authentication/AdminProtection";
import ManageAllProduct from "./Pages/Dashboard/ManageAllProduct";
import AddProduct from "./Pages/Dashboard/AddProduct";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import Payment from "./Pages/Dashboard/Payment";


function App() {
  return (
    <div className="mx-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         {/* <Route path="/parts/:partsId" element={<PartsDetail/>}></Route> */}
         <Route path="/parts/:partsId" element={<ProtectedRoute><Purchase/></ProtectedRoute>}></Route>
         <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}>
           <Route index element={<MyProfile></MyProfile>}/>
           <Route path="my_orders" element={<MyOrders></MyOrders>}/>
           <Route path="add_review" element={<AddReview></AddReview>}/>
           <Route path="payment/:id" element={<Payment></Payment>}/>
           <Route path="all_users" element={<AdminProtection><AllUsers></AllUsers></AdminProtection>}/>
           <Route path="manage_all_orders" element={<AdminProtection><ManageAllProduct></ManageAllProduct></AdminProtection>}/>
         
           <Route path="add_product" element={<AdminProtection><AddProduct></AddProduct></AdminProtection>}/>
           <Route path="manage_product" element={<AdminProtection><ManageProduct/></AdminProtection>}/>
         </Route>
         <Route path="/blogs" element={<Blog></Blog>}></Route>
         <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
         <Route path="/login" element={<Login></Login>}></Route>
         <Route path="/register" element={<Register></Register>}></Route>
       

         <Route path="*" element={<p className="text-center py-20 text-error font-bold text-4xl">There's nothing here: 404!</p>} />a
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
