import express from 'express';
import sum from './sum.js';

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/home', (req, res) =>{
    res.json({
        message: "Hello World"
    })
});

app.get('/getSum/:a/:b', async (req, res) => {
    const {a,b} = req.params;
    res.json({
        ans: sum(Number(a), Number(b))
    });
});