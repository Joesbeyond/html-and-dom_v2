var _ = require("../lib/lodash-2.4.1/lodash");
var FillInTopic = require('./topic');
function FillInTopic(name, answer, scoreUnit, inputsCount) {

    Topic.call(this, name, answer, scoreUnit);

    this.inputsCount = inputsCount;
}

FillInTopic.prototype = Object.create(Topic.prototype);

FillInTopic.prototype.constructor = FillInTopic;

FillInTopic.prototype.calculate = function (document) {

    var _this = this;

    var getScore = function (expectedAnswers, actualAnswer, score) {
        var hasAnswer = _.any(expectedAnswers, function (expectedAnswer) {
            return expectedAnswer === actualAnswer;
        });
        return hasAnswer ? score : 0;
    };

    var answers = [];
    for (var i = 0; i < _this.inputsCount; i++) {
        var element = document.getElementById(this.name + '_' + i);
        if (element) {
            answers.push(element.value.trim());
        }
    }

    _.uniq(answers).forEach(function (answer) {
        _this.score += getScore(_this.answer, answer, _this.scoreUnit);
    });
};
module.export = FillInTopic;