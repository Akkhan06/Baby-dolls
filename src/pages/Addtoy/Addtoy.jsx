import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Addtoy = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const selername = form.selername.value;
    const discription = form.discription.value;
    const productName = form.productName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const email = form.email.value;
    const quantity = form.quantity.value;
    const image = form.image.value;
    const category = form.select.value;

    const allInfo = {
      selername,
      discription,
      productName,
      price,
      rating,
      email,
      category,
      quantity,
      image,
    };

    console.log(allInfo);

    Swal.fire({
      title: "Do you want to save the add item?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Add",
      denyButtonText: `Don't add`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");

        fetch("http://localhost:5000/alltoys", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(allInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <div className="w-8/12 mx-auto py-7">
      <form onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="selername"
            id="selername"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Seler name"
            required
            defaultValue={"afsar khan"}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="productName"
            
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="productName "
            required
            defaultValue={"baby dolls"}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="image"
           
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" Products image "
            required
            defaultValue={
              "https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686919.jpg?w=740&t=st=1684605930~exp=1684606530~hmac=15f8f46fb189d9098e8495639f8728c5e43586901f84e770d8ef35297f9d57e4"
            }
          />

        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="rating"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Rating "
            required
            defaultValue={5}
          />
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="price"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="price "
            required
            defaultValue={50}
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Seller email "
              required
              defaultValue={"shadmansnazmul@gmail.com"}
            />
           
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <label
              
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Choose a category{" "}
            </label>
            <select
              name="select"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Select an option</option>
              <option value="csd">Cuddly Soft Dolls</option>
              <option value="afd">Animal Friends Dolls</option>
              <option value="abd">Adorable Baby Dolls</option>
            </select>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="discription"
              
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Products discription "
              required
              defaultValue={"hello world"}
            />
          
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="quantity"
              
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="quantity "
              required
              defaultValue={4}
            />
           
          </div>
        </div>



        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addtoy;
