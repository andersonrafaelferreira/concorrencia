const express = require("express")

const server = express()

server.use(express.static("public"))

const nunjucks = require("nunjucks")

nunjucks.configure("src",{
    express: server,
    noCache: true
})


server.get("/", (req, res) => {
    res.render("abertas.html")
})

server.get("/fechadas", (req, res) => {
    res.render("fechadas.html")
})

server.listen(3000)