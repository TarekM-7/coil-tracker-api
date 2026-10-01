import 'dotenv/config'
import server, { connectDB } from "./server";

const port = process.env.PORT || 4000;

async function startServer(){
    try {
        await connectDB()
        server.listen(port, () => {
            console.log(`Listening to Port ${port}`)
})
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

startServer()