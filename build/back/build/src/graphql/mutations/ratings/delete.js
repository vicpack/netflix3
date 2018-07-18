'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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
		}
	},

	resolve: function resolve(root, params) {
		var deleteRating = _raitings2.default.findByIdAndRemove(params.id).exec();
		if (!deletedRating) throw new Error("Error al borrar usuario");
		return deletedRating;
	}
};