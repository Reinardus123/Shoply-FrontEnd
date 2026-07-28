import { UploadCloud } from "lucide-react";
import { useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";


function ImageUpload({image, setImage, preview, setPreview}){


    const fileInputRef = useRef(null);

    function handleImage(e){

        const file = e.target.files[0];

        if(file){
            setImage(file);
        }
    }

    function handleRemoveImage(){
        setImage(null);
        setPreview("");

        if(fileInputRef.current){
            fileInputRef.current.value = "";
        }
    }

     useEffect(() => {
            if(!image){
                setPreview("");
                return;
            }

            const objetURL = URL.createObjectURL(image);
            setPreview(objetURL);

            return () => URL.revokeObjectURL(objetURL);
        }, [image]);

    return (    
        <div>

        <label className="font-semibold">
            Product Image
        </label>

        <div className="relative border-2 border-dashed rounded-2xl h-56 flex flex-col items-center justify-center cursor-pointer hover:border-purple-500 transition">
            
            {
                preview ? 

                <img 
                    src={preview} 
                    alt="Preview" 
                    className="w-full h-full object-contain"
                    />

                :
                <div className="flex flex-col items-center" onClick={() => fileInputRef.current.click()}>
                    <UploadCloud size={40}/>
                    <p className="mt-3">
                        Upload Image
                    </p>
                </div>
            }
            <input 
                type="file" 
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleImage}
            />

            <button 
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white shadow-md hover:bg-red-500 hover:text-white transition flex items-center justify-center">
                X
            </button>


        </div>

        </div>
    );   
}

export default ImageUpload;