import React from 'react';

export default (function (_ref) {
  var cards = _ref.cards,
      activeCardIndex = _ref.activeCardIndex,
      onDotClick = _ref.onDotClick;
  return React.createElement(
    'div',
    { className: 'flippy-footer' },
    cards.map(function (card, index) {
      return React.createElement(
        'span',
        {
          key: 'flippyFooterItem' + index,
          className: 'flippy-footer-item' + (activeCardIndex === index ? ' isActive' : ''),
          onClick: onDotClick.bind(null, index)
        },
        '*'
      );
    })
  );
});