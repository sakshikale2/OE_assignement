const express = require('express');
   const app = express();
   const port = 3000;

   app.get('/', (req, res) => {
     res.send('Hello, Everyone! Update');
   });

   app.listen(port, () => {
     console.log(`App is running on http://localhost:${port}`);
   });