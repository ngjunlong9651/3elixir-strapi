export default ({ env }) => ({
  //...
  "import-export-entries": {
    enabled: true,
    config: {
      ratelimit: {
        interval: 100000,
        max: 100000,
      },
      // See `Config` section.
    },
  },
  //...
});
