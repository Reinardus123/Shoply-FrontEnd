import api from "../../api/api";
import Navbar from "../HomePage/Navbar";
import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import Footer from "../HomePage/Footer";
import Feature from "../HomePage/Feature";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Cart(){
    
    const [cartItems, setCartItems] = useState([]);

    const totalItems = cartItems.reduce(
        (sum, item) => sum + item.quantity,0    
    );

    const subtotal = cartItems.reduce(
        (sum, item) => sum + (item.price * item.quantity),0
    )

    const shippingFee = 20000;

    const total = subtotal + shippingFee;

    useEffect(() => {
        getCart();
    },[]);

    const navigate = useNavigate();

    async function getCart(){
        try{
            const response = await api.get("/cart");
            console.log(response.data)
            setCartItems(response.data);
        } catch(error){
            console.log(error);
        }
    }

    async function handleDelete(cartid){

        try{
            await api.delete(`/cart/${cartid}`);

            getCart();
        } catch(error){
            console.log(error);
        }
    }

    async function handleCheckout(){

        try{
            const response = await api.post("/checkout");
            navigate(`/checkout/success/${response.data.order.orderid}`);
            
        } catch(error){
            console.log(error);
        }
    }
    
    return (
       <>
       <Navbar/>

    <div className="bg-purple-50 min-h-screen">
         <div className="max-w-7xl mx-auto px-6 py-10">

       <div className="py-4">

        <h1 className="font-bold text-4xl">
                Shopping Cart

                <span className="text-purple-600 text-2xl ml-2">
                    ({cartItems.length} Items)
                </span>
        </h1>

        <p className="text-gray-500 mt-2">
            Review your items and proceed to checkout
        </p>

        {cartItems.length === 0 ? (
            <div className="bg-white rounded-3xl p-16 text-center shadow-sm mt-5">
                <div className="text-7xl mb-4">
                    🛒
                </div>

                <h2 className="text-3xl font-bold">
                    Your cart is empty
                </h2>

                <p className="text-gray-500 mt-3">
                    Looks like you haven't added any product yet.
                </p>
                
                <div className="flex items-center justify-center">
                    <Link to="/">
                    <button className="mt-8 bg-purple-600 text-white border border-purple-600 px-6 py-3 rounded-xl cursor-pointer hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                        <ShoppingCart/>
                         Continue Shopping
                    </button>

                    </Link>
                </div>
            </div>
        ) : (
            <div className="grid grid-cols-3 gap-8 mt-8">

                <div className="col-span-2 space-y-6">
                    {cartItems.map((item) => (
                        <CartItem
                        key={item.cartid}
                        item={item}
                        onDelete={handleDelete}
                        />
                    ))}
                </div>

                <div>
                    <OrderSummary
                    totalItems={totalItems}
                    subtotal={subtotal}
                    shippingFee={shippingFee}
                    total={total}
                    Checkout={handleCheckout}
                    />
                </div>

            </div>
            
        )}
       </div>
     </div>
    </div>
   <Footer/>
       </>
    )
}

export default Cart;