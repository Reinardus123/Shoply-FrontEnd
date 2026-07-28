import React from "react";
import featuresData from "../../data/featuresData";

function features(){

    return(
        <div>
            <p className="text-center text-purple-600-600 text-xs font-semibold">
                Features
            </p>

            <h2 className="text-center text-3xl font-bold mt-2">
                Everything you need
            </h2>

            <div className="grid grid-cols-3 gap-6 mt-8">

                {featuresData.map((feature) => {
                    const Icon = feature.icon

                    return(

                        <div key={feature.id}  className="bg-white rounded-2xl p-6 shadow-sm">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                                <Icon 
                                size={20}
                                className="text-purple-600"
                                />
                            </div>

                            <h3 className="font-semibold mt-4">
                                {feature.title}
                            </h3>

                            <p className="text-gray-500 text-sm mt-2">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}

            </div>
        </div>
    );
}

export default features