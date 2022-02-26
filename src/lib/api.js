const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
const TIMEOUT_SEC = 10;
const KEY = "87d87f5c-0e59-44ec-b37e-233ec51c709f";
const MODAL_CLOSE_SEC = 2.5;

const timeout = (s) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const AJAX = async function (requestData) {
  try {
    const fetchPro = requestData.uploadedData
      ? fetch(requestData.url, {
          method: "POST",
          body: JSON.stringify(requestData.uploadedData),
          headers: {
            "Content-Type": "application/json",
          },
        })
      : fetch(requestData.url);

    const response = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await response.json();

    if (!response.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default AJAX;