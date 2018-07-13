import {GraphQLNonNull,GraphQLID} from 'graphql';
import Movie from '../../../models/movies';
import {MovieType} from '../../types/movies';

const querySingleMovie = {
	type:MovieType,
	args:{
		id:{
			name:'ID',
			type:GraphQLNonNull(GraphQLID)
		}
	},

	resolve(root,params){
		const movie = User.findById(params.id).exec() //si el id de antes esta con mayusuculas el de aqui debe ser lo contrario , no pueden ser iguales
		return movie
	}
}

export default querySingleMovie;

//para traer un usuario en especifico por ID