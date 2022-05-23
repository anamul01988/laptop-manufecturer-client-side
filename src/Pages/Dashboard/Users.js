import React from 'react';

const Users = ({ user, refetch }) => {
    const { email, role } = user;
    return (
        <div>
            <tr>
            <th>1</th>
            <td>{email}</td>
            {/* <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td> */}
        </tr>
        </div>
    );
};

export default Users;