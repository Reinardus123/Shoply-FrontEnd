import React from "react";
import { ShoppingBag } from "lucide-react";

function AboutHero(){
    
    return(
       <div className="bg-white rounded-3xl p-12 shadow-sm overflow-hidden relative">
            
            <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-100 right-0 top-1/2 -translate-y-1/2 opacity-50"/>

            <div className="grid grid-cols-2 gap-10 items-center relative">
                <div>
                    <p className="text-purple-600 font-semibold text-sm">
                        About Shoply
                    </p>
                    <h1 className="text-6xl font-bold mt-4">
                        About {" "}
                        <span className="text-purple-600">Shoply</span>
                    </h1>

                    <h2 className="text-2xl font-semibold mt-4">
                        Modern E-commerce Platform

                        <br />
                        Built with passion
                    </h2>

                    <p className="text-gray-500 mt-5 leading-relaxed">
                        Shoply is a full-stack e-commerce platform
                        <br />
                        that provides a seamless shopping experience.
                    </p>

                    <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl cursor-pointer">
                        Browse Products
                    </button>
                </div>

                <div className="flex justify-center">
                   <ShoppingBag
                    size={300}
                    className="text-purple-300 ml-5"
                   />
                    
                </div>
            </div>
       </div>
    )
}

export default AboutHero;