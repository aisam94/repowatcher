import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div className="relative flex items-center mt-1 mb-3">
      <div className="absolute text-gray-500 top-1/2 transform -translate-y-1/2 left-3">
        <SearchIcon className="w-5 h-5" />
      </div>
      <input
        className="w-full h-10 px-4 pl-10 text-lg bg-white border-2 border-gray-400 focus:outline-none"
        type="search"
        name="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <button
        type="submit"
        className="h-10 px-2 font-bold text-white bg-blue-500 border-gray-300 hover:bg-blue-600 border-1"
      >
        SUBMIT
      </button> */}
    </div>
  );
};

export default SearchBar;
