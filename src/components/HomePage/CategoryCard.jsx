import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryCard({category}){

    const navigate = useNavigate();

    return (
        <div className="w-[170px] h-[120px] bg-white hover:shadow-xl transition-all duration-300 border border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer" onClick={() => navigate(`/categories/${category.categoryid}`)}>
            <img 
            src={category.imageurl} 
            alt="" 
            className="w-12 h-12 object-contain hover:scale-105 transition-all duration-300"
            />

            <h3
            className="text-sm font-medium"
            >
                {category.categoryname}
            </h3>
        </div>
    );
}

export default CategoryCard;