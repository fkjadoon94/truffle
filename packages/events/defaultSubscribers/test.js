module.exports = {
  initialization: function () {
    this.logger = {
      log: (...args) => {
        if (!this.quiet) {
          console.log(...args);
        }
      }
    };
  },
  handlers: {
    "test:migration:skipped": [
      function () {
        this.logger.log(
          `> Migration skipped because --migrate-none option was passed.`
        );
      }
    ]
  }
};
