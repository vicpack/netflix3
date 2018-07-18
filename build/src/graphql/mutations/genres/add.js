'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _genres = require('../../../models/genres');

var _genres2 = _interopRequireDefault(_genres);

var _genres3 = require('../../types/genres');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	type: _genres3.GenresType,
	args: {
		data: {
			type: new _graphql.GraphQLNonNull(_genres3.GenresInputType)
		}
	},

	resolve: function resolve(root, params) {
		var genres = new _genres2.default(params.data); //creando un nuevo objeto usuario
		var newGenres = genres.save();
		if (!newGenres) throw new Error("Error al crear un usuario");
		return newGenres;
	}
};