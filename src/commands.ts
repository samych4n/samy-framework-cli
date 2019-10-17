import arg from 'arg'
import chalk from 'chalk';
import fs from "fs";
import ncp from "ncp";
import { promisify } from "util";
import { _new } from './_new';

export const access = promisify(fs.access);
export const copy = promisify(ncp);



export async function commandFactory(command:string,args:arg.Result<any>){
    switch(command){
        case "n":
        case "new":
            await _new(args)
            break;
            case "get":
                await _get(args);
                break;
        default:
            console.error("%s Invalid parameter", chalk.red.bold("ERROR"));
    }
}


function _get(args:arg.Result<any>){
    
}



