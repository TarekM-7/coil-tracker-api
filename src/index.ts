import server from "./server";
import db from "./config/db";

async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log('Connected to DB')
    } catch (error) {
        console.log(error)
        console.log('Error Connecting to DB from ')
    }
}
connectDB()

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`Listening to Port ${port}`)
})