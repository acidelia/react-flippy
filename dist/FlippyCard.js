var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';

var FlippyCard = function (_React$Component) {
  _inherits(FlippyCard, _React$Component);

  function FlippyCard() {
    _classCallCheck(this, FlippyCard);

    return _possibleConstructorReturn(this, (FlippyCard.__proto__ || Object.getPrototypeOf(FlippyCard)).apply(this, arguments));
  }

  _createClass(FlippyCard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cardType = _props.cardType,
          style = _props.style,
          elementType = _props.elementType,
          animationDuration = _props.animationDuration,
          rest = _objectWithoutProperties(_props, ['className', 'cardType', 'style', 'elementType', 'animationDuration']);

      return React.createElement(elementType || 'div', Object.assign({
        className: 'flippy-card flippy-' + cardType + ' ' + (className || '')
      }, rest, {
        style: Object.assign({}, style || {}, { transitionDuration: animationDuration / 1000 + 's' })
      }), this.props.children);
    }
  }]);

  return FlippyCard;
}(React.Component);

var FrontSide = function FrontSide(_ref) {
  var isFlipped = _ref.isFlipped,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ['isFlipped', 'style']),
      animationDuration = _ref.animationDuration;

  return React.createElement(FlippyCard, Object.assign({}, props, {
    style: Object.assign({}, style || {}),
    animationDuration: animationDuration,
    cardType: 'front'
  }));
};

export { FrontSide };
var BackSide = function BackSide(_ref2) {
  var isFlipped = _ref2.isFlipped,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ['isFlipped', 'style']);

  return React.createElement(FlippyCard, Object.assign({}, props, {
    style: Object.assign({}, style || {}),
    cardType: 'back'
  }));
};

export { BackSide };
FlippyCard.defaultProps = {
  animationDuration: 600
};