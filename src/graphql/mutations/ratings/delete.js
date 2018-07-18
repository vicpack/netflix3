import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql'


import Rating from '../../../models/raitings';
import {RatingInputType,RatingType} from '../../types/raitings';

export default{
	type:RatingType,
	args:{
		id:{
			name:"ID",
			type: new GraphQLNonNull(GraphQLID)
		}
	},

	resolve(root,params){
		const deleteRating = Rating.findByIdAndRemove(params.id).exec()
		if(!deletedRating) throw new Error("Error al borrar usuario");
		return deletedRating
	}
}