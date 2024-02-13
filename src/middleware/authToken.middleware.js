const { MICROSERVICES } = require("../config/config");
const requestHttp = require("../util/httpRequest");

const authToken = (roles) => {
  return async (req, res, next) => {
    try {
      const authorization = req.headers?.authorization;

      if (!authorization || !authorization.startsWith("Bearer ")) {
        throw new Error("Token not provided");
      }

      const requestUser = {
        method: "post",
        url: `${MICROSERVICES.USER}validate/access`,
        data: { roles },
        headers: { authorization },
      };

      const response = await requestHttp(requestUser);
      console.log(response);

      if (response.data.status) {
        next();
      } else {
        res.status(403).send({
          error: "Authorization denied",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(403).send({
        error: "Authorization denied",
      });
    }
  };
};

module.exports = authToken;