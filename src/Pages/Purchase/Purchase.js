import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import usePartsDetail from "../../Hooks/usePartsDetail";
const Purchase = () => {
  const { partsId } = useParams();
  const [parts] = usePartsDetail(partsId);
  const { name, _id, price, min_order_quantity } = parts;
  const [count, setCount] = useState(null);
  const [user] = useAuthState(auth);
  const increament = (num) => {
    console.log(num);
    setCount(num + 1);
  };
  const handleOrder = (event) => {
    event.preventDefault();
    const phone = event.target.phone.value;
    const address = event.target.address.value;
    const order = {
      orderId: _id,
      order: name,
      price: price,
      user: user.email,
      userName: user.displayName,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };

    fetch('https://guarded-chamber-19497.herokuapp.com/order',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res=> res.json())
    .then(data => {
      // console.log(data);
      if(data.success){
        toast(`You order is sent.`)
      }
      else{
        toast.error(`Already ordered`)
      }
    })
  };
  return (
   
    <div class="hero min-h-screen bg-base-200 py-12">
      <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 ">
        <div class="card-body">
          <h2 className="text-primary text-center font-bold text-3xl">
            Reservation Form
          </h2>
          <form onSubmit={handleOrder}>
            <div class="form-control mt-6">
              <input
                type="text"
                value={user?.displayName || " "}
                name="name"
                placeholder="name"
                required
                readOnly
                disabled
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <input
                type="text"
                value={user?.email || " "}
                name="email"
                placeholder="Email"
                required
                readOnly
                disabled
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <input
                type="text"
                value={name}
                name="pd_name"
                placeholder="Product Name"
                required
                disabled
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                required
                class="input input-bordered"
              />
            </div>

            <div class="form-control mt-6">
              <input
                type="submit"
                value="Place Order"
                class="btn btn-primary"
              />
            </div>
          </form>

          
          <div class="form-control mt-6 flex">
              <div className="flex justify-center">
                <button className="btn btn-square text-3xl ">+</button>
                <input
                  type="text"
                  name="phone"
                  value={min_order_quantity}
                  placeholder="min-Quantity"
                  required
                  class="input input-bordered w-33"
                  readOnly
                />
                <button
                  onClick={() => increament(min_order_quantity)}
                  className="btn btn-square text-3xl"
                >
                  -
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
