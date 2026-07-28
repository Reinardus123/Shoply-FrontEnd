import React from "react";
import {User, ShoppingBag, Heart, ShoppingCart, LogOut, Home, Package, MapPin, CreditCard, Settings} from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";

function ProfileSidebar(){

    const navigate = useNavigate();

     function handleLogout(){

        localStorage.removeItem("token");

        navigate("/");
    }

        const menuClass = ({isActive}) => 
            `flex items-center gap-3 px-4 py-3 rounded-xl transition
        ${
            isActive 
            ? "bg-purple-600 text-white"
            : "hover:bg-purple-100 text-gray-700"
        }`;
    

    return (
       <div className="bg-white rounded-3xl shadow-md p-6 w-[260px]">

                <NavLink to="/admin" end className={menuClass}>
                    <Home size={20}/>
                    <h1>My Profile</h1>
                </NavLink>

                <NavLink to="/admin/category/create" className={menuClass}>
                    <Package size={20}/>
                    <span>Create Category</span>
                </NavLink>

                <NavLink to="/admin/product/create" className={menuClass}>
                    <Heart size={20}/>
                    <span>Create Product</span>
                </NavLink>

                <NavLink to="/admin/product/allProduct" className={menuClass}>
                    <ShoppingCart size={20}/>
                    <span>All Products</span>
                </NavLink>

                <hr className="my-6"/>

              
               <button className="flex items-center px-4 py-3 gap-3 rounded-xl text-red-500 hover:bg-red-50 cursor-pointer transition" onClick={handleLogout}>
                    <LogOut size={20}/>
                    <span>Log Out</span>

               </button>
              
                


                
        </div>
            
       
    );
}

export default ProfileSidebar;