import SuccessHeader  from "./SuccessHeader";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/api";
import OrderSummary from "./OrderSummary";
import CheckoutButton from "./CheckoutButton";


function CheckoutSuccess(){

    const [order, setOrder] = useState(null);
    const { orderid } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getOrder();
    },[])

    async function getOrder(){

        try{
            const response = await api.get(
                `/orders/${orderid}`
            );
            
            
            setOrder(response.data);
           

        } catch(error){
            console.log(error);
        }
    }

    async function handlePayment(){

        try{
            const response = await api.post(`/payments/${order.orderid}`);

            window.snap.pay(
                response.data.snapToken, 
                {
                    onSuccess(result){
                        console.log(result);
                        navigate(`/checkout/success/${order.orderid}`);

                    },

                    onPending(result){
                        console.log(result)
                    },

                    onClose(){
                        alert("Payment Cancelled");
                    }
                }
            );

        } catch(error){
            console.log(error);
        }
    }

    if(!order){
        return(
            <>
            <Navbar/>
                <div className="max-w-7xl mx-auto py-10">
                    Loading...
                </div>
            </>
        );
    }

    const subtotal = order.items.reduce(
        (sum, item) => sum + Number(item.price)* item.quantity,0
    )

    const shippingFee = 20000;

    const total = subtotal + shippingFee;
    
    return(
        <>
            <Navbar/>
            <div className="max-w-7xl mx-auto py-10">
                <SuccessHeader
                    order={order}
                />

                <OrderSummary
                    items={order.items}
                    subtotal={subtotal}
                    shippingFee={20000}
                    total={total}
                />

                <CheckoutButton
                    order={order}
                    onPay={handlePayment}
                />
            </div>

            <Footer/>
        </>
      
    );
}

export default CheckoutSuccess;