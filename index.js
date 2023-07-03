const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
   const filePath = 'index.html';


   if(req.url == "/Home"){
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
          return;
        }
        else{
            res.writeHead(200, "utf-8",{ 'Content-Type': 'text/html' });
            const modifiedContent = data.replace('hello', 'John Doe');
            res.end(modifiedContent);
        }
       
      });
   }


});

const port = 8000;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});