//we can add comma and specify things we wont to pull off

//const {MongoClient,ObjectID} = require('mongodb');

//console.log(obj);

// if you see it will generate diff object ID's


const MongoClient = require('mongodb').MongoClient;
var obj = new ObjectID();




var user =
{
    name:'Aaron',
    age:22
}

var {name} = user;

console.log(name);