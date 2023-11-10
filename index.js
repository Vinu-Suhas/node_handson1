console.log('Hello world');
setTimeout(()=>console.log("waiting done"),5000)
console.log('Bye world');
const https=require('http')
const jsonData=require('./DataStore')
const server=https.createServer((request,response)=>{
    if(request.url==="/"){
        response.write('<h1>This is Homepage</h1>')

    }
    else if(request.url==='/product'){

        response.write(JSON.stringify(jsonData))
    }
    else if(request.url==='/new'){

        response.write('<h1><a href="/">Return </a> <h1>')
    }
    else
    {
        response.write("<h1>Error 404 found out </h1>")
    }
    response.end()

})

server.listen(5000,()=>{

            console.log("server running")

})
