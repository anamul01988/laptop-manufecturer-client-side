import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
      <h2 className='text-3xl font-bold text-primary'>Welcome to your Dashboard</h2>
        {/* <!-- Page content here --> */}
    
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          <li>
            <Link to="/dashboard/my_orders">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/add_review">Add a review</Link>
          </li>
          <li>
            <Link to="/dashboard/all_users">All Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
