import {GraphQLNonNull,GraphQLID} from 'graphql';
import Rating from '../../../models/raitings';
import {RatingType} from '../../types/raitings';

const querySingleRating = {
	type:RatingType,
	args:{
		id:{
			name:'ID',
			type:GraphQLNonNull(GraphQLID)
		}
	},

	resolve(root,params){
		const rating = Rating.findById(params.id).exec() //si el id de antes esta con mayusuculas el de aqui debe ser lo contrario , no pueden ser iguales
		return rating
	}
}

export default querySingleRating;

//para traer un usuario en especifico por ID