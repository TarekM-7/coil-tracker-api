import 'dotenv/config'
import server, { connectDB } from "./server";
import colors from 'colors'

const port = process.env.PORT || 4000;

async function startServer(){
    try {
        await connectDB()
        server.listen(port, (error) => {
            if(error){
                console.log(error)
                console.log(colors.bgRed.white(`Couldn't start server on port ${port}`))
                process.exit(1)
            }
            console.log(colors.bgGreen.bold(`Listening to Port ${port}`))
        })
    } catch (error) {
        console.log(error)
        console.log(colors.bgRed.white('Failed to Start Server'))
        process.exit(1)
    }
}

startServer()