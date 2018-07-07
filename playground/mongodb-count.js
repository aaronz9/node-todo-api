const MongoClient = require('mongodb').MongoClient;

//const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

if (err)
{
    return console.log('Unable to connect to MongoDB server');
}

console.log('Connected to MongoDB server');

const db = client.db('TodoApp');

db.collection('Users').find({name:'Aaron'}).count().then((ourCount)=>{

    console.log(`The count is: ${ourCount}`);

},(err)=>
{
    console.log('Unable to count',err);
});

client.close();

});