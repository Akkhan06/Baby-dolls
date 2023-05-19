import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Mytoy = () => {
    return (
        <div className="md:max-w-[1240px] mx-auto">
      <div className="my-6">
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="text-3xl">
                <label >
                  <FaRegTrashAlt/>
                </label>
              </th>
              <th></th>
              <th>Toy name</th>
              <th>Sub-category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <button className="btn btn-xs rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </label>
              </th>


              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686919.jpg?w=1380&t=st=1684433994~exp=1684434594~hmac=676b1af090a5310c0628f70b52687688a12ab97c82fb735fa8de3e63c348dfa9"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>

              <td>
              <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>
    9485
</td>
              <td>$ 40</td>
              <th>
                <Link to={'/edit'}><button className="btn btn-ghost btn-xs bg-[#bfa0d5] text-white">
                  Edit
                </button></Link>
              </th>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Mytoy;