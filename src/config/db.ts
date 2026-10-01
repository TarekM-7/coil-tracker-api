import { Sequelize } from "sequelize-typescript";
import Coil from "../models/Coil.model";

const db = new Sequelize(process.env.DATABASE_URL!, {
    models: [Coil]
})

export default db