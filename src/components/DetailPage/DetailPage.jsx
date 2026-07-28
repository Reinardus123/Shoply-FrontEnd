import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import { Minus, Plus, ShoppingCart, Heart } from "lucide-react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function DetailPage(){

    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [variants, setVariant]= useState([]);
    const [selectedVariants, setSelectedVariants] = useState(null);
    const [quantity, setQuantity] = useState(1);
    

    const navigate = useNavigate();

    useEffect(() => {
        getProduct();
    },[]);

    useEffect(() => {
        if(product?.variant?.length > 0){
            setVariant([product.variants[0]]);
        }
    }, [product]);


    async function getProduct(){
        try{
            const response = await api.get(`/product/${id}`);
            setProduct(response.data.product[0]);
            setVariant(response.data.variants)
            console.log(response.data);

            if(response.data.variants.length > 0){
                setSelectedVariants(response.data.variants[0]);
            }

        } catch(error){
            console.log(error);
        }
    }

    async function handleToAddCart(){

        const token = localStorage.getItem("token");

        if(!token){
            const result = await Swal.fire({
                icon: "warning",
                title: "Login Required",
                text: " You need to login before adding items to you cart",
                showCancelButton: true,
                confirmButtonText: "Login",
                cancelButtonText: "Cancel",
                confirmButtonColor: "#9333ea"
            });

            if(result.isConfirmed){
                navigate("/login");
            }
            return;
        }



        if(!variants){
            toast.warning("Please select a size");
            return;
        }

        try{
            const response = await api.post("/cart",{
                variantid: selectedVariants.variantid,
                quantity
            });
            console.log(response.data);

            toast.success("Added to cart");
            navigate("/cart");
            
        }  catch(error){
            toast.error("Failed to add item to cart");
            console.log(error);
        }
    }

    return (
        
       <div className="min-h-screen bg-white">
            <Navbar/>

            <section className="px-10 py-10">
                
                <div className="grid grid-cols-2 gap-10">

                        <div className="flex flex-1 bg-purple-50 rounded-3xl justify-center items-center">
                            <img 
                            src= {product?.imageurl.startsWith("/uploads") ? `http://localhost:3000${product.imageurl}` : product?.imageurl} 
                            alt="" 
                            className="w-[400px] h-[400px] object-contain drop-shadow-2xl"
                            />
                        </div>

                        <div>
                            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                                {product?.categoryname}
                            </span>

                            <h1 className="text-4xl font-bold mt-4">
                                {product?.productname}
                            </h1>

                            <div className="flex items-center gap-2 mt-3">
                                ⭐⭐⭐⭐⭐
                                <span className="text-gray-500">(24 Reviews)</span>
                            </div>

                            <h2 className="text-3xl font-bold text-purple-600 mt-5">
                                Rp. {product?.price.toLocaleString("id-ID")}
                            </h2>

                            <p className="mt-5 text-gray-500 leading-relaxed">
                                {product?.description}
                            </p>

                            <hr className="my-6"/>

                            {variants.some(variant => variant.size !== null) && (
                                 <div>
                                    <h3 className="font-semibold mb-3">
                                        Size
                                    </h3>

                                <div className="flex gap-3">
                                    {variants.map((variant) => (
                                        <button
                                        key={variant.variantid}
                                        onClick={() => setSelectedVariants(variant)}
                                        className={`px-5 py-2 rounded-xl border transition cursor-pointer
                                            ${ variant.stock <= 0 ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                               : selectedVariants?.variantid === variant.variantid
                                                ? "bg-purple-600 text-white"
                                                : "bg-white"
                                            }`}
                                        >
                                            {variant.size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            )
                        }
                            <div className="mt-8">

                                <h3 className="font-semibold mb-3">
                                    Quantity
                                </h3>

                                <div className="flex items-center gap-4">
                                    <button 
                                    onClick={() => 
                                        quantity > 1 && 
                                        setQuantity(quantity - 1)
                                        
                                    } className="w-10 h-10 border rounded-full flex justify-center items-center cursor-pointer">
                                        <Minus size={16}/>
                                    </button>
                                    
                                    <span className="font-semibold">{quantity}</span>

                                    <button 
                                    onClick={() => 
                                        setQuantity(quantity + 1)
                                    }
                                    className="w-10 h-10 border rounded-full flex justify-center items-center cursor-pointer"
                                    >
                                    <Plus size={16}/>
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <button className="flex-1 border border-purple-600 bg-white text-purple-600 py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-purple-600 hover:text-white" onClick={handleToAddCart}>
                                    <ShoppingCart size={18}/>
                                    Add To Cart
                                </button>

                                <button className="flex-1 border border-purple-600 text-purple-600 py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-purple-600 hover:text-white">
                                    <Heart size={18}/>
                                    Wishlist
                                </button>
                            </div>

                            <div className="mt-6 bg-purple-50 rounded-xl p-4">
                                <p className="text-purple--600 font-semibold">
                                    Stock Available
                                </p>
                                {selectedVariants?.stock < 1 ? (

                                    <p className="text-gray-500 text-sm">
                                        out of stock
                                    </p>
                                ) : (
                                    <p className="text-gray-500 text-sm">
                                        {selectedVariants?.stock} items left
                                    </p>
                                )}
                                

                            </div>
                        </div>

                    
                </div>
            </section>

            <Footer/>
       </div>
    )
}


export default DetailPage;