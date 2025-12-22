require('dotenv').config();
console.log('MONGODB_URI length:', process.env.MONGODB_URI?.length || 0);
console.log('First 50 chars:', process.env.MONGODB_URI?.substring(0, 50) || 'NOT SET');
