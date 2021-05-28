
module.exports = {
  development: {
    host: 'mongodb://localhost:27017/comment_loop'
  },
  test: {
    host: process.env.DB_HOST_TEST
  },
  production: {
    host: process.env.DB_HOST_PROD
  }
}
