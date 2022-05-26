
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

// import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L0rfOBAAde9UJpJh1zxvJ2oE9izpBsxdydryoDHnNXtrNj0CKRcsMwzqHxEVmInzuk2zBDuZnaHx2KSua83ioxW00djhgKNYk');

const Payment = () => {
    const { id } = useParams();
    const url = `https://guarded-chamber-19497.herokuapp.com/order/${id}`;
    console.log(url)

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, { //onek data tai useQuery use hoice id gula arry kore nite hoice
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
     console.log(order);
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 class="mt-11">Please pay for : {id}</h2>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {order.userName}</p>
                    <h2 class="card-title">Please Pay for {order.order}</h2>
                    <p>Your Address: <span className='text-orange-700'>{order.address}</span></p>
                    <p>Phone: <span className='text-orange-700'>{order.phone}</span></p>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;