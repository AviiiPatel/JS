// console.log("Holla lio messi here");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/HTML');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pseudo selctors and more designing</title>
      <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Italianno&family=Marck+Script&display=swap"
          rel="stylesheet">">
      <style>
          .container {
              border: 3px solid rgb(72, 91, 165);
              background-color: rgb(223, 245, 201);
              padding: 33px;
              /* margin: 33px; */
              width: 666px;
              margin: 33px auto;
              font-size: 20px;
              border-radius: 13px;
            
              
           }
  
           body{
              font-family:'Caveat', cursive;
              font-family: 'Italianno', cursive;
              font-family: 'Marck Script', cursive;
           }
  
           a{
              text-decoration:none;
              /* color: rgb(0, 172, 0); */
           }
  
           a:hover{
              color:black;
           }
  
           /* a:visited{
            background-color: red;
           } 
  
           a:active{ 
              background-color: blue;
           } */
  
           .beta{
               /* background-color: rgb(125, 147, 70); */
               border-radius: 5px;
               padding: 3px;
               margin: 2px;
               cursor: pointer;
           }
      </style>
  </head>
  
  <body>
      <div class="container" id="para">
          <h3>This is my heading.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus earum aspernatur perspiciatis eius
              neque modi quo rerum ea qui sit explicabo reprehenderit molestiae, dolore quis vero maiores laboriosam ut
              aliquam beatae itaque repellat.</p>
          
              <a href="https://google.com" target="_blank" class="beta">Read more</a>
              <button class="beta">Contact us</button>
  
      </div>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});