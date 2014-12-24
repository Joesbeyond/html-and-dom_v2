function Topic(name, answer, scoreUnit) {
    this.name = name;
    this.answer = answer;
    this.scoreUnit = scoreUnit;
    this.score = 0;
}

Topic.prototype.calculate = function (document) {
    // need to overriding this function.
};
module.exports = Topic;