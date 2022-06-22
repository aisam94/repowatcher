import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="relative flex items-center mt-1 mb-3">
      <div className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500">
        <SearchIcon className="w-5 h-5" />
      </div>
      <input
        className="w-full h-10 pl-10 px-4 text-lg bg-white border-2 border-gray-300 focus:outline-none"
        type="search"
        name="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-2 h-10 border-1 border-gray-300"
      >
        SUBMIT
      </button> */}
    </div>
  );
};

export default SearchBar;
