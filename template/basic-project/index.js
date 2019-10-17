var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { applyRoutes } from './routes';
import { routes } from './routes/route';
//const app;
var app = express();
app.use(cors());
app.use(bodyParser.json());
applyRoutes(app, __spreadArrays(routes));
app.listen(3000, "", function () { return "server started"; });
