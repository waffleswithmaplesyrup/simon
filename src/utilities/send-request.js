// import { getToken } from "./users-service";

export default async function sendRequest(
  url,
  method = "GET",
  payload = null,
  isFormData = false
) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    if (!isFormData) {
      options.headers = { "Content-Type": "application/json" };
      options.body = JSON.stringify(payload);
    } else {
      options.body = payload;
    }
  }

  // // Add the below code
  // const token = getToken();
  // if (token) {
  //   // Ensure the headers object exists
  //   options.headers = options.headers || {};
  //   // Add token to an Authorization header
  //   // Prefacing with 'Bearer' is recommended in the HTTP specification
  //   options.headers.Authorization = `Bearer ${token}`;
  // }

  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) {
    return res.json();
  } else {
    const errorRes = await res.json();
    throw new Error(errorRes.message);
  }
  // throw new Error(res.statusText);
}
