"use strict";

module.exports = app => {
  const paginator = {};
  paginator.query = async (table, options) => {
    const size = parseInt(options.size) || 10;
    let page = parseInt(options.page) || 1;

    const _count = async (table, where) => {
      if (typeof where === "string") {
        const result = await app.mysql.query(
          `SELECT COUNT(*) as count FROM ${table} ${where}`
        );
        return result[0].count;
      } else {
        return app.mysql.count(table, where);
      }
    };
    const countQuery = _count(table, options.where);

    if (page < 1) {
      page = 1;
    }
    const offset = (page - 1) * size;
    const condition = { ...options };
    condition.offset = offset;

    if (size > 0) {
      condition.limit = size;
    }

    const _orders = orderBy => {
      if (
        typeof orderBy === "string" &&
        orderBy.toUpperCase().indexOf("ASC") == -1 &&
        orderBy.toUpperCase().indexOf("DESC") == -1
      ) {
        return ` ORDER BY ${orderBy}`;
      } else {
        return app.mysql._orders(orderBy);
      }
    };
    const _where = where => {
      if (typeof where === "string") {
        return where;
      } else {
        return app.mysql._where(where);
      }
    };
    const sql = `${app.mysql._selectColumns(table, condition.columns)}${_where(
      condition.where
    )}${_orders(condition.orders)}${app.mysql._limit(
      condition.limit,
      condition.offset
    )}`;
    const query = app.mysql.query(sql);
    const [data, countRows] = await Promise.all([query, countQuery]);

    const total = countRows;

    return {
      pagination: {
        total: total,
        size,
        currentPage: page - 0,
        lastPage: Math.ceil(total / size),
        from: offset,
        to: offset + data.length
      },
      data: data
    };
  };

  return paginator;
};
