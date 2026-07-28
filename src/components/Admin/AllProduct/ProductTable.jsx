import { useState } from "react";
import ProductRow from "./ProductRow";
function ProductTable({product, handleDelete, handleRestore}){

   return (
    <div>
         <table className="w-full">
        <thead>
            <tr className="border-b border-gray-200 text-gray-500 text-sm">
                <th className="text-left py-4 w-20">
                    Image
                </th>

                <th className="text-left py-4">
                    Product
                </th>

                <th className="text-left py-4">
                    Category
                </th>

                <th className="text-left py-4">
                    Price
                </th>

                <th className="text-left py-4">
                    Status
                </th>

                <th className="text-center py-4 w-32">
                    Action
                </th>
            </tr>
        </thead>

        <tbody>
            {
                product.map(product => (
                    <ProductRow
                        key={product.productid}
                        product={product}
                        handleDelete= {handleDelete}
                        handleRestore={handleRestore}
                    />
                ))
            }
        </tbody>
        </table>
    </div>
   )
}

export default ProductTable;