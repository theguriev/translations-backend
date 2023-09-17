//https://nitro.unjs.io/config
export default defineNitroConfig({
  routeRules: {
    "/authorization": {
      proxy: "http://authorization:3000",
    },
  },
});
