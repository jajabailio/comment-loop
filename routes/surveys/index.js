
const router = require('express').Router();

const controllers = {
    surveys: {
        actions: {
            CREATE_SURVEY: require('../../controllers/surveys/actions/CREATE_SURVEY').createSurvey
        },
        reads: {
            listById: require('../../controllers/surveys/reads/listById').fetchById
        }
    }
}

router.post('/', controllers.surveys.actions.CREATE_SURVEY);

router.get('/:id', controllers.surveys.reads.listById);

module.exports = router;