const path = process.env.INIT_CWD;
module.exports = {
    description: 'Simple constants file',
    prompts: [
        {
            type: 'confirm',
            name: 'constants',
            message: 'Implement Constants file?',
        },
    ],
    actions: data => {
        let actions = [];
        if (data.constants) {
            actions.push({
                type: 'add',
                path: path + 'constants.js',
                templateFile: './templates/constants.hbs',
            });
        }
        return actions;
    },
};
