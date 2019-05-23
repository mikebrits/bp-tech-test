const path = process.env.INIT_CWD;
module.exports = {
    description: 'Action Creators File',
    prompts: [
        {
            type: 'confirm',
            name: 'styled',
            message: 'Use Styled Components?',
        },
    ],
    actions: data => {
        let actions = [];
        if (data.styled) {
            actions.push({
                type: 'add',
                path: path+'/{{properCase name}}/{{properCase name}}.styled-components.js',
                templateFile: './templates/component_style.hbs',
            });
        }
        return actions;
    },
};
