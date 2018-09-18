const express = require('express');

const app = express();
app.use(express.static('src/client.built'));

app.listen(3000, () => {
	console.log('started listening on: port 3000');
});
