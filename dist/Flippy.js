var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import FlippyFooter from './FlippyFooter';
import './styles.css';

var Flippy = function (_React$Component) {
  _inherits(Flippy, _React$Component);

  function Flippy(props) {
    _classCallCheck(this, Flippy);

    var _this = _possibleConstructorReturn(this, (Flippy.__proto__ || Object.getPrototypeOf(Flippy)).call(this, props));

    _this.toggle = function () {
      _this.setState({
        isFlipped: !_this.state.isFlipped
      });
    };

    _this.handleFooterDotClick = function (newCardIndex, event) {
      _this.setState({
        isFlipped: newCardIndex === 0
      });
    };

    _this.handleHoverOn = function (event) {
      _this.setState({
        isFlipped: true
      });
      _this.props.onMouseEnter(event);
    };

    _this.handleTouchStart = function (event) {
      _this.setState({
        isFlipped: true,
        isTouchDevice: true
      });
      _this.props.onTouchStart(event);
    };

    _this.handleTouchEnd = function (event) {
      _this.setState({
        isFlipped: false
      });
      _this.props.onTouchEnd(event);
    };

    _this.handleHoverOff = function (event) {
      _this.setState({
        isFlipped: false
      });
      _this.props.onMouseLeave(event);
    };

    _this.state = {
      isFlipped: false,
      isTouchDevice: false
    };
    return _this;
  }

  _createClass(Flippy, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          style = _props.style,
          flipDirection = _props.flipDirection,
          flipOnHover = _props.flipOnHover,
          flipOnClick = _props.flipOnClick;
      var _state = this.state,
          isFlipped = _state.isFlipped,
          activeCardIndex = _state.activeCardIndex,
          isTouchDevice = _state.isTouchDevice;

      var methods = !!flipOnHover ? {
        onMouseEnter: this.handleHoverOn,
        onMouseLeave: this.handleHoverOff,
        onTouchStart: this.handleTouchStart,
        onTouchEnd: this.handleTouchEnd
      } : flipOnClick ? {
        onClick: this.toggle
      } : {};
      return React.createElement(
        'div',
        Object.assign({
          className: 'flippy-container',
          style: Object.assign({}, style)
        }, methods),
        React.createElement(
          'div',
          { className: 'flippy-cardContainer-wrapper ' + flipDirection },
          React.createElement(
            'div',
            {
              className: 'flippy-cardContainer ' + (isFlipped ? 'isActive' : '') + ' ' + (isTouchDevice ? 'istouchdevice' : '')
            },
            children
          ),
          this.props.showNavigation && React.createElement(FlippyFooter, {
            onDotClick: this.handleFooterDotClick,
            activeCardIndex: activeCardIndex,
            cards: this.props.children
          })
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      return Object.assign({}, state, {
        isFlipped: typeof props.isFlipped === 'boolean' ? props.isFlipped : state.isFlipped
      });
    }
  }]);

  return Flippy;
}(React.Component);

export default Flippy;


Flippy.defaultProps = {
  showNavigation: false,
  flipDirection: 'horizontal',
  flipOnHover: false,
  flipOnClick: true,
  usePrettyStyle: true,
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onTouchStart: function onTouchStart() {},
  onTouchEnd: function onTouchEnd() {},
  onClick: function onClick() {}
};