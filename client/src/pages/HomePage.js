import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import RepoList from "../components/RepoList";
import Loading from "../components/Loading";

const HomePage = () => {
  const [repos, setRepos] = useState([]);

  //search query
  const [query, setQuery] = useState("");
  const [searchParam] = useState(["name"]);

  const dispatch = useDispatch();
  const repoList = useSelector((state) => state.repo.repo);
  const loading = useSelector((state) => state.repo.loading);

  const searchItem = (items) => {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(query.toLowerCase()) >
          -1
        );
      });
    });
  };

  useEffect(() => {
    //fetching repo upon initial load
    dispatch({ type: "REPO_FETCH_REQUESTED" });
  }, [dispatch]);

  useEffect(() => {
    setRepos(repoList);
  }, [repoList]);

  return (
    <main>
      <Header query={query} setQuery={setQuery} />
      {loading && <Loading />}
      {repos && <RepoList repo={searchItem(repos)} />}
    </main>
  );
};

export default HomePage;
