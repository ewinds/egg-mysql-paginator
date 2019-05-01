"use strict";

const paginator = require("./lib/paginator");

module.exports = app => {
  if (app.config.mysqlPaginator.enable) paginator(app);
};
