import React from "react";

import {User, Heart, ShoppingCart, Package, Settings, LogOut, Search } from "lucide-react";
import {ShoppingBag} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import api from "../../api/api";

function Navbar({showSearch = true}){

    const token = localStorage.getItem("token");
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchProfile();
    },[]);

    async function fetchProfile(){
        if(!token) return ;

        try{
            const response = await api.get("/profile");
            console.log(response.data);
            setUser(response.data);

        } catch(error){
            console.log(error);
        }
    }

    function handleLogout(){

        localStorage.removeItem("token");

        navigate("/");
    }

    useEffect(() => {
        function handleClickOutside(event){
            
            if(menuRef.current && !menuRef.current.contains(event.target)){
                setShowMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown",handleClickOutside);
    },[]);

    return (
       <nav className="flex items-center justify-between px-10 py-5 shadow-sm">

        <div className="flex items-center gap-2">
            <ShoppingBag className="text-3xl text-purple-600" />
            <h1 className="text-2xl font-bold text-black-600">
                Shoply.
            </h1>
        </div>
       
       {showSearch && (
        <div className="bg-gray-100 flex items-center rounded-2xl overflow-hidden w-[350px]">
            <input 
            type="text" 
            placeholder="Search For Products..." 
            className="w-full px-4 py-3 outline-none"
            />
            <button className="px-5 py-4 cursor-pointer">
                <Search className="text-gray"/>
            </button>
        </div>

       )}
    

        <ul className="flex gap-10 font-medium">
            <Link to="/">
                <li className="text-black-600 border-b-2 border-purple-600 pb-2 cursor-pointer">
                    Home
                </li>
            </Link>
            
            <Link to="/categories">
                <li className="hover:text-purple-600 cursor-pointer">
                    Categories
                </li>
            </Link>
        
            <Link to="/about">
                <li className="hover:text-purple-600 cursor-pointer">
                    About Us
                </li>
            </Link>
           
        </ul>

        <div className="flex items-center gap-6 text-xl">

            {token ? (
                <>
                    <Link to="/wishlist">
                        <div className="relative cursor-pointer">
                            <Heart/>
                        </div>
                    </Link>
                    
                    
                    <Link to="/cart">
                   
                     <div className="relative cursor-pointer">
                        <ShoppingCart/>
                     </div>

                    </Link>
                    
                   <div  ref={menuRef} className="relative">

                    <User 
                        className="cursor-pointer" 
                        onClick={() => setShowMenu(!showMenu)}
                    />

                    {showMenu && (
                        <div className="absolute right-0 mt-4 w-56 bg-white rounded-2xl shadow-xl border border-gray-200 py-2 z-50">
                            
                            <button onClick={() => navigate("/profile")}   className="flex items-center gap-2 w-full text-left px-5 py-3 hover:bg-purple-50 transition text-sm cursor-pointer">
                                <User size={16}/>
                                My Profile
                            </button>

                            {user?.role ==="admin" && (
                                 <button onClick={() => navigate("/admin")} className="flex items-center gap-2 w-full text-left px-5 py-3 hover:bg-purple-50 transition text-sm cursor-pointer">
                                    <User size={16}/>
                                    Admin Dashboard
                                </button>
                            )}
                           

                            <hr />

                            <button onClick={handleLogout} className="flex items-center gap-2 w-full text-left px-5 py-3 text-red-500 hover:bg-red-50 text-sm cursor-pointer">
                                 <LogOut size={16}/>
                                    <span>Log Out</span>
                            </button>
                        </div>
                    )}

                   </div>
                
                </>
            ) : (
                <>  
                <Link to="/login">
               
                    <button className="border border-purple-600 px-5 py-2 rounded-xl hover:bg-purple-600 hover:text-white duration-300 text-sm cursor-pointer">
                        Login
                    </button>
                 </Link>

                 <Link to="/register">
                     <button className="bg-purple-600 text-white px-5 py-2 rounded-xl rounded-xl hover:bg-purple-700 duration-300 text-sm cursor-pointer">
                        Register
                    </button>
                 </Link>
                 </>
           
            )}
           

        </div>

       </nav>
    );

}

export default Navbar;