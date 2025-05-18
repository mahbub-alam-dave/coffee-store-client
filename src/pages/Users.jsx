import React, { useContext } from "react";
import { ContextValue } from "../context/ContextValues";
import { Link } from "react-router";
import { TiEye } from "react-icons/ti";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { deleteUser } from "firebase/auth";
import { auth } from "../firebas-authentication/firebase.config";

const Users = () => {
  const { users, setAllUsers } = useContext(ContextValue);
  console.log(users.length);

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("user deleted from db", data);
            if (data.deletedCount) {
                const remainingUser = users.filter(user => user._id !== id)
                setAllUsers(remainingUser)

                // delete user from firebase
                deleteUser(auth.currentUser).
                then(()=>{
                    // user deleted
                }).
                catch(error => 
                    {console.log(error.message)})
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto max-w-[1320px] mx-auto mt-12 bg-[#F4F3F0]">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>User Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user["Photo Url"]}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                  </div>
                </td>
                <td>
                  Email: {user.email} <br />
                  Website: {user.website}
                </td>
                <td>
                  <div className="flex  gap-2">
                    <Link to={`/coffee-details/${user._id}`}>
                      <button className="btn btn-sm bg-gray-500 text-white">
                        <TiEye size={18} />
                      </button>
                    </Link>
                    <Link to={`/edit-coffee/${user._id}`}>
                      <button className="btn btn-sm bg-gray-800 text-white">
                        <MdModeEditOutline size={18} />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="btn btn-sm bg-red-400 text-white"
                    >
                      <MdDelete size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
