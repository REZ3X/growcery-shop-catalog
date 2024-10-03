import { useState, useEffect } from "react";
import React from "react";
import items from "../utils/carouselItem";

function CarouselProduct() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false); // Control visibility
  const [isExiting, setIsExiting] = useState(false); // Control exit animation
  const [animateIn, setAnimateIn] = useState(false); // Trigger open animation

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        handleNext(); // Move to next item automatically
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleItemClick = (index) => {
    setIsAutoPlay(false);
    setSelectedItem(items[index]);
    setIsDescriptionVisible(true);

    // Delay animation trigger to ensure transition occurs
    setTimeout(() => {
      setAnimateIn(true);
    }, 10); // Small delay to allow the component to mount
  };

  const handleCloseDescription = () => {
    setAnimateIn(false); // Start close (slide down) animation
    setIsExiting(true); // Trigger exit

    setTimeout(() => {
      setIsDescriptionVisible(false); // Hide the description after animation completes
      setSelectedItem(null);
      setIsAutoPlay(true); // Resume auto-play after closing the description
      setIsExiting(false); // Reset exit state
    }, 300); // Time matches the animation duration
  };

  return (
    <div className="relative w-full pdl:p-5 pdl:mx-auto pdl:ml-none ml-[350px] tnl:ml-[100px] max-w-xl mt-8">
      {/* Set explicit height for the container and make it clickable */}
      <div className="relative h-64 w-full overflow-hidden">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out transform ${index === currentIndex
              ? "translate-x-0 z-20"
              : "translate-x-full"}`}
            onClick={() => handleItemClick(index)} // Clickable area is the entire div
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
        ))}
      </div>

      <div className="absolute mt-[40px] left-0 h-0 flex items-center justify-between w-full px-4 z-30">
        <button onClick={handlePrev} className="mt-[-330px]">
          <i className="bi bi-arrow-left-circle-fill w-20 text-3xl text-[#f6f36c] drop-shadow-lg hover:text-[#cbc866]"></i>
        </button>
        <button onClick={handleNext} className="mt-[-330px]">
          <i className="bi bi-arrow-right-circle-fill w-20 text-3xl text-[#f6f36c] hover:text-[#cbc866] drop-shadow-lg"></i>
        </button>
      </div>

      {/* Description Window with slide-up and slide-down animations */}
      {isDescriptionVisible && selectedItem && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center font-Lora z-50 transition-opacity duration-300 ${isExiting ? "opacity-0" : "opacity-100"}`}
        >
          <div
            className={`p-6 rounded-lg pdl:w-80 tdn:w-60 max-w-md w-full relative bg-[#dbd876] z-60 transform transition-transform duration-300 ${animateIn ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
          >
            {/* Add product image at the top */}
            <img
              src={selectedItem.imageUrl}
              alt={selectedItem.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold mb-4">{selectedItem.title}</h3>
            <p className="text-gray-700">{selectedItem.description}</p>
            <p className="text-gray-900 font-bold">{selectedItem.price}</p>
            <div className="flex flex-row-reverse tdn:flex-col items-center justify-center gap-1 mt-2">
              <a
                href={selectedItem.buttonlink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-3/4 pdl:w-3/5 tdn:w-full bg-green-500 text-white py-2 pdl:px-1 px-4 rounded hover:bg-green-600 block text-center flex flex-row items-center justify-center gap-2"
              >
                <i className="bi bi-whatsapp"></i>
                <span>Beli Sekarang</span>
              </a>
              <button
                onClick={handleCloseDescription}
                className="w-1/ pdl:w-2/5 tdn:w-24 py-2 px-4 rounded bg-[#f6f36c] hover:bg-[#cbc866] text-[#4f523d]"
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarouselProduct;
