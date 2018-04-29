import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import { config } from './config';

const app = express();

// API file for interacting with MongoDB
const api = require(config.server.path.api);

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.send({message: "Hi, I'm Node.js server!"});
});

// Set port
const port = process.env.PORT || config.server.port;
app.set('port', port);

// Server
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on port: ${port}`));
