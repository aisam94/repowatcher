const initialState = {
  repo: [],
  loading: false,
  error: false,
};

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUESTING_REPO":
      return {
        loading: true,
        error: false,
      };
    case "REQUESTED_REPO_SUCCESS":
      return {
        loading: false,
        error: false,
        repo: action.repo,
      };
    case "REQUESTED_REPO_FAILED":
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default repoReducer;
