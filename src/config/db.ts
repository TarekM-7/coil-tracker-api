import { Sequelize } from "sequelize-typescript";

const db = new Sequelize(process.env.DATABASE_URL!)

export default db