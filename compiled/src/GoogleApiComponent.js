'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wrapper = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ScriptCache = require('./lib/ScriptCache');

var _GoogleApi = require('./lib/GoogleApi');

var _GoogleApi2 = _interopRequireDefault(_GoogleApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultMapConfig = {};
var defaultCreateCache = function defaultCreateCache(options) {
    options = options || {};
    var apiKey = options.apiKey;
    var libraries = options.libraries || ['places'];
    var version = options.version || '3';

    return (0, _ScriptCache.ScriptCache)({
        google: (0, _GoogleApi2.default)({ apiKey: apiKey, libraries: libraries, version: version })
    });
};

var wrapper = exports.wrapper = function wrapper(options) {
    return function (WrappedComponent) {
        var apiKey = options.apiKey;
        var libraries = options.libraries || ['places'];
        var version = options.version || '3';
        var createCache = options.createCache || defaultCreateCache;

        var Wrapper = function (_React$Component) {
            _inherits(Wrapper, _React$Component);

            function Wrapper(props, context) {
                _classCallCheck(this, Wrapper);

                var _this = _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this, props, context));

                _this.scriptCache = createCache(options);
                _this.scriptCache.google.onLoad(_this.onLoad.bind(_this));

                _this.state = {
                    loaded: false,
                    map: null,
                    google: null
                };
                return _this;
            }

            _createClass(Wrapper, [{
                key: 'onLoad',
                value: function onLoad(err, tag) {
                    this._gapi = window.google;

                    this.setState({ loaded: true, google: this._gapi });
                }
            }, {
                key: 'render',
                value: function render() {
                    var props = Object.assign({}, this.props, {
                        loaded: this.state.loaded,
                        google: window.google
                    });

                    return _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(WrappedComponent, props),
                        _react2.default.createElement('div', { ref: 'map' })
                    );
                }
            }]);

            return Wrapper;
        }(_react2.default.Component);

        return Wrapper;
    };
};

exports.default = wrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Hb29nbGVBcGlDb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImRlZmF1bHRNYXBDb25maWciLCJkZWZhdWx0Q3JlYXRlQ2FjaGUiLCJvcHRpb25zIiwiYXBpS2V5IiwibGlicmFyaWVzIiwidmVyc2lvbiIsImdvb2dsZSIsIndyYXBwZXIiLCJXcmFwcGVkQ29tcG9uZW50IiwiY3JlYXRlQ2FjaGUiLCJXcmFwcGVyIiwicHJvcHMiLCJjb250ZXh0Iiwic2NyaXB0Q2FjaGUiLCJvbkxvYWQiLCJiaW5kIiwic3RhdGUiLCJsb2FkZWQiLCJtYXAiLCJlcnIiLCJ0YWciLCJfZ2FwaSIsIndpbmRvdyIsInNldFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLG1CQUFtQixFQUF6QjtBQUNBLElBQU1DLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQUNDLE9BQUQsRUFBYTtBQUNwQ0EsY0FBVUEsV0FBVyxFQUFyQjtBQUNBLFFBQU1DLFNBQVNELFFBQVFDLE1BQXZCO0FBQ0EsUUFBTUMsWUFBWUYsUUFBUUUsU0FBUixJQUFxQixDQUFDLFFBQUQsQ0FBdkM7QUFDQSxRQUFNQyxVQUFVSCxRQUFRRyxPQUFSLElBQW1CLEdBQW5DOztBQUVBLFdBQU8sOEJBQVk7QUFDZkMsZ0JBQVEseUJBQVUsRUFBQ0gsUUFBUUEsTUFBVCxFQUFpQkMsV0FBV0EsU0FBNUIsRUFBdUNDLFNBQVNBLE9BQWhELEVBQVY7QUFETyxLQUFaLENBQVA7QUFHSCxDQVREOztBQVdPLElBQU1FLDRCQUFVLFNBQVZBLE9BQVUsQ0FBQ0wsT0FBRDtBQUFBLFdBQWEsVUFBQ00sZ0JBQUQsRUFBc0I7QUFDdEQsWUFBTUwsU0FBU0QsUUFBUUMsTUFBdkI7QUFDQSxZQUFNQyxZQUFZRixRQUFRRSxTQUFSLElBQXFCLENBQUMsUUFBRCxDQUF2QztBQUNBLFlBQU1DLFVBQVVILFFBQVFHLE9BQVIsSUFBbUIsR0FBbkM7QUFDQSxZQUFNSSxjQUFjUCxRQUFRTyxXQUFSLElBQXVCUixrQkFBM0M7O0FBSnNELFlBTWhEUyxPQU5nRDtBQUFBOztBQU9sRCw2QkFBWUMsS0FBWixFQUFtQkMsT0FBbkIsRUFBNEI7QUFBQTs7QUFBQSw4SEFDbEJELEtBRGtCLEVBQ1hDLE9BRFc7O0FBR3hCLHNCQUFLQyxXQUFMLEdBQW1CSixZQUFZUCxPQUFaLENBQW5CO0FBQ0Esc0JBQUtXLFdBQUwsQ0FBaUJQLE1BQWpCLENBQXdCUSxNQUF4QixDQUErQixNQUFLQSxNQUFMLENBQVlDLElBQVosT0FBL0I7O0FBRUEsc0JBQUtDLEtBQUwsR0FBYTtBQUNUQyw0QkFBUSxLQURDO0FBRVRDLHlCQUFLLElBRkk7QUFHVFosNEJBQVE7QUFIQyxpQkFBYjtBQU53QjtBQVczQjs7QUFsQmlEO0FBQUE7QUFBQSx1Q0FvQjNDYSxHQXBCMkMsRUFvQnRDQyxHQXBCc0MsRUFvQmpDO0FBQ2IseUJBQUtDLEtBQUwsR0FBYUMsT0FBT2hCLE1BQXBCOztBQUVBLHlCQUFLaUIsUUFBTCxDQUFjLEVBQUNOLFFBQVEsSUFBVCxFQUFlWCxRQUFRLEtBQUtlLEtBQTVCLEVBQWQ7QUFDSDtBQXhCaUQ7QUFBQTtBQUFBLHlDQTBCekM7QUFDTCx3QkFBTVYsUUFBUWEsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS2QsS0FBdkIsRUFBOEI7QUFDeENNLGdDQUFRLEtBQUtELEtBQUwsQ0FBV0MsTUFEcUI7QUFFeENYLGdDQUFRZ0IsT0FBT2hCO0FBRnlCLHFCQUE5QixDQUFkOztBQUtBLDJCQUNJO0FBQUE7QUFBQTtBQUNJLHNEQUFDLGdCQUFELEVBQXNCSyxLQUF0QixDQURKO0FBRUksK0RBQUssS0FBSSxLQUFUO0FBRkoscUJBREo7QUFNSDtBQXRDaUQ7O0FBQUE7QUFBQSxVQU1oQyxnQkFBTWUsU0FOMEI7O0FBeUN0RCxlQUFPaEIsT0FBUDtBQUNILEtBMUNzQjtBQUFBLENBQWhCOztrQkE0Q1FILE8iLCJmaWxlIjoiR29vZ2xlQXBpQ29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIFR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcblxuaW1wb3J0IHtTY3JpcHRDYWNoZX0gZnJvbSAnLi9saWIvU2NyaXB0Q2FjaGUnXG5pbXBvcnQgR29vZ2xlQXBpIGZyb20gJy4vbGliL0dvb2dsZUFwaSdcblxuY29uc3QgZGVmYXVsdE1hcENvbmZpZyA9IHt9XG5jb25zdCBkZWZhdWx0Q3JlYXRlQ2FjaGUgPSAob3B0aW9ucykgPT4ge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGNvbnN0IGFwaUtleSA9IG9wdGlvbnMuYXBpS2V5O1xuICAgIGNvbnN0IGxpYnJhcmllcyA9IG9wdGlvbnMubGlicmFyaWVzIHx8IFsncGxhY2VzJ107XG4gICAgY29uc3QgdmVyc2lvbiA9IG9wdGlvbnMudmVyc2lvbiB8fCAnMyc7XG5cbiAgICByZXR1cm4gU2NyaXB0Q2FjaGUoe1xuICAgICAgICBnb29nbGU6IEdvb2dsZUFwaSh7YXBpS2V5OiBhcGlLZXksIGxpYnJhcmllczogbGlicmFyaWVzLCB2ZXJzaW9uOiB2ZXJzaW9ufSlcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gKG9wdGlvbnMpID0+IChXcmFwcGVkQ29tcG9uZW50KSA9PiB7XG4gICAgY29uc3QgYXBpS2V5ID0gb3B0aW9ucy5hcGlLZXk7XG4gICAgY29uc3QgbGlicmFyaWVzID0gb3B0aW9ucy5saWJyYXJpZXMgfHwgWydwbGFjZXMnXTtcbiAgICBjb25zdCB2ZXJzaW9uID0gb3B0aW9ucy52ZXJzaW9uIHx8ICczJztcbiAgICBjb25zdCBjcmVhdGVDYWNoZSA9IG9wdGlvbnMuY3JlYXRlQ2FjaGUgfHwgZGVmYXVsdENyZWF0ZUNhY2hlO1xuXG4gICAgY2xhc3MgV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2NyaXB0Q2FjaGUgPSBjcmVhdGVDYWNoZShvcHRpb25zKTtcbiAgICAgICAgICAgIHRoaXMuc2NyaXB0Q2FjaGUuZ29vZ2xlLm9uTG9hZCh0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKVxuXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWFwOiBudWxsLFxuICAgICAgICAgICAgICAgIGdvb2dsZTogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkKGVyciwgdGFnKSB7XG4gICAgICAgICAgICB0aGlzLl9nYXBpID0gd2luZG93Lmdvb2dsZTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGVkOiB0cnVlLCBnb29nbGU6IHRoaXMuX2dhcGl9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgICAgICAgbG9hZGVkOiB0aGlzLnN0YXRlLmxvYWRlZCxcbiAgICAgICAgICAgICAgICBnb29nbGU6IHdpbmRvdy5nb29nbGVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5wcm9wc30vPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj0nbWFwJy8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gV3JhcHBlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiXX0=