const { MongoClient } = require('mongodb');

// let mongoClient = require('mongodb').MongoClient;

let URL = "mongodb+srv://ziauldemo:HyyVrdSlBgpB6qvB@cluster0.k9w1yk1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectToMongoDB() {
    try {
        const client = new MongoClient(URL);
        await client.connect();
        console.log("✅ Connection Success");
        await client.close(); // অপশনাল, শুধু কানেকশন টেস্টের জন্য
    } catch (error) {
        console.error("❌ Connection Fail:", error.message);
    }
}
connectToMongoDB()