import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql'

import Movies from '../../../models/movies';
import {MovieInputType,MovieType} from '../../types/movies';

export default{
	type:MovieType,
	args:{
		id:{
			name:"ID",
			type: new GraphQLNonNull(GraphQLID)
		}
	},

	resolve(root,params){
		const deleteMovies = Movies.findByIdAndRemove(params.id).exec()
		if(!deletedMovies) throw new Error("Error al borrar usuario");
		return deletedMovies
	}
}