import React, { useState } from "react";
import ImageModal from "./ImageModal";

const ImageCards = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const tags = image.tags.split(",").map((tag) => tag.trim());

  return (
    <div>
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg rounded-md cursor-pointer dark:bg-gray-800 dark:text-white"
        onClick={() => setIsOpen(true)}
      >
        <img src={image.webformatURL} alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-customBlueDark dark:text-customBlueLight text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
      {isOpen && <ImageModal image={image} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default ImageCards;
