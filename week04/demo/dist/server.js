import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://juliuslassen:<QamcuxgzeHHUsXY8>@test-cluster.cv4o12x.mongodb.net/";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        await client.connect();
        //send a ping to the database to confirm a succesfull conncection
        const db = client.db("test-cluster").collection("sample_weatherdata");
        console.log(db);
    }
    catch (e) {
        console.log(e);
    }
}
run().then(() => {
    console.log("DB connected");
}).catch(() => {
    console.log("Db failed");
});
