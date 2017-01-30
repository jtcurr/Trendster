'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require('../../src/index');

var _index2 = _interopRequireDefault(_index);

var _Marker = require('../../src/components/Marker');

var _Marker2 = _interopRequireDefault(_Marker);

var _InfoWindow = require('../../src/components/InfoWindow');

var _InfoWindow2 = _interopRequireDefault(_InfoWindow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithMarkers = _react2.default.createClass({
  displayName: 'WithMarkers',

  getInitialState: function getInitialState() {
    return {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  },

  onMarkerClick: function onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  },

  onInfoWindowClose: function onInfoWindowClose() {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  },

  onMapClicked: function onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  },

  render: function render() {
    if (!this.props.loaded) {
      return _react2.default.createElement(
        'div',
        null,
        'Loading...'
      );
    }

    return _react2.default.createElement(
      _index2.default,
      { google: this.props.google,
        style: { width: '100%', height: '100%', position: 'relative' },
        className: 'map',
        zoom: 14,
        onClick: this.onMapClicked },
      _react2.default.createElement(_Marker2.default, {
        onClick: this.onMarkerClick,
        name: 'SOMA',
        position: { lat: 37.778519, lng: -122.405640 } }),
      _react2.default.createElement(_Marker2.default, {
        onClick: this.onMarkerClick,
        name: 'Dolores park',
        position: { lat: 37.759703, lng: -122.428093 } }),
      _react2.default.createElement(_Marker2.default, { onClick: this.onMarkerClick,
        name: 'Current location' }),
      _react2.default.createElement(
        _InfoWindow2.default,
        {
          marker: this.state.activeMarker,
          visible: this.state.showingInfoWindow,
          onClose: this.onInfoWindowClose },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h1',
            null,
            this.state.selectedPlace.name
          )
        )
      )
    );
  }
});

exports.default = WithMarkers;

// const mountNode = document.querySelector('#root')
// ReactDOM.render(<Wrapped />, mountNode)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V4YW1wbGVzL2NvbXBvbmVudHMvY2xpY2thYmxlTWFya2Vycy5qcyJdLCJuYW1lcyI6WyJXaXRoTWFya2VycyIsImNyZWF0ZUNsYXNzIiwiZ2V0SW5pdGlhbFN0YXRlIiwic2hvd2luZ0luZm9XaW5kb3ciLCJhY3RpdmVNYXJrZXIiLCJzZWxlY3RlZFBsYWNlIiwib25NYXJrZXJDbGljayIsInByb3BzIiwibWFya2VyIiwiZSIsInNldFN0YXRlIiwib25JbmZvV2luZG93Q2xvc2UiLCJvbk1hcENsaWNrZWQiLCJzdGF0ZSIsInJlbmRlciIsImxvYWRlZCIsImdvb2dsZSIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJsYXQiLCJsbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxjQUFjLGdCQUFNQyxXQUFOLENBQWtCO0FBQUE7O0FBQ3BDQyxtQkFBaUIsMkJBQVc7QUFDMUIsV0FBTztBQUNMQyx5QkFBbUIsS0FEZDtBQUVMQyxvQkFBYyxFQUZUO0FBR0xDLHFCQUFlO0FBSFYsS0FBUDtBQUtELEdBUG1DOztBQVNwQ0MsaUJBQWUsdUJBQVNDLEtBQVQsRUFBZ0JDLE1BQWhCLEVBQXdCQyxDQUF4QixFQUEyQjtBQUN4QyxTQUFLQyxRQUFMLENBQWM7QUFDWkwscUJBQWVFLEtBREg7QUFFWkgsb0JBQWNJLE1BRkY7QUFHWkwseUJBQW1CO0FBSFAsS0FBZDtBQUtELEdBZm1DOztBQWlCcENRLHFCQUFtQiw2QkFBVztBQUM1QixTQUFLRCxRQUFMLENBQWM7QUFDWlAseUJBQW1CLEtBRFA7QUFFWkMsb0JBQWM7QUFGRixLQUFkO0FBSUQsR0F0Qm1DOztBQXdCcENRLGdCQUFjLHNCQUFTTCxLQUFULEVBQWdCO0FBQzVCLFFBQUksS0FBS00sS0FBTCxDQUFXVixpQkFBZixFQUFrQztBQUNoQyxXQUFLTyxRQUFMLENBQWM7QUFDWlAsMkJBQW1CLEtBRFA7QUFFWkMsc0JBQWM7QUFGRixPQUFkO0FBSUQ7QUFDRixHQS9CbUM7O0FBaUNwQ1UsVUFBUSxrQkFBVztBQUNqQixRQUFJLENBQUMsS0FBS1AsS0FBTCxDQUFXUSxNQUFoQixFQUF3QjtBQUN0QixhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDtBQUNEOztBQUVELFdBQ0U7QUFBQTtBQUFBLFFBQUssUUFBUSxLQUFLUixLQUFMLENBQVdTLE1BQXhCO0FBQ0ksZUFBTyxFQUFDQyxPQUFPLE1BQVIsRUFBZ0JDLFFBQVEsTUFBeEIsRUFBZ0NDLFVBQVUsVUFBMUMsRUFEWDtBQUVJLG1CQUFXLEtBRmY7QUFHSSxjQUFNLEVBSFY7QUFJSSxpQkFBUyxLQUFLUCxZQUpsQjtBQUtFO0FBQ0UsaUJBQVMsS0FBS04sYUFEaEI7QUFFRSxjQUFNLE1BRlI7QUFHRSxrQkFBVSxFQUFDYyxLQUFLLFNBQU4sRUFBaUJDLEtBQUssQ0FBQyxVQUF2QixFQUhaLEdBTEY7QUFTRTtBQUNFLGlCQUFTLEtBQUtmLGFBRGhCO0FBRUUsY0FBTSxjQUZSO0FBR0Usa0JBQVUsRUFBQ2MsS0FBSyxTQUFOLEVBQWlCQyxLQUFLLENBQUMsVUFBdkIsRUFIWixHQVRGO0FBYUUsd0RBQVEsU0FBUyxLQUFLZixhQUF0QjtBQUNRLGNBQU0sa0JBRGQsR0FiRjtBQWdCRTtBQUFBO0FBQUE7QUFDRSxrQkFBUSxLQUFLTyxLQUFMLENBQVdULFlBRHJCO0FBRUUsbUJBQVMsS0FBS1MsS0FBTCxDQUFXVixpQkFGdEI7QUFHRSxtQkFBUyxLQUFLUSxpQkFIaEI7QUFJSTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBSyxpQkFBS0UsS0FBTCxDQUFXUixhQUFYLENBQXlCaUI7QUFBOUI7QUFERjtBQUpKO0FBaEJGLEtBREY7QUEyQkQ7QUFqRW1DLENBQWxCLENBQXBCOztrQkFvRWV0QixXOztBQUVmO0FBQ0EiLCJmaWxlIjoiY2xpY2thYmxlTWFya2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmltcG9ydCBNYXAsIHtHb29nbGVBcGlXcmFwcGVyfSBmcm9tICcuLi8uLi9zcmMvaW5kZXgnXG5pbXBvcnQgTWFya2VyIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL01hcmtlcidcbmltcG9ydCBJbmZvV2luZG93IGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0luZm9XaW5kb3cnXG5cbmNvbnN0IFdpdGhNYXJrZXJzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93aW5nSW5mb1dpbmRvdzogZmFsc2UsXG4gICAgICBhY3RpdmVNYXJrZXI6IHt9LFxuICAgICAgc2VsZWN0ZWRQbGFjZToge30sXG4gICAgfVxuICB9LFxuXG4gIG9uTWFya2VyQ2xpY2s6IGZ1bmN0aW9uKHByb3BzLCBtYXJrZXIsIGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkUGxhY2U6IHByb3BzLFxuICAgICAgYWN0aXZlTWFya2VyOiBtYXJrZXIsXG4gICAgICBzaG93aW5nSW5mb1dpbmRvdzogdHJ1ZVxuICAgIH0pO1xuICB9LFxuXG4gIG9uSW5mb1dpbmRvd0Nsb3NlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dpbmdJbmZvV2luZG93OiBmYWxzZSxcbiAgICAgIGFjdGl2ZU1hcmtlcjogbnVsbFxuICAgIH0pXG4gIH0sXG5cbiAgb25NYXBDbGlja2VkOiBmdW5jdGlvbihwcm9wcykge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dpbmdJbmZvV2luZG93KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd2luZ0luZm9XaW5kb3c6IGZhbHNlLFxuICAgICAgICBhY3RpdmVNYXJrZXI6IG51bGxcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmxvYWRlZCkge1xuICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8TWFwIGdvb2dsZT17dGhpcy5wcm9wcy5nb29nbGV9XG4gICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgcG9zaXRpb246ICdyZWxhdGl2ZSd9fVxuICAgICAgICAgIGNsYXNzTmFtZT17J21hcCd9XG4gICAgICAgICAgem9vbT17MTR9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5vbk1hcENsaWNrZWR9PlxuICAgICAgICA8TWFya2VyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5vbk1hcmtlckNsaWNrfVxuICAgICAgICAgIG5hbWU9eydTT01BJ31cbiAgICAgICAgICBwb3NpdGlvbj17e2xhdDogMzcuNzc4NTE5LCBsbmc6IC0xMjIuNDA1NjQwfX0gLz5cbiAgICAgICAgPE1hcmtlclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25NYXJrZXJDbGlja31cbiAgICAgICAgICBuYW1lPXsnRG9sb3JlcyBwYXJrJ31cbiAgICAgICAgICBwb3NpdGlvbj17e2xhdDogMzcuNzU5NzAzLCBsbmc6IC0xMjIuNDI4MDkzfX0gLz5cbiAgICAgICAgPE1hcmtlciBvbkNsaWNrPXt0aGlzLm9uTWFya2VyQ2xpY2t9XG4gICAgICAgICAgICAgICAgbmFtZT17J0N1cnJlbnQgbG9jYXRpb24nfSAvPlxuXG4gICAgICAgIDxJbmZvV2luZG93XG4gICAgICAgICAgbWFya2VyPXt0aGlzLnN0YXRlLmFjdGl2ZU1hcmtlcn1cbiAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLnNob3dpbmdJbmZvV2luZG93fVxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMub25JbmZvV2luZG93Q2xvc2V9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgxPnt0aGlzLnN0YXRlLnNlbGVjdGVkUGxhY2UubmFtZX08L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvSW5mb1dpbmRvdz5cbiAgICAgIDwvTWFwPlxuICAgIClcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFdpdGhNYXJrZXJzXG5cbi8vIGNvbnN0IG1vdW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb290Jylcbi8vIFJlYWN0RE9NLnJlbmRlcig8V3JhcHBlZCAvPiwgbW91bnROb2RlKSJdfQ==