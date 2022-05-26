import React from "react";
import { toast } from "react-toastify";

const Users = ({ user, index, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`https://guarded-chamber-19497.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
            refetch();
            toast.success(`Successfully to made admin`);
        }
      });
  };
  return (
    <tr>
      <th>{index+1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs">
            Admin
          </button>
        )}
      </td>
      {/* <td>{ <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td> */}
    </tr>
  );
};

export default Users;
