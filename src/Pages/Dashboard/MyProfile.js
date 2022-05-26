import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  //   const [resetInput, setResetInput] = useState(null);
  //   console.log(user);
  // const {name,email}=user;
  const handleOrder = (event) => {
    event.preventDefault();
    // const education = event.target.education.value;
    // const phone = event.target.phone.value;
    // const address = event.target.address.value;
    // const linkedin = event.target.linkedin.value;
    // console.log(education, phone, address, linkedin);
    const profile = {
      user: user.email,
      userName: user.displayName,
      education: event.target.education.value,
      address: event.target.address.value,
      phone: event.target.phone.value,
      linkedin: event.target.linkedin.value,
    };
      // console.log(profile);

    // fetch("http://localhost:5000/profile", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(profile),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.success) {
    //       toast(`You profile data is sent.`);
    //     } else {
    //       toast.error(`Already sent`);
    //     }
    //   });

    fetch(`http://localhost:5000/profileUpdate/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        event.target.reset();
      })
      // .then((data) => {
      //   if (data.success) {
      //     toast(`You profile data is sent.`);
      //   } else {
      //     toast.error(`Already sent`);
      //   }
      // });
  };

  return (
    <div class="hero min-h-screen bg-base-200 py-12">
      <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 ">
        <div class="card-body">
          <h2 className="text-primary text-center font-bold text-3xl">
            Profile
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
                // value={name}
                name="education"
                placeholder="Current Education"
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
                type="number"
                name="phone"
                placeholder="Phone"
                required
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn Id"
                required
                class="input input-bordered"
              />
            </div>

            <div class="form-control mt-6">
              <input type="submit" value="save" class="btn btn-primary " />
            </div>
          </form>

  
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
