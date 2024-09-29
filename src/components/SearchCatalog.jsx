import React, { useState } from "react";

function SearchCatalog({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Pass the search term back to the parent component
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Cari produk..."
        className="w-full p-2 border border-gray-300 rounded-lg"
      />
    </div>
  );
}

export default SearchCatalog;
