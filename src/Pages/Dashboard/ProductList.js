import React from 'react';

const ProductList = ({product, setProduct_del, refetch, index}) => {
    const {name, img, price} = product;
    // console.log(product)
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{price}</td>
          
            <td>
                <label onClick={() => setProduct_del(product)} for="confirmation_modal" class="btn btn-xs btn-error">Delete</label>
                {/* <label onClick={() => handleDelete(email)} class="btn btn-xs btn-error">Delete</label> */}
            </td>
        </tr>
    );
};

export default ProductList;