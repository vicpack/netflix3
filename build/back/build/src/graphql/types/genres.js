"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GenresInputType = exports.GenresType = undefined;

var _graphql = require("graphql");

var GenresType = exports.GenresType = new _graphql.GraphQLObjectType({
	name: "ListGenress",
	description: "Generos de la BD",
	fields: function fields() {
		return { //regresa un objeto , este objeto puede ser lo que tiene adentro
			_id: {
				type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
			},
			name: {
				type: _graphql.GraphQLString
			},
			description: {
				type: _graphql.GraphQLString
			},

			is_active: {
				type: _graphql.GraphQLString
			}

		};
	}
});

var GenresInputType = exports.GenresInputType = new _graphql.GraphQLInputObjectType({
	name: "AddGenres",
	description: "Agrega ,modifica nuevos generos de la BD",
	fields: function fields() {
		return { //regresa un objeto , este objeto puede ser lo que tiene adentro

			name: {
				type: _graphql.GraphQLString
			},
			description: {
				type: _graphql.GraphQLString
			}

		};
	}
});