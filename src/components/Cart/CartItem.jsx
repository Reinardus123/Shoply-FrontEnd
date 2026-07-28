import {Minus, Plus, X} from "lucide-react"
import { useState } from "react";

function CartItem({item, onDelete}){
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5">
            
            <div className="grid grid-cols-12 items-center gap-6">

                <div className="col-span-2">
                    <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-center">
                        <img 
                        src={item.imageurl.startsWith("/uploads") ? `http://localhost:3000${item.imageurl}` : item.imageurl} 
                        alt={item.productname}
                        className="w-28 h-28 object-contain"
                        />
                    </div>
                </div>

                <div className="col-span-4">
                        <h3 className="font-semibold text-xl">
                            {item.productname}
                        </h3>

                        <p className="text-gray-500 mt-2">
                            Size: {item.size}
                        </p>

                        <p className="text-gray-500">
                            Quantity: {item.quantity}
                        </p>

                        <p className="text-green-600 mt-2 text-sm">
                            In Stock
                        </p>
                </div>


               <div className="col-span-5 flex flex-col justify-between h-full">

                    <div className="flex justify-end items-start gap-8 mt-4">

                        <p className="font-semibold text-lg">

                         Rp {item.price.toLocaleString("id-ID")}   
                        </p>
                  
                         <button 
                            onClick={() => onDelete(item.cartid)} 
                            className="text-gray-400 hover:text-red-500"
                        >
                            <X size={22}/>
                        </button>
                    </div>
                    
                    <div className="text-right">
                        <p className="text-sm text-gray-500">
                            Subtotal
                        </p>

                        <p className="font-semibold text-purple-600">
                            Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                        </p>
                    </div>
                   

               </div>
               

            </div>
        </div>
    );
}

export default CartItem;