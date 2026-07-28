function AboutSection(){

    return(
        <div className="bg-white rounded-3xl p-10 shadow-sm">
            <div className="grid grid-cols-2 gap-10 items-center">

                <img 
                src="https://cdn-icons-png.flaticon.com/512/891/891462.png" 
                alt="" 
                className="w-[250px]"/>
               
               <div>
                    <p className="text-purple-600 text-xs font-semibold">
                        What is Shoply ?
                    </p>
                    
                    <h2 className="text-2xl font-bold mt-3">
                        Your All-in-one Shopping Solution
                    </h2>

                    <p className="text-gray-500 mt-4 leading-relaxed">
                        Shoply is modern e-commerce platform that 
                        allows user to browse products, manage
                        wishlists, place orders and track purchases.
                    </p>

                    <p className="text-gray-500 mt-4 leading-relaxed">
                        This project was built as full stack
                        <br />
                        application with React, Express and PostgreSQL
                    </p>

                </div> 
            </div>
        </div>
    )
}

export default AboutSection;