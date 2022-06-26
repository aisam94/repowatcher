export const requestRepo = () => {
  return { type: "REQUESTING_REPO" };
};

export const requestRepoSuccess = (data) => {
  return { type: "REQUESTED_REPO_SUCCESS", repo: data.data };
};

export const requestRepoFail = (error) => {
  return { type: "REQUESTED_REPO_FAIL", error: error.message };
};

export const fetchRepo = () => {
  return { type: "FETCHED_REPO" };
};
