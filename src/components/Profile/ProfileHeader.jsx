import React, {useEffect, useState} from "react";
import { Mail, Calendar, Pencil, Phone } from "lucide-react";
import api from "../../api/api";
function ProfileHeader({user, onEdit}){


    function getInitials(name){

        if(!name) return "";

        return name
            .trim()
            .split(/\s+/)
            .map(word => word.charAt(0).toUpperCase())
            .slice(0,2)
            .join("");
    }


    return(
        <div className="bg-white rounded-3xl shadow-md p-8 flex justify-between items-center">
            <div className="flex gap-6">
                <div className="w-32 h-32 rounded-full bg-purple-200 flex items-center justify-center">
                    <h1 className="text-5xl font-bold text-purple-600">
                        {getInitials(user?.username)}
                    </h1>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-2">
                        {user?.username}
                    </h1>
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                        {user?.role}
                    </span>
                    
                    <div className="flex items-center gap-2 mt-4 mb-2 text-gray-500">
                         <Mail size={18}/>
                        <p>
                            {user?.email}
                         </p>
                    </div>
                   
                   <div className="flex items-center gap-2 mt-2 text-gray-500">
                        <Phone size={18}/>
                        <p>
                            {user?.phonenumber}
                         </p>
                   </div>
                    
                </div>
            </div>

       
            <button
                onClick={onEdit}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-8 py-4 rounded-xl cursor-pointer"
            >
                <Pencil/>
                Edit Profile
            </button>
         
        </div>


    );
}

export default ProfileHeader;