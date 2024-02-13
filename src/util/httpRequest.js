const axios = require("axios");

const requestHttp = async (req) => {
  try {
    const { data, status } = await axios({
        method: req.method,
        url: req.url,
        data: req.data,
        headers: req.headers,
    });

    return { data, status };
  } catch (error) {
    throw error;
  }
};

module.exports = requestHttp;