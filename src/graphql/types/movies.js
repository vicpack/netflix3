import {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLObjectType,
	GraphQLBoolean,
	GraphQLNonNull,
	GraphQLFloat,
	GraphQLList
} from 'graphql'

import {GenresType} from './genres';
import Genre from '../../models/genres';
import {RatingType} from './raitings';
import Raiting from '../../models/raitings';

export const MovieType = new GraphQLObjectType({
	name:"ListMovies",
	description:"Movies de la BD",
	fields:() => ({//regresa un objeto , este objeto puede ser lo que tiene adentro
		_id:{
			type:GraphQLNonNull(GraphQLID)
		},
		name:{
			type:GraphQLString
		},
		plot:{
			type:GraphQLString
		},
        
        genre:{
			type:GenresType, //para traer lo de genre
			resolve(movie){
				const {genre} = movie
				return Genre.findById(genre).exec()
			}
	    },

	    url:{
			type:GraphQLString
	    },

	    director:{
			type:GraphQLString
		},
        images_url:{
			type:GraphQLString
		},
		year:{
		type:GraphQLString
		},

		rate:{
		type:GraphQLList(GraphQLFloat)
		},

	     raiting:{
		type:RatingType,
			resolve(movie){
				const {raiting} = movie
				return Rating.findById(rating).exec()
			}
		},

		is_active:{
			type:GraphQLBoolean
		},

		upload_at:{
			type:GraphQLString
		}
	})
});

export const MovieInputType = new GraphQLInputObjectType({
		name:"AddMovies",
	description:"Agrega ,modifica nuevas peliculas en la BD",
	fields:() => ({//regresa un objeto , este objeto puede ser lo que tiene adentro
		name:{
			type:GraphQLString
		},
		plot:{
			type:GraphQLString
		},
        
        genre:{
			type:GraphQLString
	    },

	    url:{
			type:GraphQLString
	    },

	    director:{
			type:GraphQLString
		},

		year:{
		type:GraphQLString
		},
		
		images_url:{
			type:GraphQLString
		},
		
	    raiting:{
		type:GraphQLString
		}

    })
})

//type para el raiting
export const RateMovieType = new GraphQLInputObjectType({
	name:"addRate",
	description:"Agrega rate a movie",
	fields:() => ({
		rate:{
			type:GraphQLFloat
		}
	})
});