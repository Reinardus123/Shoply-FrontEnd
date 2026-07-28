import { useEffect, useState } from "react";
import { Upload, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../api/api";
import ProductForm from "./ProductForm"
import ImageUpload from "./ImageUpload";
import ProductVariant from "./ProductVariant";
import Swal from "sweetalert2";

function CreateProduct(){
     const {productid} = useParams();    

    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [form, setForm] = useState({
        productname: "",
        price: "",
        description: "",
        categoryid: ""
    });

    const [variants, setVariants] = useState([]);

    const [deletedVariants , setDeletedVariants] = useState([]);

    const [variant, setVariant] = useState({
        size: "",
        stock: ""
    });

    const [preview, setPreview] = useState("");

    const [editingVariant, setEditingVariant] = useState(null);

    useEffect(() => {
        if(productid){
            fetchProduct();
        }
    },[productid]);

    const existingVariant = variants.filter(item => item.variantid);
    const newVariants = variants.filter(item => !item.variantid);

    async function handleSubmit(e){
       

        e.preventDefault();
        try{
            const formData = new FormData();
             formData.append("productname", form.productname);
             formData.append("price",form.price);
             formData.append( "description",form.description);
             formData.append("categoryid",form.categoryid);

             if(image){
                formData.append("image",image);
             }
             

             if(productid){
 
            const update =  await api.put(`/admin/product/${productid}`,
                formData
            );

            console.log(update.data);



            console.log("masuk Update Variant");

            await Promise.all(
                existingVariant.map(item => 
                    api.put(
                        `/admin/productvariant/${item.variantid}`,
                    {
                        size: item.size,
                        stock: item.stock
                    }
                    )
                )
            );

            await Promise.all(
                newVariants.map(item => 
                    api.post("/admin/productvariant", 
                        {
                            productid,
                            size: item.size,
                            stock: item.stock
                        }
                    )
                )
            );
            console.log("Deleted Variants: ",deletedVariants)
            await Promise.all(
                deletedVariants.map(item => 
                    api.delete(`/admin/productvariant/${item.variantid}`)
                )
            );

            await Swal.fire({
                icon: "success",
                title: "Product Updated!"
            });



            navigate("/admin/product/allProduct");

        } else{

             const response = await api.post("admin/product",
                 formData
            );

             const productid = response.data.product.productid;

           
                await Promise.all(
                    newVariants.map(item => api.post("/admin/productvariant",{
                        productid,
                        size: item.size,
                        stock: item.stock
                    })  
                   )
                );
                  setForm({
                    productname: "",
                    price: "",
                    description: "",
                    categoryid: ""
            });

            setVariant({
                size: "",
                stock: ""
            });

            setImage(null);
            setPreview("");

            Swal.fire({
                icon: "success",
                title: "Product Created!",
                text: "The product has been created successfully.",
                confirmButtonColor: "#9333EA",
                confirmButtonText: "OK",
            });

            navigate("/admin/product/allProduct");
        }
        } catch(error){

        
                console.log(error);
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to save product.",
                    confirmButtonColor: "#9333EA",
                });
                  console.log("FULL ERROR:", error);

        }

        
    }
    async function fetchProduct(){

        const response = await api.get(`/admin/product/${productid}`);
        const variantresponse = await api.get(`/admin/productvariant/product/${productid}`);
        console.log(response.data);
        const product = response.data.product;
        

        setForm({
            productname: product.productname,
            price: product.price,
            description: product.description,
            categoryid: product.categoryid
        });


        setPreview(`http://localhost:3000${product.imageurl}`);

        setVariants(variantresponse.data.products);
    }


    return(
        <div className="max-w-7xl mx-auto">
            
            <div className="bg-white rounded-3xl shadow-lg p-10">
              
                <h1 className="text-3xl font-bold mb-8">
                    Create Product
                </h1>

                <div className="grid grid-cols-2 gap-8">
                    <ProductForm
                        form={form}
                        setForm={setForm}
                    />

                    <div className="space-y-8">

                         <ImageUpload
                            image={image}
                            setImage={setImage}
                            preview={preview}
                            setPreview= {setPreview}
                         />  
                         <ProductVariant
                            variant={variant}
                            setVariant={setVariant}
                            variants={variants}
                            setVariants={setVariants}
                            deletedVariants={deletedVariants}
                            setDeletedVariants={setDeletedVariants}
                            editingVariant={editingVariant}
                            setEditingVariant={setEditingVariant}
                        />

                    </div>
                   
                </div>

                <div className="flex justify-end gap-3 mt-8">
                    <button 
                        type="button"
                        onClick={() => navigate(-1)}
                        className="px-6 py-3 border border-gray-100  rounded-xl cursor-pointer hover:bg-red-600 hover:text-white transition duration-300"
                    >
                        Cancel
                    </button>

                     <button
                        type="submit"
                        className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl cursor-pointer ml-5"
                        onClick={handleSubmit}
                    >
                        Save Product
                    </button>

                </div>


            </div>

        </div>
    );
}


export default CreateProduct;