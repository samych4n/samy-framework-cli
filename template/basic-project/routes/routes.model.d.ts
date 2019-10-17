import { RequestHandler } from "express";

export interface ICustomRoute {
    path:string,
    method:appTypes,
    function:RequestHandler
}

export type appTypes = 'GET' | 'POST' | 'PUT' | 'DELETE'