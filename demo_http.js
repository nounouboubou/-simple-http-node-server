const http = require('http');
var fs = require('fs');
const port = 3000;



http.createServer(function (request, response) {
	fs.writeFile('hello-world.txt', 'Hello to this great world!', function (err) {
		if (err) throw err;
		console.log('Saved!');
});
	response.end(`Handling a request on port ${port}`)
}).listen(port);