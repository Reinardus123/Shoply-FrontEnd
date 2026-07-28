import React from "react";

function FeatureCard(props){
    
    const Icon = props.icon;

    return(

        <div className="flex items-center gap-4 flex-1 px-6 py-5">

            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xl">
                <Icon/>
            </div>

            <div>
                <h3 className="font-semibold text-[15px]">
                    {props.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                    {props.description}
                </p>
            </div>
        </div>
        
    );
}

export default FeatureCard;