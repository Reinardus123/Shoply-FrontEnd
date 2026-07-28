import { Clock3, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CheckoutButton({order, onPay}){

    const navigate = useNavigate();
    const isPaid = order.status === "Completed" || order.status === "Paid";

    const deadline = new Date(order.created_at);
    deadline.setDate(deadline.getDate() + 1);
    deadline.setHours(23, 59, 0, 0);

    const formattedDeadline = deadline.toLocaleDateString("en-GB",{
        day: "numeric",
        month: "long",
        year: "numeric"
    }) + ", 23:59";

    return(

        <div className="bg-gradient-to-r from-purple-50 to-white border border-gray-100 rounded-3xl shadow-lg p-8 flex justify-between items-center mt-5">

            <div className="flex items-center gap-6">

                {isPaid ? (
                     <div className="w-20 h-20 rounded-full border-4 border-purple-300 flex items-center justify-center">
                        <CheckCircle
                            size={38}
                            className="text-purple-500"
                        />
                    </div>

                    
                ) : (
                     <div className="w-20 h-20 rounded-full border-4 border-purple-300 flex items-center justify-center">
                        <Clock3
                            size={38}
                            className="text-purple-500"
                        />
                    </div>

                )
            
            }
                    {isPaid ? (

                        <div>
                            <h2 className="text-2xl font-bold"> 
                                Your payment has been received successfuly. 
                            </h2>

                            <p className="text-gray-600 mt-2">
                               Thank you for shoppung with Shoply.
                            </p>

                        </div>
                    ) : (
                        <div>
                        <h2 className="text-2xl font-bold">
                            What's Next ?
                        </h2>

                        <p className="text-gray-600 mt-2">
                            Complete your payment to process your order.
                        </p>

                        <p className="text-gray-500 mt-1">
                            You can pay before {formattedDeadline}.
                        </p>
                    </div>
                        
                    )
                
                }

                    
            </div>

                {isPaid ? (
                    <button 
                        onClick={() => navigate("/")}
                        className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700"
                    >
                        Back To Home
                    </button>
                ) : (
                     <button onClick={onPay} className="bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-700 hover:to-violet-600 text-white font-semibold px-14 py-4 rounded-xl transition-all duration-300 shadow-lg cursor-pointer">
                        Pay Now
                </button>
                )}   
        </div>
    );
}

export default CheckoutButton;
