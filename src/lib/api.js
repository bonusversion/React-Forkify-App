const TIMEOUT_SEC = 10;

const timeout = (s) => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

const AJAX = async function (requestData) {
  try {
    const fetchPro = requestData.uploadData
      ? fetch(requestData.url, {
          method: "POST",
          body: JSON.stringify(requestData.uploadData),
          headers: {
            "Content-Type": "application/json",
          },
        })
      : fetch(requestData.url);

    const response = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

    const data = await response.json();

    if (!response.ok) throw new Error(`${data.message} (${response.status})`);
    return data;
  } catch (error) {
    throw error;
  }
};

export default AJAX;
