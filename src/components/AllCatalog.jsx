import React, { useState } from "react";
import CatalogList from "./CatalogList"; // Import the CatalogList component
import SearchCatalog from "./SearchCatalog"; // Import the SearchCatalog component
import items from "../utils/catalogItem"; // Import your products data

function AllCatalog() {
    const [filteredProducts, setFilteredProducts] = useState(items);

    // Function to handle search
    const handleSearch = (searchTerm) => {
        if (searchTerm === "") {
            setFilteredProducts(items); // Show all products if search term is empty
        } else {
            const filtered = items.filter((item) =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-4 flex flex-col bg-[#46500b] m-5 rounded-lg mx-6 items-center gap-3">
            <h1 className="text-[#ecf4bb] text-2xl drop-shadow-md mb-4 font-climate_crisis">PRODUK LAIN DARI KAMI</h1>
            <SearchCatalog onSearch={handleSearch} />
            
            {filteredProducts.length > 0 ? (
                <CatalogList products={filteredProducts} />
            ) : (
                <p className="text-red-500 font-semibold mt-4">
                    Item yang kamu cari tidak ada.
                </p>
            )}
        </div>
    );
}

export default AllCatalog;
