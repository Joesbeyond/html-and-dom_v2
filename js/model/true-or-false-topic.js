var _ = require("lodash");
var Topic = require('./topic');
function TrueOrFalseTopic(name, answer, scoreUnit) {
    Topic.call(this, name, answer, scoreUnit);
}

TrueOrFalseTopic.prototype = Object.create(Topic.prototype);

TrueOrFalseTopic.prototype.constructor = TrueOrFalseTopic;

TrueOrFalseTopic.prototype.calculate = function (document) {

    var convertAnswerToBoolean = function (answer) {

        if (answer === 'V') {
            return true;
        }

        if (answer === 'X') {
            return false;
        }

        return undefined;
    };

    var radioElements = document.getElementsByName(this.name);

    var checkedElement = _.find(radioElements, { checked: true });
    if (checkedElement) {
        this.score = this.answer === convertAnswerToBoolean(checkedElement.value) ? this.scoreUnit : 0;
    }
};
module.exports = TrueOrFalseTopic;