import React, { useContext, useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyToyCard from './MyToyCard';

const Mytoy = () => {
  const {user} = useContext(AuthContext)
  
  const [toy, setToy] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/alltoys_email/${user?.email}`)
    .then(res => res.json())
    .then(data => {
      setToy(data)
    })
  }, [user])

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
            {
              toy?.map(pd => <MyToyCard pd={pd} key={pd._id}></MyToyCard>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Mytoy;