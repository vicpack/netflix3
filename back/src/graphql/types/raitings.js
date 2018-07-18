import {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLObjectType,
	GraphQLBoolean,
	GraphQLNonNull,
	GraphQLInt 
} from 'graphql'

export const RatingType = new GraphQLObjectType({
	name:"ListRatings",
	description:"Clasificaciones de la BD",
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
        
		age:{
		type:GraphQLInt
		},

		is_active:{
		type:GraphQLString
		},

	})
});

export const RatingInputType = new GraphQLInputObjectType({
		name:"AddRating",
	description:"Agrega ,modifica nuevas Clasificaciones de la BD",
	fields:() => ({//regresa un objeto , este objeto puede ser lo que tiene adentro
		
		name:{
			type:GraphQLString
		},
		description:{
			type:GraphQLString
		},

		age:{
		type:GraphQLInt
		}

    })
})