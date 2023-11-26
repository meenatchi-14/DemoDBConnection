import { MongoClient } from "mongodb";
const connectionString="mongodb+srv://meena:meena14@cluster0.ko6rp9j.mongodb.net/?retryWrites=true&w=majority"
const localString = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2";
async function dbConnection(){
    try{
    const client = new MongoClient(localString);
    await client.connect();
    console.log("Database connected")
    return client;
    }
    catch(error){
        console.log("Error connecting Database",error)
    }
}
export const client= await dbConnection();