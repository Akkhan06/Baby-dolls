import React, { useContext, useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyToyCard from './MyToyCard';
import Swal from 'sweetalert2';
import setTitle from '../../hook/TitleHook';

const Mytoy = () => {
  const {user} = useContext(AuthContext)
  setTitle('My toys')
  
  const [toy, setToy] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/alltoys_email/${user?.email}`)
    .then(res => res.json())
    .then(data => setToy(data))
  }, [user?.email])

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {


            fetch(`http://localhost:5000/alltoys_email/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                        )
                        const remaining = toy.filter(cof => cof._id !== _id);
                        setToy(remaining);
                    }
                })

        }
    })
}

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
              <th>Seller name</th>
              <th>Sub-category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              toy?.map(pd => <MyToyCard pd={pd} handleDelete={handleDelete} key={pd._id}></MyToyCard>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Mytoy;