const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors({
    origin: '*', // Permite qualquer origem
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permite os métodos
    allowedHeaders: ['Content-Type'], // Permite o cabeçalho Content-Type
  }));

app.use(express.json())

const routes = require("./routes/router")
app.use('/api',routes);

app.listen(3000,function(){
    console.log("Servidor Online!")
})
 //Db CONNECTION
 const conn = require("./db/conn")
 conn();

//1234