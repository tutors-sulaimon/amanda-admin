export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  "strapi::cors", // Ensure this line is included
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: ["http://localhost:5173"], // Allow requests from your frontend
      methods: ["GET", "POST", "PUT", "DELETE"],
      headers: ["Content-Type", "Authorization"],
      credentials: true,
    },
  },
];
