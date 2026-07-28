import { CheckCircle2 } from "lucide-react";

function SuccessHeader({order}){

    return (
        <div className="bg-gradient-to-r from-purple-50 to-white border-purple-100 rounded-3xl shadow-sm">

           <div className="flex items-center justify-center px-14 py-12"> 

                <div className="flex items-center gap-10">

                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-500 flex items-center justify-center shadow-xl">
                        
                        <CheckCircle2
                            size={62}
                            className="text-white"
                        />
                    </div>

                    <div>
                        <h1 className="text-3xl font-bold text-gray-500">
                            Order Created Successfully!
                        </h1>

                        <p className="text-gray-500 text-xl mt-4">
                            Thank you for shopping with 
                            <span className="font-semibold text-purple-700">
                                {" "}Shoply
                            </span>
                        </p>

                        <p className="text-gray-500 mt-1">
                            We have received your order.
                        </p>
                    </div>
                </div>
           </div>

           <div className="grid grid-cols-3 bg-white border-t border-gray-100">
                <div className="py-8 text-center border-r border-gray-100">
                        <p className="text-gray-500">
                            Order ID
                        </p>

                        <h2 className="text-5xl font-bold text-purple-700 mt-2">
                            #{order.orderid}
                        </h2>
                </div>

                <div className="py-8 text-center border-r border-gray-100">
                    <p className="text-gray-500">
                        Order Date
                    </p>

                    <h2 className="text-2xl font-semibold mt-2">
                        {new Date(order.created_at).toLocaleDateString("id-ID")}
                    </h2>
                </div>

                <div className="py-8 text-center">
                    <p className="text-gray-500">
                        Payment Status
                    </p>
                    <span className={`inline-block px-5 py-2 rounded-full text-sm font-semibold
                        ${order.status === "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }
                    `}>
                    {order.status === "pending" ? "Pending" : "Paid"}

                    </span>
                </div>
           </div>
        </div>
    );
}

export default SuccessHeader;