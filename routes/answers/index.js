
const router = require('express').Router();

const controllers = {
    answers: {
        actions: {},
        reads: {
            listBySurvey: require('../../controllers/answers/reads/listBySurvey').fetchSurveyResponses,
            listByOption: require('../../controllers/answers/reads/listByOption').fetchOptionResponses
        }
    }
}



router.get('/options/:option_id', controllers.answers.reads.listByOption);

router.get('/surveys/:survey_id', controllers.answers.reads.listBySurvey)

module.exports = router;