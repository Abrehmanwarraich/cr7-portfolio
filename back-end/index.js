const mysql=require('mysql');
const express= require('express');
const con=require('./db.js');
const cors =require('cors');
const multer=require('multer');


const app= express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

con.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL server');
  });



// upload latesnew table
app.post('/items', (req, res) => {
  const { time, news } = req.body;
  const query = 'INSERT INTO latestnews (Date, latestnew) VALUES (?, ?)';
  con.query(query, [time, news], (err, result) => {
      if (err) {
          console.error('Error adding item:', err);
          return res.status(500).send('Error adding item');
      }
      res.send('Item added successfully');
  });
});

// fetch latestnew table
app.get('/items', (req, res) => {
    con.query('SELECT * FROM latestnews', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

//upload stats table
app.post('/stats',(req, res)=>{
  const { date,teams,goals,win,crgoals } = req.body;
  const query = 'INSERT INTO stats (date,teams,goals,win,crgoals) VALUES (?, ?,?,?,?)';
  con.query(query, [date,teams,goals,win,crgoals], (err, result) => {
      if (err) {
          console.error('Error adding item:', err);
          return res.status(500).send('Error adding item');
      }
      res.send('Item added successfully');
  });
});


// fetch stats table

app.get('/stats', (req, res) => {
  con.query('SELECT * FROM stats', (err, results) => {
      if (err) throw err;
      res.json(results);
  });
});


// use multer for image upload 

const upload = multer({ storage: multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Uploads folder
   },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
})
 });
//  In Express.js, both res.json() and res.send() are methods used to send a response to the client, but they serve slightly different purposes.


//--------image upload
app.post('/upload', upload.fields([{ name: 'image1', maxCount: 1 }, { name: 'image2', maxCount: 1 }]), (req, res) => {
  const { text } = req.body;
  const imagePath1 = req.files['image1'][0].path;
  const imagePath2 = req.files['image2'][0].path;

  const sql = 'INSERT INTO schedule (image1,teams , image2) VALUES (?, ?, ?)';
  con.query(sql, [ imagePath1, text, imagePath2], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error uploading data to the database');
    } else {
      console.log('Data inserted into MySQL table successfully');
      res.status(200).send('Data uploaded and saved to the database.');
    }
  });
});
//  fetch image
app.get('/upload', (req, res) => {
  const sql = 'SELECT teams, image1, image2 FROM schedule';
  con.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching uploaded data:', err);
      res.status(500).send('Error fetching data from the database');
    } else {
      res.json(results);
    }
  });
});
// Update
// app.put('/items/:id', (req, res) => {
//     const id = req.params.id;
//     const { name, description } = req.body;
//     const query = 'UPDATE items SET name = ?, description = ? WHERE id = ?';
//     db.query(query, [name, description, id], (err, result) => {
//         if (err) throw err;
//         res.send('Item updated successfully');
//     });
// });

// Delete
// app.delete('/items/:id', (req, res) => {
//     const id = req.params.id;
//     const query = 'DELETE FROM items WHERE id = ?';
//     db.query(query, id, (err, result) => {
//         if (err) throw err;
//         res.send('Item deleted successfully');
//     });
// });



app.listen(3000,function(){
    console.log('app is listing on 3000 port')
})