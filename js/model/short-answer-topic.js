var Topic = require('./topic');
function ShortAnswerTopic(name, answer, scoreUnit) {
    Topic.call(this, name, answer, scoreUnit);
}

ShortAnswerTopic.prototype = Object.create(Topic.prototype);

ShortAnswerTopic.prototype.constructor = ShortAnswerTopic;

ShortAnswerTopic.prototype.calculate = function (document) {

    var textareaElement = document.getElementById(this.name);
    if (textareaElement) {
        this.score = this.answer === textareaElement.value.trim() ? this.scoreUnit : 0;
    }
};
module.exports = ShortAnswerTopic;