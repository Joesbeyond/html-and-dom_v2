var _ = require("lodash");
var Topic = require('./topic');
function MultipleChoiceTopic(name, answer, scoreUnit) {
    Topic.call(this, name, answer, scoreUnit);
}

MultipleChoiceTopic.prototype = Object.create(Topic.prototype);

MultipleChoiceTopic.prototype.constructor = MultipleChoiceTopic;

MultipleChoiceTopic.prototype.calculate = function (document) {

    var isDifferentArray = function (arrayA, arrayB) {
        var diffA = _.difference(arrayA, arrayB);
        var diffB = _.difference(arrayB, arrayA);

        var diff = diffA.concat(diffB);

        return _.isEmpty(diff);
    };

    var checkboxElements = document.getElementsByName(this.name);

    var checkedElements = _.filter(checkboxElements, { checked: true });

    var answers = _.pluck(checkedElements, 'value');

    var isCorrectAnswer = isDifferentArray(this.answer, answers);

    this.score = isCorrectAnswer ? this.scoreUnit : 0;
};
module.exports = MultipleChoiceTopic;