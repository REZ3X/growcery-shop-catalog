import React from 'react';

function SeeMoreButton() {
    return (
        <button className="focus:outline-none transform transition-transform duration-200 ease-in-out hover:animate-jump-loop">
            <a href='#description'>
                <i className="bi bi-arrow-down-circle drop-shadow-md text-[#f6f36c] text-4xl"></i>
            </a>
        </button>
    );
}

export default SeeMoreButton;
