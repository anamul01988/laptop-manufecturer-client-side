import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
     
        // console.log(result);
      //   .then((data) => {
      //   if (data.success) {
      //     toast(`You Product is added succesfully .`);
      //     reset();
      //   } else {
      //     toast.error(`Product added failed`);
      //   }
      // });
      .then(inserted =>{
        console.log('product', inserted)
        if(inserted.insertedId){
            toast.success('Prodcut added successfully')
            reset();
        }
        else{
            toast.error('Failed to add the Prodcut');
        }
    })
    
  };
  return (
    <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-200 mt-6 mb-16">
      <div className="card-body">
        <h2 className="text-2xl">Add Product</h2>
        <form  onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full mt-6 ">
            <input
            
            class="input input-bordered"
              placeholder="Name"
              {...register("name", { required: true, maxLength: 20 })}
            />
          </div>

          <div className="form-control w-full mt-6 ">
            <input
              class="input input-bordered"
              placeholder="Available_quantity"
              {...register("available_quantity")}
            />
          </div>

          <div className="form-control w-full mt-6">
            <input
               class="input input-bordered"
              placeholder="Price"
              type="number"
              {...register("price")}
            />
          </div>

          <div className="form-control w-full mt-6">
            <input
               class="input input-bordered"
              placeholder="photo URL"
              type="text"
              {...register("img")}
            />
          </div>
          <div className="form-control w-full mt-6">
            <input
           class="input input-bordered"
              placeholder="Min-order_quantity"
              type="number"
              {...register("min_quantity")}
            />
          </div>
          <div className="form-control w-full mt-6">
            <textarea
               class="input input-bordered"
              placeholder="Description"
              {...register("description")}
            />
          </div>

          <input  class="input input-bordered mt-6" type="submit" value="Add Service" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
