import {
	GraphQLNonNull
} from 'graphql'

import Genres from '../../../models/genres';
import {GenresInputType,GenresType} from '../../types/genres';

export default{
	type:GenresType,
	args:{
		data:{
			type:new GraphQLNonNull(GenresInputType)
		}
	},

	resolve(root,params){
		const genres = new Genres(params.data); //creando un nuevo objeto usuario
		const newGenres = genres.save();
		if(!newGenres)throw new Error("Error al crear un usuario");
		return newGenres
	}
}