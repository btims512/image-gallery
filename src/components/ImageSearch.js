import React, { useState } from "react";
import logo from "../assets/logo.png";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-center my-10">
        <img
          src={logo}
          alt="Picture Hut logo"
          className="mb-2 mx-auto w-80 p-4.5"
        />
      </div>
      <div className="max-w-sm w-full rounded overflow-hidden my-10 mx-auto">
        <form onSubmit={onSubmit} className="w-full max-w-sm">
          <div className="flex items-center border-b border-customBlue py-2">
            <label htmlFor="search-input" className="sr-only">
              Search Image
            </label>
            <input
              id="search-input"
              onChange={(e) => setText(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 dark:text-gray-300 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search Image..."
            />
            <button
              className="flex-shrink-0 bg-customBlue dark:bg-customGrayDark hover:bg-customBlueDark dark:hover:bg-gray-700 border-none text-sm text-white py-1 px-2 rounded md:text-base md:py-2 md:px-4"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageSearch;
