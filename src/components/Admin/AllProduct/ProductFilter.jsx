import { Search } from "lucide-react";
function ProductFilter({search, setSearch ,categories, categoryFilter, statusFilter, SetCategoryFilter, setStatusFilter}){


    return(

       <div className="flex justify-between items-center mt-6">
            <div className="relative w-96">
                
                <Search 
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input 
                    type="text"
                    placeholder="Search Product..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition" 
                />
            </div>
            
            <div className="flex gap-3">
                <select 
                    value={categoryFilter}
                    onChange={(e)=>SetCategoryFilter(e.target.value)}
                    className="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
                >
                    <option value="">Category</option>

                    {
                        categories.map(category => (
                            <option 
                                key={category.categoryid}
                                value={category.categoryname}
                            >
                                {category.categoryname}
                            </option>
                        ))
                    }
                </select>

                <select 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-purple-500"
                >
                    <option value="">
                        Status
                    </option>

                    <option value="Active">
                        Active
                    </option>

                    <option value="Inactive">
                        InActive
                    </option>
                </select>
            </div>
       </div>
    )
}

export default ProductFilter;