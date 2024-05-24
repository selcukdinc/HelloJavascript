/* // console.log("hello world!!!!!");

const http = require("http");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
    //console.log('server running at http://127.0.0.1:3000/');
}); */

/*
console.log(`Hello`);
console.log(`I like fries`);


window.alert(`This is an alert window`);
window.alert(`I like fries`);
*/

document.getElementById("myH1").textContent = 'Hello';
document.getElementById("myP").textContent = 'I like fries';


