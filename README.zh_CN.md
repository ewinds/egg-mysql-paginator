# egg-mysql-paginator

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-mysql-paginator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-mysql-paginator
[travis-image]: https://img.shields.io/travis/eggjs/egg-mysql-paginator.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-mysql-paginator
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-mysql-paginator.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-mysql-paginator?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-mysql-paginator.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-mysql-paginator
[snyk-image]: https://snyk.io/test/npm/egg-mysql-paginator/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-mysql-paginator
[download-image]: https://img.shields.io/npm/dm/egg-mysql-paginator.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-mysql-paginator

为 egg-mysql 提供分页功能

## 安装

```bash
$ npm i egg-mysql-paginator --save
```

## 依赖说明

### 依赖的 egg 版本

egg-mysql-paginator 版本 | egg 2.x
--- | ---
2.x | 😁
1.x | ❌

### 依赖的插件

- mysql

## 开启插件

```js
// config/plugin.js
exports.mysqlPaginator = {
  enable: true,
  package: 'egg-mysql-paginator',
};
```

## 使用指南

```javascript
// 查询
const results = await app.mysqlPaginator.query('posts',{
  where: { status: 'draft' },
  orders: [['created_at','desc'], ['id','desc']],
  page: 1,
  size: 10
});
// 结果
  {
    pagination: {
      total: 21,
      size: 10,
      currentPage: 1,
      lastPage: 3,
      from: 0,
      to: 10
    },
    data: [...]
  }
```

### 模糊查询

```javascript
const results = await app.mysqlPaginator.query('posts',{
  where: 'WHERE name LIKE %name%',
  orders: [['created_at','desc'], ['id','desc']],
  page: 1,
  size: 10
});
```

### 自定排序字段

```javascript
const results = await app.mysqlPaginator.query('posts',{
  where: 'WHERE name LIKE %name%',
  orders: 'rank+',
  page: 1,
  size: 10
});
```

## License

[MIT](LICENSE)
