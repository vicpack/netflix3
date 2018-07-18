"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.UserInputType = exports.UserType = undefined;

var _graphql = require("graphql");

var UserType = exports.UserType = new _graphql.GraphQLObjectType({
	name: "ListUsers",
	description: "Usuarios de la BD",
	fields: function fields() {
		return { //regresa un objeto , este objeto puede ser lo que tiene adentro
			_id: {
				type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
			},
			name: {
				type: _graphql.GraphQLString
			},
			lastname: {
				type: _graphql.GraphQLString
			},

			email: {
				type: _graphql.GraphQLString
			},

			photo: {
				type: _graphql.GraphQLString
			},

			is_admin: {
				type: _graphql.GraphQLString
			},

			create_at: {
				type: _graphql.GraphQLString
			},

			is_active: {
				type: _graphql.GraphQLString
			},

			client_id: {
				/*Este es para el procesador de pagos*/
				type: _graphql.GraphQLString
			}

		};
	}
});

var UserInputType = exports.UserInputType = new _graphql.GraphQLInputObjectType({
	name: "AddUsers",
	description: "Agrega ,modifica nuevos usuarios de la BD",
	fields: function fields() {
		return { //regresa un objeto , este objeto puede ser lo que tiene adentro
			_id: {
				type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
			},
			name: {
				type: _graphql.GraphQLString
			},
			lastname: {
				type: _graphql.GraphQLString
			},

			password: {
				type: _graphql.GraphQLString
			},

			email: {
				type: _graphql.GraphQLString
			},

			photo: {
				type: _graphql.GraphQLString
			}

		};
	}
});