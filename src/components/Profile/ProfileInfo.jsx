import React, { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  Calendar,
  Users,
  MapPin
} from "lucide-react";

import Swal from "sweetalert2";

import api from "../../api/api";
function ProfileInfo({user, setUser, isEdit, setIsEdit}){

  const [form, setForm] = useState({
    username: "",
    email: "",
    phonenumber: "",
    dateofbirth: "",
    address: ""
  });

    useEffect(() => {
        
        if(user){
            setForm({
                username: user.username || "" ,
                email: user.email || "",
                phonenumber: user.phonenumber || "",
                dateofbirth: user.dateofbirth || "",
                address: user.address || ""
            });
        }
    },[user]);

    function handleChange(e){
        const {name, value} = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(e){
        e.preventDefault();

        try{
            const response = await api.put(`/update/profile/${user.id}`, form);
            setUser(response.data.newProfile);
            setIsEdit(false);

            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Profile updated successfully"
            });

        } catch(error){
            console.log(error);
        }
    }


    const formatDate = user?.dateofbirth.split("T")[0];
    
    if(!isEdit){

         return (
    
        <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-2xl font-bold mb-8">
                Profile Information
            </h2>

            <div className="flex justify-between items-center border-b pb-4">
                <div className="flex items-center gap-3 text-gray-500">
                    <User size={18}/>
                    <span>Username</span>
                </div>

                <span className="font-medium">
                    {user?.username}
                </span>
            </div>

            <div className="flex justify-between items-center border-b pb-4 pt-4">
                <div className="flex items-center gap-3 text-gray-500">
                    <Mail size={18}/>
                    <span>Email</span>
                </div>

                <span className="font-medium">
                    {user?.email}
                </span>
            </div>

            <div className="flex justify-between items-center border-b pb-4 pt-4">
                <div className="flex items-center gap-3 text-gray-500">
                    <Phone size={18}/>
                    <span>Phone</span>
                </div>

                <span className="font-medium">
                    {user?.phonenumber}
                </span>
            </div>

            <div className="flex justify-between items-center border-b py-4">
                <div className="flex items-center gap-3 text-gray-500">
                    <Calendar size={18}/>
                    <span>Date Of Birth</span>
                </div>
                <span className="font-medium">
                    {formatDate}
                </span>
            </div>

            <div className="flex justify-between items-center border-b py-4">
                <div className="flex items-center gap-3 text-gray-500">
                    <Users size={18}/>
                    <span>Gender</span>
                </div>
                <span className="font-medium">
                    {user?.gender}
                </span>
            </div>

            <div className="flex justify-between items-center py-4">
                <div className="flex items-center gap-3 text-gray-500">
                    <MapPin size={18}/>
                    <span>Address</span>
                </div>
                <span className="font-medium">
                    {user?.address}
                </span>
            </div>

        </div>
        );
    }

    return (

        <div className="bg-white rounded-3xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">
                Edit Profile
            </h2>

            <form 
                onSubmit={handleSubmit}
                className="space-y-5"
            >

                <input 
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-xl" 
                />

                <input 
                    name="phonenumber"
                    value={form.phonenumber}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-xl" 
                />

                 <input 
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-xl" 
                />

                <input 
                    type="date"
                    name="dateofbirth"
                    value={form.dateofbirth}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-xl"
                 />

                <textarea 
                    name="address" 
                    value={form.address}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-xl"
                />

                <div className="flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={() => setIsEdit(false)}
                        className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-600 text-white px-8 py-4 rounded-xl cursor-pointer"
                    >

                        Cancel
                    </button>

                    <button 
                        type="submit"
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-8 py-4 rounded-xl cursor-pointer"
                    >
                        Save Changes
                    </button>
                </div>

            </form>

        </div>
    )

   
}

export default ProfileInfo;