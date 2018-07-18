'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _raitings = require('../../../models/raitings');

var _raitings2 = _interopRequireDefault(_raitings);

var _raitings3 = require('../../types/raitings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	type: _raitings3.RatingType,
	args: {
		data: {
			type: new _graphql.GraphQLNonNull(_raitings3.RatingInputType)
		}
	},

	resolve: function resolve(root, params) {
		var rating = new _raitings2.default(params.data); //creando un nuevo objeto usuario
		var newRating = rating.save();
		if (!newRating) throw new Error("Error al crear un usuario");
		return newRating;
	}
};