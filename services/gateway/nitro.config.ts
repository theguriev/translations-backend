//https://nitro.unjs.io/config
export default defineNitroConfig({
  routeRules: {
    "/authorization/**": {
      proxy: {
        to: "http://authorization:3000/**",
      },
    },
  },
});
