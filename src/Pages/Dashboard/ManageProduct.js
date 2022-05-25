import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Delete_Confirm_Modal from './Deletec_confirm_model';
import ProductList from './ProductList';

const ManageProduct = () => {
    const [product_del, setProduct_del] = useState(null)
    const {data: products, isLoading, refetch} = useQuery('products', () => fetch('http://localhost:5000/product',{
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    
    return (
        <div>
            <h3>Manage product: {products.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ProductList
                                key={product._key}
                                product={product}
                                index={index}
                                refetch={refetch}
                                setProduct_del={setProduct_del}
                            ></ProductList>)
                        }
                    </tbody>
                </table>
            </div>
            {product_del && <Delete_Confirm_Modal
                product_del={product_del}
                refetch={refetch}
                setProduct_del={setProduct_del}
            ></Delete_Confirm_Modal>}
        </div>
    );
};

export default ManageProduct;