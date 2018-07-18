'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

var _update = require('./update');

var _update2 = _interopRequireDefault(_update);

var _delete = require('./delete');

var _delete2 = _interopRequireDefault(_delete);

var _addRate = require('./addRate');

var _addRate2 = _interopRequireDefault(_addRate);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
	addMovies: _add2.default,
	updateMovies: _update2.default,
	deleteMovies: _delete2.default,
	addRate: _addRate2.default
};