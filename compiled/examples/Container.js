'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _reactGithubForkRibbon = require('react-github-fork-ribbon');

var _reactGithubForkRibbon2 = _interopRequireDefault(_reactGithubForkRibbon);

var _stylesModule = require('./styles.module.css');

var _stylesModule2 = _interopRequireDefault(_stylesModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoogleApiWrapper = require('../src/index').GoogleApiWrapper;

var Container = exports.Container = _react2.default.createClass({
  displayName: 'Container',


  propTypes: {
    children: _react.PropTypes.element.isRequired
  },

  contextTypes: {
    router: _react.PropTypes.object
  },

  renderChildren: function renderChildren() {
    var children = this.props.children;

    if (!children) return;

    var sharedProps = {
      google: this.props.google,
      loaded: this.props.loaded
    };
    return _react2.default.Children.map(children, function (c) {
      return _react2.default.cloneElement(c, sharedProps, {});
    });
  },

  render: function render() {
    var _props = this.props,
        routeMap = _props.routeMap,
        routeDef = _props.routeDef;
    var router = this.context.router;


    var c = this.renderChildren();
    return _react2.default.createElement(
      'div',
      { className: _stylesModule2.default.container },
      _react2.default.createElement(
        _reactGithubForkRibbon2.default,
        { href: '//github.com/fullstackreact/google-maps-react',
          target: '_blank',
          position: 'right' },
        'Fork me on GitHub'
      ),
      _react2.default.createElement(
        'div',
        { className: _stylesModule2.default.wrapper },
        _react2.default.createElement(
          'div',
          { className: _stylesModule2.default.list },
          _react2.default.createElement(
            'ul',
            null,
            Object.keys(routeMap).map(function (key) {
              return _react2.default.createElement(
                _reactRouter.Link,
                { to: key,
                  activeClassName: _stylesModule2.default.active,
                  key: key },
                _react2.default.createElement(
                  'li',
                  null,
                  routeMap[key].name
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _stylesModule2.default.content },
          _react2.default.createElement(
            'div',
            { className: _stylesModule2.default.header },
            _react2.default.createElement(
              'h1',
              null,
              routeDef && routeDef.name,
              ' Example'
            ),
            _react2.default.createElement(
              'h2',
              null,
              _react2.default.createElement(
                'a',
                { href: 'https://github.com/fullstackreact/google-maps-react/blob/master/README.md' },
                'Readme'
              )
            )
          ),
          c
        )
      )
    );
  }
});

exports.default = GoogleApiWrapper({
  apiKey: __GAPI_KEY__,
  libraries: ['places', 'visualization']
})(Container);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2V4YW1wbGVzL0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJHb29nbGVBcGlXcmFwcGVyIiwicmVxdWlyZSIsIkNvbnRhaW5lciIsImNyZWF0ZUNsYXNzIiwicHJvcFR5cGVzIiwiY2hpbGRyZW4iLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsImNvbnRleHRUeXBlcyIsInJvdXRlciIsIm9iamVjdCIsInJlbmRlckNoaWxkcmVuIiwicHJvcHMiLCJzaGFyZWRQcm9wcyIsImdvb2dsZSIsImxvYWRlZCIsIkNoaWxkcmVuIiwibWFwIiwiY2xvbmVFbGVtZW50IiwiYyIsInJlbmRlciIsInJvdXRlTWFwIiwicm91dGVEZWYiLCJjb250ZXh0IiwiY29udGFpbmVyIiwid3JhcHBlciIsImxpc3QiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiYWN0aXZlIiwibmFtZSIsImNvbnRlbnQiLCJoZWFkZXIiLCJhcGlLZXkiLCJfX0dBUElfS0VZX18iLCJsaWJyYXJpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFLQTs7Ozs7O0FBSEEsSUFBSUEsbUJBQW1CQyxRQUFRLGNBQVIsRUFBd0JELGdCQUEvQzs7QUFLTyxJQUFNRSxnQ0FBWSxnQkFBTUMsV0FBTixDQUFrQjtBQUFBOzs7QUFFekNDLGFBQVc7QUFDVEMsY0FBVSxpQkFBRUMsT0FBRixDQUFVQztBQURYLEdBRjhCOztBQU16Q0MsZ0JBQWM7QUFDWkMsWUFBUSxpQkFBRUM7QUFERSxHQU4yQjs7QUFVekNDLGtCQUFnQiwwQkFBVztBQUFBLFFBQ2xCTixRQURrQixHQUNOLEtBQUtPLEtBREMsQ0FDbEJQLFFBRGtCOztBQUV6QixRQUFJLENBQUNBLFFBQUwsRUFBZTs7QUFFZixRQUFNUSxjQUFjO0FBQ2xCQyxjQUFRLEtBQUtGLEtBQUwsQ0FBV0UsTUFERDtBQUVsQkMsY0FBUSxLQUFLSCxLQUFMLENBQVdHO0FBRkQsS0FBcEI7QUFJQSxXQUFPLGdCQUFNQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJaLFFBQW5CLEVBQTZCLGFBQUs7QUFDdkMsYUFBTyxnQkFBTWEsWUFBTixDQUFtQkMsQ0FBbkIsRUFBc0JOLFdBQXRCLEVBQW1DLEVBQW5DLENBQVA7QUFHRCxLQUpNLENBQVA7QUFLRCxHQXZCd0M7O0FBeUJ6Q08sVUFBUSxrQkFBVztBQUFBLGlCQUNZLEtBQUtSLEtBRGpCO0FBQUEsUUFDVlMsUUFEVSxVQUNWQSxRQURVO0FBQUEsUUFDQUMsUUFEQSxVQUNBQSxRQURBO0FBQUEsUUFFVmIsTUFGVSxHQUVBLEtBQUtjLE9BRkwsQ0FFVmQsTUFGVTs7O0FBSWpCLFFBQU1VLElBQUksS0FBS1IsY0FBTCxFQUFWO0FBQ0EsV0FDRTtBQUFBO0FBQUEsUUFBSyxXQUFXLHVCQUFPYSxTQUF2QjtBQUNFO0FBQUE7QUFBQSxVQUFrQixNQUFLLCtDQUF2QjtBQUNVLGtCQUFPLFFBRGpCO0FBRVUsb0JBQVMsT0FGbkI7QUFBQTtBQUFBLE9BREY7QUFNRTtBQUFBO0FBQUEsVUFBSyxXQUFXLHVCQUFPQyxPQUF2QjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVcsdUJBQU9DLElBQXZCO0FBQ0U7QUFBQTtBQUFBO0FBQ0dDLG1CQUFPQyxJQUFQLENBQVlQLFFBQVosRUFBc0JKLEdBQXRCLENBQTBCLGVBQU87QUFDaEMscUJBQ0U7QUFBQTtBQUFBLGtCQUFNLElBQUlZLEdBQVY7QUFDTSxtQ0FBaUIsdUJBQU9DLE1BRDlCO0FBRU0sdUJBQUtELEdBRlg7QUFHRTtBQUFBO0FBQUE7QUFBS1IsMkJBQVNRLEdBQVQsRUFBY0U7QUFBbkI7QUFIRixlQURGO0FBT0QsYUFSQTtBQURIO0FBREYsU0FERjtBQWNFO0FBQUE7QUFBQSxZQUFLLFdBQVcsdUJBQU9DLE9BQXZCO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVyx1QkFBT0MsTUFBdkI7QUFDRTtBQUFBO0FBQUE7QUFBS1gsMEJBQVlBLFNBQVNTLElBQTFCO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGtCQUFHLE1BQUssMkVBQVI7QUFBQTtBQUFBO0FBQUo7QUFGRixXQURGO0FBS0daO0FBTEg7QUFkRjtBQU5GLEtBREY7QUErQkQ7QUE3RHdDLENBQWxCLENBQWxCOztrQkFnRVFuQixpQkFBaUI7QUFDOUJrQyxVQUFRQyxZQURzQjtBQUU5QkMsYUFBVyxDQUFDLFFBQUQsRUFBVSxlQUFWO0FBRm1CLENBQWpCLEVBR1psQyxTQUhZLEMiLCJmaWxlIjoiQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIFR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEdpdEh1YkZvcmtSaWJib24gZnJvbSAncmVhY3QtZ2l0aHViLWZvcmstcmliYm9uJ1xuXG5sZXQgR29vZ2xlQXBpV3JhcHBlciA9IHJlcXVpcmUoJy4uL3NyYy9pbmRleCcpLkdvb2dsZUFwaVdyYXBwZXJcblxuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY2hpbGRyZW46IFQuZWxlbWVudC5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgY29udGV4dFR5cGVzOiB7XG4gICAgcm91dGVyOiBULm9iamVjdFxuICB9LFxuXG4gIHJlbmRlckNoaWxkcmVuOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB7Y2hpbGRyZW59ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIWNoaWxkcmVuKSByZXR1cm47XG5cbiAgICBjb25zdCBzaGFyZWRQcm9wcyA9IHtcbiAgICAgIGdvb2dsZTogdGhpcy5wcm9wcy5nb29nbGUsXG4gICAgICBsb2FkZWQ6IHRoaXMucHJvcHMubG9hZGVkXG4gICAgfVxuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGMgPT4ge1xuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjLCBzaGFyZWRQcm9wcywge1xuXG4gICAgICB9KTtcbiAgICB9KVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qge3JvdXRlTWFwLCByb3V0ZURlZn0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtyb3V0ZXJ9ID0gdGhpcy5jb250ZXh0O1xuXG4gICAgY29uc3QgYyA9IHRoaXMucmVuZGVyQ2hpbGRyZW4oKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8R2l0SHViRm9ya1JpYmJvbiBocmVmPVwiLy9naXRodWIuY29tL2Z1bGxzdGFja3JlYWN0L2dvb2dsZS1tYXBzLXJlYWN0XCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJpZ2h0XCI+XG4gICAgICAgICAgRm9yayBtZSBvbiBHaXRIdWJcbiAgICAgICAgPC9HaXRIdWJGb3JrUmliYm9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtPYmplY3Qua2V5cyhyb3V0ZU1hcCkubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5hY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICAgIDxsaT57cm91dGVNYXBba2V5XS5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgPGgxPntyb3V0ZURlZiAmJiByb3V0ZURlZi5uYW1lfSBFeGFtcGxlPC9oMT5cbiAgICAgICAgICAgICAgPGgyPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZnVsbHN0YWNrcmVhY3QvZ29vZ2xlLW1hcHMtcmVhY3QvYmxvYi9tYXN0ZXIvUkVBRE1FLm1kXCI+UmVhZG1lPC9hPjwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtjfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlQXBpV3JhcHBlcih7XG4gIGFwaUtleTogX19HQVBJX0tFWV9fLFxuICBsaWJyYXJpZXM6IFsncGxhY2VzJywndmlzdWFsaXphdGlvbiddXG59KShDb250YWluZXIpXG4iXX0=