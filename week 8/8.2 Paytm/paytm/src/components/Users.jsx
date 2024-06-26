import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
export const Users = () => {
    // Replace with backend call
    const[searchInput,setSearchInput]=useState('')
    const [users, setUsers] = useState([{
        firstname: "Harkirat",
        lastname: "Singh",
        _id: 1
    }]);
   const getdata= async function (){
        const response= await axios.get(   `http://localhost:3000/api/v1/user/bulk?filter=${searchInput}`);
        console.log(response.data.user);
        setUsers(response.data.user)
        }
 useEffect(()=>{
    getdata()
 },[])
    return <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input type="text" onInput={getdata} placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}></input>
        </div>
        <div>
            {users.map((user,index) => <User user={user} key={index} />)}
        </div>
    </>
}

function User({user}) {
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstname[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstname} {user.lastname}
                </div> 
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
          <button className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors duration-300">Send Money</button>
        </div>
    </div>
}