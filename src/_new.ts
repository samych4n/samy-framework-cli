import arg from 'arg';
import chalk from 'chalk';
import fs from "fs";
import path from "path";
import { access, copy } from './commands';
import { projectInstall } from 'pkg-install';


export async function _new(args: arg.Result<any>) {
    
    const templateDir = getTemplateDir();
    await checkPermissionToCopy(templateDir);
    await copyFilesTo(templateDir,'./');
    if(args._[1]) await changeProjectname(args._[1]);
    await projectInstall({cwd: './'});
    
    console.log("%s Project ready", chalk.green.bold("DONE"));
    return true;
}

async function changeProjectname(nome){
    const packageJson = fs.readFileSync('./package.json');
    const json = JSON.parse(packageJson.toString());
    json.name = nome;
    fs.writeFileSync('./package.json',JSON.stringify(json, null, 4));
}

async function copyFilesTo(from: string,to:string) {
    await copy(from, to, { clobber: false });
}

async function checkPermissionToCopy(templateDir: string) {
    try {
        await access(templateDir, fs.constants.R_OK);
    }
    catch (err) {
        console.error("%s Invalid template name", chalk.red.bold("ERROR"));
        process.exit(1);
    }
}

function getTemplateDir() {
    const currentFileUrl = import.meta.url;
    const templateDir = path.resolve(new URL(currentFileUrl).pathname.slice(1), "../../template", 'basic-project');
    return templateDir;
}

