import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
const GiphyViewer = () => {
  const [gifs, setGifs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["Trending", "Cats", "Dogs", "Nature", "Funny"];
  const apiKey = "010nULdRerHsH2RPRqiCVVJJFQkP6aMw";

  const fetchGifs = () => {
    let apiUrl;
    if (selectedCategory === "Trending") {
      apiUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;
    } else {
      apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${selectedCategory}&limit=10`;
    }

    axios
      .get(apiUrl)
      .then((response) => {
        setGifs(response.data.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des GIFs :", error);
      });
  };

  useEffect(() => {
    fetchGifs();
  }, [selectedCategory]);

  const handleSearch = () => {
    setSelectedCategory(searchTerm);
  };

  return (
    <div className="bg-black min-h-screen p-4">
      <h1 className="text-4xl text-center text-blue-700 mb-4">
        {selectedCategory === "Trending"
          ? "Giphy Viewer - Trending"
          : `Résultats pour "${selectedCategory}"`}
      </h1>
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Rechercher des GIFs ou sélectionner une catégorie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/5 p-2 rounded-md border border-gray-300 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 w-24 text-sm text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600 focus:outline-none"
        >
          Rechercher
        </button>
        <NavLink to="/login" className="bg-blue-500 w-24 text-sm text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600 focus:outline-none">
          Login
        </NavLink>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-600"
            } px-4 py-2 rounded-md transition duration-300 hover:bg-blue-500 hover:text-white focus:outline-none`}
            onClick={() => {
              setSelectedCategory(category);
              setSearchTerm("");
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {gifs.map((gif) => (
          <div
            key={gif.id}
            className="bg-gray-700 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={gif.images.fixed_height.url}
              alt={gif.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-white text-sm mb-2">{gif.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiphyViewer;