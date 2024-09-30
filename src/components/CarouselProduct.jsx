import { useState, useEffect } from "react";
import React from "react";
import items from "../utils/carouselItem";

function CarouselProduct() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false); // Control visibility
  const [direction, setDirection] = useState(null); // Track slide direction

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
    setDirection("right");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleItemClick = (index) => {
    setIsAutoPlay(false);
    setSelectedItem(items[index]);
    setIsDescriptionVisible(true); // Show the description when an item is clicked
  };

  const handleCloseDescription = () => {
    setIsDescriptionVisible(false); // Hide the description after closing
    setSelectedItem(null);
    setIsAutoPlay(true); // Resume auto-play after closing the description
  };

  return (
    <div className="relative w-full ml-[350px] max-w-xl mt-8">
      {/* Set explicit height for the container and make it clickable */}
      <div className="relative h-64 w-full overflow-hidden">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out transform ${index === currentIndex
              ? "translate-x-0 z-20"
              : direction === "right"
                ? "translate-x-full"
                : "translate-x-[-100%]"
              }`}
            onClick={() => handleItemClick(index)} // Clickable area is the entire div
          >
            {/* Ensure the image is full width and height */}
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover cursor-pointer"
            />
          </div>
        ))}
      </div>

      <div className="absolute mt-[40px]  left-0 h-0 flex items-center justify-between w-full px-4 z-30">
        <button
          onClick={handlePrev}
          className=" mt-[-330px]"
        >
          <i className="bi bi-arrow-left-circle-fill w-20 text-3xl text-[#f6f36c] drop-shadow-lg hover:text-[#cbc866] "></i>
        </button>
        <button
          onClick={handleNext}
          className=" mt-[-330px]"
        >
          <i className="bi bi-arrow-right-circle-fill w-20 text-3xl text-[#f6f36c] hover:text-[#cbc866] drop-shadow-lg"></i>
        </button>
      </div>

      {/* Description Window */}
      {isDescriptionVisible && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative z-60">
            <h3 className="text-2xl font-bold mb-4">{selectedItem.title}</h3>
            <p className="text-gray-700">{selectedItem.description}</p>
            <p className="text-gray-900 font-bold">{selectedItem.price}</p>
            <a
              href={selectedItem.buttonlink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 block text-center flex flex-row items-center justify-center gap-2"
            >
              <i className="bi bi-whatsapp"></i>
              <span>Beli Sekarang</span>
            </a>
            <button
              onClick={handleCloseDescription}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarouselProduct;
