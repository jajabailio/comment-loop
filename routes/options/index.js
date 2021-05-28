
const router = require('express').Router();

const controllers = {
    options: {
        actions: {
            CREATE_OPTIONS: require('../../controllers/options/actions/CREATE_OPTIONS').createOptions
        }
    }
}

router.post('/:question_id', controllers.options.actions.CREATE_OPTIONS);

module.exports = router;