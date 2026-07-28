import React,{useEffect, useState} from "react";
import CategoryCard from "./CategoryCard";
import categories from "../../data/categories.js";
import { Link } from "react-router-dom";
import axios from "axios";
import api from "../../api/api.js";

function Category() {

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
    <section className="px-10 mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Shop By Category</h2>
        <Link to="/categories">
          <button className="text-purple-600 font-medium cursor-pointer">
              View All Categories →
        </button>
        </Link>
        
      </div>

      <div className="flex gap-10 flex-wrap">
        {categories.slice(0,7).map((category) => (
          <CategoryCard
            key={category.categoryid}
            category={category}
          />
        ))}
      </div>
    </section>
  );
}

export default Category;
