import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import { useState, useEffect } from "react";
import api from "../../api/api";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

function AllProducts(){
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchCategory, setSearchCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const limit = 10;

    useEffect(() => {
        getAllProducts();
    },[page, limit, selectedCategory]);

    useEffect(() => {
        fetchCategories();
    },[]);


    async function getAllProducts(){
        try{

            const response = await api.get("/products",{
                params:{
                    limit, 
                    page,
                    category: selectedCategory
                }
            });
            console.log(response.data.length);
            setProducts(response.data.products);
            setTotalPage(response.data.totalPage);

        } catch(error){
            console.log(error);
        }
    }

    async function handleWishlist(productid){
        try{
            const response = await api.post("/wishlist",{
                productid
            });

            await getAllProducts();
            return response.data;
        } catch(error){
            console.log(error);
            return false;
        }
    }

    async function handleDeleteWishlist(wishlistid){
        try{
            const response = await api.delete(`wishlist/${wishlistid}`);
            return true;
        } catch(error){
            console.log(error);

            return false;
        }
    }

    async function fetchCategories(){
        try{

            const response = await api.get("/categories");
            console.log(response.data);
            setCategories([
                {categoryid: 0, categoryname: "All"},
                ...response.data, 
            ]);


        } catch(error){
            console.log(error);
        }
    }

    // const categories = [
    //     "All",
    //     ...new Set(products.map((product) => product.categoryname)),
    // ];

    const filteredProducts = products;

    const filteredCategories = categories.filter((category) => 
        category.categoryname
                .toLowerCase()
                .includes(searchCategory.toLowerCase())
    );
    return (
        <>
        <Navbar/>
    
        <div className="mx-auto px-8 py-8">
            <h1 className="text-4xl font-bold mb-8">
                All Products
            </h1>

            <div className="flex gap-8">
                <div className="w-64 border rounded-2xl border-gray-100 p-5 h-fit bg-white">
                    <h2 className="text-xl font-semibold mb-4">
                        Categories
                    </h2>
                    <input 
                    type="text" 
                    placeholder="Search category..."
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                    className="w-full rounded-lg p-2 bg-gray-50 mb-4"
                    />

                    {filteredCategories.length > 0 ? (
                        <div className="flex flex-col gap-2 max-h-80 overflow-y-auto">
                        {filteredCategories.map((category) => (
                            <button 
                            key={category.categoryid}
                            onClick={() => setSelectedCategory(category.categoryname)}
                            className={`text-left px-4 py-3 rounded transition-all cursor-pointer
                                ${
                                    selectedCategory === category.categoryname
                                    ? "bg-purple-100 text-grey-100"
                                    : "hover:bg-purple-100 "
                                }`}
                            >
                                {category.categoryname} 
                            </button>
                        ))}
                    </div>
                    ) : 
                    (
                        <p>Category Not Found</p>
                    )

                  }
                    
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold">
                            {selectedCategory === "All" ? "All Products" : selectedCategory}
                        </h2>
                        <span className="text-gray-500">
                            {filteredProducts.length} Products
                        </span>
                    </div>

                    {filteredProducts.length === 0 ? (

                    
                    
                    <div className="flex items-center justify-center">
                        <h1 className="text-3xl font-semibold">
                            No data 
                        </h1>
                    </div>

                    )

                    : (
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductCard
                            key={product.productid}
                            product={product}
                            onAddWishlist={handleWishlist}
                            onDeleteWishlist={handleDeleteWishlist}
                            />
                        ))}
                    </div>

                    )
                    
                    }
                     <Pagination
                        page={page}
                        totalPage={totalPage}
                        setPage={setPage}
                    />
                </div>

                   
            </div>
        </div>

        <Footer/>
        </>
    );
}

export default AllProducts;