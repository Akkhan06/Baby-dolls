import React, { useRef } from "react";
import { Link } from "react-router-dom";

//     <div className="md:w-[840px] mx-auto">
//       <form>

//        <div className=""> <div class="mb-6">
//           <label
//             for="email"
//             class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Product Url
//           </label>
//           <input
//             type="text"
//             name="url"
//             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             required
//           />
//         </div>
//         <div class="mb-6">
//           <label
//             for="password"
//             class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Product name
//           </label>
//           <input
//             type="text"
//             name="productName"
//             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             required
//           />
//         </div>

//         <div class="mb-6">
//           <label
//             for="password"
//             class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Seller name
//           </label>
//           <input
//             type="text"
//             name="name"
//             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             required
//           />
//         </div></div>

//         <div class="mb-6">
//           <label
//             for="password"
//             class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Seller email
//           </label>
//           <input
//             type="email"
//             name="email"
//             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             required
//           />
//         </div>

//         <div className="">
// <div className="mb-6">
//         <label
//           for="countries"
//           class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//         >
//           Category
//         </label>
//         <select
//           id="countries"
//           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//         >
//           <option>Canada</option>
//           <option>France</option>
//           <option>Germany</option>
//         </select>
//         </div>

//         <div class="mb-6">
//           <label
//             for="password"
//             class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//            Price
//           </label>
//           <input
//             type="text"
//             name="price"
//             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             required
//           />
//         </div>
//         <div class="mb-6">
//           <label
//             for="password"
//             class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//            Rating
//           </label>
//           <input
//             type="text"
//             name="raging"
//             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             required
//           />
//         </div>
//         <div class="mb-6">
//           <label

//             class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//            Quantity
//           </label>
//           <input
//             type="text"
//             name="quantity"
//             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             required
//           />
//         </div>
//         </div>

//         <div class="relative z-0 col-span-2">

//         <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//                   Your message
//                 </label>

//                 <textarea
//                   name="message"
//                   rows="5"
//                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder=" "
//                 ></textarea>

//               </div>

//         <button
//           type="submit"
//           class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Submit
//         </button>
//       </form>
//     </div>

const Addtoy = () => {
  let form = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form_data = new FormData(form.current);
    let payload = {};
    form_data.forEach(function (value, key) {
      payload[key] = value;
    });
    // console.log("payload", payload);
    // Place your API call here to submit your payload.
  };
  return (
    <form id="login" onSubmit={handleSubmit}>
      <div className="bg-white dark:bg-gray-800">
        <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
          <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                Add your toy
              </p>
              <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
              <div className="rounded relative mt-8 h-48">
                <img
                  src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form1.jpg"
                  alt
                  className="w-full h-full object-cover rounded absolute shadow"
                />
                <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded" />
                <div className="flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer">
                  <p className="text-xs text-gray-100">Baby toys</p>
                  
                </div>
                <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center">
                  <img
                    src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg"
                    alt
                    className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0"
                  />
                  <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0" />
                  <div className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
                    
                  </div>
                </div>
              </div>
              <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                <label
                  htmlFor="username"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Seller name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="@example"
                />
              </div>
              <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                <label
                  htmlFor="about"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Discription
                </label>
                <textarea
                  id="about"
                  name="about"
                  required
                  className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="Let the world know who you are"
                  rows={5}
                  defaultValue={""}
                />
                <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">
                  Character Limit: 200
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4">
          <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                Products Information
              </p>
              <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mx-auto pt-4">
            <div className="container mx-auto">
              <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="FirstName"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  
                  name="productName"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder
                />
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="LastName"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Product Price
                </label>
                <input
                  type="text"
                  
                  name="price"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder
                />
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Seller Email
                </label>
                <div className="border border-green-400 shadow-sm rounded flex">
                  <div className="px-4 py-3 dark:text-gray-100 flex items-center border-r border-green-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={3} y={5} width={18} height={14} rx={2} />
                      <polyline points="3 7 12 13 21 7" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    
                    name="email"
                    required
                    className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 dark:text-gray-400"
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="flex justify-between items-center pt-1 text-green-400">
                  <p className="text-xs">Email submission success!</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={16}
                    height={16}
                  >
                    <path
                      className="heroicon-ui"
                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0
                              0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                      stroke="currentColor"
                      strokeWidth="0.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="StreetAddress"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Rating
                </label>
                <input
                  type="number"
                  
                  name="rating"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder
                />
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="City"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Category
                </label>
                <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex">
                  <input
                    type="text"
                    
                    name="category"
                    required
                    className="pl-3 py-3 w-full text-sm focus:outline-none border border-transparent focus:border-indigo-700 bg-transparent rounded placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    
                  />
                  <div className="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-gray-500 dark:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-up"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-down"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="State/Province"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Available quantity
                </label>
                <input
                  type="text"
           
                  name="quantity"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  
                />
              </div>
             
              <div className="container mx-auto w-11/12 xl:w-full">
                    <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
                        <Link to='/'>
                            <button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4">Cancel</button>
                            </Link>
                        <button className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm" type="submit">
                            Add
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Addtoy;