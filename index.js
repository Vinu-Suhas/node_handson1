console.log('Hello world');
setTimeout(()=>console.log("waiting done"),5000)
console.log('Bye world');
const https=require('http')
const jsonData=require('./DataStore')
const server=https.createServer((request,response)=>{
   let nodeAdvantages= [
        "Efficient asynchronous operations",
        "Scalability and high performance",
        "Rich ecosystem of modules via npm",
        "Real-time applications support",
        "Fast code execution with V8 engine",
        "Cross-platform compatibility",
        "Handling of concurrent requests efficiently",
        "Simplified development with JavaScript",
        "Streamlined event-driven architecture"
      ]
      nodeAdvantages= nodeAdvantages.map(element=>`<li>${element}</li>`)
    if(request.url==="/"){
        response.write('<h1>What is nodejs</h1><p>Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser</p>')
        response.write('Advantages of Nodejs')
        response.write(`<ul>${nodeAdvantages}</ul>`)
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
