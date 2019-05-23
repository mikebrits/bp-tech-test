const path = process.env.INIT_CWD;
module.exports = {
    description: 'Action Creators File',
    prompts: [
        {
            type: 'confirm',
            name: 'actions',
            message: 'Implement Action Creators?',
        },
    ],
    actions: data => {
        let actions = [];
        if (data.actions) {
            actions.push({
                type: 'add',
                path: path + '/{{properCase name}}/{{properCase name}}.actions.js',
                templateFile: './templates/actions.hbs',
            });
        }
        return actions;
    },
};
