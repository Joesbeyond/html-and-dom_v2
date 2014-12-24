var _ = require("lodash");
var Topic = require('./topic');
function ChoiceTopic(name, answer, scoreUnit) {
    Topic.call(this, name, answer, scoreUnit);
}

ChoiceTopic.prototype = Object.create(Topic.prototype);

ChoiceTopic.prototype.constructor = ChoiceTopic;

ChoiceTopic.prototype.calculate = function (document) {

    var radioElements = document.getElementsByName(this.name);

    var checkedElement = _.find(radioElements, { checked: true });
    if (checkedElement) {
        this.score = this.answer === checkedElement.value ? this.scoreUnit : 0;
    }
};
module.exports = ChoiceTopic;
