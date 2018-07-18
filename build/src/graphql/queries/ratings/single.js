'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _raitings = require('../../../models/raitings');

var _raitings2 = _interopRequireDefault(_raitings);

var _raitings3 = require('../../types/raitings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingleRating = {
	type: _raitings3.RatingType,
	args: {
		id: {
			name: 'ID',
			type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
		}
	},

	resolve: function resolve(root, params) {
		var rating = _raitings2.default.findById(params.id).exec(); //si el id de antes esta con mayusuculas el de aqui debe ser lo contrario , no pueden ser iguales
		return rating;
	}
};

exports.default = querySingleRating;

//para traer un usuario en especifico por ID