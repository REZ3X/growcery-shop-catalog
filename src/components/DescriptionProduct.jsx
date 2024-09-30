import React from "react";
import ProductDescImg from "./ProductDescImg";
import SeeProductButton from "./SeeProductButtton";

function DescriptionProduct() {
    return (
        <div className="flex flex-row">
            <ProductDescImg />
            <div className="w-1/2 flex flex-col p-8 gap-5 bg-[#46500b]">
                <p className="font-Lora font-bold text-[#ecf4bb] text-3xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quis ad eaque officia totam temporibus omnis dicta ipsa dolor voluptates. Ad enim corporis dolore nam nostrum consequuntur minima dolor provident?</p>
                <SeeProductButton />
            </div>
        </div>
    )
}

export default DescriptionProduct;