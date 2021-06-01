
const router = require('express').Router();

const controllers = {
    options: {
        actions: {
            CREATE_OPTIONS: require('../../controllers/options/actions/CREATE_OPTIONS').createOptions,
            DELETE_OPTIONS: require('../../controllers/options/actions/DELETE_OPTIONS').deleteOptionById
        }
    }
}

router.post('/:question_id', controllers.options.actions.CREATE_OPTIONS);

router.delete('/:id', controllers.options.actions.DELETE_OPTIONS);

module.exports = router;