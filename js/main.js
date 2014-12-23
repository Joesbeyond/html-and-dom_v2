var _ = require("./lib/lodash-2.4.1/lodash");

$(document).ready(function() {
  $('#button').on('click', function() {
    submit_onclick();
  });
});

var AnswerChecker = require('./answer-checker');

function submit_onclick() {

    var requiredInputs = [
        {
            id: 'className',
            text: '班级'
        },
        {
            id: 'studentNumber',
            text: '学号'
        },
        {
            id: 'studentName',
            text: '姓名'
        }
    ];

    if (hasEmptyRequiredInput(requiredInputs)) {
        return false;
    }

    var topics = buildTopics();

    var answerChecker = new AnswerChecker(document, topics);

    var totalScoreElement = document.getElementById('totalScore');
    if (totalScoreElement) {
        totalScoreElement.innerText = answerChecker.getTotalScore();
    }

    return false;
}

function hasEmptyRequiredInput(inputs) {

    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var element = document.getElementById(input.id);
        if (element && _.isEmpty(element.value)) {

            alert('请输入' + input.text + '！');
            document.getElementById(input.id).focus();
            return true;
        }
    }

    return false;
}

function buildTopics() {
    return [
        new FillInTopic('fill_in_1', ['统一建模语言'], 5, 1),
        new FillInTopic('fill_in_2', ['封装性', '继承性', '多态性'], 5, 3),
        new ChoiceTopic('choice_1', 'B', 10),
        new ChoiceTopic('choice_2', 'A', 10),
        new MultipleChoiceTopic('multiple_choice_1', ['A', 'B', 'D'], 10),
        new MultipleChoiceTopic('multiple_choice_2', ['A', 'B', 'C'], 10),
        new TrueOrFalseTopic('true_false_1', false, 10),
        new TrueOrFalseTopic('true_false_2', true, 10),
        new ShortAnswerTopic('short_answer_1',
            '模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。',
            20)
    ];
}
