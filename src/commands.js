import chalk from 'chalk';
import fs from "fs";
import ncp from "ncp";
import { promisify } from "util";
import { _new } from './_new';
import path from 'path';
import mkdirp from 'mkdirp';
export const access = promisify(fs.access);
export const copy = promisify(ncp);
export const mkdir = promisify(mkdirp);
export async function commandFactory(command, args) {
    switch (command) {
        case "n":
        case "new":
            await _new(args);
            break;
        case "g":
        case "get":
            await _routes(args);
            break;
        default:
            console.error("%s Invalid parameter", chalk.red.bold("ERROR"));
    }
}
async function _routes(args) {
    try {
        const dir = args._[1].toLowerCase();
        if (!dir.match(/^\.?[a-z/]*$/g)) {
            console.error("%s não é um diretorio válido", chalk.red.bold("ERROR"));
            process.exit(1);
        }
        if (fs.existsSync(dir)) {
            console.error("%s rota já existente", chalk.red.bold("ERROR"));
            process.exit(1);
        }
        if (!dir) {
            console.error("%s falta parametro", chalk.red.bold("ERROR"));
            process.exit(1);
        }
        const currentFileUrl = import.meta.url;
        const templateDir = path.resolve(new URL(currentFileUrl).pathname.slice(1), "../../template/routes/get.ts");
        await mkdir(`./routes/${dir}`);
        await copy(templateDir, `./routes/${dir}/get.ts`, { clobber: false });
        const route_text = fs.readFileSync(`./routes/route.ts`).toString();
        //const routes = JSON.parse(route_text.match(/export[ ]*const[ ]*routes.*=[ ]*(\[[\s\S]*\])/im)[1]);
        console.log(route_text);
    }
    catch (e) {
        console.log(e);
    }
}
