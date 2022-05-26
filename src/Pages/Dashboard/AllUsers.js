import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Users from './Users';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://guarded-chamber-19497.herokuapp.com/user',
     {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="mt-4">
           
            {/* <h2 className="text-2xl">All Users: {users.length}</h2> */}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Users Type</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                       {
                          users.length &&  users.map((user, index)=><Users
                           key={user._id}
                           index={index}
                           user={user}
                           refetch={refetch}
                           ></Users>)
                       }
                    </tbody>
                </table>
            </div>
            {/* <div className="box mt-11 text-center">
                <button className=" btn btn-glass disabled text-2xl">All Users: {users.length}</button>
            </div> */}
        </div>
    );
};

export default AllUsers;