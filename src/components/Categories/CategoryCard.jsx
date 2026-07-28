import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CategoryCard({category}){

    const navigate = useNavigate();
    return(
            
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden cursor-pointer hover:shadow-xl transition-all" onClick={() => navigate(`/categories/${category.categoryid}`)}>

            <div className="flex items-center justify-center">
                 <img 
                    src={category.imageurl.startsWith("/categoryuploads") ? `http://localhost:3000${category.imageurl}` : category.imageurl} 
                    alt={category.categoryname} 
                    className="w-ful h-52 object-contain hover:scale-105 transition-all duration-300"
                />
            </div>
        
            <div className="p-5">
                <h2 className="text-xl font-semibold flex items-center justify-center">
                    {category.categoryname}
                </h2>
            </div>
        </div>
    );
}

export default CategoryCard;