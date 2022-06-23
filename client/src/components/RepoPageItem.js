import React from "react";
import { StarIcon, EyeIcon } from "@heroicons/react/outline";
import GitFork from "../icons/git-fork.svg";

const RepoPageItem = ({
  name,
  index,
  stars,
  watchers,
  forks,
  description,
  language,
  url,
}) => {
  return (
    <li className="relative bg-yellow-300 list-none">
      <div>
        {/* name & language wrapper */}
        <div className="flex text-white relative font-normal sm:mb-1 mt-0 leading-none whitespace-nowrap">
          <h3 className="bg-pink-500 py-1 pl-2 pr-3 text-xl w-full sm:w-auto">
            {name}
          </h3>

          {/* language */}
          {language && (
            <h3 className="bg-blue-400 text-lg py-1 pl-2 pr-3">{language}</h3>
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
      <p className="mb-0 mt-1 px-2 sm:p-auto text-gray-600 overflow-hidden whitespace-nowrap text-ellipsis">
        {description}
      </p>
    </li>
  );
};

export default RepoPageItem;
