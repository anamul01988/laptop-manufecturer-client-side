import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const MyOrders = () => {
  const [orderList, setOrderList] = useState([]);
  console.log(orderList);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/order?user=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrderList(data));
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
            </tr>
          </thead>
          <tbody>
            {orderList.map((order,key) => (
              <tr>
                <th>{key+1}</th>
                <td>{order.userName}</td>
                <td>{order.order}</td>
                <td>{order.price}</td>
                <td>{order.address}</td>
                <td>{order.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
