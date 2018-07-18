'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

var _graphql = require('graphql');

var _raitings = require('../../../models/raitings');

var _raitings2 = _interopRequireDefault(_raitings);

var _raitings3 = require('../../types/raitings');

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
	type: _raitings3.RatingType,
	args: {
		id: {
			name: "ID",
			type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
		},
		data: {
			name: "data",
			type: new _graphql.GraphQLNonNull(_raitings3.RatingInputType)
		}
	},
	resolve: function resolve(root, params) {
		return _raitings2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (rating) {
			return rating;
		}).catch(function (err) {
			throw new Error("Error al hacer update");
		});
	}
};