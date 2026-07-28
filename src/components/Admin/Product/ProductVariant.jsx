
import { Plus, Trash, Pen } from "lucide-react";
function ProductVariant({variant, setVariant, variants, setVariants, deletedVariants, setDeletedVariants, editingVariant, setEditingVariant}){

    function handleChange(e){
        setVariant({
            ...variant,
            [e.target.name] : e.target.name === "stock"
                ? Number(e.target.value)
                : e.target.value
        });

    }

    function addVariant(){

        if(!variant.size || !variant.stock){
            return;
        }

        setVariants([
            ...variants,

            variant
        ]);

        setVariant({
            size:"",
            stock: ""
        });
    }

    function handleDelete(index){

        const selected = variants[index];

        if(selected.variantid){
            setDeletedVariants([
                ...deletedVariants,
                selected
            ]);
        }
        
        setVariants(variants.filter((_, i) => i !== index));
    }

    function handleUpdateVariant(item){

        const updatedVariant =
            variants.map(item => 
                item.variantid === editingVariant.variantid
                ? {
                    ...item,
                    size: variant.size,
                    stock: variant.stock
                }
                : item
            );

        console.log(updatedVariant);

        setVariants(updatedVariant);


        setEditingVariant(null);

        setVariant({
            size:"",
            stock: ""
        });
    }

    return (
        <div className="mt-10 border rounded-xl p-5 border-gray-200">

            <label className="font-semibold">
                Product Variant
            </label>

        <div className="grid grid-cols-3 gap-4">

             <input 
                type="text"
                name="size"
                placeholder="Size"
                className="w-full mt-2 border rounded-xl border-gray-200 p-4 outline-none focus:border-purple-500"
                onChange={handleChange}
                value={variant.size}
                />

            <input 
                type="number" 
                name="stock"
                placeholder="Stock"
                className="w-full mt-2 border rounded-xl border-gray-200 p-4 outline-none focus:border-purple-500"
                onChange={handleChange}
                value={variant.stock}
            />

            <button 
                type="button"
                 onClick={editingVariant 
                    ? handleUpdateVariant 
                    : addVariant
                }
                 className="text-purple-600 cursor-pointer">
                {editingVariant ? "Update" : "+ Add"}
            </button>
        </div>

        <div className="border rounded-xl border-gray-200 mt-5">

            <div className="px-4 py-3 font-semibold">
                Current Variants
            </div>

            {variants.length === 0 ? 
            
                (
                    <div className="text-center text-gray-400 py-8">
                        No Variant Added
                    </div>
                ) 

                : 
                (
                        <table className="w-full">
                            
                            <thead>

                                <tr className="text-left border-b">
                                    <th className="p-4">
                                        Size
                                    </th>

                                    <th className="p-4">
                                        Stock
                                    </th>

                                    <th className="p-4 text-center">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>


                                {
                                    variants.map((item, index) => (
                                        <tr key={index} className="border-b">
                                            
                                            <td className="p-4">
                                                {item.size}
                                            </td>

                                            <td className="p-4">
                                                {item.stock}
                                            </td>
                                            
                                            <td className="p-4 text-center">
                                                <button 
                                                    type="button"
                                                    onClick={() => handleDelete(index)}
                                                    className="text-red-500 hover:text-red-700 cursor-pointer"
                                                >
                                                    <Trash size={18}/>
                                                </button>

                                                <button 
                                                    type="button"
                                                    className="text-orange-500 hover:orange-700 cursor-pointer gap"
                                                    onClick={() => {
                                                        setVariant({
                                                            size: item.size,
                                                            stock: item.stock

                                                        });

                                                        setEditingVariant(item);
                                                    }}
                
                                                >
                                                <Pen size={18}/>
                                                </button>
                                            </td>

                                        </tr>
                                    ))
                                }

                            </tbody>

                        </table>
                )
            }

        </div>
        </div>
    );
}

export default ProductVariant;