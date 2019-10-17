import arg from 'arg';
import { commandFactory } from './commands';
// function parseArgumentsIntoOptions(rawArgs:any[]){
//     const args = arg({
//         '--git':Boolean,
//         '--yes':Boolean,
//         '--install':Boolean,
//         '-g':'--git',
//         '-y':'--yes',
//         '-i':"--install"
//     },{
//         argv:rawArgs.slice(2)
//     });
//     return{
//         skipPrompts:args["--yes"] || false,
//         git:args["--git"] || false,
//         template:args._[0],
//         runInstall:args['--install'] || false
//     }
// }
// async function promptForMissingOptions(options){
//     const questions:inquirer.QuestionCollection[] = [];
//     questions.push({
//         type:"list",
//         name:"template",
//         message:"Choose one",
//         choices:["Apple","Banana","Orange"]
//     })
//     if (!options.git) {
//         questions.push({
//             type: 'confirm',
//             name: 'git',
//             message: 'Initialize a git repository?',
//             default: false,
//         });
//     }
//     const answers = await inquirer.prompt(questions);
//     console.log(answers);
// }
export const cli = async function (rawArgs) {
    const args = arg({}, { argv: rawArgs.slice(2) });
    await commandFactory(args._[0], args);
};
// export const cli =  async function(args) {
//     let options = parseArgumentsIntoOptions(args);
//     await promptForMissingOptions(options);
//     console.log(options);
//     await createProject(options);
// }
