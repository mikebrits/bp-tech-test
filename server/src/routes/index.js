import processes from './processes.route';
const routes = require('express').Router();

routes.use('/processes', processes);

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

export default routes;