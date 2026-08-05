import React from "react";
import {useState} from "react";
import axios from "axios";
import {ShoppingBag, Mail, Lock, Eye, EyeClosed , Truck, BadgeCheck, ShieldCheck} from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function login(){

    const [email, setEmail] = useState("");
    const [password, SetPassword] = useState("");
    const navigate = useNavigate();
    const [visible, setVisible] = useState("");
    
    async function handleLogin(e){
        e.preventDefault();
        try{
              
            const response = await api.post(
                "/login",{
                    email,
                    password,
                }
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            navigate("/");
            // console.log(response.data);

        // alert("Login Success");
        // toast.success("Login Success");
        Swal.fire({
            icon: "success",
            title: "Login Success",
            text: "Welcome back!",
            confirmButtonColor: "#9333ea",
        });
        }catch(error){
            console.log(error);
            // alert("Login Failed");

        Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "Please check your username or password",
            confirmButtonColor: "#9333ea",
        });
        }
        
    }

    return (
        <div className="min-h-screen bg-[#f5f3ff] flex items-center justify-center p-6">

            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                <div className="bg-gradient-to-b from-purple-100 to-purple-50 p-10 flex flex-col justify-between relative overflow-hidden">

                    <div className="flex items-center gap-2 text-purple-600 font-bold text-2xl">
                        <ShoppingBag size={28}/>
                        Shoply
                    </div>
                    
                    <div className="mt-10">
                        <h1 className="text-5xl font-bold text-gray-800">   
                            Welcome Back 👋
                        </h1>
                        
                        <p className="text-gray-500 mt-4 text-lg">
                            Login to continue shopping your favorite products
                        </p>
                    </div>

                    <div className="flex justify-center my-10">
                        <img 
                        src="https://cdn-icons-ong.flaticon.com/512/3144/3144456.png" 
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

                    <div className="absolute top-0 right-0 w-40 h-40 bg-purple-200 rounded-full opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple rounded-full opacity-20"></div>

                </div>

                <div className="p-10 md:p-16 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Login to your account
                    </h2>
                    <p className="text-gray-500 mt-2 mb-8">
                        Enter your email and password to login
                    </p>

                    <form  onSubmit={handleLogin} className="space-y-5">

                        <div>
                            <label className="block font-medium mb-2">
                                Email
                            </label>

                            <div className="flex items-center border rounded-xl px-4 py-3">
                                <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="w-full outline-none"
                                onChange={(e) => setEmail(e.target.value)}
                                />

                                <Mail size={18} className="text-gray-400"/>
                            </div>
                        </div>

                        <div >
                            <label className="block font-medium mb-2">
                                Password
                            </label>
                        

                            <div className="flex items-center border rounded-xl px-4 py-3 gap-3">


                            {!visible ? (
                                <>
                                 <input 
                                    type="password" 
                                    placeholder="Enter your password"
                                    className="w-full outline-none"
                                    onChange={(e) => SetPassword(e.target.value)}
                                />
                                <EyeClosed size={18} className="text-gray-400 cursor-pointer" onClick={() => setVisible(true)}/>
                                
                                </>
                            ) :(
                                <>
                                <input 
                                    type="text" 
                                    placeholder="Enter your password"
                                    className="w-full outline-none"
                                    onChange={(e) => SetPassword(e.target.value)}
                                />
                                <Eye size={18} className="text-gray-400 cursor-pointer" onClick={() => setVisible(false)}/>
                                
                                </>
                            )}
                               
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-gray-500">
                                <input type="checkbox" />
                                Remember me
                            </label>

                            <button type="button" className="text-pruple-600 hover:underline">
                                Forgot password ?
                            </button>
                        </div>

                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-semibold transition cursor-pointer" type="submit">
                                Login
                        </button>
                    </form>

                    <div className="flex items-center gap-4 my-8">
                        <div className="h-px bg-gray-200 flex-1"></div>
                        or continue with
                        <div className="h-px bg-gray-200 flex-1"></div>
                    </div>

                    <div className="space-y-4">
                        <button className="w-full border rounded-xl py-3 hover:bg-gray-50 transition">
                            Continue with Google
                        </button>
                    </div>

                    <p className="text-center text-gray-500 mt-8">
                        Don't have an account ?
                        <span 
                            onClick={() => navigate("/register")}
                        className="text-purple-600 font-semibold cursor-pointer">
                            {" "}Register
                        </span>
                    </p>
                </div>

            </div>

        </div>
    )
}

export default login;