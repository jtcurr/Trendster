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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = _react2.default.createClass({
  displayName: 'Container',

  getInitialState: function getInitialState() {
    return {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  },

  onMapMoved: function onMapMoved(props, map) {
    var center = map.center;
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

    return _react2.default.createElement(_index2.default, { google: this.props.google,
      style: { width: '100%', height: '100%', position: 'relative' },
      className: 'map',
      zoom: 14,
      containerStyle: {},
      centerAroundCurrentLocation: true,
      onClick: this.onMapClicked,
      onDragend: this.onMapMoved });
  }
});

exports.default = Container;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V4YW1wbGVzL2NvbXBvbmVudHMvYmFzaWMuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiY3JlYXRlQ2xhc3MiLCJnZXRJbml0aWFsU3RhdGUiLCJzaG93aW5nSW5mb1dpbmRvdyIsImFjdGl2ZU1hcmtlciIsInNlbGVjdGVkUGxhY2UiLCJvbk1hcE1vdmVkIiwicHJvcHMiLCJtYXAiLCJjZW50ZXIiLCJvbk1hcmtlckNsaWNrIiwibWFya2VyIiwiZSIsInNldFN0YXRlIiwib25JbmZvV2luZG93Q2xvc2UiLCJvbk1hcENsaWNrZWQiLCJzdGF0ZSIsInJlbmRlciIsImxvYWRlZCIsImdvb2dsZSIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxnQkFBTUMsV0FBTixDQUFrQjtBQUFBOztBQUNsQ0MsbUJBQWlCLDJCQUFXO0FBQzFCLFdBQU87QUFDTEMseUJBQW1CLEtBRGQ7QUFFTEMsb0JBQWMsRUFGVDtBQUdMQyxxQkFBZTtBQUhWLEtBQVA7QUFLRCxHQVBpQzs7QUFTbENDLGNBQVksb0JBQVNDLEtBQVQsRUFBZ0JDLEdBQWhCLEVBQXFCO0FBQy9CLFFBQU1DLFNBQVNELElBQUlDLE1BQW5CO0FBQ0QsR0FYaUM7O0FBYWxDQyxpQkFBZSx1QkFBU0gsS0FBVCxFQUFnQkksTUFBaEIsRUFBd0JDLENBQXhCLEVBQTJCO0FBQ3hDLFNBQUtDLFFBQUwsQ0FBYztBQUNaUixxQkFBZUUsS0FESDtBQUVaSCxvQkFBY08sTUFGRjtBQUdaUix5QkFBbUI7QUFIUCxLQUFkO0FBS0QsR0FuQmlDOztBQXFCbENXLHFCQUFtQiw2QkFBVztBQUM1QixTQUFLRCxRQUFMLENBQWM7QUFDWlYseUJBQW1CLEtBRFA7QUFFWkMsb0JBQWM7QUFGRixLQUFkO0FBSUQsR0ExQmlDOztBQTRCbENXLGdCQUFjLHNCQUFTUixLQUFULEVBQWdCO0FBQzVCLFFBQUksS0FBS1MsS0FBTCxDQUFXYixpQkFBZixFQUFrQztBQUNoQyxXQUFLVSxRQUFMLENBQWM7QUFDWlYsMkJBQW1CLEtBRFA7QUFFWkMsc0JBQWM7QUFGRixPQUFkO0FBSUQ7QUFDRixHQW5DaUM7O0FBcUNsQ2EsVUFBUSxrQkFBVztBQUNqQixRQUFJLENBQUMsS0FBS1YsS0FBTCxDQUFXVyxNQUFoQixFQUF3QjtBQUN0QixhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDtBQUNEOztBQUVELFdBQ0UsaURBQUssUUFBUSxLQUFLWCxLQUFMLENBQVdZLE1BQXhCO0FBQ0ksYUFBTyxFQUFDQyxPQUFPLE1BQVIsRUFBZ0JDLFFBQVEsTUFBeEIsRUFBZ0NDLFVBQVUsVUFBMUMsRUFEWDtBQUVJLGlCQUFXLEtBRmY7QUFHSSxZQUFNLEVBSFY7QUFJSSxzQkFBZ0IsRUFKcEI7QUFLSSxtQ0FBNkIsSUFMakM7QUFNSSxlQUFTLEtBQUtQLFlBTmxCO0FBT0ksaUJBQVcsS0FBS1QsVUFQcEIsR0FERjtBQVVEO0FBcERpQyxDQUFsQixDQUFsQjs7a0JBdURlTixTIiwiZmlsZSI6ImJhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcblxuaW1wb3J0IE1hcCwge0dvb2dsZUFwaVdyYXBwZXJ9IGZyb20gJy4uLy4uL3NyYy9pbmRleCdcblxuY29uc3QgQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93aW5nSW5mb1dpbmRvdzogZmFsc2UsXG4gICAgICBhY3RpdmVNYXJrZXI6IHt9LFxuICAgICAgc2VsZWN0ZWRQbGFjZToge30sXG4gICAgfVxuICB9LFxuXG4gIG9uTWFwTW92ZWQ6IGZ1bmN0aW9uKHByb3BzLCBtYXApIHtcbiAgICBjb25zdCBjZW50ZXIgPSBtYXAuY2VudGVyO1xuICB9LFxuXG4gIG9uTWFya2VyQ2xpY2s6IGZ1bmN0aW9uKHByb3BzLCBtYXJrZXIsIGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkUGxhY2U6IHByb3BzLFxuICAgICAgYWN0aXZlTWFya2VyOiBtYXJrZXIsXG4gICAgICBzaG93aW5nSW5mb1dpbmRvdzogdHJ1ZVxuICAgIH0pO1xuICB9LFxuXG4gIG9uSW5mb1dpbmRvd0Nsb3NlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dpbmdJbmZvV2luZG93OiBmYWxzZSxcbiAgICAgIGFjdGl2ZU1hcmtlcjogbnVsbFxuICAgIH0pXG4gIH0sXG5cbiAgb25NYXBDbGlja2VkOiBmdW5jdGlvbihwcm9wcykge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dpbmdJbmZvV2luZG93KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd2luZ0luZm9XaW5kb3c6IGZhbHNlLFxuICAgICAgICBhY3RpdmVNYXJrZXI6IG51bGxcbiAgICAgIH0pXG4gICAgfVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmxvYWRlZCkge1xuICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8TWFwIGdvb2dsZT17dGhpcy5wcm9wcy5nb29nbGV9XG4gICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgcG9zaXRpb246ICdyZWxhdGl2ZSd9fVxuICAgICAgICAgIGNsYXNzTmFtZT17J21hcCd9XG4gICAgICAgICAgem9vbT17MTR9XG4gICAgICAgICAgY29udGFpbmVyU3R5bGU9e3t9fVxuICAgICAgICAgIGNlbnRlckFyb3VuZEN1cnJlbnRMb2NhdGlvbj17dHJ1ZX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uTWFwQ2xpY2tlZH1cbiAgICAgICAgICBvbkRyYWdlbmQ9e3RoaXMub25NYXBNb3ZlZH0gLz5cbiAgICApXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXIiXX0=