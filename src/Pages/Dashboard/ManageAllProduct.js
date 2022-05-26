import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";

const ManageAllProduct = () => {
  const { data: allOrders, isLoading } = useQuery("allOrders", () =>
    fetch("https://guarded-chamber-19497.herokuapp.com/getOrders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  console.log(allOrders);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    // <div>
    //     <h3>{allOrders?.length}</h3>
    // </div>
    <div class="">
      <h3>My orders: {allOrders.length}</h3>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Prduct Name</th>
              <th>Price</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, key) => (
              <tr>
                <th>{key + 1}</th>
                <td>{order.userName}</td>
                <td>{order.order}</td>
                <td>{order.price}</td>

                <td>{order.paid=== true ? <button class="btn btn-primary btn-disabled">Confirm Order</button > :  <button btn btn-primary>Delete order</button>
                   
                    }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllProduct;
