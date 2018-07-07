const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

if (err)
{
    return console.log('Unable to connect to MongoDB server');
}

console.log('Connected to MongoDB server');

const db = client.db('TodoApp');

db.collection('Users').insertMany(
    [
    
{
    name:'Aaron',
    age:'22',
    location:'Mumbai'
    

},
{

    name:'Selvin',
    age:'23',
    location:'Kerela'
    
},
{

    name:'Susmit',
    age:'21',
    location:'Maharashtra'
},
{
    name:'Saurabh',
    age:'23',
    location:'Ratnagiri'
     
}


],(err,result)=>
{
    if(err){
        return console.log('Unable to insert Todo',err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
})

client.close();

});