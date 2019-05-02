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

Paginator for egg-mysql

## Install

```bash
$ npm i egg-mysql-paginator --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.mysqlPaginator = {
  enable: true,
  package: 'egg-mysql-paginator',
};
```

## Example

```javascript
// query
const results = await app.mysqlPaginator.query('posts',{
  where: { status: 'draft' },
  orders: [['created_at','desc'], ['id','desc']],
  page: 1,
  size: 10
});
// result
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
### Fuzzy query

```javascript
const results = await app.mysqlPaginator.query('posts',{
  where: 'WHERE name LIKE %name%',
  orders: [['created_at','desc'], ['id','desc']],
  page: 1,
  size: 10
});
```

### Customized order by

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
