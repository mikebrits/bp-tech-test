import routes from './routes';
import io from './socket';
import express from 'express';
import cors from 'cors';
import {createServer} from 'http';
import {tick} from "../controllers/processes.controller";

const app = express();
const http = createServer(app);

app.use(cors());
app.options('*', cors());
app.use('/', routes);

io(http);
// Ticker
setInterval(() => {
    tick();
}, 1000);

http.listen(3003, function() {
    console.log('listening on *:3003');
});
