import {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLObjectType,
	GraphQLBoolean,
	GraphQLNonNull
} from 'graphql'

export const GenresType = new GraphQLObjectType({
	name:"ListGenress",
	description:"Generos de la BD",
	fields:() => ({//regresa un objeto , este objeto puede ser lo que tiene adentro
		_id:{
			type:GraphQLNonNull(GraphQLID)
		},
		name:{
			type:GraphQLString
		},
		description:{
			type:GraphQLString
		},
        
		is_active:{
		type:GraphQLString
		},

	})
});

export const GenresInputType = new GraphQLInputObjectType({
		name:"AddGenres",
	description:"Agrega ,modifica nuevos generos de la BD",
	fields:() => ({//regresa un objeto , este objeto puede ser lo que tiene adentro
		
		name:{
			type:GraphQLString
		},
		description:{
			type:GraphQLString
		}

    })
})