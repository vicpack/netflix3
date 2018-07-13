import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql'

import Genres from '../../../models/genres';
import {GenresInputType,GenresType} from '../../types/genres';

export default {
	type:GenresType,
	args:{
		id:{
			name:"ID",
			type:new GraphQLNonNull(GraphQLID)
		},
		data:{
			name:"data",
			type:new GraphQLNonNull(GenresInputType)
		}
	},
	resolve(root,params){
		return Genres.findByIdAndUpdate(params.id,{$set:{...params.data}}
			).then((user) => {
					return user
			}).catch((err) => {
				throw new Error("Error al hacer update")
			})
	}
}