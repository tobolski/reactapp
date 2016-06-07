const SetIntervalMixin = {
  componentWillMount() {
    this._intervals = [];
  },
  _setInterval() {
    this._intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount() {
    this._intervals.map(clearInterval);
  }
};

module.exports = SetIntervalMixin;
