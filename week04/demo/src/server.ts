import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb'; 
require('dotenv').config();

// getting string from env to avoid git leaks
const uri: string = process.env.DATABASESTRING!;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    try{

        await client.connect();

        //send a ping to the database to confirm a succesfull conncection
        const db = client.db("sample_weatherdata").collection("data");
        //
        //await db.findOne({ _id: new ObjectId("5553a998e4b02cf7151190b8")}).then( data => {
        //    console.log(data);  
        //})

        const doc = {
            owner: "snadderjacker",
            karakter: 22
        }

        {/*await db.insertOne({
            doc
        }).then( data => {
            console.log(data);
        })*/}

        {/*await db.find().limit(2).toArray().then(d => {
            console.log(d);
            
        })*/}

        await db.find( { elevation: { $lt: 10000 }}).toArray().then( d => {
            console.log(d);
        })

        {/*await db.updateOne({ _id: new ObjectId("65d472c90a251de7676ede22")}, {$set: { owner: "snadderjacker", karakter: "2"}}).then( d => {
            console.log(d);
            
        }) */}
        
        {/*await db.findOne({ owner: "snadderjacker"}).then( data => {
            console.log(data);
            
        })*/}

    } catch(e) {
        console.log(e);
        
    }
}

run().then(() => {
    console.log("DB connected");
    
}).catch((e) => {
    console.log(e + "Db failed");  
})
