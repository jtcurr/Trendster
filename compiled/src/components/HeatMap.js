'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeatMap = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _String = require('../lib/String');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var evtNames = ['click', 'mouseover', 'recenter'];

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

var HeatMap = exports.HeatMap = function (_React$Component) {
  _inherits(HeatMap, _React$Component);

  function HeatMap() {
    _classCallCheck(this, HeatMap);

    return _possibleConstructorReturn(this, (HeatMap.__proto__ || Object.getPrototypeOf(HeatMap)).apply(this, arguments));
  }

  _createClass(HeatMap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.heatMapPromise = wrappedPromise();
      this.renderHeatMap();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.map !== prevProps.map || this.props.position !== prevProps.position) {
        if (this.heatMap) {
          this.heatMap.setMap(null);
          this.renderHeatMap();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.heatMap) {
        this.heatMap.setMap(null);
      }
    }
  }, {
    key: 'renderHeatMap',
    value: function renderHeatMap() {
      var _this2 = this;

      var _props = this.props,
          map = _props.map,
          google = _props.google,
          positions = _props.positions,
          mapCenter = _props.mapCenter,
          icon = _props.icon,
          gradient = _props.gradient,
          radius = _props.radius,
          opacity = _props.opacity;


      if (!google) {
        return null;
      }

      positions = positions.map(function (pos) {
        return new google.maps.LatLng(pos.lat, pos.lng);
      });

      var pref = {
        map: map,
        data: positions
      };

      this.heatMap = new google.maps.visualization.HeatmapLayer(pref);

      this.heatMap.set('gradient', gradient);

      this.heatMap.set('radius', radius === undefined ? 20 : radius);

      this.heatMap.set('opacity', opacity === undefined ? 0.2 : opacity);

      evtNames.forEach(function (e) {
        _this2.heatMap.addListener(e, _this2.handleEvent(e));
      });

      this.heatMapPromise.resolve(this.heatMap);
    }
  }, {
    key: 'getHeatMap',
    value: function getHeatMap() {
      return this.heatMapPromise;
    }
  }, {
    key: 'handleEvent',
    value: function handleEvent(evt) {
      var _this3 = this;

      return function (e) {
        var evtName = 'on' + (0, _String.camelize)(evt);
        if (_this3.props[evtName]) {
          _this3.props[evtName](_this3.props, _this3.heatMap, e);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return HeatMap;
}(_react2.default.Component);

HeatMap.propTypes = {
  position: _react.PropTypes.object,
  map: _react.PropTypes.object,
  icon: _react.PropTypes.string
};

evtNames.forEach(function (e) {
  return HeatMap.propTypes[e] = _react.PropTypes.func;
});

HeatMap.defaultProps = {
  name: 'HeatMap'
};

exports.default = HeatMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYXRNYXAuanMiXSwibmFtZXMiOlsiZXZ0TmFtZXMiLCJ3cmFwcGVkUHJvbWlzZSIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJiaW5kIiwiY2F0Y2giLCJIZWF0TWFwIiwiaGVhdE1hcFByb21pc2UiLCJyZW5kZXJIZWF0TWFwIiwicHJldlByb3BzIiwicHJvcHMiLCJtYXAiLCJwb3NpdGlvbiIsImhlYXRNYXAiLCJzZXRNYXAiLCJnb29nbGUiLCJwb3NpdGlvbnMiLCJtYXBDZW50ZXIiLCJpY29uIiwiZ3JhZGllbnQiLCJyYWRpdXMiLCJvcGFjaXR5IiwicG9zIiwibWFwcyIsIkxhdExuZyIsImxhdCIsImxuZyIsInByZWYiLCJkYXRhIiwidmlzdWFsaXphdGlvbiIsIkhlYXRtYXBMYXllciIsInNldCIsInVuZGVmaW5lZCIsImZvckVhY2giLCJhZGRMaXN0ZW5lciIsImUiLCJoYW5kbGVFdmVudCIsImV2dCIsImV2dE5hbWUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJzdHJpbmciLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFFQTs7Ozs7Ozs7OztBQUNBLElBQU1BLFdBQVcsQ0FBQyxPQUFELEVBQVUsV0FBVixFQUF1QixVQUF2QixDQUFqQjs7QUFFQSxJQUFNQyxpQkFBaUIsMEJBQVc7QUFDOUIsTUFBSUEsaUJBQWlCLEVBQXJCO0FBQUEsTUFDSUMsVUFBVSxJQUFJQyxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDN0NKLG1CQUFlRyxPQUFmLEdBQXlCQSxPQUF6QjtBQUNBSCxtQkFBZUksTUFBZixHQUF3QkEsTUFBeEI7QUFDSCxHQUhTLENBRGQ7QUFLQUosaUJBQWVLLElBQWYsR0FBc0JKLFFBQVFJLElBQVIsQ0FBYUMsSUFBYixDQUFrQkwsT0FB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QU8sSUFBUDtBQUNEOzs7O0VBdkUwQixnQkFBTUksUzs7QUEwRW5DakMsUUFBUWtDLFNBQVIsR0FBb0I7QUFDbEI1QixZQUFVLGlCQUFFNkIsTUFETTtBQUVsQjlCLE9BQUssaUJBQUU4QixNQUZXO0FBR2xCdkIsUUFBTSxpQkFBRXdCO0FBSFUsQ0FBcEI7O0FBTUE3QyxTQUFTb0MsT0FBVCxDQUFpQjtBQUFBLFNBQUszQixRQUFRa0MsU0FBUixDQUFrQkwsQ0FBbEIsSUFBdUIsaUJBQUVRLElBQTlCO0FBQUEsQ0FBakI7O0FBRUFyQyxRQUFRc0MsWUFBUixHQUF1QjtBQUNyQkMsUUFBTTtBQURlLENBQXZCOztrQkFJZXZDLE8iLCJmaWxlIjoiSGVhdE1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgYXMgVCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBjYW1lbGl6ZSB9IGZyb20gJy4uL2xpYi9TdHJpbmcnXG5jb25zdCBldnROYW1lcyA9IFsnY2xpY2snLCAnbW91c2VvdmVyJywgJ3JlY2VudGVyJ107XG5cbmNvbnN0IHdyYXBwZWRQcm9taXNlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHdyYXBwZWRQcm9taXNlID0ge30sXG4gICAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB3cmFwcGVkUHJvbWlzZS5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgICAgICAgIHdyYXBwZWRQcm9taXNlLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgd3JhcHBlZFByb21pc2UudGhlbiA9IHByb21pc2UudGhlbi5iaW5kKHByb21pc2UpO1xuICAgIHdyYXBwZWRQcm9taXNlLmNhdGNoID0gcHJvbWlzZS5jYXRjaC5iaW5kKHByb21pc2UpO1xuICAgIHdyYXBwZWRQcm9taXNlLnByb21pc2UgPSBwcm9taXNlO1xuXG4gICAgcmV0dXJuIHdyYXBwZWRQcm9taXNlO1xufVxuXG5leHBvcnQgY2xhc3MgSGVhdE1hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5oZWF0TWFwUHJvbWlzZSA9IHdyYXBwZWRQcm9taXNlKCk7XG4gICAgdGhpcy5yZW5kZXJIZWF0TWFwKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKCh0aGlzLnByb3BzLm1hcCAhPT0gcHJldlByb3BzLm1hcCkgfHxcbiAgICAgICh0aGlzLnByb3BzLnBvc2l0aW9uICE9PSBwcmV2UHJvcHMucG9zaXRpb24pKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYXRNYXApIHtcbiAgICAgICAgICB0aGlzLmhlYXRNYXAuc2V0TWFwKG51bGwpO1xuICAgICAgICAgIHRoaXMucmVuZGVySGVhdE1hcCgpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgaWYgKHRoaXMuaGVhdE1hcCkge1xuICAgICAgdGhpcy5oZWF0TWFwLnNldE1hcChudWxsKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJIZWF0TWFwKCkge1xuICAgIGxldCB7XG4gICAgICBtYXAsIGdvb2dsZSwgcG9zaXRpb25zLCBtYXBDZW50ZXIsIGljb24sIGdyYWRpZW50LCByYWRpdXMsIG9wYWNpdHlcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghZ29vZ2xlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHBvc2l0aW9ucyA9IHBvc2l0aW9ucy5tYXAoKHBvcykgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwb3MubGF0LCBwb3MubG5nKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHByZWYgPSB7XG4gICAgICBtYXA6IG1hcCxcbiAgICAgIGRhdGE6IHBvc2l0aW9ucyxcbiAgICB9O1xuXG4gICAgdGhpcy5oZWF0TWFwID0gbmV3IGdvb2dsZS5tYXBzLnZpc3VhbGl6YXRpb24uSGVhdG1hcExheWVyKHByZWYpO1xuXG4gICAgdGhpcy5oZWF0TWFwLnNldCgnZ3JhZGllbnQnLCBncmFkaWVudCk7XG5cbiAgICB0aGlzLmhlYXRNYXAuc2V0KCdyYWRpdXMnLCByYWRpdXMgPT09IHVuZGVmaW5lZCA/IDIwIDogcmFkaXVzKTtcblxuICAgIHRoaXMuaGVhdE1hcC5zZXQoJ29wYWNpdHknLCBvcGFjaXR5ID09PSB1bmRlZmluZWQgPyAwLjIgOiBvcGFjaXR5KTtcblxuICAgIGV2dE5hbWVzLmZvckVhY2goZSA9PiB7XG4gICAgICB0aGlzLmhlYXRNYXAuYWRkTGlzdGVuZXIoZSwgdGhpcy5oYW5kbGVFdmVudChlKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmhlYXRNYXBQcm9taXNlLnJlc29sdmUodGhpcy5oZWF0TWFwKTtcbiAgfVxuXG4gIGdldEhlYXRNYXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGVhdE1hcFByb21pc2U7XG4gIH1cblxuICBoYW5kbGVFdmVudChldnQpIHtcbiAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgIGNvbnN0IGV2dE5hbWUgPSBgb24ke2NhbWVsaXplKGV2dCl9YFxuICAgICAgaWYgKHRoaXMucHJvcHNbZXZ0TmFtZV0pIHtcbiAgICAgICAgdGhpcy5wcm9wc1tldnROYW1lXSh0aGlzLnByb3BzLCB0aGlzLmhlYXRNYXAsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5IZWF0TWFwLnByb3BUeXBlcyA9IHtcbiAgcG9zaXRpb246IFQub2JqZWN0LFxuICBtYXA6IFQub2JqZWN0LFxuICBpY29uOiBULnN0cmluZ1xufVxuXG5ldnROYW1lcy5mb3JFYWNoKGUgPT4gSGVhdE1hcC5wcm9wVHlwZXNbZV0gPSBULmZ1bmMpXG5cbkhlYXRNYXAuZGVmYXVsdFByb3BzID0ge1xuICBuYW1lOiAnSGVhdE1hcCdcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhdE1hcCJdfQ==