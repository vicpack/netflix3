'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _graphql = require('graphql');

var _raitings = require('../../../models/raitings');

var _raitings2 = _interopRequireDefault(_raitings);

var _raitings3 = require('../../types/raitings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//tipo usuario , para la lista de usuarios

var queryAllRating = {
	type: new _graphql.GraphQLList(_raitings3.RatingType),
	resolve: function resolve() {
		var rating = _raitings2.default.find().exec();
		if (!rating) throw new Error("Error al traer de la bd");
		return rating;
	}
};

exports.default = queryAllRating;