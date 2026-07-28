import { useEffect, useState } from "react";
import api from "../../../api/api";
import ProductCard from "../../HomePage/ProductCard";
import ProductFilter from "./ProductFilter";
import ProductTable from "./ProductTable";
import Pagination from "./Pagination";

function AllProducts() {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [categoryFilter, SetCategoryFilter] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const limit = 10;

  const filteredProducts = product.filter(product => {

    const searchMatch = product.productname.toLowerCase().includes(search.toLowerCase());

    const categoryMatch = categoryFilter === "" || product.categoryname === categoryFilter;

    const statusMatch = statusFilter === "" || product.status === statusFilter;

    return searchMatch && categoryMatch && statusMatch ;
  });

  useEffect(() => {
    fetchProduct();
  }, [page, limit, search, categoryFilter, statusFilter]);

   useEffect(() => {
    getCategories();
  }, []);


  async function fetchProduct() {
    try {
      const response = await api.get("/admin/product",{
        params:{
          page,
          limit,
          search,
          category: categoryFilter,
          status: statusFilter
        }
      });
      setProduct(response.data.products);
      setTotalPage(response.data.totalPage);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  async function handleDeleteProduct(productid){
    try{
      await api.put(`/admin/deleteProduct/${productid}`);
     fetchProduct();
    } catch(error){
      console.log(error);
    }
  }

  async function getCategories(){
    try{
        const response = await api.get("/admin/categories");
        setCategories(response.data);
    } catch(error){
      console.log(error);
    }
  }

  async function restoreProduct(productid){

    try{
      const response = await api.put(`/admin/restoreProduct/${productid}`);
      
      const updatedProduct = response.data.restoreProduct;

      fetchProduct();

    } catch(error){
      console.log(error);
    }
  }
  return (
    <div className="bg-white rounded-3xl p-8 shadow">
      <h1 className="text-3xl font-bold">All Products</h1>

      <p className="text-gray-500 mt-2">Manage All Products</p>

      <ProductFilter
        search={search}
        setSearch={setSearch}
        categories={categories}
        categoryFilter={categoryFilter}
        statusFilter={statusFilter}
        SetCategoryFilter={SetCategoryFilter}
        setStatusFilter={setStatusFilter}

      />
      
    <ProductTable
      product={filteredProducts}
      handleDelete={handleDeleteProduct}
      handleRestore={restoreProduct}

    />  

    <Pagination
      page={page}
      totalPage={totalPage}
      setPage={setPage}
    />
    
    </div>
  );
}

export default AllProducts;
