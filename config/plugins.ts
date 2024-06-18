export default ({ env }) => ({
  //...
  "import-export-entries": {
    enabled: true,
    config: {
      ratelimit: {
        interval: 1000000000,
        max: 1000000000,
      },
      // See `Config` section.
    },
  },
  //...
});
