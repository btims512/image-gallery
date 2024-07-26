import React from "react";

const ImageModal = ({ image, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
    <div className="bg-white rounded-lg p-4 max-w-lg mx-auto">
      <button className="mb-4 text-red-600" onClick={onClose}>
        Close
      </button>
      <img src={image.largeImageURL} alt="" className="w-full rounded" />
      <div className="mt-4">
        <h2 className="text-xl font-bold">{image.user}</h2>
        <p>{image.tags}</p>
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
    </div>
  </div>
);

export default ImageModal;
