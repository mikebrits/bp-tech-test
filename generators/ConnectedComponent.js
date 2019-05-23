const SimpleComponent = require('./SimpleComponent');
const Constants = require('./Constants');
const Actions = require('./Actions');
const Reducer = require('./Reducer');
const Sagas = require('./Sagas');
const path = process.env.INIT_CWD;

module.exports = {
    description: 'Standard Gas Tag React Component Connected to Redux',
    prompts: [
        ...SimpleComponent.prompts,
        {
            type: 'confirm',
            name: 'realtime',
            message: 'Connect Realtime?',
        },
        ...Constants.prompts,
        ...Actions.prompts,
        ...Reducer.prompts,
        ...Sagas.prompts,

    ],
    actions: data => {
        let actions = [
            ...SimpleComponent.actions(data),
            ...Constants.actions(data),
            ...Actions.actions(data),
            ...Reducer.actions(data),
            ...Sagas.actions(data),
        ];


        actions = actions.map(action => {
            if (action.templateFile === './templates/component_index.hbs') {
                return {
                    type: 'add',
                    path: path + '/{{properCase name}}/index.js',
                    templateFile: './templates/connected_component_index.hbs',
                };
            } else return action;
        });

        return [...actions];
    },
};
