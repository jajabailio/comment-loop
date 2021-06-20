
const router = require('express').Router();

const controllers = {
    surveys: {
        actions: {
            CREATE_SURVEY: require('../../controllers/surveys/actions/CREATE_SURVEY').createSurvey,
            UPDATE_SURVEY: require('../../controllers/surveys/actions/UPDATE_SURVEY').updateSurvey
        },
        reads: {
            list: require('../../controllers/surveys/reads/list').fetchSurveyList,
            listById: require('../../controllers/surveys/reads/listById').fetchById,
            listWithResponses: require('../../controllers/surveys/reads/listWithResponses').listSurveyResponses
        }
    }
}

router.get('/', controllers.surveys.reads.list);

router.get('/:id', controllers.surveys.reads.listById);

router.get('/responses/:id', controllers.surveys.reads.listWithResponses);

router.post('/', controllers.surveys.actions.CREATE_SURVEY);

router.put('/:id', controllers.surveys.actions.UPDATE_SURVEY);

module.exports = router;