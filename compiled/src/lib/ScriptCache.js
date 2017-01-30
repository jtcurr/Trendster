'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var counter = 0;
var scriptMap = window._scriptMap || new Map();

var ScriptCache = exports.ScriptCache = function (global) {
    global._scriptMap = global._scriptMap || scriptMap;
    return function ScriptCache(scripts) {
        var Cache = {};

        Cache._onLoad = function (key) {
            return function (cb) {
                var stored = scriptMap.get(key);
                if (stored) {
                    stored.promise.then(function () {
                        stored.error ? cb(stored.error) : cb(null, stored);
                        return stored;
                    });
                } else {
                    // TODO:
                }
            };
        };

        Cache._scriptTag = function (key, src) {
            if (!scriptMap.has(key)) {
                (function () {
                    var tag = document.createElement('script');
                    var promise = new Promise(function (resolve, reject) {
                        var resolved = false,
                            errored = false,
                            body = document.getElementsByTagName('body')[0];

                        tag.type = 'text/javascript';
                        tag.async = false; // Load in order

                        var cbName = 'loaderCB' + counter++ + Date.now();
                        var cb = void 0;

                        var handleResult = function handleResult(state) {
                            return function (evt) {
                                var stored = scriptMap.get(key);
                                if (state === 'loaded') {
                                    stored.resolved = true;
                                    resolve(src);
                                    // stored.handlers.forEach(h => h.call(null, stored))
                                    // stored.handlers = []
                                } else if (state === 'error') {
                                    stored.errored = true;
                                    // stored.handlers.forEach(h => h.call(null, stored))
                                    // stored.handlers = [];
                                    reject(evt);
                                }
                                stored.loaded = true;

                                cleanup();
                            };
                        };

                        var cleanup = function cleanup() {
                            if (global[cbName] && typeof global[cbName] === 'function') {
                                global[cbName] = null;
                                delete global[cbName];
                            }
                        };

                        tag.onload = handleResult('loaded');
                        tag.onerror = handleResult('error');
                        tag.onreadystatechange = function () {
                            handleResult(tag.readyState);
                        };

                        // Pick off callback, if there is one
                        if (src.match(/callback=CALLBACK_NAME/)) {
                            src = src.replace(/(callback=)[^\&]+/, '$1' + cbName);
                            cb = window[cbName] = tag.onload;
                        } else {
                            tag.addEventListener('load', tag.onload);
                        }
                        tag.addEventListener('error', tag.onerror);

                        tag.src = src;
                        body.appendChild(tag);

                        return tag;
                    });
                    var initialState = {
                        loaded: false,
                        error: false,
                        promise: promise,
                        tag: tag
                    };
                    scriptMap.set(key, initialState);
                })();
            }
            return scriptMap.get(key);
        };

        // let scriptTags = document.querySelectorAll('script')
        //
        // NodeList.prototype.filter = Array.prototype.filter;
        // NodeList.prototype.map = Array.prototype.map;
        // const initialScripts = scriptTags
        //   .filter(s => !!s.src)
        //   .map(s => s.src.split('?')[0])
        //   .reduce((memo, script) => {
        //     memo[script] = script;
        //     return memo;
        //   }, {});

        Object.keys(scripts).forEach(function (key) {
            var script = scripts[key];

            var tag = window._scriptMap.has(key) ? window._scriptMap.get(key).tag : Cache._scriptTag(key, script);

            Cache[key] = {
                tag: tag,
                onLoad: Cache._onLoad(key)
            };
        });

        return Cache;
    };
}(window);

exports.default = ScriptCache;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvU2NyaXB0Q2FjaGUuanMiXSwibmFtZXMiOlsiY291bnRlciIsInNjcmlwdE1hcCIsIndpbmRvdyIsIl9zY3JpcHRNYXAiLCJNYXAiLCJTY3JpcHRDYWNoZSIsImdsb2JhbCIsInNjcmlwdHMiLCJDYWNoZSIsIl9vbkxvYWQiLCJrZXkiLCJjYiIsInN0b3JlZCIsImdldCIsInByb21pc2UiLCJ0aGVuIiwiZXJyb3IiLCJfc2NyaXB0VGFnIiwic3JjIiwiaGFzIiwidGFnIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXNvbHZlZCIsImVycm9yZWQiLCJib2R5IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ0eXBlIiwiYXN5bmMiLCJjYk5hbWUiLCJEYXRlIiwibm93IiwiaGFuZGxlUmVzdWx0Iiwic3RhdGUiLCJldnQiLCJsb2FkZWQiLCJjbGVhbnVwIiwib25sb2FkIiwib25lcnJvciIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJtYXRjaCIsInJlcGxhY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwZW5kQ2hpbGQiLCJpbml0aWFsU3RhdGUiLCJzZXQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInNjcmlwdCIsIm9uTG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJQSxVQUFVLENBQWQ7QUFDQSxJQUFJQyxZQUFZQyxPQUFPQyxVQUFQLElBQXFCLElBQUlDLEdBQUosRUFBckM7O0FBRU8sSUFBTUMsb0NBQWUsVUFBU0MsTUFBVCxFQUFpQjtBQUN6Q0EsV0FBT0gsVUFBUCxHQUFvQkcsT0FBT0gsVUFBUCxJQUFxQkYsU0FBekM7QUFDQSxXQUFPLFNBQVNJLFdBQVQsQ0FBcUJFLE9BQXJCLEVBQThCO0FBQ2pDLFlBQU1DLFFBQVEsRUFBZDs7QUFFQUEsY0FBTUMsT0FBTixHQUFnQixVQUFTQyxHQUFULEVBQWM7QUFDMUIsbUJBQU8s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QWpCOztBQUVBLCtCQUFPQSxHQUFQO0FBQ0gscUJBekRhLENBQWQ7QUEwREEsd0JBQUk0QixlQUFlO0FBQ2ZWLGdDQUFRLEtBRE87QUFFZnRCLCtCQUFPLEtBRlE7QUFHZkYsaUNBQVNBLE9BSE07QUFJZk07QUFKZSxxQkFBbkI7QUFNQW5CLDhCQUFVZ0QsR0FBVixDQUFjdkMsR0FBZCxFQUFtQnNDLFlBQW5CO0FBbEVxQjtBQW1FeEI7QUFDRCxtQkFBTy9DLFVBQVVZLEdBQVYsQ0FBY0gsR0FBZCxDQUFQO0FBQ0gsU0F0RUQ7O0FBd0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUF3QyxlQUFPQyxJQUFQLENBQVk1QyxPQUFaLEVBQXFCNkMsT0FBckIsQ0FBNkIsVUFBUzFDLEdBQVQsRUFBYztBQUN2QyxnQkFBTTJDLFNBQVM5QyxRQUFRRyxHQUFSLENBQWY7O0FBRUEsZ0JBQU1VLE1BQU1sQixPQUFPQyxVQUFQLENBQWtCZ0IsR0FBbEIsQ0FBc0JULEdBQXRCLElBQ0FSLE9BQU9DLFVBQVAsQ0FBa0JVLEdBQWxCLENBQXNCSCxHQUF0QixFQUEyQlUsR0FEM0IsR0FFQVosTUFBTVMsVUFBTixDQUFpQlAsR0FBakIsRUFBc0IyQyxNQUF0QixDQUZaOztBQUlBN0Msa0JBQU1FLEdBQU4sSUFBYTtBQUNUVSxxQkFBS0EsR0FESTtBQUVUa0Msd0JBQVE5QyxNQUFNQyxPQUFOLENBQWNDLEdBQWQ7QUFGQyxhQUFiO0FBSUgsU0FYRDs7QUFhQSxlQUFPRixLQUFQO0FBQ0gsS0FuSEQ7QUFvSEgsQ0F0SDBCLENBc0h4Qk4sTUF0SHdCLENBQXBCOztrQkF3SFFHLFciLCJmaWxlIjoiU2NyaXB0Q2FjaGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY291bnRlciA9IDA7XG5sZXQgc2NyaXB0TWFwID0gd2luZG93Ll9zY3JpcHRNYXAgfHwgbmV3IE1hcCgpO1xuXG5leHBvcnQgY29uc3QgU2NyaXB0Q2FjaGUgPSAoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgZ2xvYmFsLl9zY3JpcHRNYXAgPSBnbG9iYWwuX3NjcmlwdE1hcCB8fCBzY3JpcHRNYXA7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFNjcmlwdENhY2hlKHNjcmlwdHMpIHtcbiAgICAgICAgY29uc3QgQ2FjaGUgPSB7fVxuXG4gICAgICAgIENhY2hlLl9vbkxvYWQgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiAoY2IpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3RvcmVkID0gc2NyaXB0TWFwLmdldChrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChzdG9yZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVkLnByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yZWQuZXJyb3IgPyBjYihzdG9yZWQuZXJyb3IpIDogY2IobnVsbCwgc3RvcmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0b3JlZDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzpcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBDYWNoZS5fc2NyaXB0VGFnID0gKGtleSwgc3JjKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXNjcmlwdE1hcC5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIGxldCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc29sdmVkID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcmVkID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcblxuICAgICAgICAgICAgICAgICAgICB0YWcudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICAgICAgICAgICAgICB0YWcuYXN5bmMgPSBmYWxzZTsgLy8gTG9hZCBpbiBvcmRlclxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNiTmFtZSA9IGBsb2FkZXJDQiR7Y291bnRlcisrfSR7RGF0ZS5ub3coKX1gO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2I7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhbmRsZVJlc3VsdCA9IChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChldnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RvcmVkID0gc2NyaXB0TWFwLmdldChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gJ2xvYWRlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVkLnJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShzcmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZWQuaGFuZGxlcnMuZm9yRWFjaChoID0+IGguY2FsbChudWxsLCBzdG9yZWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZWQuaGFuZGxlcnMgPSBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVkLmVycm9yZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZWQuaGFuZGxlcnMuZm9yRWFjaChoID0+IGguY2FsbChudWxsLCBzdG9yZWQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZWQuaGFuZGxlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGV2dClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVkLmxvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsb2JhbFtjYk5hbWVdICYmIHR5cGVvZiBnbG9iYWxbY2JOYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFtjYk5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZ2xvYmFsW2NiTmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRhZy5vbmxvYWQgPSBoYW5kbGVSZXN1bHQoJ2xvYWRlZCcpO1xuICAgICAgICAgICAgICAgICAgICB0YWcub25lcnJvciA9IGhhbmRsZVJlc3VsdCgnZXJyb3InKVxuICAgICAgICAgICAgICAgICAgICB0YWcub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVzdWx0KHRhZy5yZWFkeVN0YXRlKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUGljayBvZmYgY2FsbGJhY2ssIGlmIHRoZXJlIGlzIG9uZVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3JjLm1hdGNoKC9jYWxsYmFjaz1DQUxMQkFDS19OQU1FLykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKC8oY2FsbGJhY2s9KVteXFwmXSsvLCBgJDEke2NiTmFtZX1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2IgPSB3aW5kb3dbY2JOYW1lXSA9IHRhZy5vbmxvYWQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRhZy5vbmxvYWQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFnLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgdGFnLm9uZXJyb3IpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRhZy5zcmMgPSBzcmM7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQodGFnKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFnO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxldCBpbml0aWFsU3RhdGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZTogcHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgdGFnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNjcmlwdE1hcC5zZXQoa2V5LCBpbml0aWFsU3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNjcmlwdE1hcC5nZXQoa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCBzY3JpcHRUYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0JylcbiAgICAgICAgLy9cbiAgICAgICAgLy8gTm9kZUxpc3QucHJvdG90eXBlLmZpbHRlciA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXI7XG4gICAgICAgIC8vIE5vZGVMaXN0LnByb3RvdHlwZS5tYXAgPSBBcnJheS5wcm90b3R5cGUubWFwO1xuICAgICAgICAvLyBjb25zdCBpbml0aWFsU2NyaXB0cyA9IHNjcmlwdFRhZ3NcbiAgICAgICAgLy8gICAuZmlsdGVyKHMgPT4gISFzLnNyYylcbiAgICAgICAgLy8gICAubWFwKHMgPT4gcy5zcmMuc3BsaXQoJz8nKVswXSlcbiAgICAgICAgLy8gICAucmVkdWNlKChtZW1vLCBzY3JpcHQpID0+IHtcbiAgICAgICAgLy8gICAgIG1lbW9bc2NyaXB0XSA9IHNjcmlwdDtcbiAgICAgICAgLy8gICAgIHJldHVybiBtZW1vO1xuICAgICAgICAvLyAgIH0sIHt9KTtcblxuICAgICAgICBPYmplY3Qua2V5cyhzY3JpcHRzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgY29uc3Qgc2NyaXB0ID0gc2NyaXB0c1trZXldO1xuXG4gICAgICAgICAgICBjb25zdCB0YWcgPSB3aW5kb3cuX3NjcmlwdE1hcC5oYXMoa2V5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuX3NjcmlwdE1hcC5nZXQoa2V5KS50YWcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FjaGUuX3NjcmlwdFRhZyhrZXksIHNjcmlwdCk7XG5cbiAgICAgICAgICAgIENhY2hlW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgdGFnOiB0YWcsXG4gICAgICAgICAgICAgICAgb25Mb2FkOiBDYWNoZS5fb25Mb2FkKGtleSksXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIENhY2hlO1xuICAgIH1cbn0pKHdpbmRvdyk7XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmlwdENhY2hlOyJdfQ==