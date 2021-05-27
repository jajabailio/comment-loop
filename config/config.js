
module.exports = {
  development: {
    username: "root",
    password: "",
    database: "comment_loop",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: "",
    database: "comment_loop_test",
    host: "localhost",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
