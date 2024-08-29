import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUSers = useLoaderData();
    const [users,setUsers] = useState(loadedUSers);
    const handleDelte =id=>{
        console.log(id);
        fetch(` https://naeem-56-52ga6vvut-ailas-projects-e6327532.vercel.app/user/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                console.log(data);
                // remove the ui
                const remaining = users.filter(user=>user._id !== id)
                setUsers(remaining);
            }
        })
    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>email</th>
                        <th>CreatedAt</th>
                        <th>Last Login</th>
                        <th>Action </th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                   {
                    users.map(user=>  <tr key={user._id}>
                        <th>{user.email}</th>
                        <td>{user.createdAt}</td>
                        <td>Quality Control Specialist</td>
                        <td>{user.lastLoggedAt}</td>
                        <td>
                            <button onClick={()=>handleDelte(user._id)} className="btn">X</button>
                        </td>
                    </tr>)
                   }
                    
                </tbody>
            </table>
        </div>
    );
};

export default Users;