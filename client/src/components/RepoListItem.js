import React from "react";
import { StarIcon, EyeIcon } from "@heroicons/react/outline";
import GitFork from "../icons/git-fork.svg";

import { Link } from "react-router-dom";

const RepoListItem = ({
  name,
  id,
  stars,
  watchers,
  forks,
  description,
  language,
}) => {
  return (
    <li className="relative list-none bg-yellow-300 hover:bg-yellow-400">
      <Link to={`/repo/${id}`}>
        <div>
          {/* name & language wrapper */}
          <div className="relative flex mt-0 font-normal leading-none text-white sm:mb-1">
            <h3 className="w-full py-1 pl-2 pr-3 text-xl truncate bg-pink-500 sm:w-auto">
              {name}
            </h3>

            {/* language */}
            {language && (
              <h3 className="py-1 pl-2 pr-3 text-lg bg-blue-400">{language}</h3>
            )}
          </div>
          {/* Indicator wrapper */}
          <div className="bg-orange-400 sm:py-1.5 flex justify-evenly sm:absolute top-0 right-3 space-x-3 px-2">
            {/* stars */}
            <div
              title="stars"
              className="flex items-center text-center top-0 px-0 space-x-0.5"
            >
              <StarIcon className="w-5 h-5 pt-1" />
              <span>{stars}</span>
            </div>
            {/* watchers */}
            <div
              title="watchers"
              className="flex items-center text-center top-0 px-0 space-x-0.5"
            >
              <EyeIcon className="w-5 h-5 pt-1" />
              <span>{watchers}</span>
            </div>
            {/* forks */}
            <div
              title="forks"
              className="flex items-center text-center top-0 px-0 space-x-0.5"
            >
              <img className="w-5 h-5 pt-1" src={GitFork} alt="Git Fork" />
              <span>{forks}</span>
            </div>
          </div>
        </div>
        <p className="px-2 mt-1 mb-0 text-gray-600 truncate sm:p-auto">
          {description}
        </p>
      </Link>
    </li>
  );
};

export default RepoListItem;
