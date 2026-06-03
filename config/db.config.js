import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';
const db = new Sequelize(
  "defaultdb",
  "avnadmin",
  "AVNS_nafzc8AF5RebBM4S5oY",
  {
    host: "web-lanjut-weblanjut.h.aivencloud.com",
    dialect: "mysql",
    port: 10209,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    define: {
      timestamps: false,
    },
  }
);

export default db;

/* (async()=>{
     await db.sync();
})();*/
