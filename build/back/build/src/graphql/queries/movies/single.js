'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _movies = require('../../../models/movies');

var _movies2 = _interopRequireDefault(_movies);

var _movies3 = require('../../types/movies');

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var querySingleMovie = {
	type: _movies3.MovieType,
	args: {
		id: {
			name: 'ID',
			type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
		}
	},

	resolve: function resolve(root, params) {
		var movie = User.findById(params.id).exec(); //si el id de antes esta con mayusuculas el de aqui debe ser lo contrario , no pueden ser iguales
		return movie;
	}
};

exports.default = querySingleMovie;

//para traer un usuario en especifico por ID