import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  port :'5432',
  password: '123456',
  database : 'chat_app'
}) ; 


export default pool;


