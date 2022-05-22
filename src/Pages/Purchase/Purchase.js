import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from 'react-router-dom';
import auth from "../../firebase.init";
import usePartsDetail from '../../Hooks/usePartsDetail';
const Purchase = () => {
  const {partsId} = useParams();
  const [parts] = usePartsDetail(partsId);
  // console.log(parts);
    const [user, loading, error] = useAuthState(auth);
    console.log(user)
    return (
        <div class="hero min-h-screen bg-base-200 py-12">
        <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 ">
          <div class="card-body">
            <h2 className="text-primary text-center font-bold text-3xl">Reservation Form</h2>
           <form onSubmit=" ">
           <div class="form-control mt-6">
              <input
                type="text"
                value={user.displayName}
                name="name"
                placeholder="name"
                required
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <input
                type="text"
                value={user.email}
                name="email"
                placeholder="Email"
                required
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <input
                type="text"
                value={parts.name}
                name="pd_name"
                placeholder="Product Name"
                required
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
                type="text"
                name="phone"
                placeholder="Phone"
                required
                class="input input-bordered"
              />
            </div>
           
            <div class="form-control mt-6">
              <input type="submit" value="Place Order" class="btn btn-primary"/>
            </div>
           </form>
          
          </div>
        </div>
      </div>
    );
};

export default Purchase;