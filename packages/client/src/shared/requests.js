import axios from "../axios";

export const fetchGet = async (endpoint, reqParams) => {
  await axios
    .get(endpoint, reqParams)
    .then((response) => {
      return response.data.results[0];
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
};
