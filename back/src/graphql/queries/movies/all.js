import {
	GraphQLList
} from 'graphql';

import Movie from '../../../models/movies';
import {MovieType} from '../../types/movies'; //tipo usuario , para la lista de usuarios

const queryAllMovies = {
	type:new GraphQLList(MovieType),
	resolve(){
		const movies = Movie.find().exec()
		if(!movies)throw new Error("Error al traer de la bd")
			return movies
	}
}

export default queryAllMovies;