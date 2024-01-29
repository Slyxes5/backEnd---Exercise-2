const members = require('./members');
const users = require('./users')
const http = require('http')
// const currentDate = new Date().toISOString();
const moment = require('moment')

const server = http.createServer((req, res) =>{
    res.statusCode=200
    res.setHeader('Content-Type', 'text/json')
    const url = req.url
    if(url ==='/'){
        res.write("This is the home page \n")
        res.write(moment().format('MMMM Do YYYY, h:mm:ss a'))
    }
    if(url ==='/about'){
        res.write(JSON.stringify({
            'status' : 'succes', 
            'message' : 'response success', 
            'description' : 'Exercise #3'  ,
            'mebers' : members
        }))
        
    }
    if(url==='/users'){
        res.write(JSON.stringify({
            'users' : users, 
        }))
    }else{
    }
res.end();
})

const port = 3000;
const hostname = '127.0.0.1';
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});