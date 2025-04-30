const { MongoClient } = require('mongodb');

let URL = "mongodb+srv://ziauldemo:HyyVrdSlBgpB6qvB@cluster0.k9w1yk1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectToMongoDB() {
    try {
        const client = new MongoClient(URL);
        await client.connect();
        console.log("Connection Success");

        await InsertData(client);

        await client.close();
    } catch (error) {
        console.error(error.message);
    }
}
connectToMongoDB()

async function InsertData (client) {
    try {
        let myDataBase = client.db("school");

        let myCollection = myDataBase.collection('students');
    
        let myData = { name: "Ziaul Hoque", Roll: "01", Class: "Ten", City: "Cumilla"}
        
        let result = await myCollection.insertOne(myData);
        console.log( 'Data Insert Success with_id:', result.insertedId);
        
    } catch (error) {
        console.error(" Data Insert Fail:", error.message);
    };
    
};
