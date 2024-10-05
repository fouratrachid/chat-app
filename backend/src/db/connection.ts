import pkg from 'pg';
const { Pool } = pkg;


const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  port :'5432',
  password: '123456',
  database : 'chat_app'
}) ; 

pool.on('connect', () => {
  console.log('Connected to the database');
});

export default pool;


