const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'aerodromo',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// GET all data
app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM aeronaves', (err, results) => {
    if (err) {
      console.error('Error retrieving data:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

app.get('/api/dataM', (req, res) => {
  connection.query('SELECT * FROM modificacao', (err, results) => {
    if (err) {
      console.error('Error retrieving data:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

// GET single data by ID
app.get('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  connection.query(
    'SELECT * FROM aeronaves WHERE IDAviaoPrimaria = ?',
    [id],
    (err, results) => {
      if (err) {
        console.error('Error retrieving data:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Data not found' });
      } else {
        res.json(results[0]);
      }
    }
  );
});

// POST new data
app.post('/api/data', (req, res) => {
  const newItem = req.body;
  connection.query('INSERT INTO aeronaves SET ?', newItem, (err, result) => {
    if (err) {
      console.error('Error adding data:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    newItem.IDAviaoPrimaria = result.insertId;
    res.status(201).json(newItem);
  });
});

app.post('/api/dataM', (req, res) => {
  const newItem = req.body;
  connection.query('INSERT INTO modificacao (IDAviao, DetalhesModificacao) VALUES (?, ?)', [newItem.IDAviao, newItem.Modificacoes], (err, result) => {
    if (err) {
      console.error('Error adding data:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    newItem.IDMod = result.insertId;
    res.status(201).json(newItem);
  });
});



// PUT update data by ID
app.put('/api/data/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  connection.query(
    'UPDATE aeronaves SET ? WHERE IDAviao = ?',
    [updatedItem, id],
    (err, result) => {
      if (err) {
        console.error('Error updating data:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Data not found' });
      } else {
        res.json(updatedItem);
      }
    }
  );
});

// DELETE data by ID
app.delete('/api/data/:id', (req, res) => {
  const id = req.params.id;
  connection.query(
    'DELETE FROM aeronaves WHERE IDAviao = ?',
    [id],
    (err, result) => {
      if (err) {
        console.error('Error deleting data:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Data not found' });
      } else {
        res.sendStatus(204);
      }
    }
  );
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
