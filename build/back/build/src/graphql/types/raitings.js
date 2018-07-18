"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RatingInputType = exports.RatingType = undefined;

var _graphql = require("graphql");

var RatingType = exports.RatingType = new _graphql.GraphQLObjectType({
	name: "ListRatings",
	description: "Clasificaciones de la BD",
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

			age: {
				type: _graphql.GraphQLInt
			},

			is_active: {
				type: _graphql.GraphQLString
			}

		};
	}
});

var RatingInputType = exports.RatingInputType = new _graphql.GraphQLInputObjectType({
	name: "AddRating",
	description: "Agrega ,modifica nuevas Clasificaciones de la BD",
	fields: function fields() {
		return { //regresa un objeto , este objeto puede ser lo que tiene adentro

			name: {
				type: _graphql.GraphQLString
			},
			description: {
				type: _graphql.GraphQLString
			},

			age: {
				type: _graphql.GraphQLInt
			}

		};
	}
});