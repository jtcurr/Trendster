'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoWindow = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoWindow = exports.InfoWindow = function (_React$Component) {
  _inherits(InfoWindow, _React$Component);

  function InfoWindow() {
    _classCallCheck(this, InfoWindow);

    return _possibleConstructorReturn(this, (InfoWindow.__proto__ || Object.getPrototypeOf(InfoWindow)).apply(this, arguments));
  }

  _createClass(InfoWindow, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderInfoWindow();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          google = _props.google,
          map = _props.map;


      if (!google || !map) {
        return;
      }

      if (map !== prevProps.map) {
        this.renderInfoWindow();
      }

      if (this.props.children !== prevProps.children) {
        this.updateContent();
      }

      if (this.props.visible !== prevProps.visible || this.props.marker !== prevProps.marker) {
        this.props.visible ? this.openWindow() : this.closeWindow();
      }
    }
  }, {
    key: 'renderInfoWindow',
    value: function renderInfoWindow() {
      var _props2 = this.props,
          map = _props2.map,
          google = _props2.google,
          mapCenter = _props2.mapCenter;


      if (!google || !google.maps) {
        return;
      }

      var iw = this.infowindow = new google.maps.InfoWindow({
        content: ''
      });

      google.maps.event.addListener(iw, 'closeclick', this.onClose.bind(this));
      google.maps.event.addListener(iw, 'domready', this.onOpen.bind(this));
    }
  }, {
    key: 'onOpen',
    value: function onOpen() {
      if (this.props.onOpen) {
        this.props.onOpen();
      }
    }
  }, {
    key: 'onClose',
    value: function onClose() {
      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: 'openWindow',
    value: function openWindow() {
      this.infowindow.open(this.props.map, this.props.marker);
    }
  }, {
    key: 'updateContent',
    value: function updateContent() {
      var content = this.renderChildren();
      this.infowindow.setContent(content);
    }
  }, {
    key: 'closeWindow',
    value: function closeWindow() {
      this.infowindow.close();
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var children = this.props.children;

      return _server2.default.renderToString(children);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return InfoWindow;
}(_react2.default.Component);

InfoWindow.propTypes = {
  children: _react.PropTypes.element.isRequired,
  map: _react.PropTypes.object,
  marker: _react.PropTypes.object,
  visible: _react.PropTypes.bool,

  // callbacks
  onClose: _react.PropTypes.func,
  onOpen: _react.PropTypes.func
};

InfoWindow.defaultProps = {
  visible: false
};

exports.default = InfoWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0luZm9XaW5kb3cuanMiXSwibmFtZXMiOlsiSW5mb1dpbmRvdyIsInJlbmRlckluZm9XaW5kb3ciLCJwcmV2UHJvcHMiLCJwcm9wcyIsImdvb2dsZSIsIm1hcCIsImNoaWxkcmVuIiwidXBkYXRlQ29udGVudCIsInZpc2libGUiLCJtYXJrZXIiLCJvcGVuV2luZG93IiwiY2xvc2VXaW5kb3ciLCJtYXBDZW50ZXIiLCJtYXBzIiwiaXciLCJpbmZvd2luZG93IiwiY29udGVudCIsImV2ZW50IiwiYWRkTGlzdGVuZXIiLCJvbkNsb3NlIiwiYmluZCIsIm9uT3BlbiIsIm9wZW4iLCJyZW5kZXJDaGlsZHJlbiIsInNldENvbnRlbnQiLCJjbG9zZSIsInJlbmRlclRvU3RyaW5nIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiZWxlbWVudCIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJib29sIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFYUEsVSxXQUFBQSxVOzs7Ozs7Ozs7Ozt3Q0FFUztBQUNsQixXQUFLQyxnQkFBTDtBQUNEOzs7dUNBRWtCQyxTLEVBQVc7QUFBQSxtQkFDTixLQUFLQyxLQURDO0FBQUEsVUFDckJDLE1BRHFCLFVBQ3JCQSxNQURxQjtBQUFBLFVBQ2JDLEdBRGEsVUFDYkEsR0FEYTs7O0FBRzVCLFVBQUksQ0FBQ0QsTUFBRCxJQUFXLENBQUNDLEdBQWhCLEVBQXFCO0FBQ25CO0FBQ0Q7O0FBRUQsVUFBSUEsUUFBUUgsVUFBVUcsR0FBdEIsRUFBMkI7QUFDekIsYUFBS0osZ0JBQUw7QUFDRDs7QUFFRCxVQUFJLEtBQUtFLEtBQUwsQ0FBV0csUUFBWCxLQUF3QkosVUFBVUksUUFBdEMsRUFBZ0Q7QUFDOUMsYUFBS0MsYUFBTDtBQUNEOztBQUVELFVBQUssS0FBS0osS0FBTCxDQUFXSyxPQUFYLEtBQXVCTixVQUFVTSxPQUFqQyxJQUNELEtBQUtMLEtBQUwsQ0FBV00sTUFBWCxLQUFzQlAsVUFBVU8sTUFEcEMsRUFDNkM7QUFDekMsYUFBS04sS0FBTCxDQUFXSyxPQUFYLEdBQ0UsS0FBS0UsVUFBTCxFQURGLEdBRUUsS0FBS0MsV0FBTCxFQUZGO0FBR0g7QUFDRjs7O3VDQUVrQjtBQUFBLG9CQUNjLEtBQUtSLEtBRG5CO0FBQUEsVUFDWkUsR0FEWSxXQUNaQSxHQURZO0FBQUEsVUFDUEQsTUFETyxXQUNQQSxNQURPO0FBQUEsVUFDQ1EsU0FERCxXQUNDQSxTQUREOzs7QUFHakIsVUFBSSxDQUFDUixNQUFELElBQVcsQ0FBQ0EsT0FBT1MsSUFBdkIsRUFBNkI7QUFDM0I7QUFDRDs7QUFFRCxVQUFNQyxLQUFLLEtBQUtDLFVBQUwsR0FBa0IsSUFBSVgsT0FBT1MsSUFBUCxDQUFZYixVQUFoQixDQUEyQjtBQUN0RGdCLGlCQUFTO0FBRDZDLE9BQTNCLENBQTdCOztBQUlBWixhQUFPUyxJQUFQLENBQVlJLEtBQVosQ0FDR0MsV0FESCxDQUNlSixFQURmLEVBQ21CLFlBRG5CLEVBQ2lDLEtBQUtLLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixJQUFsQixDQURqQztBQUVBaEIsYUFBT1MsSUFBUCxDQUFZSSxLQUFaLENBQ0dDLFdBREgsQ0FDZUosRUFEZixFQUNtQixVQURuQixFQUMrQixLQUFLTyxNQUFMLENBQVlELElBQVosQ0FBaUIsSUFBakIsQ0FEL0I7QUFFRDs7OzZCQUVRO0FBQ1AsVUFBSSxLQUFLakIsS0FBTCxDQUFXa0IsTUFBZixFQUF1QjtBQUNyQixhQUFLbEIsS0FBTCxDQUFXa0IsTUFBWDtBQUNEO0FBQ0Y7Ozs4QkFFUztBQUNSLFVBQUksS0FBS2xCLEtBQUwsQ0FBV2dCLE9BQWYsRUFBd0I7QUFDdEIsYUFBS2hCLEtBQUwsQ0FBV2dCLE9BQVg7QUFDRDtBQUNGOzs7aUNBRVk7QUFDWCxXQUFLSixVQUFMLENBQWdCTyxJQUFoQixDQUFxQixLQUFLbkIsS0FBTCxDQUFXRSxHQUFoQyxFQUFxQyxLQUFLRixLQUFMLENBQVdNLE1BQWhEO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1PLFVBQVUsS0FBS08sY0FBTCxFQUFoQjtBQUNBLFdBQUtSLFVBQUwsQ0FBZ0JTLFVBQWhCLENBQTJCUixPQUEzQjtBQUNEOzs7a0NBRWE7QUFDWixXQUFLRCxVQUFMLENBQWdCVSxLQUFoQjtBQUNEOzs7cUNBRWdCO0FBQUEsVUFDUm5CLFFBRFEsR0FDSSxLQUFLSCxLQURULENBQ1JHLFFBRFE7O0FBRWYsYUFBTyxpQkFBZW9CLGNBQWYsQ0FBOEJwQixRQUE5QixDQUFQO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQU8sSUFBUDtBQUNEOzs7O0VBOUU2QixnQkFBTXFCLFM7O0FBaUZ0QzNCLFdBQVc0QixTQUFYLEdBQXVCO0FBQ3JCdEIsWUFBVSxpQkFBRXVCLE9BQUYsQ0FBVUMsVUFEQztBQUVyQnpCLE9BQUssaUJBQUUwQixNQUZjO0FBR3JCdEIsVUFBUSxpQkFBRXNCLE1BSFc7QUFJckJ2QixXQUFTLGlCQUFFd0IsSUFKVTs7QUFNckI7QUFDQWIsV0FBUyxpQkFBRWMsSUFQVTtBQVFyQlosVUFBUSxpQkFBRVk7QUFSVyxDQUF2Qjs7QUFXQWpDLFdBQVdrQyxZQUFYLEdBQTBCO0FBQ3hCMUIsV0FBUztBQURlLENBQTFCOztrQkFJZVIsVSIsImZpbGUiOiJJbmZvV2luZG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyBhcyBUIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInXG5cbmV4cG9ydCBjbGFzcyBJbmZvV2luZG93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlbmRlckluZm9XaW5kb3coKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBjb25zdCB7Z29vZ2xlLCBtYXB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghZ29vZ2xlIHx8ICFtYXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobWFwICE9PSBwcmV2UHJvcHMubWFwKSB7XG4gICAgICB0aGlzLnJlbmRlckluZm9XaW5kb3coKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jaGlsZHJlbiAhPT0gcHJldlByb3BzLmNoaWxkcmVuKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQoKTtcbiAgICB9XG5cbiAgICBpZiAoKHRoaXMucHJvcHMudmlzaWJsZSAhPT0gcHJldlByb3BzLnZpc2libGUgfHxcbiAgICAgICAgdGhpcy5wcm9wcy5tYXJrZXIgIT09IHByZXZQcm9wcy5tYXJrZXIpKSB7XG4gICAgICAgIHRoaXMucHJvcHMudmlzaWJsZSA/XG4gICAgICAgICAgdGhpcy5vcGVuV2luZG93KCkgOlxuICAgICAgICAgIHRoaXMuY2xvc2VXaW5kb3coKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJJbmZvV2luZG93KCkge1xuICAgIGxldCB7bWFwLCBnb29nbGUsIG1hcENlbnRlcn0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFnb29nbGUgfHwgIWdvb2dsZS5tYXBzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXcgPSB0aGlzLmluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG4gICAgICBjb250ZW50OiAnJ1xuICAgIH0pO1xuXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnRcbiAgICAgIC5hZGRMaXN0ZW5lcihpdywgJ2Nsb3NlY2xpY2snLCB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKSlcbiAgICBnb29nbGUubWFwcy5ldmVudFxuICAgICAgLmFkZExpc3RlbmVyKGl3LCAnZG9tcmVhZHknLCB0aGlzLm9uT3Blbi5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbk9wZW4pIHtcbiAgICAgIHRoaXMucHJvcHMub25PcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgb25DbG9zZSgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsb3NlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBvcGVuV2luZG93KCkge1xuICAgIHRoaXMuaW5mb3dpbmRvdy5vcGVuKHRoaXMucHJvcHMubWFwLCB0aGlzLnByb3BzLm1hcmtlcik7XG4gIH1cblxuICB1cGRhdGVDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnJlbmRlckNoaWxkcmVuKCk7XG4gICAgdGhpcy5pbmZvd2luZG93LnNldENvbnRlbnQoY29udGVudCk7XG4gIH1cblxuICBjbG9zZVdpbmRvdygpIHtcbiAgICB0aGlzLmluZm93aW5kb3cuY2xvc2UoKTtcbiAgfVxuXG4gIHJlbmRlckNoaWxkcmVuKCkge1xuICAgIGNvbnN0IHtjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZyhjaGlsZHJlbik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuSW5mb1dpbmRvdy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBULmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgbWFwOiBULm9iamVjdCxcbiAgbWFya2VyOiBULm9iamVjdCxcbiAgdmlzaWJsZTogVC5ib29sLFxuXG4gIC8vIGNhbGxiYWNrc1xuICBvbkNsb3NlOiBULmZ1bmMsXG4gIG9uT3BlbjogVC5mdW5jXG59XG5cbkluZm9XaW5kb3cuZGVmYXVsdFByb3BzID0ge1xuICB2aXNpYmxlOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmZvV2luZG93Il19