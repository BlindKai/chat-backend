module.exports = {
  apps: [
    {
      name: "chat",
      script: "./index.js",
      watch: ["./src", "./app.js", "index.js"],
      node_args: "-r dotenv/config",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
