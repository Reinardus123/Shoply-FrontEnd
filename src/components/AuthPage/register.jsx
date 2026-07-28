import React, {useEffect, useState} from "react";
import {User, Mail, Lock, Eye, ShoppingBag, Truck, ShieldCheck, BadgeCheck, Phone} from "lucide-react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";
import api from "../../api/api";
import Swal from "sweetalert2";

function register(){


    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phonenumber: "",
        dateofbirth: "",
        gender: "",
        password: "",
        confirmPassword: "",
        address: "",
    });


    const navigate = useNavigate();

    async function handleRegister(e){

        e.preventDefault();


        const{
            username,
            email,
            phonenumber,
            dateofbirth,
            gender,
            password,
            confirmPassword,
            address
        } = formData;

        if(password !== confirmPassword){

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password does not match",
                confirmButtonColor: "#9333ea",
                confirmButtonText: "OK"
            })
            return;
        }

        console.log(formData);

        try{
            const response = await api.post(
                "/register",{
                    email,
                    username,
                    password,
                    phonenumber,
                    dateofbirth,
                    gender,
                    address
                }
            );
            console.log(response.data);
           
            Swal.fire({
                icon: "Success",
                title: "Register Succeed",
                text: "Please Login",
                confirmButtonColor: "#9333EA",
                confirmButtonText: "OK"
            });

            redirect("/login");
            
        } catch(error){
            console.log(error);
            alert("Login Failed");
        }

        navigate("/login");
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="min-h-screen bg-[#f7f5ff] flex items-center justify-center p-6">

            <div className="w-full max-w-6xl bg-white rounded-3-xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                <div className="bg-gradient-to-b from-purple-100 to-purple-50 p-10 flex flex-col justify-between relative overflow-hidden">

                    <div className="flex items-center gap-2 text-purple-600 font-bold text-2xl">
                        <ShoppingBag size={28}/>
                        Shoply.
                    </div>

                    <div className="mt-10">
                        <h1 className="text-5xl font-bold text-gray-800 leading-tight">
                            Create Account ✨
                        </h1>

                        <p className="text-gray-500 mt-4 text-lg">
                            Join us and start shopping the best products today
                        </p>
                    </div>

                    <div className="flex justify-center my-10">
                        <img 
                        src="https://cdn-icons-png.flaticon.com/512/891/891462.png" 
                        alt="shopping" 
                        className="w-72 drop-shadow-2xl"
                        />
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="bg-white p-3 rounded-xl shadow">
                                <Truck className="text-purple-600"/>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    Fast Delivery
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Get your products quickly
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-white p-3 rounded-xl shadow">
                                <BadgeCheck className="text-purple-600"/>
                            </div>

                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    Best Quality
                                </h3>
                                <p className="text-sm text-gray-500">
                                    We provide best quality products 
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-white p-3 rounded-xl shadow">
                                <ShieldCheck className="text-purple-600"/>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-gray-800">
                                    Secure Payment
                                </h3>
                                <p className="text-sm text-gray-500">
                                    100% secure payment
                                </p>
                            </div>
                        </div>
                    </div>

                        <div className="absolute -top-10 -right-10 w-40 h-40 bgt-purple-200 rounded-full opacity-30"></div>

                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-200 rounded-full opacity-20"></div>
                 </div>

                 <div className="p-10 md:p-14 flex flex-col justify-center">

                        <h2 className="text-4xl font-bold text-gray-800">
                            Create your account
                        </h2>
                        
                        <p className="text-gray-500 mt-2 mb-8">
                            Fill in the form below to create account
                        </p>
                        
                        <div>
                            
                        </div>
                        <form onSubmit={handleRegister} className="space-y-5" action="">
                           
                           <div>
                            <label className="block font-medium mb-2">
                                Full Name
                            </label>
                            <div className="flex items-center border rounded-xl px-4 py-3">
                                <input 
                                type="text"
                                name="username"
                                placeholder="Enter your full name"
                                className="w-full outline-none"
                                value = {formData.username}
                                onChange = {handleChange}
                                />

                                <User size={18} className="text-gray-400"/>
                            </div>
                           </div>

                                <div>
                                    <label className="block font-medium mb-2">
                                        Email
                                    </label>
                                    <div className="flex items-center border rounded-xl px-4 py-3">
                                        <input 
                                        type="email" 
                                        name="email"
                                        placeholder="Enter your email"
                                        className="w-full outline-none"
                                        value={formData.email}
                                        onChange={handleChange}
                                        />
                                        <Mail size={18} className="text-gray-400"/>
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-medium mb-2">
                                        Phone Number
                                    </label>
                                    <div className="flex items-center border rounded-xl px-4 py-3">
                                        <input 
                                        type="text" 
                                        name="phonenumber"
                                        placeholder="Enter your Phone Number"
                                        className="w-full outline-none"
                                        value={formData.phonenumber}
                                        onChange={handleChange}
                                        />
                                        <Phone size={18} className="text-gray-400"/>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block mb-2">Date Of Birth</label>
                                        <input 
                                        type="date" 
                                        name="dateofbirth"
                                        value={formData.dateofbirth}
                                        onChange={handleChange}
                                        className="w-full outline-none border rounded-xl border-gray-400 px-4 py-4 text-gray-400"
                                        />
                                    </div>

                                    <div>
                                        <label className="block mb-2">Gender</label>
                                        <select 
                                        name="gender" 
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="w-full border border rounded-xl border-gray-400 px-4 py-4 text-gray-400">
                                            <option value="">Select Your Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-medium mb-2">
                                        Address
                                    </label>
                                    <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
                                        <input 
                                            type="text"
                                            name="address"
                                            placeholder="Enter your address"
                                            className="w-full outline-none"
                                            value={formData.address}
                                            onChange={handleChange} 
                                        />
                                    </div>
                                </div>

                                <div >
                                    <label className="block font-medium mb-2">
                                        Password
                                    </label>
                                    <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
                                        <input 
                                        type="password"
                                        name ="password" 
                                        placeholder="Create a password"
                                        className="w-full outline-none"
                                        value={formData.password}
                                        onChange={handleChange}
                                        />
                                        <Lock size={18} className="text-gray-400"/>
                                        <Eye size={18} className="text-gray-400 cursor-pointer"/>
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-medium mb-2">
                                        Confirm password
                                    </label>

                                    <div className="flex items-center border rounded-xl px-4 py-3 gap-3">
                                        <input 
                                        type="password" 
                                        name="confirmPassword"
                                        placeholder="Confirm your password"
                                        className="w-full outline-none"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        />
                                        <Lock size={18} className="text-gray-400 cursor-pointer"/>
                                        <Eye size={18} className="text-gray-400 cursor-pointer"/>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2 text-sm">
                                    <input type="checkbox" className="mt-1" />
                                    <p className="text-gray-500">
                                        I agree to the 
                                        <span className="text-purple-600 font-medium">
                                            {" "}Terms & Conditions
                                        </span>
                                        {" "}and{" "}
                                        <span className="text-purple-600 font-medium">
                                            Privacy Policy
                                        </span>
                                    </p>
                                </div>
                                <button 
                                    onClick={() => navigate("/login")}
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-semibold transition" type="submit">
                                    Register
                                </button>
                        </form>

                        <div className="flex items-center gap-4 my-8">
                            <div className="h-px bg-gray-200 flex-1"></div>
                            <span className="text-gray-500 flex-1">
                                or continue with
                            </span>
                            <div className="h-px bg-gray-200 flex-1"></div>
                        </div>
                        <div className="space-y-4">
                            <button className="w-full border rounded-xl py-3 hover:bg-gray-50 tranisition">
                                Continue with google
                            </button>
                        </div>
                        <p className="text-center text-gray-500 mt-8">
                            Already have an account ?
                            <span 
                            onClick={() => navigate("/login")}
                            className="text-purple-600 font-semibold cursor-pointer">
                                {" "}Login
                            </span>
                        </p>
                 </div>

            </div>

        </div>
    );
}

export default register;