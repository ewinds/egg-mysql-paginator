# egg-mysql-paginator

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

### customized order by

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
