const {Client} = require('pg')
// const { Client } = require('pg/lib')


const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'Test',
  password: 'Kajal@701',
  port: 5432,
})

// client.connect();

// client.query(`CREATE TABLE users (
//     ID SERIAL PRIMARY KEY,
//     name VARCHAR(30),
//     email VARCHAR(30)
//   );`, (err, res)=>{
//     if(err){
//         console.log(err.message)
//     } else{
//     console.log(res.rows)
//     }

//     client.end;

// })


module.exports = {client, Client}