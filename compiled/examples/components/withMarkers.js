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
        zoom: 14 },
      _react2.default.createElement(_Marker2.default, {
        name: 'SOMA',
        position: { lat: 37.778519, lng: -122.405640 } }),
      _react2.default.createElement(_Marker2.default, {
        name: 'Dolores park',
        position: { lat: 37.759703, lng: -122.428093 } }),
      _react2.default.createElement(_Marker2.default, null)
    );
  }
});

exports.default = WithMarkers;

// const mountNode = document.querySelector('#root')
// ReactDOM.render(<Wrapped />, mountNode)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V4YW1wbGVzL2NvbXBvbmVudHMvd2l0aE1hcmtlcnMuanMiXSwibmFtZXMiOlsiV2l0aE1hcmtlcnMiLCJjcmVhdGVDbGFzcyIsInJlbmRlciIsInByb3BzIiwibG9hZGVkIiwiZ29vZ2xlIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsImxhdCIsImxuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxnQkFBTUMsV0FBTixDQUFrQjtBQUFBOztBQUNwQ0MsVUFBUSxrQkFBVztBQUNqQixRQUFJLENBQUMsS0FBS0MsS0FBTCxDQUFXQyxNQUFoQixFQUF3QjtBQUN0QixhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUDtBQUNEOztBQUVELFdBQ0U7QUFBQTtBQUFBLFFBQUssUUFBUSxLQUFLRCxLQUFMLENBQVdFLE1BQXhCO0FBQ0ksZUFBTyxFQUFDQyxPQUFPLE1BQVIsRUFBZ0JDLFFBQVEsTUFBeEIsRUFBZ0NDLFVBQVUsVUFBMUMsRUFEWDtBQUVJLG1CQUFXLEtBRmY7QUFHSSxjQUFNLEVBSFY7QUFJRTtBQUNFLGNBQU0sTUFEUjtBQUVFLGtCQUFVLEVBQUNDLEtBQUssU0FBTixFQUFpQkMsS0FBSyxDQUFDLFVBQXZCLEVBRlosR0FKRjtBQU9FO0FBQ0UsY0FBTSxjQURSO0FBRUUsa0JBQVUsRUFBQ0QsS0FBSyxTQUFOLEVBQWlCQyxLQUFLLENBQUMsVUFBdkIsRUFGWixHQVBGO0FBVUU7QUFWRixLQURGO0FBY0Q7QUFwQm1DLENBQWxCLENBQXBCOztrQkF1QmVWLFc7O0FBRWY7QUFDQSIsImZpbGUiOiJ3aXRoTWFya2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbmltcG9ydCBNYXAsIHtHb29nbGVBcGlXcmFwcGVyfSBmcm9tICcuLi8uLi9zcmMvaW5kZXgnXG5pbXBvcnQgTWFya2VyIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL01hcmtlcidcbmltcG9ydCBJbmZvV2luZG93IGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0luZm9XaW5kb3cnXG5cbmNvbnN0IFdpdGhNYXJrZXJzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5sb2FkZWQpIHtcbiAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1hcCBnb29nbGU9e3RoaXMucHJvcHMuZ29vZ2xlfVxuICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIHBvc2l0aW9uOiAncmVsYXRpdmUnfX1cbiAgICAgICAgICBjbGFzc05hbWU9eydtYXAnfVxuICAgICAgICAgIHpvb209ezE0fT5cbiAgICAgICAgPE1hcmtlclxuICAgICAgICAgIG5hbWU9eydTT01BJ31cbiAgICAgICAgICBwb3NpdGlvbj17e2xhdDogMzcuNzc4NTE5LCBsbmc6IC0xMjIuNDA1NjQwfX0gLz5cbiAgICAgICAgPE1hcmtlclxuICAgICAgICAgIG5hbWU9eydEb2xvcmVzIHBhcmsnfVxuICAgICAgICAgIHBvc2l0aW9uPXt7bGF0OiAzNy43NTk3MDMsIGxuZzogLTEyMi40MjgwOTN9fSAvPlxuICAgICAgICA8TWFya2VyIC8+XG4gICAgICA8L01hcD5cbiAgICApXG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBXaXRoTWFya2Vyc1xuXG4vLyBjb25zdCBtb3VudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpXG4vLyBSZWFjdERPTS5yZW5kZXIoPFdyYXBwZWQgLz4sIG1vdW50Tm9kZSkiXX0=