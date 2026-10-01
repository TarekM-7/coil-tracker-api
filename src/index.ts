import 'dotenv/config'
import server, { connectDB } from "./server";

const port = process.env.PORT || 4000;

async function startServer(){
    try {
        await connectDB()
        server.listen(port, (error) => {
            if(error){
                console.log(error)
                console.log('Couldnt connect to Server')
                process.exit(1)
            }
            console.log(`Listening to Port ${port}`)
        })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

startServer()