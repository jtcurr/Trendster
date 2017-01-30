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

var Listing = function Listing(_ref) {
  var places = _ref.places;

  return _react2.default.createElement(
    'ul',
    null,
    places && places.map(function (p) {
      return _react2.default.createElement(
        'li',
        { key: p.id },
        p.name
      );
    })
  );
};

var Container = _react2.default.createClass({
  displayName: 'Container',

  getInitialState: function getInitialState() {
    return {
      places: []
    };
  },

  onMapReady: function onMapReady(mapProps, map) {
    this.searchNearby(map, map.center);
  },

  searchNearby: function searchNearby(map, center) {
    var _this = this;

    var google = this.props.google;

    var service = new google.maps.places.PlacesService(map);
    // Specify location, radius and place types for your Places API search.
    var request = {
      location: center,
      radius: '500',
      type: ['food']
    };

    service.nearbySearch(request, function (results, status, pagination) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {

        _this.pagination = pagination;
        _this.setState({
          places: results,
          hasNextPage: pagination.hasNextPage,
          center: center
        });
      }
    });
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
        className: 'map',
        onReady: this.onMapReady,
        visible: false },
      _react2.default.createElement(Listing, { places: this.state.places })
    );
  }
});

exports.default = Container;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V4YW1wbGVzL2NvbXBvbmVudHMvcGxhY2VzLmpzIl0sIm5hbWVzIjpbIkxpc3RpbmciLCJwbGFjZXMiLCJtYXAiLCJwIiwiaWQiLCJuYW1lIiwiQ29udGFpbmVyIiwiY3JlYXRlQ2xhc3MiLCJnZXRJbml0aWFsU3RhdGUiLCJvbk1hcFJlYWR5IiwibWFwUHJvcHMiLCJzZWFyY2hOZWFyYnkiLCJjZW50ZXIiLCJnb29nbGUiLCJwcm9wcyIsInNlcnZpY2UiLCJtYXBzIiwiUGxhY2VzU2VydmljZSIsInJlcXVlc3QiLCJsb2NhdGlvbiIsInJhZGl1cyIsInR5cGUiLCJuZWFyYnlTZWFyY2giLCJyZXN1bHRzIiwic3RhdHVzIiwicGFnaW5hdGlvbiIsIlBsYWNlc1NlcnZpY2VTdGF0dXMiLCJPSyIsInNldFN0YXRlIiwiaGFzTmV4dFBhZ2UiLCJyZW5kZXIiLCJsb2FkZWQiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVLFNBQVZBLE9BQVUsT0FBYztBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTs7QUFDNUIsU0FDRTtBQUFBO0FBQUE7QUFDR0EsY0FBVUEsT0FBT0MsR0FBUCxDQUFXLGFBQUs7QUFDekIsYUFDRTtBQUFBO0FBQUEsVUFBSSxLQUFLQyxFQUFFQyxFQUFYO0FBQ0dELFVBQUVFO0FBREwsT0FERjtBQUtELEtBTlU7QUFEYixHQURGO0FBV0QsQ0FaRDs7QUFjQSxJQUFNQyxZQUFZLGdCQUFNQyxXQUFOLENBQWtCO0FBQUE7O0FBQ2xDQyxtQkFBaUIsMkJBQVc7QUFDMUIsV0FBTztBQUNMUCxjQUFRO0FBREgsS0FBUDtBQUdELEdBTGlDOztBQU9sQ1EsY0FBWSxvQkFBU0MsUUFBVCxFQUFtQlIsR0FBbkIsRUFBd0I7QUFDbEMsU0FBS1MsWUFBTCxDQUFrQlQsR0FBbEIsRUFBdUJBLElBQUlVLE1BQTNCO0FBQ0QsR0FUaUM7O0FBV2xDRCxjQVhrQyx3QkFXckJULEdBWHFCLEVBV2hCVSxNQVhnQixFQVdSO0FBQUE7O0FBQUEsUUFDakJDLE1BRGlCLEdBQ1AsS0FBS0MsS0FERSxDQUNqQkQsTUFEaUI7O0FBRXhCLFFBQU1FLFVBQVUsSUFBSUYsT0FBT0csSUFBUCxDQUFZZixNQUFaLENBQW1CZ0IsYUFBdkIsQ0FBcUNmLEdBQXJDLENBQWhCO0FBQ0E7QUFDQSxRQUFNZ0IsVUFBVTtBQUNiQyxnQkFBVVAsTUFERztBQUViUSxjQUFRLEtBRks7QUFHYkMsWUFBTSxDQUFDLE1BQUQ7QUFITyxLQUFoQjs7QUFNQU4sWUFBUU8sWUFBUixDQUFxQkosT0FBckIsRUFBOEIsVUFBQ0ssT0FBRCxFQUFVQyxNQUFWLEVBQWtCQyxVQUFsQixFQUFpQztBQUM3RCxVQUFJRCxVQUFVWCxPQUFPRyxJQUFQLENBQVlmLE1BQVosQ0FBbUJ5QixtQkFBbkIsQ0FBdUNDLEVBQXJELEVBQXlEOztBQUV2RCxjQUFLRixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtHLFFBQUwsQ0FBYztBQUNaM0Isa0JBQVFzQixPQURJO0FBRVpNLHVCQUFhSixXQUFXSSxXQUZaO0FBR1pqQixrQkFBUUE7QUFISSxTQUFkO0FBS0Q7QUFDRixLQVZEO0FBV0QsR0FoQ2lDOzs7QUFrQ2xDa0IsVUFBUSxrQkFBVztBQUNqQixRQUFJLENBQUMsS0FBS2hCLEtBQUwsQ0FBV2lCLE1BQWhCLEVBQXdCO0FBQ3RCLGFBQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFQO0FBQ0Q7O0FBRUQsV0FDRTtBQUFBO0FBQUEsUUFBSyxRQUFRLEtBQUtqQixLQUFMLENBQVdELE1BQXhCO0FBQ0ksbUJBQVcsS0FEZjtBQUVJLGlCQUFTLEtBQUtKLFVBRmxCO0FBR0ksaUJBQVMsS0FIYjtBQUtFLG9DQUFDLE9BQUQsSUFBUyxRQUFRLEtBQUt1QixLQUFMLENBQVcvQixNQUE1QjtBQUxGLEtBREY7QUFTRDtBQWhEaUMsQ0FBbEIsQ0FBbEI7O2tCQW1EZUssUyIsImZpbGUiOiJwbGFjZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuXG5pbXBvcnQgTWFwLCB7R29vZ2xlQXBpV3JhcHBlcn0gZnJvbSAnLi4vLi4vc3JjL2luZGV4J1xuXG5jb25zdCBMaXN0aW5nID0gKHtwbGFjZXN9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge3BsYWNlcyAmJiBwbGFjZXMubWFwKHAgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxsaSBrZXk9e3AuaWR9PlxuICAgICAgICAgICAge3AubmFtZX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L3VsPlxuICApXG59XG5cbmNvbnN0IENvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGxhY2VzOiBbXVxuICAgIH1cbiAgfSxcblxuICBvbk1hcFJlYWR5OiBmdW5jdGlvbihtYXBQcm9wcywgbWFwKSB7XG4gICAgdGhpcy5zZWFyY2hOZWFyYnkobWFwLCBtYXAuY2VudGVyKTtcbiAgfSxcblxuICBzZWFyY2hOZWFyYnkobWFwLCBjZW50ZXIpIHtcbiAgICBjb25zdCB7Z29vZ2xlfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZShtYXApO1xuICAgIC8vIFNwZWNpZnkgbG9jYXRpb24sIHJhZGl1cyBhbmQgcGxhY2UgdHlwZXMgZm9yIHlvdXIgUGxhY2VzIEFQSSBzZWFyY2guXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgICBsb2NhdGlvbjogY2VudGVyLFxuICAgICAgIHJhZGl1czogJzUwMCcsXG4gICAgICAgdHlwZTogWydmb29kJ11cbiAgICAgfTtcblxuICAgIHNlcnZpY2UubmVhcmJ5U2VhcmNoKHJlcXVlc3QsIChyZXN1bHRzLCBzdGF0dXMsIHBhZ2luYXRpb24pID0+IHtcbiAgICAgIGlmIChzdGF0dXMgPT0gZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2VTdGF0dXMuT0spIHtcblxuICAgICAgICB0aGlzLnBhZ2luYXRpb24gPSBwYWdpbmF0aW9uO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBwbGFjZXM6IHJlc3VsdHMsXG4gICAgICAgICAgaGFzTmV4dFBhZ2U6IHBhZ2luYXRpb24uaGFzTmV4dFBhZ2UsXG4gICAgICAgICAgY2VudGVyOiBjZW50ZXIsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5sb2FkZWQpIHtcbiAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1hcCBnb29nbGU9e3RoaXMucHJvcHMuZ29vZ2xlfVxuICAgICAgICAgIGNsYXNzTmFtZT17J21hcCd9XG4gICAgICAgICAgb25SZWFkeT17dGhpcy5vbk1hcFJlYWR5fVxuICAgICAgICAgIHZpc2libGU9e2ZhbHNlfT5cblxuICAgICAgICA8TGlzdGluZyBwbGFjZXM9e3RoaXMuc3RhdGUucGxhY2VzfSAvPlxuICAgICAgPC9NYXA+XG4gICAgKVxuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyIl19