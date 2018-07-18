import {
	GraphQLList
} from 'graphql';

import Genre from '../../../models/genres';
import {GenresType} from '../../types/genres'; //tipo usuario , para la lista de usuarios

const queryAllGenres = {
	type:new GraphQLList(GenresType),
	resolve(){
		const genres = Genre.find().exec()
		if(!genres)throw new Error("Error al traer de la bd")
			return genres
	}
}

export default queryAllGenres;