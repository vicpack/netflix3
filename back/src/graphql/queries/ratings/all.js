import {
	GraphQLList
} from 'graphql';

import Rating from '../../../models/raitings';
import {RatingType} from '../../types/raitings'; //tipo usuario , para la lista de usuarios

const queryAllRating = {
	type:new GraphQLList(RatingType),
	resolve(){
		const rating = Rating.find().exec()
		if(!rating)throw new Error("Error al traer de la bd")
			return rating
	}
}

export default queryAllRating;