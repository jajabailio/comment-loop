
const router = require('express').Router();

const controllers = {
    responses: {
        actions: {
            CREATE_RESPONSE: require('../../controllers/responses/actions/CREATE_RESPONSE').createNewResponse
        },
        reads: {
            listById: require('../../controllers/responses/reads/listById').fetchById,
            listAllBySurvey: require('../../controllers/responses/reads/listAllBySurvey').surveyResponses
        }
    }
}

router.post('/:survey_id', controllers.responses.actions.CREATE_RESPONSE);

router.get('/:id', controllers.responses.reads.listById);

router.get('/all/:survey_id', controllers.responses.reads.listAllBySurvey);

module.exports = router;