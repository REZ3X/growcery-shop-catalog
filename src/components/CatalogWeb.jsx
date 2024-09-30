import React from "react";
import NavBarContainer from "./NavBar";
import Hero from "./hero";
import DescriptionProduct from "./descriptionProduct";
import CarouselProduct from "./carouselProduct";
import AllCatalog from "./allCatalog"; // Import AllCatalog
import AllFooter from "./AllFooter";
import 'bootstrap-icons/font/bootstrap-icons.css';

function CatalogWeb() {
    return (
        <div className="flex flex-col">
            <NavBarContainer />
            <div id="home"></div>
            <Hero />
            <DescriptionProduct />
            <div id="catalog"></div>
            <br /><br /><br /><br />
            <div className="flex items-center text-center mt-4 mb-[-30px] self-center">
                <h1 className="text-center text-[#46500b] text-2xl drop-shadow-md mb-4 font-climate_crisis">PRODUK UNGGULAN KAMI</h1>
            </div>
            <CarouselProduct />
            <AllCatalog /> {/* Include the AllCatalog component here */}
            <div id="contact"></div>
            <AllFooter />
        </div>
    )
}

export default CatalogWeb;
