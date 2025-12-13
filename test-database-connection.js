/**
 * Test Database Connection
 * Jalankan: node test-database-connection.js
 */

require('dotenv').config({ path: '.env.local' });

const databaseUrl = process.env.DATABASE_URL;
const databaseType = process.env.DATABASE_TYPE || 'mysql';

console.log('🔍 Testing Database Connection...\n');
console.log('Database Type:', databaseType);
console.log('Database URL:', databaseUrl ? databaseUrl.replace(/:[^:@]+@/, ':****@') : 'NOT SET');
console.log('');

if (!databaseUrl) {
  console.error('❌ ERROR: DATABASE_URL tidak ditemukan di .env.local');
  console.log('\nPastikan file .env.local berisi:');
  console.log('DATABASE_URL=mysql://username:password@localhost:3306/database_name');
  console.log('DATABASE_TYPE=mysql');
  process.exit(1);
}

async function testConnection() {
  try {
    if (databaseType === 'mysql' || databaseType === 'mariadb') {
      const mysql = require('mysql2/promise');
      const connection = await mysql.createConnection(databaseUrl);
      
      console.log('✅ Koneksi ke MySQL berhasil!');
      
      // Test query
      const [rows] = await connection.execute('SELECT 1 as test');
      console.log('✅ Test query berhasil:', rows);
      
      // Check tables
      const [tables] = await connection.execute(`
        SELECT TABLE_NAME 
        FROM information_schema.TABLES 
        WHERE TABLE_SCHEMA = DATABASE()
      `);
      
      console.log('\n📊 Tabel yang ada di database:');
      if (tables.length === 0) {
        console.log('⚠️  Belum ada tabel. Jalankan schema SQL di DBeaver!');
        console.log('   File: database/schema-mysql.sql');
      } else {
        tables.forEach(table => {
          console.log('   -', table.TABLE_NAME);
        });
        
        const requiredTables = ['users', 'quiz_sessions', 'answers', 'scores'];
        const existingTables = tables.map(t => t.TABLE_NAME.toLowerCase());
        const missingTables = requiredTables.filter(t => !existingTables.includes(t));
        
        if (missingTables.length > 0) {
          console.log('\n⚠️  Tabel yang belum ada:');
          missingTables.forEach(table => {
            console.log('   -', table);
          });
          console.log('\nJalankan schema SQL di DBeaver: database/schema-mysql.sql');
        } else {
          console.log('\n✅ Semua tabel yang diperlukan sudah ada!');
        }
      }
      
      await connection.end();
      
    } else if (databaseType === 'postgresql' || databaseType === 'postgres') {
      const { Pool } = require('pg');
      const pool = new Pool({ connectionString: databaseUrl });
      
      const client = await pool.connect();
      console.log('✅ Koneksi ke PostgreSQL berhasil!');
      
      // Test query
      const result = await client.query('SELECT 1 as test');
      console.log('✅ Test query berhasil:', result.rows);
      
      // Check tables
      const tablesResult = await client.query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public'
      `);
      
      console.log('\n📊 Tabel yang ada di database:');
      if (tablesResult.rows.length === 0) {
        console.log('⚠️  Belum ada tabel. Jalankan schema SQL di DBeaver!');
        console.log('   File: database/schema.sql');
      } else {
        tablesResult.rows.forEach(table => {
          console.log('   -', table.table_name);
        });
        
        const requiredTables = ['users', 'quiz_sessions', 'answers', 'scores'];
        const existingTables = tablesResult.rows.map(t => t.table_name.toLowerCase());
        const missingTables = requiredTables.filter(t => !existingTables.includes(t));
        
        if (missingTables.length > 0) {
          console.log('\n⚠️  Tabel yang belum ada:');
          missingTables.forEach(table => {
            console.log('   -', table);
          });
          console.log('\nJalankan schema SQL di DBeaver: database/schema.sql');
        } else {
          console.log('\n✅ Semua tabel yang diperlukan sudah ada!');
        }
      }
      
      client.release();
      await pool.end();
    }
    
    console.log('\n✅ Database siap digunakan!');
    
  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Pastikan database server berjalan');
    console.log('2. Pastikan username, password, host, port, dan database name benar');
    console.log('3. Pastikan database sudah dibuat di DBeaver');
    console.log('4. Cek firewall jika database di server remote');
    process.exit(1);
  }
}

testConnection();

