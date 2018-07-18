import {
	GraphQLNonNull
} from 'graphql'

import Rating from '../../../models/raitings';
import {RatingInputType,RatingType} from '../../types/raitings';

export default{
	type:RatingType,
	args:{
		data:{
			type:new GraphQLNonNull(RatingInputType)
		}
	},

	resolve(root,params){
		const rating = new Rating(params.data); //creando un nuevo objeto usuario
		const newRating = rating.save();
		if(!newRating)throw new Error("Error al crear un usuario");
		return newRating
	}
}