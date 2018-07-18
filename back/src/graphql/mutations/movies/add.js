import {
	GraphQLNonNull
} from 'graphql'

import Movies from '../../../models/movies';
import {MovieInputType,MovieType} from '../../types/movies';

export default{
	type:MovieType,
	args:{
		data:{
			type:new GraphQLNonNull(MovieInputType)
		}
	},

	resolve(root,params){
		const movie = new Movies(params.data); //creando un nuevo objeto usuario
		const newMovies = movie.save();
		if(!newMovies)throw new Error("Error al crear un usuario");
		return newMovies
	}
}