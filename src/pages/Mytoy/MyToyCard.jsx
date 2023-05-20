import React from 'react';
import { Link } from 'react-router-dom';

const MyToyCard = ({pd}) => {
    const  {selername, discription, productName, price, rating, email, category, quantity, image} = pd
    return (
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
                        src={image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <div>
                  <div className="font-bold">{productName}</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </td>
              <td>
                {category}
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>in stok {quantity}</td>
              <td>$ 40</td>
              <th>
                <Link to={"/edit"}>
                  <button className="btn btn-ghost btn-xs bg-[#bfa0d5] text-white">
                    Edit
                  </button>
                </Link>
              </th>
            
        </tr>
    );
};

export default MyToyCard;