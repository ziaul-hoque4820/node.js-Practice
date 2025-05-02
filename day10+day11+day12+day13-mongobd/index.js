const { MongoClient } = require('mongodb');

let URL = "mongodb+srv://ziauldemo:HyyVrdSlBgpB6qvB@cluster0.k9w1yk1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectToMongoDB() {
    try {
        const client = new MongoClient(URL);
        await client.connect();
        console.log("Connection Success");

        // await InsertData(client);
        // await DeleteData(client);
        // await UpdateData(client);
        // await ReadData(client);
        await FindData(client)

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
    
        let myData = { name: "Jannatul Ripa", Roll: "05", Class: "Ten", City: "Cumilla"}
        
        let result = await myCollection.insertOne(myData);
        console.log( 'Data Insert Success with_id:', result.insertedId);
        
    } catch (error) {
        console.error(" Data Insert Fail:", error.message);
    };
    
};

async function DeleteData(client) {
    try {
        const myDataBase = client.db("school");
        const collection = myDataBase.collection("students");

        const filter = { Roll: "01" };

        const result = await collection.deleteOne(filter);

        if (result.deletedCount > 0) {
            console.log(" Data Deleted Successfully");
        } else {
            console.log("No Data Deleted");
        }

    } catch (error) {
        console.error("Delete Failed:", error.message);
    }
}

async function UpdateData(client) {
    try {
        const myDataBase = client.db("school");
        const collection = myDataBase.collection("students");

        const filter = { Roll: "03" };
        const update = { $set: { City: "Dhaka" } };

        const result = await collection.updateOne(filter, update);

        if (result.modifiedCount > 0) {
            console.log("Data Updated");
        } else {
            console.log("No Data Updated");
        }

    } catch (error) {
        console.error("Update Failed:", error.message);
    }
}

async function ReadData(client) {
    try {
        const myDataBase = client.db("school");
        const collection = myDataBase.collection("students");

        const results = await collection.find({}).toArray();

        console.log("All Students:");
        console.log(results);

    } catch (error) {
        console.error("Read Failed:", error.message);
    }
}


async function FindData(client) {
    try {
        const myDataBase = client.db("school");
        const collection = myDataBase.collection("students");

        const query = { Roll: "01" };

        const result = await collection.find(query).toArray();

        if (result.length > 0) {
            console.log("Found Data:");
            console.log(result);
        } else {
            console.log("No Data Found");
        }

    } catch (error) {
        console.error("Find Failed:", error.message);
    }
}

