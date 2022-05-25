import React from 'react';
import { toast } from 'react-toastify';

const Delete_Confirm_Modal = ({product_del, refetch, setProduct_del}) => {
    const {name, _id} = product_del;
    const handleDelete = () => {
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Product: ${name} is deleted.`)
                    setProduct_del(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="confirmation_modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-2xl text-red-500">Are you sure you want to delete {name} parts?</h3>
                    <p class="py-4">Please make sure your descision.</p>
                    <div class="modal-action">
                    <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
                        <label for="confirmation_modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Delete_Confirm_Modal;