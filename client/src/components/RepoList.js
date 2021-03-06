import React from "react";
import RepoListItem from "./RepoListItem";

const RepoList = ({ repo }) => {
  return (
    // Iterate the repo list
    <>
      {repo && (
        <div className="mb-1 font-bold text-center">
          Showing {repo.length} results
        </div>
      )}
      <ul className="mx-10 mb-10 space-y-2">
        {repo &&
          repo.map((item, index) => {
            return (
              <RepoListItem
                key={index}
                id={item.id}
                name={item.name}
                description={item.description}
                stars={item.stargazers_count}
                watchers={item.watchers_count}
                forks={item.forks_count}
                language={item.language}
              />
            );
          })}
      </ul>
    </>
  );
};

export default RepoList;
