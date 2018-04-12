const messageProcessor = require('../helpers/messageProcessor');

module.exports = (req, res) => {
    if (req.body.object === 'page') {
        req.body.entry.forEach(entry => {
            entry.messaging.forEach(event => {
                if (event.message && event.message.text) {
                    new messageProcessor(event);
                }
            });
        });

        res.status(200).end();
    }
};