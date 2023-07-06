const mysql = require('mysql2')
const connection = mysql.createPool({
  host: "b3ekpfxyvl4jjppu6iqk-mysql.services.clever-cloud.com",
  port: 3306,
  user: "usesbrc9dbmnexiy",
  password: "KzFs8NCEigdZTEhQittA",
  database: "b3ekpfxyvl4jjppu6iqk"
})

module.exports = connection.promise()
