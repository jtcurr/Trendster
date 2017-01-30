'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _globalStyles = require('./global.styles.css');

var _globalStyles2 = _interopRequireDefault(_globalStyles);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routeMap = {
  'basic': {
    name: 'Simple',
    component: require('./components/basic').default
  },
  'markers': {
    name: 'Marker',
    component: require('./components/withMarkers').default
  },
  'clickable_markers': {
    name: 'Clickable markers',
    component: require('./components/clickableMarkers').default
  },
  'places': {
    name: 'Google places',
    component: require('./components/places').default
  },
  'autocomplete': {
    name: 'Autocomplete',
    component: require('./components/autocomplete').default
  },
  'heatMap': {
    name: 'Heat Map',
    component: require('./components/withHeatMap').default
  }
};

var createElement = function createElement(Component, props) {
  var pathname = props.location.pathname.replace('/', '');
  var routeDef = routeMap[pathname];
  var newProps = {
    routeMap: routeMap, pathname: pathname, routeDef: routeDef
  };
  return _react2.default.createElement(Component, _extends({}, newProps, props));
};

var routes = _react2.default.createElement(
  _reactRouter.Router,
  { createElement: createElement,
    history: _reactRouter.hashHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { component: _Container2.default,
      path: '/' },
    Object.keys(routeMap).map(function (key) {
      var r = routeMap[key];
      return _react2.default.createElement(_reactRouter.Route, {
        key: key,
        path: key,
        name: r.name,
        component: r.component });
    }),
    _react2.default.createElement(_reactRouter.IndexRoute, { component: routeMap['basic'].component })
  )
);

var mountNode = document.querySelector('#root');
if (mountNode) {
  _reactDom2.default.render(routes, mountNode);
} else {
  var hljs = require('highlight.js');

  var codes = document.querySelectorAll('pre code');
  for (var i = 0; i < codes.length; i++) {
    var block = codes[i];
    hljs.highlightBlock(block);
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2V4YW1wbGVzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJvdXRlTWFwIiwibmFtZSIsImNvbXBvbmVudCIsInJlcXVpcmUiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkNvbXBvbmVudCIsInByb3BzIiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJyb3V0ZURlZiIsIm5ld1Byb3BzIiwicm91dGVzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInIiLCJrZXkiLCJtb3VudE5vZGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJyZW5kZXIiLCJobGpzIiwiY29kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImJsb2NrIiwiaGlnaGxpZ2h0QmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVztBQUNmLFdBQVM7QUFDUEMsVUFBTSxRQURDO0FBRVBDLGVBQVdDLFFBQVEsb0JBQVIsRUFBOEJDO0FBRmxDLEdBRE07QUFLZixhQUFXO0FBQ1RILFVBQU0sUUFERztBQUVUQyxlQUFXQyxRQUFRLDBCQUFSLEVBQW9DQztBQUZ0QyxHQUxJO0FBU2YsdUJBQXFCO0FBQ25CSCxVQUFNLG1CQURhO0FBRW5CQyxlQUFXQyxRQUFRLCtCQUFSLEVBQXlDQztBQUZqQyxHQVROO0FBYWYsWUFBVTtBQUNSSCxVQUFNLGVBREU7QUFFUkMsZUFBV0MsUUFBUSxxQkFBUixFQUErQkM7QUFGbEMsR0FiSztBQWlCZixrQkFBZ0I7QUFDZEgsVUFBTSxjQURRO0FBRWRDLGVBQVdDLFFBQVEsMkJBQVIsRUFBcUNDO0FBRmxDLEdBakJEO0FBcUJmLGFBQVc7QUFDVEgsVUFBTSxVQURHO0FBRVRDLGVBQVdDLFFBQVEsMEJBQVIsRUFBb0NDO0FBRnRDO0FBckJJLENBQWpCOztBQTJCQSxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLFNBQUQsRUFBWUMsS0FBWixFQUFzQjtBQUMxQyxNQUFNQyxXQUFXRCxNQUFNRSxRQUFOLENBQWVELFFBQWYsQ0FBd0JFLE9BQXhCLENBQWdDLEdBQWhDLEVBQXFDLEVBQXJDLENBQWpCO0FBQ0EsTUFBTUMsV0FBV1gsU0FBU1EsUUFBVCxDQUFqQjtBQUNBLE1BQU1JLFdBQVc7QUFDZlosc0JBRGUsRUFDTFEsa0JBREssRUFDS0c7QUFETCxHQUFqQjtBQUdBLFNBQU8sOEJBQUMsU0FBRCxlQUFlQyxRQUFmLEVBQTZCTCxLQUE3QixFQUFQO0FBQ0QsQ0FQRDs7QUFTQSxJQUFNTSxTQUNKO0FBQUE7QUFBQSxJQUFRLGVBQWVSLGFBQXZCO0FBQ1EscUNBRFI7QUFFRTtBQUFBO0FBQUEsTUFBTyw4QkFBUDtBQUNPLFlBQUssR0FEWjtBQUVHUyxXQUFPQyxJQUFQLENBQVlmLFFBQVosRUFBc0JnQixHQUF0QixDQUEwQixlQUFPO0FBQ2hDLFVBQU1DLElBQUlqQixTQUFTa0IsR0FBVCxDQUFWO0FBQ0EsYUFBUTtBQUNBLGFBQUtBLEdBREw7QUFFQSxjQUFNQSxHQUZOO0FBR0EsY0FBTUQsRUFBRWhCLElBSFI7QUFJQSxtQkFBV2dCLEVBQUVmLFNBSmIsR0FBUjtBQUtELEtBUEEsQ0FGSDtBQVVFLDZEQUFZLFdBQVdGLFNBQVMsT0FBVCxFQUFrQkUsU0FBekM7QUFWRjtBQUZGLENBREY7O0FBa0JBLElBQU1pQixZQUFZQyxTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQWxCO0FBQ0EsSUFBSUYsU0FBSixFQUFlO0FBQ2IscUJBQVNHLE1BQVQsQ0FBZ0JULE1BQWhCLEVBQXdCTSxTQUF4QjtBQUNELENBRkQsTUFFTztBQUNMLE1BQU1JLE9BQU9wQixRQUFRLGNBQVIsQ0FBYjs7QUFFQSxNQUFNcUIsUUFBUUosU0FBU0ssZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FBZDtBQUNBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixNQUFNRyxNQUExQixFQUFrQ0QsR0FBbEMsRUFBdUM7QUFDckMsUUFBTUUsUUFBUUosTUFBTUUsQ0FBTixDQUFkO0FBQ0FILFNBQUtNLGNBQUwsQ0FBb0JELEtBQXBCO0FBQ0Q7QUFDRiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQge1JvdXRlciwgaGFzaEhpc3RvcnksIFJlZGlyZWN0LCBSb3V0ZSwgSW5kZXhSb3V0ZSwgTGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZ2xvYmFsLnN0eWxlcy5jc3MnO1xuXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQ29udGFpbmVyJ1xuXG5jb25zdCByb3V0ZU1hcCA9IHtcbiAgJ2Jhc2ljJzoge1xuICAgIG5hbWU6ICdTaW1wbGUnLFxuICAgIGNvbXBvbmVudDogcmVxdWlyZSgnLi9jb21wb25lbnRzL2Jhc2ljJykuZGVmYXVsdFxuICB9LFxuICAnbWFya2Vycyc6IHtcbiAgICBuYW1lOiAnTWFya2VyJyxcbiAgICBjb21wb25lbnQ6IHJlcXVpcmUoJy4vY29tcG9uZW50cy93aXRoTWFya2VycycpLmRlZmF1bHRcbiAgfSxcbiAgJ2NsaWNrYWJsZV9tYXJrZXJzJzoge1xuICAgIG5hbWU6ICdDbGlja2FibGUgbWFya2VycycsXG4gICAgY29tcG9uZW50OiByZXF1aXJlKCcuL2NvbXBvbmVudHMvY2xpY2thYmxlTWFya2VycycpLmRlZmF1bHRcbiAgfSxcbiAgJ3BsYWNlcyc6IHtcbiAgICBuYW1lOiAnR29vZ2xlIHBsYWNlcycsXG4gICAgY29tcG9uZW50OiByZXF1aXJlKCcuL2NvbXBvbmVudHMvcGxhY2VzJykuZGVmYXVsdFxuICB9LFxuICAnYXV0b2NvbXBsZXRlJzoge1xuICAgIG5hbWU6ICdBdXRvY29tcGxldGUnLFxuICAgIGNvbXBvbmVudDogcmVxdWlyZSgnLi9jb21wb25lbnRzL2F1dG9jb21wbGV0ZScpLmRlZmF1bHRcbiAgfSxcbiAgJ2hlYXRNYXAnOiB7XG4gICAgbmFtZTogJ0hlYXQgTWFwJyxcbiAgICBjb21wb25lbnQ6IHJlcXVpcmUoJy4vY29tcG9uZW50cy93aXRoSGVhdE1hcCcpLmRlZmF1bHRcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKENvbXBvbmVudCwgcHJvcHMpID0+IHtcbiAgY29uc3QgcGF0aG5hbWUgPSBwcm9wcy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKCcvJywgJycpXG4gIGNvbnN0IHJvdXRlRGVmID0gcm91dGVNYXBbcGF0aG5hbWVdO1xuICBjb25zdCBuZXdQcm9wcyA9IHtcbiAgICByb3V0ZU1hcCwgcGF0aG5hbWUsIHJvdXRlRGVmXG4gIH1cbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLm5ld1Byb3BzfSB7Li4ucHJvcHN9IC8+XG59XG5cbmNvbnN0IHJvdXRlcyA9IChcbiAgPFJvdXRlciBjcmVhdGVFbGVtZW50PXtjcmVhdGVFbGVtZW50fVxuICAgICAgICAgIGhpc3Rvcnk9e2hhc2hIaXN0b3J5fT5cbiAgICA8Um91dGUgY29tcG9uZW50PXtDb250YWluZXJ9XG4gICAgICAgICAgIHBhdGg9Jy8nPlxuICAgICAge09iamVjdC5rZXlzKHJvdXRlTWFwKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgY29uc3QgciA9IHJvdXRlTWFwW2tleV1cbiAgICAgICAgcmV0dXJuICg8Um91dGVcbiAgICAgICAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICBwYXRoPXtrZXl9XG4gICAgICAgICAgICAgICAgbmFtZT17ci5uYW1lfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17ci5jb21wb25lbnR9IC8+KVxuICAgICAgfSl9XG4gICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e3JvdXRlTWFwWydiYXNpYyddLmNvbXBvbmVudH0gLz5cbiAgICA8L1JvdXRlPlxuICA8L1JvdXRlcj5cbilcblxuY29uc3QgbW91bnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKVxuaWYgKG1vdW50Tm9kZSkge1xuICBSZWFjdERPTS5yZW5kZXIocm91dGVzLCBtb3VudE5vZGUpO1xufSBlbHNlIHtcbiAgY29uc3QgaGxqcyA9IHJlcXVpcmUoJ2hpZ2hsaWdodC5qcycpO1xuXG4gIGNvbnN0IGNvZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgncHJlIGNvZGUnKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGJsb2NrID0gY29kZXNbaV1cbiAgICBobGpzLmhpZ2hsaWdodEJsb2NrKGJsb2NrKTtcbiAgfVxufSJdfQ==