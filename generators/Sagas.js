const path = process.env.INIT_CWD;
module.exports = {
    description: 'Sagas file with default saga and tests',
    prompts: [
        {
            type: 'confirm',
            name: 'sagas',
            message: 'Implement Sagas?',
        },
    ],
    actions: data => {
        let actions = [];
        if (data.sagas) {
            actions.push({
                type: 'add',
                path: path + '/{{properCase name}}/{{properCase name}}.sagas.js',
                templateFile: './templates/sagas.hbs',
            });
            actions.push({
                type: 'add',
                path: path + '/{{properCase name}}/tests/{{properCase name}}.sagas.test.js',
                templateFile: './templates/sagas_test.hbs',
            });
        }
        return actions;
    },
};
