import React from "react";
import ProductDescImg from "./ProductDescImg";

function DescriptionProduct() {
    return (
        <div className="flex flex-row">
            <ProductDescImg />
            <p className="h-80 w-1/2 p-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quis ad eaque officia totam temporibus omnis dicta ipsa dolor voluptates. Ad enim corporis dolore nam nostrum consequuntur minima dolor provident?</p>
        </div>
    )
}

export default DescriptionProduct;