import React, { useEffect, useState } from "react";
import {Search, ArrowRight} from "lucide-react";
import Navbar from "../HomePage/Navbar";
import Footer from "../HomePage/Footer";
import CategoryCard from "./CategoryCard";
import axios from "axios";
import api from "../../api/api";


function Categories(){

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    },[]);

    async function fetchCategories(){
        try{
            const response = await api.get(
                "/categories"
            );
        setCategories(response.data);

        } catch(error){
            console.log(error);
        }
    }

    return (
        <div>
            <Navbar/>
            <div className="min-h-screen bg-purple-50 p-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-4 gap-6">
                        
                        {categories.map((category) =>(
                            <CategoryCard
                                key={category.categoryid}
                                category={category}
                            />
                        ))}
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Categories;

