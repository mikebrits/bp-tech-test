const path = process.env.INIT_CWD;
module.exports = {
    description: 'Reducer with default state and tests',
    prompts: [
        {
            type: 'confirm',
            name: 'reducers',
            message: 'Implement Reducers?',
        },
    ],
    actions: data => {
        let actions = [];
        if (data.reducers) {
            actions.push({
                type: 'add',
                path: path + '/{{properCase name}}/{{properCase name}}.reducer.js',
                templateFile: './templates/reducer.hbs',
            });
            actions.push({
                type: 'add',
                path: path + '/{{properCase name}}/tests/{{properCase name}}.reducer.test.js',
                templateFile: './templates/reducer_test.hbs',
            });
        }
        return actions;
    },
};
