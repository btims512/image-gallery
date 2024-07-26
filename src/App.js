import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import ImageSearch from "./components/ImageSearch";
import ImageCards from "./components/ImageCards";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true&per_page=200`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 min-h-screen">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="flex-shrink-0 bg-customBlue dark:bg-customGrayDark hover:bg-customBlueDark dark:hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4 focus:outline-none"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-2xl text-center mx-auto mt-32">
          No images matching your search criteria
        </h1>
      )}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader border-t-customBlueDark"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCards key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
