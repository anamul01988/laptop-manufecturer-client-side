import { signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
const ManageAllProduct = () => {
  const [orderList, setOrderList] = useState([]);
  console.log(orderList);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?user=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`, //aita k send korteci headers theke
        },
      })
        .then((res) => {
          console.log('response', res);
          if(res.status === 401 || res.status ===403){
            signOut(auth);
            localStorage.removeItem('accessToken');
             navigate('/')
          }
          return res.json()
        })
        .then((data) => {
          setOrderList(data);
        });
    }
  }, [user]);
  return (
    <div class="">
      <h3>My orders: {orderList.length}</h3>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Prduct Name</th>
              <th>Price</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map((order, key) => (
              <tr>
                <th>{key + 1}</th>
                <td>{order.userName}</td>
                <td>{order.order}</td>
                <td>{order.price}</td>
                <td>{order.address}</td>
                <td>{order.phone}</td>
                <td>
                 {/* {(order.price) && <button className='btn btn-xs btn-success'>Pay</button>} */}
                 {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Unpaid</button></Link>}
                 {/* {(order.price && order.paid) && <span className='text-success'>paid</span>} */}
                 {(order.price && order.paid) && <div>
                  <span className='text-success'>Shipped</span>
                  <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                   </div>}
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllProduct;




// import { signOut } from "firebase/auth";
// import React, { useState, useEffect } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";
// import auth from "../../firebase.init";
// const MyOrders = () => {
//   const [orderList, setOrderList] = useState([]);
//   console.log(orderList);
//   const [user] = useAuthState(auth);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (user) {
//       fetch(`http://localhost:5000/order?user=${user.email}`, {
//         method: "GET",
//         headers: {
//           authorization: `Bearer ${localStorage.getItem("accessToken")}`, //aita k send korteci headers theke
//         },
//       })
//         .then((res) => {
//           console.log('response', res);
//           if(res.status === 401 || res.status ===403){
//             signOut(auth);
//             localStorage.removeItem('accessToken');
//              navigate('/')
//           }
//           return res.json()
//         })
//         .then((data) => {
//           setOrderList(data);
//         });
//     }
//   }, [user]);
//   return (
//     <div class="">
//       <h3>My orders: {orderList.length}</h3>
//       <div class="overflow-x-auto">
//         <table class="table w-full">
//           <thead>
//             <tr>
//               <th></th>
//               <th>Name</th>
//               <th>Prduct Name</th>
//               <th>Price</th>
//               <th>Address</th>
//               <th>Phone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orderList.map((order, key) => (
//               <tr>
//                 <th>{key + 1}</th>
//                 <td>{order.userName}</td>
//                 <td>{order.order}</td>
//                 <td>{order.price}</td>
//                 <td>{order.address}</td>
//                 <td>{order.phone}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyOrders;
