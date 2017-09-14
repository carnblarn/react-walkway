'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _walkway = require('walkway.js');

var _walkway2 = _interopRequireDefault(_walkway);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVG_ID_SELECTOR = 'react-walkway-selector';

var Walkway = function (_React$Component) {
  _inherits(Walkway, _React$Component);

  function Walkway(props) {
    _classCallCheck(this, Walkway);

    // A random ID is used so that multiple react-walkway instances
    // can function on the same page
    var _this = _possibleConstructorReturn(this, (Walkway.__proto__ || Object.getPrototypeOf(Walkway)).call(this, props));

    var randomId = Math.random().toString(36).substr(2, 5);
    _this.id = SVG_ID_SELECTOR + '_' + randomId;
    _this.selector = '#' + _this.id + ' > svg';

    // Walkway.js allows passing in just a selector
    // but it's simplest if it's just rolled into the options
    // parameter
    _this.options = Object.assign({}, { selector: _this.selector }, _this.props.options);
    return _this;
  }

  _createClass(Walkway, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.walkway = new _walkway2.default(this.options);
      this.walkway.draw(function () {
        if (_this2.props.onFinish) {
          _this2.props.onFinish();
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: this.id },
        _react2.default.createElement(this.props.svg)
      );
    }
  }]);

  return Walkway;
}(_react2.default.Component);

exports.default = Walkway;