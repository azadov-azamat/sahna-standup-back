require('dotenv').config({silent: true});

module.exports = {
    development: {
        url: process.env.DATABASE_URL,
        logging: false,
        ssl: true,
        dialect: "postgres",
        dialectOptions: {
            ssl: { require: true, rejectUnauthorized: false }
        },
        define: {
            timestamps: true,
        }
    },
    production: {
        url: process.env.DATABASE_URL,
        ssl: true,
        dialect: "postgres",
        dialectOptions: {
            ssl: { require: true, rejectUnauthorized: false }
        },
        define: {
            timestamps: true,
        }
    }
}