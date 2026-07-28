import React from "react";

function FooterColumn(props){

    return (
        <div>
            <h2 className="font-bold text-lg mb-5">
                {props.title}
            </h2>

            <div className="flex flex-col gap-3">
                {props.links.map((link, index) => (
                    <a 
                    key={index}
                    className="text-gray-600 hover:text-purple-600 transition-all duration-300"
                    href="#">
                    {link}    
                    </a>
                ))}
            </div>
        </div>
    );
}

export default FooterColumn;