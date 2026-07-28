import qris from "../../assets/qris.png";
import gopay from "../../assets/gopay.png";
import ovo from "../../assets/ovo.png";
import shopeepay from "../../assets/shopeepay.png";
import { useNavigate } from "react-router-dom";


function OrderSummary({totalItems, subtotal, shippingFee, total, Checkout}){

    const navigate = useNavigate();
    
    return (
    <div className="bg-white rounded-3xl shadow-sm  p-6 sticky top-24">

        <h2 className="text-2xl font-bold mb-6">
            Order Summary
        </h2>

        <div className="space-y-4">
            <div className="flex justify-between">
                <span className="text-gray-600">
                    {(totalItems)} Items
                </span>

                <span>
                    Rp {subtotal.toLocaleString("id-ID")}
                </span>
            </div>

            <div className="flex justify-between">
                <span className="text-gray-600">
                    Shipping Fee
                </span>

                <span>
                    Rp {shippingFee.toLocaleString("id-ID")}
                </span>
            </div>

            <hr />

            <div className="flex justify-between">
                <span className="font-bold text-xl">
                    Total
                </span>
                
                <span className="font-bold text-2xl text-purple-600">
                    Rp {total.toLocaleString("id-ID")}
                </span>
            </div>
        </div>

        <button className="w-full mt-8 bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-semibold transition cursor-pointer"
            onClick={Checkout}
        >
            CheckOut
        </button>
        
        <h1 className="mt-5 flex item-center justify-center">
            Powered by
        </h1>


        <div className="flex items-center justify-center mt-5 gap-5">
            <img 
            src={qris} 
            alt="" 
            className="h-14- w-14"
            />

            <img 
            src={gopay} 
            alt="" 
            className="h-14 w-14"
            />
            
            <img 
            src={ovo} 
            alt=""
            className="h-14 w-14"
            />

            <img 
            src={shopeepay} 
            alt="" 
            className="h-14 w-14"
            />


        </div>
    </div>
 );
}

export default OrderSummary;