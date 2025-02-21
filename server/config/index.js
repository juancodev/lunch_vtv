import {
  config
} from "dotenv";

config();

export const configServer = {
  port: process.env.PORT || '3400',
  dbName: process.env.DB_NAME || 'lunchvtv',
  dbHost: process.env.DB_HOST || 'localhost',
  dbUserName: process.env.DB_USERNAME || 'admin',
  dbPassword: process.env.DB_PASSWORD || 'admin123',
}