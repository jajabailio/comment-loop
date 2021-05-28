
const router = require('express').Router();

const controllers = {
    questions: {
        actions: {
            CREATE_QUESTION: require('../../controllers/questions/actions/CREATE_QUESTION').createQuestion,
            DELETE_QUESTION: require('../../controllers/questions/actions/DELETE_QUESTION').deleteQuestionById,
            UPDATE_QUESTION: require('../../controllers/questions/actions/UPDATE_QUESTION').updateQuestionDetails
        },
        reads: {
            listById: require('../../controllers/questions/reads/listById').fetchById
        }
    }
}

router.get('/:id', controllers.questions.reads.listById);

router.post('/', controllers.questions.actions.CREATE_QUESTION);

router.delete('/:id', controllers.questions.actions.DELETE_QUESTION);

router.put('/:id', controllers.questions.actions.UPDATE_QUESTION);

module.exports = router;