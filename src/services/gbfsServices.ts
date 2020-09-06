import { handleResponse, handleError } from "./responseHandler";
import axios from "./apiInterceptor";
export const gbfsServices = {
  fetchStationInformation,
  fetchStationStatus,
};

// Function to load station information
async function fetchStationInformation(api: string) {
  const url: string | undefined = process.env.REACT_APP_API_URL + api;
  return axios({
    method: "get",
    url: url,
    timeout: 4000,
  })
    .then((response: any) => {
      return handleResponse(response);
    })
    .catch((error: any) => {
      return handleError(error);
    });
}

// Function to load station status
async function fetchStationStatus(api: string) {
  const url: string | undefined = process.env.REACT_APP_API_URL + api;
  return axios({
    method: "get",
    url: url,
    timeout: 4000,
  })
    .then((response: any) => {
      return handleResponse(response);
    })
    .catch((error: any) => {
      return handleError(error);
    });
}
