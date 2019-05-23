const promptDirectory = require('inquirer-directory');
const SimpleComponent = require('./SimpleComponent');

module.exports = function (plop) {
    plop.setPrompt('directory', promptDirectory);
    plop.setGenerator('⚛️︎  New Component', SimpleComponent);
};