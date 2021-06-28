module.exports = function (body) {

    const answersObj = {};
    const optionsObj = {};
    const options2Obj = {};
    const questionArray = [];

    // return body;

    body.forEach(element => {

        if (!answersObj[element.questions.options.answers.option_id]) {
            answersObj[element.questions.options.answers.option_id] = {
                answers: []
            }
        }

        answersObj[element.questions.options.answers.option_id].answers.push(element.questions.options.answers);

    });

    body.forEach(element => {
        if (!optionsObj[element.questions.options.question_id]) {
            optionsObj[element.questions.options.question_id ] = { _id: element.questions.options.question_id, text: element.questions.text, options: [] };
        }

        if(!options2Obj[element.questions.options._id]) {
            options2Obj[element.questions.options._id] = {
                _id: element.questions.options._id,
                text: element.questions.options.text,
                question_id: element.questions.options.question_id,
                order_number: element.questions.options.order_number,
                answers: answersObj[element.questions.options._id] ? answersObj[element.questions.options._id].answers : []
            }
        }

    })

    Object.keys(options2Obj).forEach(key => {
        optionsObj[options2Obj[key].question_id].options.push(options2Obj[key])
    });

    Object.keys(optionsObj).forEach(key => {
        questionArray.push(optionsObj[key])
    });

    return questionArray    ;
}