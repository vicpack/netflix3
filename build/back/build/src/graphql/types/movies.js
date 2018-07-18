'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.RateMovieType = exports.MovieInputType = exports.MovieType = undefined;

var _graphql = require('graphql');

var _genres = require('./genres');

var _genres2 = require('../../models/genres');

var _genres3 = _interopRequireDefault(_genres2);

var _raitings = require('./raitings');

var _raitings2 = require('../../models/raitings');

var _raitings3 = _interopRequireDefault(_raitings2);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var MovieType = exports.MovieType = new _graphql.GraphQLObjectType({
	name: "ListMovies",
	description: "Movies de la BD",
	fields: function fields() {
		return { //regresa un objeto , este objeto puede ser lo que tiene adentro
			_id: {
				type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
			},
			name: {
				type: _graphql.GraphQLString
			},
			plot: {
				type: _graphql.GraphQLString
			},

			genre: {
				type: _genres.GenresType, //para traer lo de genre
				resolve: function resolve(movie) {
					var genre = movie.genre;

					return _genres3.default.findById(genre).exec();
				}
			},

			url: {
				type: _graphql.GraphQLString
			},

			director: {
				type: _graphql.GraphQLString
			},

			year: {
				type: _graphql.GraphQLString
			},

			rate: {
				type: (0, _graphql.GraphQLList)(_graphql.GraphQLFloat)
			},

			raiting: {
				type: _raitings.RatingType,
				resolve: function resolve(movie) {
					var raiting = movie.raiting;

					return Rating.findById(rating).exec();
				}
			},

			is_active: {
				type: _graphql.GraphQLBoolean
			},

			upload_at: {
				type: _graphql.GraphQLString
			}
		};
	}
});

var MovieInputType = exports.MovieInputType = new _graphql.GraphQLInputObjectType({
	name: "AddMovies",
	description: "Agrega ,modifica nuevas peliculas en la BD",
	fields: function fields() {
		return { //regresa un objeto , este objeto puede ser lo que tiene adentro
			name: {
				type: _graphql.GraphQLString
			},
			plot: {
				type: _graphql.GraphQLString
			},

			genre: {
				type: _graphql.GraphQLString
			},

			url: {
				type: _graphql.GraphQLString
			},

			director: {
				type: _graphql.GraphQLString
			},

			year: {
				type: _graphql.GraphQLString
			},

			raiting: {
				type: _graphql.GraphQLString
			}

		};
	}
});

//type para el raiting
var RateMovieType = exports.RateMovieType = new _graphql.GraphQLInputObjectType({
	name: "addRate",
	description: "Agrega rate a movie",
	fields: function fields() {
		return {
			rate: {
				type: _graphql.GraphQLFloat
			}
		};
	}
});