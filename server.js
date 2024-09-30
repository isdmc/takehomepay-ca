// https://stackoverflow.com/a/26354478
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');

const PORT = 4200;
const baseDir = __dirname;
const defaultPageName = 'index.html';
const defaultPath = path.join(baseDir, defaultPageName);

console.log('Starting server...')
http.createServer((request, response) => {
    let requestUrl = url.parse(request.url); 
    var requestedPath = path.join(baseDir, requestUrl.pathname)
    
    fs.promises.lstat(requestedPath)
    .then((fileStats) => {
        console.log('Requsted file or dir exists')
        if (fileStats.isDirectory()) {
            console.log('Requested path is directory, send default');
            sendResponse(response, defaultPath);
        } else {
            console.log('Send requested file');
            sendResponse(response, requestedPath);
        }
    })
    .catch(() => {
        console.log('requested file does not exist. Sending default.');
        sendResponse(response, defaultPath);
    });

}).listen(PORT)

function sendResponse(response, path) {
    response.writeHead(200, {
        'Content-Type': mapDocToContentType(path)
    });
    fs.createReadStream(path).pipe(response)
}

function mapDocToContentType(path) {
    if (path.endsWith('.html')) {
        return 'text/html'
    } else if (path.endsWith('.js')) {
        return 'text/javascript'
    } else if (path.endsWith('.json')) {
        return 'text/json'
    } else if (path.endsWith('.css')) {
        return 'text/css'
    } else {
        return 'text/plain';
    }
}