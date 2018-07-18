import {GraphQLNonNull,GraphQLID} from 'graphql';
import Genre from '../../../models/genres';
import {GenresType} from '../../types/genres';


const querySingleGenre = {
	type:GenresType,
	args:{
		id:{
			name:'ID',
			type:GraphQLNonNull(GraphQLID)
		}
	},

	resolve(root,params){
		const genres = Genre.findById(params.id).exec() //si el id de antes esta con mayusuculas el de aqui debe ser lo contrario , no pueden ser iguales
		return genres
	}
}

export default querySingleGenre;

//para traer un usuario en especifico por ID