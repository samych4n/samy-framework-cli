import express  from 'express';
import cors     from 'cors';
import bodyParser     from 'body-parser';
import { applyRoutes } from './routes';
import { routes } from './routes/route'

//const app;

const app = express();
app.use(cors());
app.use(bodyParser.json());

applyRoutes(app,[...routes]);

app.listen(3000,"",() => "server started");