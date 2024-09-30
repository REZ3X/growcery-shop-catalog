import React from "react";

function CatalogList({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="bg-[#dbd876] shadow-md rounded-lg p-4 flex flex-col justify-between font-Lora"
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-40 object-cover mb-4"
          />
          <h3 className="text-xl font-bold font-Lora mb-2">{item.title}</h3>
          <p className="text-gray-700 mb-2 font-Lora">{item.description}</p>
          <p className="text-gray-900 font-bold mb-4 font-Lora">{item.price}</p>
          <a
            href={item.buttonlink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 text-center flex flex-row gap-3 items-center justify-center"
          >
            <i className="bi bi-whatsapp"></i>
            <span>Beli Sekarang</span>
          </a>
        </div>
      ))}
    </div>
  );
}

export default CatalogList;
