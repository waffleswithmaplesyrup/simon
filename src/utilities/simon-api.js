import sendRequest from "./send-request";

const BASE_URL = "/api/simon";

export function encodeSequenceAPI(sequence) {
  return sendRequest(`${BASE_URL}/encode`, "POST", sequence);
}

