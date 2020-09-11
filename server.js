/* eslint-disable no-implicit-globals */
'use strict';

const https = require('https');
const fs = require('fs');

const server = https.createServer((req, res) => {
    router(res, req);
    console.log('server has started!');
});

server.listen(3000);

function router (req, res) {
    /* this functions will handel all the req to the server
    based on ther req we will send the approprieate response
    to the server */
    if (req.url === '/') {
        // render the home page html
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // lets use node's fs module to render html page
        fs.readFile('./home.html', null, (error, data) => {
            if (error) {
                // output to show if there is an error
                res.writeHead(404);
                res.end('opps, there seems to be an error while opening the html file.');
                console.log('\x1b[31m%s\x1b[0m', `Error:  ${error}`);
            } else {
                // output to show if there isn't an error
                res.write(data);
            }
            res.end();
        });
    }
}
