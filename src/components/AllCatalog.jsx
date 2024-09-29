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
        <div className="max-w-7xl mx-auto p-4 flex flex-col items-center gap-3">
            <h1>Produk Lain Dari Kami</h1>
            <SearchCatalog onSearch={handleSearch} />
            <CatalogList products={filteredProducts} />
        </div>
    );
}

export default AllCatalog;
