function Pagination({page, setPage, totalPage}){

    return (
        
        <div className="flex justify-end gap-2 mt-6">
            <button
                disabled={page === 1}
                onClick={() => setPage(page-1)}
                 className="px-3 py-2 border rounded disabled:opacity-50 cursor-pointer"
            >
                Prev
            </button>

            {
                [...Array(totalPage)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setPage(index + 1)}
                        className={`px-3 py-2 rounded border ${page === index + 1 ? "bg-purple-600 text-whit" : "bg-white hover:bg-gray-100"}`}
                    >
                        {index + 1}
                    </button>
                ))
            }

            <button 
                disabled={page === totalPage}
                onClick={() => setPage(page + 1)}
                className="px-3 py-2 border rounded disabled:opacity-50 cursor-pointer"
            >
                Next
            </button>
        </div>

    );
}

export default Pagination;