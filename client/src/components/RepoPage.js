import React from "react";
import RepoPageItem from "./RepoPageItem";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import GitHubIcon from "../icons/GitHub-Mark-64px.png";

import { useDispatch, useSelector } from "react-redux";

const RepoPage = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const repoItem = useSelector((state) => state.repo.repo[id]);

  return (
    <main className="mt-5 mx-10 space-y-2">
      {/* back button */}

      <Link to="/">
        <button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center space-x-2 rounded-md p-2 m-2">
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

      <div className="w-full px-10 py-1 flex justify-between bg-yellow-100">
        {/* created at*/}
        <div className="mt-2">
          <h3 className="mb-2">CREATED</h3>
          <div className="text-xl">10 years ago</div>
        </div>
        {/* updated at*/}
        <div className="mt-2">
          <h3 className="mb-2">UPDATED</h3>
          <div className="text-xl">10 years ago</div>
        </div>
        {/* Github link to actual repo */}
        <a
          href={`${repoItem.html_url}`}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-2 flex flex-col items-center"
        >
          <img className="" src={GitHubIcon} alt="GitHub" />
          <span>GITHUB LINK</span>
        </a>
      </div>
      {/* tags */}

      {/* readme markdown */}
      <div className="bg-yellow-100 px-5 py-2">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo minus
          praesentium saepe velit illo. Natus veritatis incidunt inventore
          quidem aperiam deserunt repellat ducimus necessitatibus accusamus
          dolorem, amet ad perspiciatis praesentium?
        </p>
      </div>
    </main>
  );
};

export default RepoPage;
