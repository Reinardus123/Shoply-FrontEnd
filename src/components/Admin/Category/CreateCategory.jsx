import { useEffect, useState } from "react";
import { Upload, ArrowLeft, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../HomePage/Navbar";
import { useRef } from "react";
import api from "../../../api/api";
import Swal from "sweetalert2";

function CreateCategory() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    categoryname: "",
  });

  const [image, setImage] = useState(null);

  const [preview, setPreview] = useState("");

  const fileInputRef = useRef(null);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleImage(e) {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();

    data.append("categoryname", formData.categoryname);

    data.append("image", image);

    try {
      const response = await api.post("admin/createcategory", data);

      setFormData({
        categoryname: "",
      });

      setImage(null);

      setPreview("");

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      Swal.fire({
        icon: "success",
        title: "Category Created!",
        text: "The category has been created successfully",
        confirmButtonColor: "#9333EA",
        confirmButtonText: "OK",
      });

      console.log(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to create category",
        confirmButtonColor: "#9333EA",
        confirmButtonText: "OK",
      });

      console.log(error);
    }
  }
  function handleRemoveImage() {
    setImage(null);
    setPreview("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  useEffect(() => {
    if (!image) {
      setPreview("");
      return;
    }
    const objectURL = URL.createObjectURL(image);
    setPreview(objectURL);

    return () => URL.revokeObjectURL(objectURL);
  }, [image]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl shadow-lg p-10">
        <h1 className="text-3xl font-bold">Add New Category</h1>

        <p className="text-gray-500 mt-2">
          Create a new category for your products.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-8">
          <div>
            <label className="font-semibold">Category Name</label>

            <input
              type="text"
              name="categoryname"
              value={formData.categoryname}
              onChange={handleChange}
              placeholder="Example : Clothing"
              className="w-full mt-2 border border-gray-200 rounded-xl p-4 outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="font-semibold">Category Image</label>

            <div
              onClick={() => fileInputRef.current.click()}
              className="relative mt-3 h-72 border-2 border-dashed rounded-2xl cursor-pointer hover:hover-border-purple-500 transition overflow-hidden"
            >
              {preview ? (
                <>
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-contain"
                  />

                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition"
                  >
                    <X size={18} />
                  </button>
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <Upload size={55} className="text-purple-600" />
                  <p className="font-semibold mt-5">Click to upload image</p>

                  <p className="text-gray-500 text-sm">PNG, JPG, JPEG</p>
                </div>
              )}

              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={handleImage}
              />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-3 border rounded-xl hover:bg-red-600 hover:text-white transition cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-8 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition cursor-pointer"
            >
              Save Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateCategory;
