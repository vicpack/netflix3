'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _genres = require('../../../models/genres');

var _genres2 = _interopRequireDefault(_genres);

var _genres3 = require('../../types/genres');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingleGenre = {
	type: _genres3.GenresType,
	args: {
		id: {
			name: 'ID',
			type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
		}
	},

	resolve: function resolve(root, params) {
		var genres = _genres2.default.findById(params.id).exec(); //si el id de antes esta con mayusuculas el de aqui debe ser lo contrario , no pueden ser iguales
		return genres;
	}
};

exports.default = querySingleGenre;

//para traer un usuario en especifico por ID