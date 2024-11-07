const express = require('express');
const { Pool } = require('pg');

const app = express();
const cors = require('cors');

app.use(cors());


const pool = new Pool({
  user: 'postgres',     
  host: 'localhost',      
  database: 'TestDB',     
  password: 'jedi',       
  port: 5432              
});

app.use(express.json());


app.post('/rate', async (req, res) => {
  const { userId, rating } = req.body;
  
  try {
    
    await pool.query(
      'INSERT INTO rating (user_id, rating) VALUES ($1, $2)',
      [userId, rating]
    );
    res.json({ message: 'Rating submitted successfully' });
  } catch (err) {
    console.error('Error submitting rating:', err);
    res.status(500).json({ error: 'Error submitting rating' });
  }
});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});