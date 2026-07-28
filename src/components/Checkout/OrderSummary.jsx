function OrderSummary({items, subtotal, shippingFee, total}){

    return(
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mt-8 ">
            
            <h2 className="text-3xl font-bold mb-8">
                Order Summary
            </h2>

            <div className="border border-gray-200 rounded-3xl p-10 shadow-sm">

            <div className="grid grid-cols-12 pb-4 border-b text-gray-500 font-medium">
                <div className="col-span-5">
                    Product
                </div>
                
                <div className="col-span-2 text-center">
                    Size
                </div>

                <div className="col-span-1 text-center">
                    Quantity
                </div>

                <div className="col-span-2 text-center">
                    Price
                </div>

                <div className="col-span-2 text-right">
                    Subtotal
                </div>
            </div>
            {items.map((item) => (
                <div 
                    key={item.orderitemid}
                    className="grid grid-cols-12 py-8 border-b items-center"
                >
                    <div className="col-span-5 flex gap-5 items-center">
                        
                        <img 
                            src={item.imageurl.startsWith("/uploads") ? `http://localhost:3000${item.imageurl}` : item.imageurl} 
                            alt={item.productname} 
                            className="w-24 h-24 object-contain rounded-xl border border-gray-100 bg-gray-50 py-2"
                        />

                        <div>
                            <h3 className="font-semibold text-xl">
                                {item.productname}
                            </h3>

                            <p className="text-gray-500 mt-2">
                                SKU: {item.productid}
                            </p>
                        </div>
                    </div>

                    <div className="col-span-2 text-center">
                        {item.size}
                    </div>

                    <div className="col-span-1 text-center">
                        {item.quantity}
                    </div>

                    <div className="col-span-2 text-center">
                        Rp {Number(item.price).toLocaleString("id-ID")}
                    </div>

                    <div className="col-span-2 text-right">
                            Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                    </div>
                </div>
            ))}

            <div className="flex justify-end mt-8">
               
               <div className="w-[380px]">
                    <div className="flex justify-between mb-4">
                        <span className="text-gray-600">
                            Subtotal
                        </span>

                        <span>
                            Rp {subtotal.toLocaleString("id-ID")}
                        </span>
                    </div>

                    <div className="flex justify-between mb-5">
                        <span className="text-gray-600">
                            Shipping Fee
                        </span> 

                        <span>
                            Rp {shippingFee.toLocaleString("id-ID")}
                        </span>
                    </div>
                    
                    <hr />
                    
                    <div className="flex justify-between mt-6">
                        <span className="text-2l font-bold">
                            Total Payment
                        </span>

                        <span className="text-xl font-bold text-purple-700">
                            Rp {total.toLocaleString("id-ID")}
                        </span>
                    </div>
               </div>
            </div>
         </div>
        </div>
    );
}

export default OrderSummary