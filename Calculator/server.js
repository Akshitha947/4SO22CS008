// const express = require("express");
// const app = express();
// const PORT=3000;

// app.use(express.json());

// let w = [];
// app.get('/window', (req, res) => {
//   res.json(w);
// });

// app.post("/numbers", (req, res) => {
//     console.log("POST /windows");
//     const { nums } = req.body;
//     if (!Array.isArray(nums)) {
//         return res.status(400).json({ error: "Numbers must be an array." });
//     }

//     for (let num of nums) {
//         if (!w.includes(num)) {
//             w.push(num);
//             if (w.length > 10) w.shift();
//         }
//     }

//     const avg = (w.reduce((a, b) => a + b, 0) / w.length) || 0;
//     w.push(newwindow);
//     res.status(201).json(newwindow);

//     res.json({
//         w,
//         avg: parseFloat(avg.toFixed(2))
//     });
// });

// app.listen(3000, () => {
//     console.log("console.log(` Server running on http://localhost:${PORT}`);");
// });


// {
//    "windowPrevState": [],
//    "windowCurrState": [],
//    "numbers": [],
//    "avg": 
// }

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let windows= [];

app.get('/windows', (req, res) => {
  res.json(windows);
});

app.post('/windows', (req, res) => {
  console.log("POST /windows");
  const { windowPrevState,windowCurrState,numbers,avg } = req.body;
  if (!Array.isArray(nums)) {
         return res.status(400).json({ error: "Numbers must be an array." });
     }
      for (let num of nums) {
         if (!windows.includes(num)) {
             windows.push(num);
             if (windows.length > 10) windows.shift();
         }
    }

  const aveg = (w.reduce((a, b) => a + b, 0) / windows.length) || 0;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});