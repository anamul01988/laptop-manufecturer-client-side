import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import usePartsDetail from "../../Hooks/usePartsDetail";
const Purchase = () => {
  const { partsId } = useParams();
  // const [parts] = usePartsDetail(partsId);
  const [parts] = usePartsDetail(partsId);
  console.log(parts)
  console.log(parts);
  const { name, _id, price, min_order_quantity,available } = parts;
  console.log(available);
  let a = min_order_quantity;
  const [minOrderQuantity, setMinOrderQuantity] = useState(a);
  // const [inputQuantityValue, setInputQuantity] = useState(a);
  const [disbabledBtn, setDisabledBtn] = useState(false);

  useEffect(()=>{
      setMinOrderQuantity(min_order_quantity)
      console.log(minOrderQuantity);
  },[min_order_quantity])

  console.log(minOrderQuantity);
  const [user] = useAuthState(auth);

  const increaseOrderQuantity = (event) => {
    event.preventDefault();
    if(minOrderQuantity < available){
      setMinOrderQuantity(parseInt(minOrderQuantity) + 1);
      setDisabledBtn(false)
    }
    else{
      setDisabledBtn(false)
    }
  
    
  };
  const decreaseOrderQuantity = (event) => {
    event.preventDefault();
    if(minOrderQuantity > min_order_quantity){
      setMinOrderQuantity(parseInt(minOrderQuantity) - 1);
      console.log(setMinOrderQuantity);
      setDisabledBtn(false)
    }
    else{
      setDisabledBtn(true)
      console.log("given less than 100");
    }
  };
  // const inputQunatity = (event)=>{
  //   event.preventDefault();
  //   const inputQuantityValue = event.target.quantity.value;
  //   setInputQuantity(inputQuantityValue)
  // }
  const handleOrder = (event) => {
    event.preventDefault();
    // const phone = event.target.phone.value;
    // const address = event.target.address.value;

    // const quantity1 = event.target.quantity.value;
    // setMinOrderQuantity(quantity1);
    // console.log(minOrderQuantity); 

    const order = {
      orderId: _id,
      order: name,
      price: price,
      user: user.email,
      userName: user.displayName,
      address: event.target.address.value,
      phone: event.target.phone.value,
      quantity: event.target.quantity.value
    };

    fetch("https://guarded-chamber-19497.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.success) {
          toast(`You order is sent.`);
        } else {
          toast.error(`Already ordered`);
        }
      });
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
                value={parts?.name}
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

            <div className="mb-5 ">
            <label
              htmlFor="quantity"
              className="block mb-2 mt-2 text-sm font-medium text-center "
            >
              Quantity:
            </label>
            <div className="flex w-full justify-center gap-2">
              {
                disbabledBtn?  <button disabled onClick={decreaseOrderQuantity} className="btn btn-error">
                -
              </button> :
               <button onClick={decreaseOrderQuantity} className="btn btn-error">
               -
             </button>
              }
            
              <input
                className="focus:outline-none focus:ring focus:ring-primary border text-sm rounded-md w-60 p-2.5  placeholder-secondary/75 text-black  border-secondary"
                type="text"
                name="quantity"
                // placeholder={min_order_quantity}
                defaultValue={parts?.min_order_quantity}
                value={minOrderQuantity} 
                autoComplete="off"
              />
              
               <button onClick={increaseOrderQuantity} className="btn btn-error">
               +
             </button>
          
             
            </div>
          </div>

          {/* <input
                className="focus:outline-none focus:ring focus:ring-primary border text-sm rounded-md w-20 p-2.5  placeholder-secondary/75 text-black  border-secondary"
                type="number"
                name="quantityValue"
                onChange={inputQunatity}
              /> */}

            <div class="form-control mt-6">
              <input
                type="submit"
                value="Place Order"
                class="btn btn-primary"
              />
            </div>
          </form>
           
        </div>
      </div>
    </div>
  );
};

export default Purchase;
