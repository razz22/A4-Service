// lib/cors.js
export default function allowCors(handler) {
  return async (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*"); // Replace '*' with your domain if needed
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,POST,PUT,DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    // Handle preflight OPTIONS request
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }

    return handler(req, res);
  };
}
