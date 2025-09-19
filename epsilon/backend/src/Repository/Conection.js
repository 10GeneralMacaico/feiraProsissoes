import mysql from 'mysql2/promise';

const conection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'1234',
    database:'FB'
})
export default conection;