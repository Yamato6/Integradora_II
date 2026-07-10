import mysql from 'mysql2/promise'
import process from 'node:process'

const pool = mysql.createPool({
	host: process.env.MYSQL_HOST || 'localhost',
	user: process.env.MYSQL_USER || 'root',
	password: process.env.MYSQL_PASSWORD || '',
	database: process.env.MYSQL_DATABASE || 'integradora_ii',
	waitForConnections: true,
	connectionLimit: 10,
})

export async function testConnection() {
	const [rows] = await pool.query('SELECT 1 AS ok')
	return rows[0]
}

export async function query(sql, params = []) {
	const [rows] = await pool.execute(sql, params)
	return rows
}

export default pool
