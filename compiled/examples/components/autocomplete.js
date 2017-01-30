'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require('../../src/index');

var _index2 = _interopRequireDefault(_index);

var _autocompleteModule = require('./autocomplete.module.css');

var _autocompleteModule2 = _interopRequireDefault(_autocompleteModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contents = _react2.default.createClass({
  displayName: 'Contents',
  getInitialState: function getInitialState() {
    return {
      place: null,
      position: null
    };
  },


  onSubmit: function onSubmit(e) {
    e.preventDefault();
  },

  componentDidMount: function componentDidMount() {
    this.renderAutoComplete();
  },

  componentDidUpdate: function componentDidUpdate(prevProps) {
    var _props = this.props,
        google = _props.google,
        map = _props.map;

    if (map !== prevProps.map) {
      this.renderAutoComplete();
    }
  },


  renderAutoComplete: function renderAutoComplete() {
    var _this = this;

    var _props2 = this.props,
        google = _props2.google,
        map = _props2.map;


    if (!google || !map) return;

    var aref = this.refs.autocomplete;
    var node = _reactDom2.default.findDOMNode(aref);
    var autocomplete = new google.maps.places.Autocomplete(node);
    autocomplete.bindTo('bounds', map);

    autocomplete.addListener('place_changed', function () {
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        return;
      }

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      _this.setState({
        place: place,
        position: place.geometry.location
      });
    });
  },

  render: function render() {
    var props = this.props;
    var position = this.state.position;


    return _react2.default.createElement(
      'div',
      { className: _autocompleteModule2.default.flexWrapper },
      _react2.default.createElement(
        'div',
        { className: _autocompleteModule2.default.left },
        _react2.default.createElement(
          'form',
          { onSubmit: this.onSubmit },
          _react2.default.createElement('input', {
            ref: 'autocomplete',
            type: 'text',
            placeholder: 'Enter a location' }),
          _react2.default.createElement('input', {
            className: _autocompleteModule2.default.button,
            type: 'submit',
            value: 'Go' })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            null,
            'Lat: ',
            position && position.lat()
          ),
          _react2.default.createElement(
            'div',
            null,
            'Lng: ',
            position && position.lng()
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: _autocompleteModule2.default.right },
        _react2.default.createElement(
          _index2.default,
          _extends({}, props, {
            containerStyle: {
              position: 'relative',
              height: '100vh',
              width: '100%'
            },
            center: this.state.position,
            centerAroundCurrentLocation: false }),
          _react2.default.createElement(_index.Marker, { position: this.state.position })
        )
      )
    );
  }
});

var MapWrapper = _react2.default.createClass({
  displayName: 'MapWrapper',

  render: function render() {
    var props = this.props;
    var google = this.props.google;


    return _react2.default.createElement(
      _index2.default,
      { google: google,
        className: 'map',
        visible: false },
      _react2.default.createElement(Contents, props)
    );
  }
});

exports.default = MapWrapper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V4YW1wbGVzL2NvbXBvbmVudHMvYXV0b2NvbXBsZXRlLmpzIl0sIm5hbWVzIjpbIkNvbnRlbnRzIiwiY3JlYXRlQ2xhc3MiLCJnZXRJbml0aWFsU3RhdGUiLCJwbGFjZSIsInBvc2l0aW9uIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlckF1dG9Db21wbGV0ZSIsImNvbXBvbmVudERpZFVwZGF0ZSIsInByZXZQcm9wcyIsInByb3BzIiwiZ29vZ2xlIiwibWFwIiwiYXJlZiIsInJlZnMiLCJhdXRvY29tcGxldGUiLCJub2RlIiwiZmluZERPTU5vZGUiLCJtYXBzIiwicGxhY2VzIiwiQXV0b2NvbXBsZXRlIiwiYmluZFRvIiwiYWRkTGlzdGVuZXIiLCJnZXRQbGFjZSIsImdlb21ldHJ5Iiwidmlld3BvcnQiLCJmaXRCb3VuZHMiLCJzZXRDZW50ZXIiLCJsb2NhdGlvbiIsInNldFpvb20iLCJzZXRTdGF0ZSIsInJlbmRlciIsInN0YXRlIiwiZmxleFdyYXBwZXIiLCJsZWZ0IiwiYnV0dG9uIiwibGF0IiwibG5nIiwicmlnaHQiLCJoZWlnaHQiLCJ3aWR0aCIsIk1hcFdyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLFdBQVcsZ0JBQU1DLFdBQU4sQ0FBa0I7QUFBQTtBQUNqQ0MsaUJBRGlDLDZCQUNmO0FBQ2hCLFdBQU87QUFDTEMsYUFBTyxJQURGO0FBRUxDLGdCQUFVO0FBRkwsS0FBUDtBQUlELEdBTmdDOzs7QUFRakNDLFlBQVUsa0JBQVNDLENBQVQsRUFBWTtBQUNwQkEsTUFBRUMsY0FBRjtBQUNELEdBVmdDOztBQVlqQ0MscUJBQW1CLDZCQUFXO0FBQzVCLFNBQUtDLGtCQUFMO0FBQ0QsR0FkZ0M7O0FBZ0JqQ0Msb0JBaEJpQyw4QkFnQmRDLFNBaEJjLEVBZ0JIO0FBQUEsaUJBQ04sS0FBS0Ms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LEtBRkwsQ0FFVkMsTUFGVTs7O0FBSWpCLFdBQ0U7QUFBQTtBQUFBLFFBQUssUUFBUUEsTUFBYjtBQUNJLG1CQUFXLEtBRGY7QUFFSSxpQkFBUyxLQUZiO0FBR00sb0NBQUMsUUFBRCxFQUFjRCxLQUFkO0FBSE4sS0FERjtBQU9EO0FBWmtDLENBQWxCLENBQW5COztrQkFlZStCLFUiLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcblxuaW1wb3J0IE1hcCwge01hcmtlciwgR29vZ2xlQXBpV3JhcHBlcn0gZnJvbSAnLi4vLi4vc3JjL2luZGV4J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2F1dG9jb21wbGV0ZS5tb2R1bGUuY3NzJ1xuXG5jb25zdCBDb250ZW50cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwbGFjZTogbnVsbCxcbiAgICAgIHBvc2l0aW9uOiBudWxsXG4gICAgfVxuICB9LFxuXG4gIG9uU3VibWl0OiBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbmRlckF1dG9Db21wbGV0ZSgpO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBjb25zdCB7Z29vZ2xlLCBtYXB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAobWFwICE9PSBwcmV2UHJvcHMubWFwKSB7XG4gICAgICB0aGlzLnJlbmRlckF1dG9Db21wbGV0ZSgpO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXJBdXRvQ29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHtnb29nbGUsIG1hcH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFnb29nbGUgfHwgIW1hcCkgcmV0dXJuO1xuXG4gICAgY29uc3QgYXJlZiA9IHRoaXMucmVmcy5hdXRvY29tcGxldGU7XG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGFyZWYpO1xuICAgIHZhciBhdXRvY29tcGxldGUgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShub2RlKTtcbiAgICBhdXRvY29tcGxldGUuYmluZFRvKCdib3VuZHMnLCBtYXApO1xuXG4gICAgYXV0b2NvbXBsZXRlLmFkZExpc3RlbmVyKCdwbGFjZV9jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgY29uc3QgcGxhY2UgPSBhdXRvY29tcGxldGUuZ2V0UGxhY2UoKTtcbiAgICAgIGlmICghcGxhY2UuZ2VvbWV0cnkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAocGxhY2UuZ2VvbWV0cnkudmlld3BvcnQpIHtcbiAgICAgICAgbWFwLmZpdEJvdW5kcyhwbGFjZS5nZW9tZXRyeS52aWV3cG9ydCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXAuc2V0Q2VudGVyKHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uKTtcbiAgICAgICAgbWFwLnNldFpvb20oMTcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcGxhY2U6IHBsYWNlLFxuICAgICAgICBwb3NpdGlvbjogcGxhY2UuZ2VvbWV0cnkubG9jYXRpb25cbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7cG9zaXRpb259ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhXcmFwcGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcmVmPSdhdXRvY29tcGxldGUnXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIGxvY2F0aW9uXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcbiAgICAgICAgICAgICAgdmFsdWU9J0dvJyAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5MYXQ6IHtwb3NpdGlvbiAmJiBwb3NpdGlvbi5sYXQoKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+TG5nOiB7cG9zaXRpb24gJiYgcG9zaXRpb24ubG5nKCl9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cbiAgICAgICAgICA8TWFwIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAgY29udGFpbmVyU3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjZW50ZXI9e3RoaXMuc3RhdGUucG9zaXRpb259XG4gICAgICAgICAgICAgIGNlbnRlckFyb3VuZEN1cnJlbnRMb2NhdGlvbj17ZmFsc2V9PlxuICAgICAgICAgICAgICAgIDxNYXJrZXIgcG9zaXRpb249e3RoaXMuc3RhdGUucG9zaXRpb259IC8+XG4gICAgICAgICAgPC9NYXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KVxuXG5jb25zdCBNYXBXcmFwcGVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7Z29vZ2xlfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1hcCBnb29nbGU9e2dvb2dsZX1cbiAgICAgICAgICBjbGFzc05hbWU9eydtYXAnfVxuICAgICAgICAgIHZpc2libGU9e2ZhbHNlfT5cbiAgICAgICAgICAgIDxDb250ZW50cyB7Li4ucHJvcHN9IC8+XG4gICAgICA8L01hcD5cbiAgICApO1xuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBNYXBXcmFwcGVyIl19