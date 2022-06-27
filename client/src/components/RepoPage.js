import React, { useState, useEffect } from "react";
import RepoPageItem from "./RepoPageItem";
import { useParams, Link } from "react-router-dom";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import GitHubIcon from "../icons/GitHub-Mark-64px.png";
import { useSelector } from "react-redux";
import axios from "axios";

const RepoPage = () => {
  const [languages, setLanguages] = useState([]);
  const { id } = useParams();

  const repoList = useSelector((state) => state.repo.repo);
  const repoItem = repoList.find((item) => item.id.toString() === id);
  const createdDate = new Date(repoItem.created_at);
  const updatedDate = new Date(repoItem.updated_at);
  const pushDate = new Date(repoItem.pushed_at);

  //convert kilobytes to megabytes
  const formatFileSize = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  useEffect(() => {
    //get languages used
    const getLanguages = async () => {
      let langArr = [];
      const { data } = await axios.get(repoItem.languages_url);
      for (const key in data) {
        langArr.push(key);
      }
      setLanguages(langArr);
      return langArr;
    };

    getLanguages();
  });

  return (
    <main className="mx-10 mt-5 space-y-2">
      {/* back button */}
      <Link to="/">
        <button className="flex items-center p-2 m-2 text-white bg-blue-600 hover:bg-blue-700 space-x-2 rounded-md">
          <ArrowNarrowLeftIcon className="w-4 h-4" />
          <span>Go Back</span>
        </button>
      </Link>

      {repoItem && (
        <RepoPageItem
          name={repoItem.name}
          description={repoItem.description}
          stars={repoItem.stargazers_count}
          watchers={repoItem.watchers_count}
          forks={repoItem.forks_count}
          language={repoItem.language}
        />
      )}

      {/* Date wrapper */}
      <div className="flex items-center w-full px-3 py-1 pb-2 mx-auto text-center text-gray-600 bg-yellow-300 sm:px-10">
        <div className="items-center mx-auto text-center">
          {/* created at*/}
          <div className="inline-block mx-5 mt-2">
            <h3 className="mb-2 text-xs text-center sm:text-base">
              Created at:
            </h3>
            <div className="text-sm text-center sm:text-xl">
              {createdDate.toDateString().substring(3)}
            </div>
          </div>
          {/* updated at*/}
          <div className="inline-block mx-5 mt-2">
            <h3 className="mb-2 text-xs text-center sm:text-base">
              Updated at:
            </h3>
            <div className="text-sm text-center sm:text-xl">
              {updatedDate.toDateString().substring(3)}
            </div>
          </div>

          {/* pushed at*/}
          <div className="inline-block mx-5 mt-2">
            <h3 className="mb-2 text-xs text-center sm:text-base">
              Pushed at:
            </h3>
            <div className="text-sm text-center sm:text-xl">
              {pushDate.toDateString().substring(3)}
            </div>
          </div>
        </div>
      </div>

      {/* language wrapper */}
      <div className="flex flex-col w-full px-3 py-3 text-center text-gray-600 bg-yellow-300 justify-evenly sm:px-10">
        <span className="mb-2 text-xs text-center sm:text-base">
          Language used in this repo:
        </span>
        <ul className="items-center mx-auto text-sm sm:text-xl">
          {repoItem &&
            languages.map((item, index) => {
              return (
                <li key={index} className="inline-block mx-1 sm:mx-3">
                  {item}
                </li>
              );
            })}
        </ul>
      </div>

      {/* Link and file size wrapper */}
      <div className="flex w-full px-3 py-1 pb-2 text-gray-600 bg-yellow-300 justify-evenly sm:px-10">
        {/* created at*/}
        <div className="mt-2 mx-2">
          <h3 className="mb-2 text-xs text-center sm:text-base">File size:</h3>
          <div className="text-sm text-center sm:text-xl">
            {formatFileSize(repoItem.size * 1000)}
          </div>
        </div>

        {/* Github link to actual repo */}
        <a
          href={`${repoItem.html_url}`}
          target="_blank"
          rel="noreferrer noopener"
          title={repoItem.html_url}
          className="flex flex-col mt-2 truncate px-5 items-center"
        >
          <div className="mb-2 text-xs text-center sm:text-base">
            Github Link:
          </div>
          <img className="w-8" src={GitHubIcon} alt="GitHub" />
        </a>
      </div>

      {/* readme markdown */}
      {/* <div className="px-5 py-2 bg-yellow-100"> */}
      {/*   <p> */}
      {/*     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo minus */}
      {/*     praesentium saepe velit illo. Natus veritatis incidunt inventore */}
      {/*     quidem aperiam deserunt repellat ducimus necessitatibus accusamus */}
      {/*     dolorem, amet ad perspiciatis praesentium? */}
      {/*   </p> */}
      {/* </div> */}
    </main>
  );
};

export default RepoPage;
