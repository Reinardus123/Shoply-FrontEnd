import { useState, useEffect } from "react";
import api from "../../../api/api";

function ProductForm({form, setForm}){

    const [categories, setCategories] = useState([]);

     function handleChange(e){
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        });
    }

    function handleCategory(e){
        setForm({
            ...form,
            categoryid: e.target.value,
        });
    }

    useEffect(() => {

        getCategories();

    });

    async function getCategories(){

        const response = await api.get("/categories");

        setCategories(response.data);
    };

    return (

        <div className="space-y-6">
            <div>

                <label className="font-semibold">
                    Product Name
                </label>

            <input 
                 type ="text"
                 name= "productname"
                 value={form.productname}
                 onChange={handleChange}
                 placeholder="Example : T-shirt"
                 className="w-full mt-2 border rounded-xl border-gray-200 p-4 outline-none focus:border-purple-500"
            />
            </div>

            <div className="grid grid-cols-2 gap-4">

                <div>
                    <label className="font-semibold">
                        Category
                    </label>
                    
                    <select 
                        name="categoryid"
                        value={form.categoryid}
                        onChange={handleCategory}
                        className="w-full mt-2 border rounded-xl border-gray-200 p-4 outline-none focus:border-purple-500"
                    >
                        <option value="">
                            Select Category
                        </option>

                        {
                            categories.map(category=> (
                                <option 
                                    key={category.categoryid}
                                    value={category.categoryid}
                                >
                                {category.categoryname}
                                </option>
                            ))
                        }
                        </select>
                        
                </div>

                <div>
                    <label className="font-semibold">
                        Price
                    </label>

                    <input 
                        type="text"
                        value={form.price}
                        name="price"
                        onChange={handleChange}
                        className="w-full mt-2 border rounded-xl border-gray-200 p-4 outline-none focus:border-purple-500"
                        placeholder="Rp. 100.000"
                    />
                </div>
            </div>

            <div>
                
                <label className="font-semibold">Description</label>

                <textarea 
                    rows="6"
                    className="w-full mt-2 border rounded-xl border-gray-200 p-4 outline-none focus:border-purple-500"
                    value={form.description}
                    name="description"
                    onChange={handleChange}
                    placeholder="Product Description"
                />

            </div>

        </div>
    );
}

export default ProductForm;