"use strict";

const paginator = require("./lib/paginator");

module.exports = app => {
  app.mysqlPaginator = paginator(app);
  app.coreLogger.info(`[egg-mysql-paginator] is ready`);
};
