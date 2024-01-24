const members = require('./members');
const users = require('./users')
const http = require('http')
const currentDate = new Date().toISOString();

const server = http.createServer((req, res) =>{
    res.statusCode=200
    res.setHeader('Content-Type', 'text/json')
    const url = req.url
    if(url ==='/'){
        res.write("This is the home page")
    }
    if(url ==='/about'){
        res.write(JSON.stringify({
            'status' : 'succes', 
            'message' : 'response success', 
            'description' : 'Exercise #3',
            'date' : currentDate,
            'data' : members
        }))
    }
    if(url==='/users'){
    }else{
        res.write('...')
    }
res.end()
}).listen(3000)