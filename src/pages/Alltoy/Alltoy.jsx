import React, { useEffect, useState } from "react";
import { FaEdgeLegacy, FaRegTrashAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import AlltoyCard from "./AlltoyCard";
import setTitle from "../../hook/TitleHook";


const Alltoy = () => {
  setTitle('All toys')

  const [alldata, setData] = useState([]); 

  useEffect(() => {
    fetch('https://testtt-akkhan06.vercel.app/alltoys')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  

const search = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        fetch(`https://testtt-akkhan06.vercel.app/search/${e.target.value}`)
        .then(res => res.json())
        .then(data => setData(data))
        
    }

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);

  
    const handleSearch = async () => {
      try {
        const response = await axios.get(`/search?name=${searchTerm}`);
        setSearchResult(response.data);
      } catch (error) {
        console.error('Error occurred:', error);
      }
    }

  return (
    <div className="md:max-w-[1240px] mx-auto">
      <div className="my-6">
        <form  >
          <label 
            for="default-search"
            className="mb-2 text-sm  font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
            onChange={(e) => search(e)}
              type="search"
              name="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search products"
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="text-3xl">
                <label>
                  <FaRegTrashAlt />
                </label>
              </th>
              <th>{alldata.length}</th>
              <th>Toy name</th>
              <th>Seller Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            
            {
              alldata?.map(pd => <AlltoyCard key={pd._id} pd={pd}></AlltoyCard>)
            }
             
          </tbody>
          
        </table>
      </div>
      
    </div>
  );
};


export default Alltoy
