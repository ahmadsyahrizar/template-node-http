const http = require("http");
const getHtml = require("./helpers/getHtml.js")
const PORT = 8000;

const onReq = (req, res) => {
    const url  = req.url;
    switch(url){
        case "/":
            res.writeHead(200);
            res.end(getHtml("index.html"))
         return;
        case "/cars":
            res.writeHead(200);
            res.end(getHtml("carList.html"));
         return;
    }
}

const server = http.createServer(onReq);
server.listen(PORT, "0.0.0.0", ()=> {
    console.info(`is listening on port ${PORT}`)
});