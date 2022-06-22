import React from "react";
import SearchBar from "./SearchBar";

const Header = ({ query, setQuery }) => {
  return (
    <div className="flex flex-col items-center">
      {/* logo/stylised letterhead */}
      <h1 className="font-bold text-2xl pt-1 mb-1">
        <span className="text-black">REPO</span>
        <span className="text-blue-800">WATCHER</span>
      </h1>
      <SearchBar query={query} setQuery={setQuery} />
      {/* setting */}
    </div>
  );
};

export default Header;
