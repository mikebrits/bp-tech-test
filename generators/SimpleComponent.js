const transformProps = require('./utils/helpers').transformProps;
const Styled = require('./StyledComponents');
const path = process.env.INIT_CWD;

module.exports = {
    description: 'React Typescript Component',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Name of Component',
        },
        {
            type: 'input',
            name: 'props',
            message: 'Props:',
            filter: transformProps,
        },
        ...Styled.prompts,
    ],
    actions: data => {
        let actions = [
            ...Styled.actions(data)
        ];
        return [
            {
                type: 'add',
                path: path+'/{{properCase name}}/index.js',
                templateFile: './templates/component_index.hbs',
            },
            {
                type: 'add',
                path: path+'/{{properCase name}}/{{properCase name}}.js',
                templateFile: './templates/component.hbs',
            },
            {
                type: 'add',
                path: path+'/{{properCase name}}/tests/{{properCase name}}.test.js',
                templateFile: './templates/component_test.hbs',
            },
            ...actions,
        ];
    },
};
