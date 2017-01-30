'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Marker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _String = require('../lib/String');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var evtNames = ['click', 'mouseover', 'recenter', 'dragend'];

var wrappedPromise = function wrappedPromise() {
  var wrappedPromise = {},
      promise = new Promise(function (resolve, reject) {
    wrappedPromise.resolve = resolve;
    wrappedPromise.reject = reject;
  });
  wrappedPromise.then = promise.then.bind(promise);
  wrappedPromise.catch = promise.catch.bind(promise);
  wrappedPromise.promise = promise;

  return wrappedPromise;
};

var Marker = exports.Marker = function (_React$Component) {
  _inherits(Marker, _React$Component);

  function Marker() {
    _classCallCheck(this, Marker);

    return _possibleConstructorReturn(this, (Marker.__proto__ || Object.getPrototypeOf(Marker)).apply(this, arguments));
  }

  _createClass(Marker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.markerPromise = wrappedPromise();
      this.renderMarker();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.map !== prevProps.map || this.props.position !== prevProps.position) {
        if (this.marker) {
          this.marker.setMap(null);
        }
        this.renderMarker();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.marker) {
        this.marker.setMap(null);
      }
    }
  }, {
    key: 'renderMarker',
    value: function renderMarker() {
      var _this2 = this;

      var _props = this.props,
          map = _props.map,
          google = _props.google,
          position = _props.position,
          mapCenter = _props.mapCenter,
          icon = _props.icon,
          label = _props.label,
          draggable = _props.draggable;

      if (!google) {
        return null;
      }

      var pos = position || mapCenter;
      if (!(pos instanceof google.maps.LatLng)) {
        position = new google.maps.LatLng(pos.lat, pos.lng);
      }

      var pref = {
        map: map,
        position: position,
        icon: icon,
        label: label,
        draggable: draggable
      };
      this.marker = new google.maps.Marker(pref);

      evtNames.forEach(function (e) {
        _this2.marker.addListener(e, _this2.handleEvent(e));
      });

      this.markerPromise.resolve(this.marker);
    }
  }, {
    key: 'getMarker',
    value: function getMarker() {
      return this.markerPromise;
    }
  }, {
    key: 'handleEvent',
    value: function handleEvent(evt) {
      var _this3 = this;

      return function (e) {
        var evtName = 'on' + (0, _String.camelize)(evt);
        if (_this3.props[evtName]) {
          _this3.props[evtName](_this3.props, _this3.marker, e);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Marker;
}(_react2.default.Component);

Marker.propTypes = {
  position: _react.PropTypes.object,
  map: _react.PropTypes.object
};

evtNames.forEach(function (e) {
  return Marker.propTypes[e] = _react.PropTypes.func;
});

Marker.defaultProps = {
  name: 'Marker'
};

exports.default = Marker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01hcmtlci5qcyJdLCJuYW1lcyI6WyJldnROYW1lcyIsIndyYXBwZWRQcm9taXNlIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidGhlbiIsImJpbmQiLCJjYXRjaCIsIk1hcmtlciIsIm1hcmtlclByb21pc2UiLCJyZW5kZXJNYXJrZXIiLCJwcmV2UHJvcHMiLCJwcm9wcyIsIm1hcCIsInBvc2l0aW9uIiwibWFya2VyIiwic2V0TWFwIiwiZ29vZ2xlIiwibWFwQ2VudGVyIiwiaWNvbiIsImxhYmVsIiwiZHJhZ2dhYmxlIiwicG9zIiwibWFwcyIsIkxhdExuZyIsImxhdCIsImxuZyIsInByZWYiLCJmb3JFYWNoIiwiYWRkTGlzdGVuZXIiLCJlIiwiaGFuZGxlRXZlbnQiLCJldnQiLCJldnROYW1lIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwib2JqZWN0IiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxXQUFXLENBQUMsT0FBRCxFQUFVLFdBQVYsRUFBdUIsVUFBdkIsRUFBbUMsU0FBbkMsQ0FBakI7O0FBRUEsSUFBTUMsaUJBQWlCLDBCQUFXO0FBQzlCLE1BQUlBLGlCQUFpQixFQUFyQjtBQUFBLE1BQ0lDLFVBQVUsSUFBSUMsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQzdDSixtQkFBZUcsT0FBZixHQUF5QkEsT0FBekI7QUFDQUgsbUJBQWVJLE1BQWYsR0FBd0JBLE1BQXhCO0FBQ0gsR0FIUyxDQURkO0FBS0FKLGlCQUFlSyxJQUFmLEdBQXNCSixRQUFRSSxJQUFSLENBQWFDLElBQWIsQ0FBa0JMLE9BQWxCLENBQXRCO0FBQ0FELGlCQUFlTyxLQUFmLEdBQXVCTixRQUFRTSxLQUFSLENBQWNELElBQWQsQ0FBbUJMLE9BQW5CLENBQXZCO0FBQ0FE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LE0iLCJmaWxlIjoiTWFya2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyBhcyBUIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IGNhbWVsaXplIH0gZnJvbSAnLi4vbGliL1N0cmluZydcbmNvbnN0IGV2dE5hbWVzID0gWydjbGljaycsICdtb3VzZW92ZXInLCAncmVjZW50ZXInLCAnZHJhZ2VuZCddO1xuXG5jb25zdCB3cmFwcGVkUHJvbWlzZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3cmFwcGVkUHJvbWlzZSA9IHt9LFxuICAgICAgICBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgd3JhcHBlZFByb21pc2UucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICB3cmFwcGVkUHJvbWlzZS5yZWplY3QgPSByZWplY3Q7XG4gICAgICAgIH0pO1xuICAgIHdyYXBwZWRQcm9taXNlLnRoZW4gPSBwcm9taXNlLnRoZW4uYmluZChwcm9taXNlKTtcbiAgICB3cmFwcGVkUHJvbWlzZS5jYXRjaCA9IHByb21pc2UuY2F0Y2guYmluZChwcm9taXNlKTtcbiAgICB3cmFwcGVkUHJvbWlzZS5wcm9taXNlID0gcHJvbWlzZTtcblxuICAgIHJldHVybiB3cmFwcGVkUHJvbWlzZTtcbn1cblxuZXhwb3J0IGNsYXNzIE1hcmtlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5tYXJrZXJQcm9taXNlID0gd3JhcHBlZFByb21pc2UoKTtcbiAgICB0aGlzLnJlbmRlck1hcmtlcigpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICgodGhpcy5wcm9wcy5tYXAgIT09IHByZXZQcm9wcy5tYXApIHx8XG4gICAgICAodGhpcy5wcm9wcy5wb3NpdGlvbiAhPT0gcHJldlByb3BzLnBvc2l0aW9uKSkge1xuICAgICAgICBpZiAodGhpcy5tYXJrZXIpIHtcbiAgICAgICAgICAgIHRoaXMubWFya2VyLnNldE1hcChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlck1hcmtlcigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLm1hcmtlcikge1xuICAgICAgdGhpcy5tYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlck1hcmtlcigpIHtcbiAgICBsZXQge1xuICAgICAgbWFwLCBnb29nbGUsIHBvc2l0aW9uLCBtYXBDZW50ZXIsIGljb24sIGxhYmVsLCBkcmFnZ2FibGVcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWdvb2dsZSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBsZXQgcG9zID0gcG9zaXRpb24gfHwgbWFwQ2VudGVyO1xuICAgIGlmICghKHBvcyBpbnN0YW5jZW9mIGdvb2dsZS5tYXBzLkxhdExuZykpIHtcbiAgICAgIHBvc2l0aW9uID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwb3MubGF0LCBwb3MubG5nKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmVmID0ge1xuICAgICAgbWFwOiBtYXAsXG4gICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICBpY29uOiBpY29uLFxuICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgZHJhZ2dhYmxlOiBkcmFnZ2FibGVcbiAgICB9O1xuICAgIHRoaXMubWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcihwcmVmKTtcblxuICAgIGV2dE5hbWVzLmZvckVhY2goZSA9PiB7XG4gICAgICB0aGlzLm1hcmtlci5hZGRMaXN0ZW5lcihlLCB0aGlzLmhhbmRsZUV2ZW50KGUpKTtcbiAgICB9KTtcblxuICAgIHRoaXMubWFya2VyUHJvbWlzZS5yZXNvbHZlKHRoaXMubWFya2VyKTtcbiAgfVxuXG4gIGdldE1hcmtlcigpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJrZXJQcm9taXNlO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZ0KSB7XG4gICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICBjb25zdCBldnROYW1lID0gYG9uJHtjYW1lbGl6ZShldnQpfWBcbiAgICAgIGlmICh0aGlzLnByb3BzW2V2dE5hbWVdKSB7XG4gICAgICAgIHRoaXMucHJvcHNbZXZ0TmFtZV0odGhpcy5wcm9wcywgdGhpcy5tYXJrZXIsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5NYXJrZXIucHJvcFR5cGVzID0ge1xuICBwb3NpdGlvbjogVC5vYmplY3QsXG4gIG1hcDogVC5vYmplY3Rcbn1cblxuZXZ0TmFtZXMuZm9yRWFjaChlID0+IE1hcmtlci5wcm9wVHlwZXNbZV0gPSBULmZ1bmMpXG5cbk1hcmtlci5kZWZhdWx0UHJvcHMgPSB7XG4gIG5hbWU6ICdNYXJrZXInXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtlciJdfQ==