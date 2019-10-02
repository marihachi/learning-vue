const express = require('express');

const server = express();
server.use('/', express.static('dist'));

server.listen(3000, () => {
	console.log(`listening on port 3000`);
});
