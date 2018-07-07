//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

if (err)
{
    return console.log('Unable to connect to MongoDB server');
}

console.log('Connected to MongoDB server');

const db = client.db('TodoApp');

db.collection('Users').find({_id:new ObjectID('5b40f364be6f7131de310dcd')}).toArray().then((docs)=>{

    console.log('Users found by Id');
    console.log(JSON.stringify(docs,undefined,2));
},(err)=>
{
    console.log('Unable to fetch the users',err);
});

client.close();

});