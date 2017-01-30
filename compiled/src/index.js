'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Map = exports.HeatMap = exports.InfoWindow = exports.Marker = exports.GoogleApiWrapper = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GoogleApiComponent = require('./GoogleApiComponent');

Object.defineProperty(exports, 'GoogleApiWrapper', {
  enumerable: true,
  get: function get() {
    return _GoogleApiComponent.wrapper;
  }
});

var _Marker = require('./components/Marker');

Object.defineProperty(exports, 'Marker', {
  enumerable: true,
  get: function get() {
    return _Marker.Marker;
  }
});

var _InfoWindow = require('./components/InfoWindow');

Object.defineProperty(exports, 'InfoWindow', {
  enumerable: true,
  get: function get() {
    return _InfoWindow.InfoWindow;
  }
});

var _HeatMap = require('./components/HeatMap');

Object.defineProperty(exports, 'HeatMap', {
  enumerable: true,
  get: function get() {
    return _HeatMap.HeatMap;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _String = require('./lib/String');

var _cancelablePromise = require('./lib/cancelablePromise');

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStyles = {
  container: {
    position: 'absolute',
    width: '70%',
    height: '70%'
  },
  map: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
};

var evtNames = ['ready', 'click', 'dragend', 'recenter', 'bounds_changed', 'center_changed', 'dblclick', 'dragstart', 'heading_change', 'idle', 'maptypeid_changed', 'mousemove', 'mouseout', 'mouseover', 'projection_changed', 'resize', 'rightclick', 'tilesloaded', 'tilt_changed', 'zoom_changed'];

var Map = exports.Map = function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map(props) {
    _classCallCheck(this, Map);

    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

    (0, _invariant2.default)(props.hasOwnProperty('google'), 'You must include a `google` prop.');

    _this.listeners = {};
    _this.state = {
      currentLocation: {
        lat: _this.props.initialCenter.lat,
        lng: _this.props.initialCenter.lng
      }
    };
    return _this;
  }

  _createClass(Map, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.centerAroundCurrentLocation) {
        if (navigator && navigator.geolocation) {
          this.geoPromise = (0, _cancelablePromise.makeCancelable)(new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          }));

          this.geoPromise.promise.then(function (pos) {
            var coords = pos.coords;
            _this2.setState({
              currentLocation: {
                lat: coords.latitude,
                lng: coords.longitude
              }
            });
          }).catch(function (e) {
            return e;
          });
        }
      }
      this.loadMap();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.google !== this.props.google) {
        this.loadMap();
      }
      if (this.props.visible !== prevProps.visible) {
        this.restyleMap();
      }
      if (this.props.zoom !== prevProps.zoom) {
        this.map.setZoom(this.props.zoom);
      }
      if (this.props.center !== prevProps.center) {
        this.setState({
          currentLocation: this.props.center
        });
      }
      if (prevState.currentLocation !== this.state.currentLocation) {
        this.recenterMap();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      var google = this.props.google;

      if (this.geoPromise) {
        this.geoPromise.cancel();
      }
      Object.keys(this.listeners).forEach(function (e) {
        google.maps.event.removeListener(_this3.listeners[e]);
      });
    }
  }, {
    key: 'loadMap',
    value: function loadMap() {
      var _this4 = this;

      if (this.props && this.props.google) {
        (function () {
          var google = _this4.props.google;

          var maps = google.maps;

          var mapRef = _this4.refs.map;
          var node = _reactDom2.default.findDOMNode(mapRef);
          var curr = _this4.state.currentLocation;
          var center = new maps.LatLng(curr.lat, curr.lng);

          var mapTypeIds = _this4.props.google.maps.MapTypeId || {};
          var mapTypeFromProps = String(_this4.props.mapType).toUpperCase();

          var mapConfig = Object.assign({}, {
            mapTypeId: mapTypeIds[mapTypeFromProps],
            center: center,
            zoom: _this4.props.zoom,
            maxZoom: _this4.props.maxZoom,
            minZoom: _this4.props.maxZoom,
            clickableIcons: _this4.props.clickableIcons,
            disableDefaultUI: _this4.props.disableDefaultUI,
            zoomControl: _this4.props.zoomControl,
            mapTypeControl: _this4.props.mapTypeControl,
            scaleControl: _this4.props.scaleControl,
            streetViewControl: _this4.props.streetViewControl,
            panControl: _this4.props.panControl,
            rotateControl: _this4.props.rotateControl,
            scrollwheel: _this4.props.scrollwheel,
            draggable: _this4.props.draggable,
            keyboardShortcuts: _this4.props.keyboardShortcuts,
            disableDoubleClickZoom: _this4.props.disableDoubleClickZoom,
            noClear: _this4.props.noClear,
            styles: _this4.props.styles,
            gestureHandling: _this4.props.gestureHandling
          });

          Object.keys(mapConfig).forEach(function (key) {
            // Allow to configure mapConfig with 'false'
            if (mapConfig[key] == null) {
              delete mapConfig[key];
            }
          });

          _this4.map = new maps.Map(node, mapConfig);

          evtNames.forEach(function (e) {
            _this4.listeners[e] = _this4.map.addListener(e, _this4.handleEvent(e));
          });
          maps.event.trigger(_this4.map, 'ready');
          _this4.forceUpdate();
        })();
      }
    }
  }, {
    key: 'handleEvent',
    value: function handleEvent(evtName) {
      var _this5 = this;

      var timeout = void 0;
      var handlerName = 'on' + (0, _String.camelize)(evtName);

      return function (e) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        timeout = setTimeout(function () {
          if (_this5.props[handlerName]) {
            _this5.props[handlerName](_this5.props, _this5.map, e);
          }
        }, 0);
      };
    }
  }, {
    key: 'recenterMap',
    value: function recenterMap() {
      var map = this.map;

      var google = this.props.google;

      var maps = google.maps;

      if (!google) return;

      if (map) {
        var center = this.state.currentLocation;
        if (!(center instanceof google.maps.LatLng)) {
          center = new google.maps.LatLng(center.lat, center.lng);
        }
        // map.panTo(center)
        map.setCenter(center);
        maps.event.trigger(map, 'recenter');
      }
    }
  }, {
    key: 'restyleMap',
    value: function restyleMap() {
      if (this.map) {
        var google = this.props.google;

        google.maps.event.trigger(this.map, 'resize');
      }
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this6 = this;

      var children = this.props.children;


      if (!children) return;

      return _react2.default.Children.map(children, function (c) {
        return _react2.default.cloneElement(c, {
          map: _this6.map,
          google: _this6.props.google,
          mapCenter: _this6.state.currentLocation
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var style = Object.assign({}, mapStyles.map, this.props.style, {
        display: this.props.visible ? 'inherit' : 'none'
      });

      var containerStyles = Object.assign({}, mapStyles.container, this.props.containerStyle);

      return _react2.default.createElement(
        'div',
        { style: containerStyles, className: this.props.className },
        _react2.default.createElement(
          'div',
          { style: style, ref: 'map' },
          'Loading map...'
        ),
        this.renderChildren()
      );
    }
  }]);

  return Map;
}(_react2.default.Component);

;

Map.propTypes = {
  google: _react.PropTypes.object,
  zoom: _react.PropTypes.number,
  centerAroundCurrentLocation: _react.PropTypes.bool,
  center: _react.PropTypes.object,
  initialCenter: _react.PropTypes.object,
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  containerStyle: _react.PropTypes.object,
  visible: _react.PropTypes.bool,
  mapType: _react.PropTypes.string,
  maxZoom: _react.PropTypes.number,
  minZoom: _react.PropTypes.number,
  clickableIcons: _react.PropTypes.bool,
  disableDefaultUI: _react.PropTypes.bool,
  zoomControl: _react.PropTypes.bool,
  mapTypeControl: _react.PropTypes.bool,
  scaleControl: _react.PropTypes.bool,
  streetViewControl: _react.PropTypes.bool,
  panControl: _react.PropTypes.bool,
  rotateControl: _react.PropTypes.bool,
  scrollwheel: _react.PropTypes.bool,
  draggable: _react.PropTypes.bool,
  keyboardShortcuts: _react.PropTypes.bool,
  disableDoubleClickZoom: _react.PropTypes.bool,
  noClear: _react.PropTypes.bool,
  styles: _react.PropTypes.array,
  gestureHandling: _react.PropTypes.string
};

evtNames.forEach(function (e) {
  return Map.propTypes[(0, _String.camelize)(e)] = _react.PropTypes.func;
});

Map.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: 37.774929,
    lng: -122.419416
  },
  center: {},
  centerAroundCurrentLocation: false,
  style: {},
  containerStyle: {},
  visible: true
};

exports.default = Map;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOlsid3JhcHBlciIsIk1hcmtlciIsIkluZm9XaW5kb3ciLCJIZWF0TWFwIiwibWFwU3R5bGVzIiwiY29udGFpbmVyIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsIm1hcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInRvcCIsImV2dE5hbWVzIiwiTWFwIiwicHJvcHMiLCJoYXNPd25Qcm9wZXJ0eSIsImxpc3RlbmVycyIsInN0YXRlIiwiY3VycmVudExvY2F0aW9uIiwibGF0IiwiaW5pdGlhbENlbnRlciIsImxuZyIsImNlbnRlckFyb3VuZEN1cnJlbnRMb2NhdGlvbiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2VvUHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicHJvbWlzZSIsInRoZW4iLCJjb29yZHMiLCJwb3MiLCJzZXRTdGF0ZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiY2F0Y2giLCJlIiwibG9hZE1hcCIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsImdvb2dsZSIsInZpc2libGUiLCJyZXN0eWxlTWFwIiwiem9vbSIsInNldFpvb20iLCJjZW50ZXIiLCJyZWNlbnRlck1hcCIsImNhbmNlbCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwibWFwcyIsImV2ZW50IiwicmVtb3ZlTGlzdGVuZXIiLCJtYXBSZWYiLCJyZWZzIiwibm9kZSIsImZpbmRET01Ob2RlIiwiY3VyciIsIkxhdExuZyIsIm1hcFR5cGVJZHMiLCJNYXBUeXBlSWQiLCJtYXBUeXBlRnJvbVByb3BzIiwiU3RyaW5nIiwibWFwVHlwZSIsInRvVXBwZXJDYXNlIiwibWFwQ29uZmlnIiwiYXNzaWduIiwibWFwVHlwZUlkIiwibWF4Wm9vbSIsIm1pblpvb20iLCJjbGlja2FibGVJY29ucyIsImRpc2FibGVEZWZhdWx0VUkiLCJ6b29tQ29udHJvbCIsIm1hcFR5cGVDb250cm9sIiwic2NhbGVDb250cm9sIiwic3RyZWV0Vmlld0NvbnRyb2wiLCJwYW5Db250cm9sIiwicm90YXRlQ29udHJvbCIsInNjcm9sbHdoZWVsIiwiZHJhZ2dhYmxlIiwia2V5Ym9hcmRTaG9ydGN1dHMiLCJkaXNhYmxlRG91YmxlQ2xpY2tab29tIiwibm9DbGVhciIsInN0eWxlcyIsImdlc3R1cmVIYW5kbGluZyIsImtleSIsImFkZExpc3RlbmVyIiwiaGFuZGxlRXZlbnQiLCJ0cmlnZ2VyIiwiZm9yY2VVcGRhdGUiLCJldnROYW1lIiwidGltZW91dCIsImhhbmRsZXJOYW1lIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInNldENlbnRlciIsImNoaWxkcmVuIiwiQ2hpbGRyZW4iLCJjbG9uZUVsZW1lbnQiLCJjIiwibWFwQ2VudGVyIiwic3R5bGUiLCJkaXNwbGF5IiwiY29udGFpbmVyU3R5bGVzIiwiY29udGFpbmVyU3R5bGUiLCJjbGFzc05hbWUiLCJyZW5kZXJDaGlsZHJlbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIm9iamVjdCIsIm51bWJlciIsImJvb2wiLCJzdHJpbmciLCJhcnJheSIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OytCQTRDUUEsTzs7Ozs7Ozs7O21CQUNBQyxNOzs7Ozs7Ozs7dUJBQ0FDLFU7Ozs7Ozs7OztvQkFDQUMsTzs7OztBQS9DUjs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1DLFlBQVk7QUFDaEJDLGFBQVc7QUFDVEMsY0FBVSxVQUREO0FBRVRDLFdBQU8sS0FGRTtBQUdUQyxZQUFRO0FBSEMsR0FESztBQU1oQkMsT0FBSztBQUNISCxjQUFVLFVBRFA7QUFFSEksVUFBTSxDQUZIO0FBR0hDLFdBQU8sQ0FISjtBQUlIQyxZQUFRLENBSkw7QUFLSEMsU0FBSztBQUxGO0FBTlcsQ0FBbEI7O0FBZUEsSUFBTUMsV0FBVyxDQUNmLE9BRGUsRUFFZixPQUZlLEVB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QUFDYkQsU0FBSyxTQURRO0FBRWJFLFNBQUssQ0FBQztBQUZPLEdBRkU7QUFNakIwQixVQUFRLEVBTlM7QUFPakJ6QiwrQkFBNkIsS0FQWjtBQVFqQmtGLFNBQU8sRUFSVTtBQVNqQkcsa0JBQWdCLEVBVEM7QUFVakJoRSxXQUFTO0FBVlEsQ0FBbkI7O2tCQWFlOUIsRyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyBUfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgY2FtZWxpemUgfSBmcm9tICcuL2xpYi9TdHJpbmcnXG5pbXBvcnQge21ha2VDYW5jZWxhYmxlfSBmcm9tICcuL2xpYi9jYW5jZWxhYmxlUHJvbWlzZSdcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50J1xuXG5jb25zdCBtYXBTdHlsZXMgPSB7XG4gIGNvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnNzAlJyxcbiAgICBoZWlnaHQ6ICc3MCUnXG4gIH0sXG4gIG1hcDoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHRvcDogMFxuICB9XG59XG5cbmNvbnN0IGV2dE5hbWVzID0gW1xuICAncmVhZHknLFxuICAnY2xpY2snLFxuICAnZHJhZ2VuZCcsXG4gICdyZWNlbnRlcicsXG4gICdib3VuZHNfY2hhbmdlZCcsXG4gICdjZW50ZXJfY2hhbmdlZCcsXG4gICdkYmxjbGljaycsXG4gICdkcmFnc3RhcnQnLFxuICAnaGVhZGluZ19jaGFuZ2UnLFxuICAnaWRsZScsXG4gICdtYXB0eXBlaWRfY2hhbmdlZCcsXG4gICdtb3VzZW1vdmUnLFxuICAnbW91c2VvdXQnLFxuICAnbW91c2VvdmVyJyxcbiAgJ3Byb2plY3Rpb25fY2hhbmdlZCcsXG4gICdyZXNpemUnLFxuICAncmlnaHRjbGljaycsXG4gICd0aWxlc2xvYWRlZCcsXG4gICd0aWx0X2NoYW5nZWQnLFxuICAnem9vbV9jaGFuZ2VkJ1xuXTtcblxuZXhwb3J0IHt3cmFwcGVyIGFzIEdvb2dsZUFwaVdyYXBwZXJ9IGZyb20gJy4vR29vZ2xlQXBpQ29tcG9uZW50J1xuZXhwb3J0IHtNYXJrZXJ9IGZyb20gJy4vY29tcG9uZW50cy9NYXJrZXInXG5leHBvcnQge0luZm9XaW5kb3d9IGZyb20gJy4vY29tcG9uZW50cy9JbmZvV2luZG93J1xuZXhwb3J0IHtIZWF0TWFwfSBmcm9tICcuL2NvbXBvbmVudHMvSGVhdE1hcCdcblxuZXhwb3J0IGNsYXNzIE1hcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgaW52YXJpYW50KHByb3BzLmhhc093blByb3BlcnR5KCdnb29nbGUnKSxcbiAgICAgICAgICAgICAgICAgICAgJ1lvdSBtdXN0IGluY2x1ZGUgYSBgZ29vZ2xlYCBwcm9wLicpO1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0ge31cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICBjdXJyZW50TG9jYXRpb246IHtcbiAgICAgICAgICAgIGxhdDogdGhpcy5wcm9wcy5pbml0aWFsQ2VudGVyLmxhdCxcbiAgICAgICAgICAgIGxuZzogdGhpcy5wcm9wcy5pbml0aWFsQ2VudGVyLmxuZ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuY2VudGVyQXJvdW5kQ3VycmVudExvY2F0aW9uKSB7XG4gICAgICAgIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgICAgdGhpcy5nZW9Qcm9taXNlID0gbWFrZUNhbmNlbGFibGUoXG4gICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmdlb1Byb21pc2UucHJvbWlzZS50aGVuKHBvcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb29yZHMgPSBwb3MuY29vcmRzO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGN1cnJlbnRMb2NhdGlvbjoge1xuICAgICAgICAgICAgICAgIGxhdDogY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgICAgICAgIGxuZzogY29vcmRzLmxvbmdpdHVkZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLmNhdGNoKGUgPT4gZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZE1hcCgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgaWYgKHByZXZQcm9wcy5nb29nbGUgIT09IHRoaXMucHJvcHMuZ29vZ2xlKSB7XG4gICAgICAgIHRoaXMubG9hZE1hcCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSAhPT0gcHJldlByb3BzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5yZXN0eWxlTWFwKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy56b29tICE9PSBwcmV2UHJvcHMuem9vbSkge1xuICAgICAgICB0aGlzLm1hcC5zZXRab29tKHRoaXMucHJvcHMuem9vbSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5wcm9wcy5jZW50ZXIgIT09IHByZXZQcm9wcy5jZW50ZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudExvY2F0aW9uOiB0aGlzLnByb3BzLmNlbnRlclxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgaWYgKHByZXZTdGF0ZS5jdXJyZW50TG9jYXRpb24gIT09IHRoaXMuc3RhdGUuY3VycmVudExvY2F0aW9uKSB7XG4gICAgICAgIHRoaXMucmVjZW50ZXJNYXAoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGNvbnN0IHtnb29nbGV9ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmICh0aGlzLmdlb1Byb21pc2UpIHtcbiAgICAgICAgdGhpcy5nZW9Qcm9taXNlLmNhbmNlbCgpO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmtleXModGhpcy5saXN0ZW5lcnMpLmZvckVhY2goZSA9PiB7XG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMubGlzdGVuZXJzW2VdKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRNYXAoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcyAmJiB0aGlzLnByb3BzLmdvb2dsZSkge1xuICAgICAgICBjb25zdCB7Z29vZ2xlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IG1hcHMgPSBnb29nbGUubWFwcztcblxuICAgICAgICBjb25zdCBtYXBSZWYgPSB0aGlzLnJlZnMubWFwO1xuICAgICAgICBjb25zdCBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUobWFwUmVmKTtcbiAgICAgICAgY29uc3QgY3VyciA9IHRoaXMuc3RhdGUuY3VycmVudExvY2F0aW9uO1xuICAgICAgICBjb25zdCBjZW50ZXIgPSBuZXcgbWFwcy5MYXRMbmcoY3Vyci5sYXQsIGN1cnIubG5nKTtcblxuICAgICAgICBjb25zdCBtYXBUeXBlSWRzID0gdGhpcy5wcm9wcy5nb29nbGUubWFwcy5NYXBUeXBlSWQgfHwge307XG4gICAgICAgIGNvbnN0IG1hcFR5cGVGcm9tUHJvcHMgPSBTdHJpbmcodGhpcy5wcm9wcy5tYXBUeXBlKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIGNvbnN0IG1hcENvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgICBtYXBUeXBlSWQ6IG1hcFR5cGVJZHNbbWFwVHlwZUZyb21Qcm9wc10sXG4gICAgICAgICAgY2VudGVyOiBjZW50ZXIsXG4gICAgICAgICAgem9vbTogdGhpcy5wcm9wcy56b29tLFxuICAgICAgICAgIG1heFpvb206IHRoaXMucHJvcHMubWF4Wm9vbSxcbiAgICAgICAgICBtaW5ab29tOiB0aGlzLnByb3BzLm1heFpvb20sXG4gICAgICAgICAgY2xpY2thYmxlSWNvbnM6IHRoaXMucHJvcHMuY2xpY2thYmxlSWNvbnMsXG4gICAgICAgICAgZGlzYWJsZURlZmF1bHRVSTogdGhpcy5wcm9wcy5kaXNhYmxlRGVmYXVsdFVJLFxuICAgICAgICAgIHpvb21Db250cm9sOiB0aGlzLnByb3BzLnpvb21Db250cm9sLFxuICAgICAgICAgIG1hcFR5cGVDb250cm9sOiB0aGlzLnByb3BzLm1hcFR5cGVDb250cm9sLFxuICAgICAgICAgIHNjYWxlQ29udHJvbDogdGhpcy5wcm9wcy5zY2FsZUNvbnRyb2wsXG4gICAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IHRoaXMucHJvcHMuc3RyZWV0Vmlld0NvbnRyb2wsXG4gICAgICAgICAgcGFuQ29udHJvbDogdGhpcy5wcm9wcy5wYW5Db250cm9sLFxuICAgICAgICAgIHJvdGF0ZUNvbnRyb2w6IHRoaXMucHJvcHMucm90YXRlQ29udHJvbCxcbiAgICAgICAgICBzY3JvbGx3aGVlbDogdGhpcy5wcm9wcy5zY3JvbGx3aGVlbCxcbiAgICAgICAgICBkcmFnZ2FibGU6IHRoaXMucHJvcHMuZHJhZ2dhYmxlLFxuICAgICAgICAgIGtleWJvYXJkU2hvcnRjdXRzOiB0aGlzLnByb3BzLmtleWJvYXJkU2hvcnRjdXRzLFxuICAgICAgICAgIGRpc2FibGVEb3VibGVDbGlja1pvb206IHRoaXMucHJvcHMuZGlzYWJsZURvdWJsZUNsaWNrWm9vbSxcbiAgICAgICAgICBub0NsZWFyOiB0aGlzLnByb3BzLm5vQ2xlYXIsXG4gICAgICAgICAgc3R5bGVzOiB0aGlzLnByb3BzLnN0eWxlcyxcbiAgICAgICAgICBnZXN0dXJlSGFuZGxpbmc6IHRoaXMucHJvcHMuZ2VzdHVyZUhhbmRsaW5nXG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKG1hcENvbmZpZykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgLy8gQWxsb3cgdG8gY29uZmlndXJlIG1hcENvbmZpZyB3aXRoICdmYWxzZSdcbiAgICAgICAgICBpZiAobWFwQ29uZmlnW2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgZGVsZXRlIG1hcENvbmZpZ1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tYXAgPSBuZXcgbWFwcy5NYXAobm9kZSwgbWFwQ29uZmlnKTtcblxuICAgICAgICBldnROYW1lcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2VdID0gdGhpcy5tYXAuYWRkTGlzdGVuZXIoZSwgdGhpcy5oYW5kbGVFdmVudChlKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBtYXBzLmV2ZW50LnRyaWdnZXIodGhpcy5tYXAsICdyZWFkeScpO1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlRXZlbnQoZXZ0TmFtZSkge1xuICAgICAgbGV0IHRpbWVvdXQ7XG4gICAgICBjb25zdCBoYW5kbGVyTmFtZSA9IGBvbiR7Y2FtZWxpemUoZXZ0TmFtZSl9YFxuXG4gICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzW2hhbmRsZXJOYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wc1toYW5kbGVyTmFtZV0odGhpcy5wcm9wcywgdGhpcy5tYXAsIGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVjZW50ZXJNYXAoKSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IHRoaXMubWFwO1xuXG4gICAgICAgIGNvbnN0IHtnb29nbGV9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgbWFwcyA9IGdvb2dsZS5tYXBzO1xuXG4gICAgICAgIGlmICghZ29vZ2xlKSByZXR1cm47XG5cbiAgICAgICAgaWYgKG1hcCkge1xuICAgICAgICAgIGxldCBjZW50ZXIgPSB0aGlzLnN0YXRlLmN1cnJlbnRMb2NhdGlvbjtcbiAgICAgICAgICBpZiAoIShjZW50ZXIgaW5zdGFuY2VvZiBnb29nbGUubWFwcy5MYXRMbmcpKSB7XG4gICAgICAgICAgICBjZW50ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGNlbnRlci5sYXQsIGNlbnRlci5sbmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBtYXAucGFuVG8oY2VudGVyKVxuICAgICAgICAgIG1hcC5zZXRDZW50ZXIoY2VudGVyKTtcbiAgICAgICAgICBtYXBzLmV2ZW50LnRyaWdnZXIobWFwLCAncmVjZW50ZXInKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzdHlsZU1hcCgpIHtcbiAgICAgIGlmICh0aGlzLm1hcCkge1xuICAgICAgICBjb25zdCB7Z29vZ2xlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIodGhpcy5tYXAsICdyZXNpemUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJDaGlsZHJlbigpIHtcbiAgICAgIGNvbnN0IHtjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBpZiAoIWNoaWxkcmVuKSByZXR1cm47XG5cbiAgICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGMgPT4ge1xuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsIHtcbiAgICAgICAgICBtYXA6IHRoaXMubWFwLFxuICAgICAgICAgIGdvb2dsZTogdGhpcy5wcm9wcy5nb29nbGUsXG4gICAgICAgICAgbWFwQ2VudGVyOiB0aGlzLnN0YXRlLmN1cnJlbnRMb2NhdGlvblxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qgc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBtYXBTdHlsZXMubWFwLCB0aGlzLnByb3BzLnN0eWxlLCB7XG4gICAgICAgIGRpc3BsYXk6IHRoaXMucHJvcHMudmlzaWJsZSA/ICdpbmhlcml0JyA6ICdub25lJ1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNvbnRhaW5lclN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe30sXG4gICAgICAgIG1hcFN0eWxlcy5jb250YWluZXIsIHRoaXMucHJvcHMuY29udGFpbmVyU3R5bGUpXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlc30gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IHJlZj0nbWFwJz5cbiAgICAgICAgICAgIExvYWRpbmcgbWFwLi4uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3RoaXMucmVuZGVyQ2hpbGRyZW4oKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxufTtcblxuTWFwLnByb3BUeXBlcyA9IHtcbiAgZ29vZ2xlOiBULm9iamVjdCxcbiAgem9vbTogVC5udW1iZXIsXG4gIGNlbnRlckFyb3VuZEN1cnJlbnRMb2NhdGlvbjogVC5ib29sLFxuICBjZW50ZXI6IFQub2JqZWN0LFxuICBpbml0aWFsQ2VudGVyOiBULm9iamVjdCxcbiAgY2xhc3NOYW1lOiBULnN0cmluZyxcbiAgc3R5bGU6IFQub2JqZWN0LFxuICBjb250YWluZXJTdHlsZTogVC5vYmplY3QsXG4gIHZpc2libGU6IFQuYm9vbCxcbiAgbWFwVHlwZTogVC5zdHJpbmcsXG4gIG1heFpvb206IFQubnVtYmVyLFxuICBtaW5ab29tOiBULm51bWJlcixcbiAgY2xpY2thYmxlSWNvbnM6IFQuYm9vbCxcbiAgZGlzYWJsZURlZmF1bHRVSTogVC5ib29sLFxuICB6b29tQ29udHJvbDogVC5ib29sLFxuICBtYXBUeXBlQ29udHJvbDogVC5ib29sLFxuICBzY2FsZUNvbnRyb2w6IFQuYm9vbCxcbiAgc3RyZWV0Vmlld0NvbnRyb2w6IFQuYm9vbCxcbiAgcGFuQ29udHJvbDogVC5ib29sLFxuICByb3RhdGVDb250cm9sOiBULmJvb2wsXG4gIHNjcm9sbHdoZWVsOiBULmJvb2wsXG4gIGRyYWdnYWJsZTogVC5ib29sLFxuICBrZXlib2FyZFNob3J0Y3V0czogVC5ib29sLFxuICBkaXNhYmxlRG91YmxlQ2xpY2tab29tOiBULmJvb2wsXG4gIG5vQ2xlYXI6IFQuYm9vbCxcbiAgc3R5bGVzOiBULmFycmF5LFxuICBnZXN0dXJlSGFuZGxpbmc6IFQuc3RyaW5nXG59XG5cbmV2dE5hbWVzLmZvckVhY2goZSA9PiBNYXAucHJvcFR5cGVzW2NhbWVsaXplKGUpXSA9IFQuZnVuYylcblxuTWFwLmRlZmF1bHRQcm9wcyA9IHtcbiAgem9vbTogMTQsXG4gIGluaXRpYWxDZW50ZXI6IHtcbiAgICBsYXQ6IDM3Ljc3NDkyOSxcbiAgICBsbmc6IC0xMjIuNDE5NDE2XG4gIH0sXG4gIGNlbnRlcjoge30sXG4gIGNlbnRlckFyb3VuZEN1cnJlbnRMb2NhdGlvbjogZmFsc2UsXG4gIHN0eWxlOiB7fSxcbiAgY29udGFpbmVyU3R5bGU6IHt9LFxuICB2aXNpYmxlOiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDsiXX0=