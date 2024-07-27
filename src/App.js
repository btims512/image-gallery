import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import ImageSearch from "./components/ImageSearch";
import ImageCards from "./components/ImageCards";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 4400);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loadingComplete) {
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
    }
  }, [term, loadingComplete]);

  return (
    <div className="container mx-auto p-6 bg-white dark:bg-gray-900 min-h-screen relative">
      <div className="flex justify-between items-center w-full">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex-shrink-0 bg-customBlue dark:bg-customGrayDark hover:bg-customBlueDark dark:hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
      <div className="flex flex-col items-center w-full">
        <ImageSearch searchText={(text) => setTerm(text)} />
        {!isLoading && images.length === 0 && (
          <h1 className="text-2xl text-center mx-auto mt-32">
            No images matching your search criteria
          </h1>
        )}
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {images.map((image) => (
              <ImageCards key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
