import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql'

import Genres from '../../../models/genres';
import {GenresInputType,GenresType} from '../../types/genres';

export default{
	type:GenresType,
	args:{
		id:{
			name:"ID",
			type: new GraphQLNonNull(GraphQLID)
		}
	},

	resolve(root,params){
		const deleteGenres = Genres.findByIdAndRemove(params.id).exec()
		if(!deletedGenres) throw new Error("Error al borrar usuario");
		return deletedGenres
	}
}