'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GoogleApi = undefined;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoogleApi = exports.GoogleApi = function GoogleApi(opts) {
    opts = opts || {};

    (0, _invariant2.default)(opts.hasOwnProperty('apiKey'), 'You must pass an apiKey to use GoogleApi');

    var apiKey = opts.apiKey;
    var libraries = opts.libraries || ['places'];
    var client = opts.client;
    var URL = 'https://maps.googleapis.com/maps/api/js';

    var googleVersion = opts.version || '3';

    var script = null;
    var google = window.google || null;
    var loading = false;
    var channel = null;
    var language = null;
    var region = null;

    var onLoadEvents = [];

    var url = function url() {
        var url = URL;
        var params = {
            key: apiKey,
            callback: 'CALLBACK_NAME',
            libraries: libraries.join(','),
            client: client,
            v: googleVersion,
            channel: channel,
            language: language,
            region: region
        };

        var paramStr = Object.keys(params).filter(function (k) {
            return !!params[k];
        }).map(function (k) {
            return k + '=' + params[k];
        }).join('&');

        return url + '?' + paramStr;
    };

    return url();
};

exports.default = GoogleApi;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvR29vZ2xlQXBpLmpzIl0sIm5hbWVzIjpbIkdvb2dsZUFwaSIsIm9wdHMiLCJoYXNPd25Qcm9wZXJ0eSIsImFwaUtleSIsImxpYnJhcmllcyIsImNsaWVudCIsIlVSTCIsImdvb2dsZVZlcnNpb24iLCJ2ZXJzaW9uIiwic2NyaXB0IiwiZ29vZ2xlIiwid2luZG93IiwibG9hZGluZyIsImNoYW5uZWwiLCJsYW5ndWFnZSIsInJlZ2lvbiIsIm9uTG9hZEV2ZW50cyIsInVybCIsInBhcmFtcyIsImtleSIsImNhbGxiYWNrIiwiam9pbiIsInYiLCJwYXJhbVN0ciIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVPLElBQU1BLGdDQUFZLFNBQVpBLFNBQVksQ0FBU0MsSUFBVCxFQUFlO0FBQ3BDQSxXQUFPQSxRQUFRLEVBQWY7O0FBRUEsNkJBQVVBLEtBQUtDLGNBQUwsQ0FBb0IsUUFBcEIsQ0FBVixFQUNVLDBDQURWOztBQUdBLFFBQU1DLFNBQVNGLEtBQUtFLE1BQXBCO0FBQ0EsUUFBTUMsWUFBWUgsS0FBS0csU0FBTCxJQUFrQixDQUFDLFFBQUQsQ0FBcEM7QUFDQSxRQUFNQyxTQUFTSixLQUFLSSxNQUFwQjtBQUNBLFFBQU1DLE1BQU0seUNBQVo7O0FBRUEsUUFBTUMsZ0JBQWdCTixLQUFLTyxPQUFMLElBQWdCLEdBQXRDOztBQUVBLFFBQUlDLFNBQVMsSUFBYjtBQUNBLFFBQUlDLFNBQVNDLE9BQU9ELE1BQVAsSUFBaUIsSUFBOUI7QUFDQSxRQUFJRSxVQUFVLEtBQWQ7QUFDQSxRQUFJQyxVQUFVLElBQWQ7QUFDQSxRQUFJQyxXQUFXLElBQWY7QUFDQSxRQUFJQyxTQUFTLElBQWI7O0FBRUEsUUFBSUMsZUFBZSxFQUFuQjs7QUFFQSxRQUFNQyxNQUFNLGVBQU07QUFDZCxZQUFJQSxNQUFNWCxHQUFWO0FBQ0EsWUFBSVksU0FBUztBQUNUQyxpQkFBS2hCLE1BREk7QUFFVGlCLHNCQUFVLGVBRkQ7QUFHVGhCLHVCQUFXQSxVQUFVaUIsSUFBVixDQUFlLEdBQWYsQ0FIRjtBQUlUaEIsb0JBQVFBLE1BSkM7QUFLVGlCLGVBQUdmLGFBTE07QUFNVE0scUJBQVNBLE9BTkE7QUFPVEMsc0JBQVVBLFFBUEQ7QUFRVEMsb0JBQVFBO0FBUkMsU0FBYjs7QUFXQSxZQUFJUSxXQUFXQyxPQUFPQyxJQUFQLENBQVlQLE1BQVosRUFDVlEsTUFEVSxDQUNIO0FBQUEsbUJBQUssQ0FBQyxDQUFDUixPQUFPUyxDQUFQLENBQVA7QUFBQSxTQURHLEVBRVZDLEdBRlUsQ0FFTjtBQUFBLG1CQUFRRCxDQUFSLFNBQWFULE9BQU9TLENBQVAsQ0FBYjtBQUFBLFNBRk0sRUFFb0JOLElBRnBCLENBRXlCLEdBRnpCLENBQWY7O0FBSUEsZUFBVUosR0FBVixTQUFpQk0sUUFBakI7QUFDSCxLQWxCRDs7QUFvQkEsV0FBT04sS0FBUDtBQUNILENBM0NNOztrQkE2Q1FqQixTIiwiZmlsZSI6Ikdvb2dsZUFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50J1xuXG5leHBvcnQgY29uc3QgR29vZ2xlQXBpID0gZnVuY3Rpb24ob3B0cykge1xuICAgIG9wdHMgPSBvcHRzIHx8IHt9XG5cbiAgICBpbnZhcmlhbnQob3B0cy5oYXNPd25Qcm9wZXJ0eSgnYXBpS2V5JyksXG4gICAgICAgICAgICAgICdZb3UgbXVzdCBwYXNzIGFuIGFwaUtleSB0byB1c2UgR29vZ2xlQXBpJyk7XG5cbiAgICBjb25zdCBhcGlLZXkgPSBvcHRzLmFwaUtleTtcbiAgICBjb25zdCBsaWJyYXJpZXMgPSBvcHRzLmxpYnJhcmllcyB8fCBbJ3BsYWNlcyddO1xuICAgIGNvbnN0IGNsaWVudCA9IG9wdHMuY2xpZW50O1xuICAgIGNvbnN0IFVSTCA9ICdodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanMnO1xuXG4gICAgY29uc3QgZ29vZ2xlVmVyc2lvbiA9IG9wdHMudmVyc2lvbiB8fCAnMyc7XG5cbiAgICBsZXQgc2NyaXB0ID0gbnVsbDtcbiAgICBsZXQgZ29vZ2xlID0gd2luZG93Lmdvb2dsZSB8fCBudWxsO1xuICAgIGxldCBsb2FkaW5nID0gZmFsc2U7XG4gICAgbGV0IGNoYW5uZWwgPSBudWxsO1xuICAgIGxldCBsYW5ndWFnZSA9IG51bGw7XG4gICAgbGV0IHJlZ2lvbiA9IG51bGw7XG5cbiAgICBsZXQgb25Mb2FkRXZlbnRzID0gW107XG5cbiAgICBjb25zdCB1cmwgPSAoKSA9PiB7XG4gICAgICAgIGxldCB1cmwgPSBVUkw7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBrZXk6IGFwaUtleSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiAnQ0FMTEJBQ0tfTkFNRScsXG4gICAgICAgICAgICBsaWJyYXJpZXM6IGxpYnJhcmllcy5qb2luKCcsJyksXG4gICAgICAgICAgICBjbGllbnQ6IGNsaWVudCxcbiAgICAgICAgICAgIHY6IGdvb2dsZVZlcnNpb24sXG4gICAgICAgICAgICBjaGFubmVsOiBjaGFubmVsLFxuICAgICAgICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlLFxuICAgICAgICAgICAgcmVnaW9uOiByZWdpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwYXJhbVN0ciA9IE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgICAgICAgIC5maWx0ZXIoayA9PiAhIXBhcmFtc1trXSlcbiAgICAgICAgICAgIC5tYXAoayA9PiBgJHtrfT0ke3BhcmFtc1trXX1gKS5qb2luKCcmJyk7XG5cbiAgICAgICAgcmV0dXJuIGAke3VybH0/JHtwYXJhbVN0cn1gO1xuICAgIH1cblxuICAgIHJldHVybiB1cmwoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR29vZ2xlQXBpIl19