import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql'

import Movies from '../../../models/movies';
import {RateMovieType,MovieType} from '../../types/movies';

export default{//regresa la pelicula ya con el raiting
	type:MovieType,
	args:{
		id:{
			name:"ID",
			type:GraphQLNonNull(GraphQLID)
		},
		data:{
			name:"data",
			type:GraphQLNonNull(RateMovieType)
		}
	},resolve(root,params){ //con esto agregamos los rates a la pelicula
		const{id,data} = params
		return Movies.findByIdAndUpdate(id,{$push:{rate:data.rate}}).then((movie) => {
			return Movies.findById(movie.id).exec()//para regresar el objeto actualizado 
		})
	}
}