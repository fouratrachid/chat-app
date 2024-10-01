import exp from 'constants';
import pool from '../db/connection';

export const createUser = async (name, email, password) => {
    const query = `
        INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3)
        RETURNING id, name, email
    `;
    const values = [name, email, password];
    
    const res = await pool.query(query, values);
    return res.rows[0];
};

export const getUserById = async (id) => {
    const query = "SELECT id, name, email FROM users WHERE id = $1";
    const res = await pool.query(query, [id]);
    return res.rows[0];
};

export const getAllUsers = async () => {
    const query = "SELECT id, name, email FROM users";
    const res = await pool
        .query(query);
    return res.rows;
}
