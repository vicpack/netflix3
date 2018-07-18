import {
	GraphQLInputObjectType,
	GraphQLString,
	GraphQLID,
	GraphQLObjectType,
	GraphQLBoolean,
	GraphQLNonNull
} from 'graphql'

export const UserType = new GraphQLObjectType({
	name:"ListUsers",
	description:"Usuarios de la BD",
	fields:() => ({//regresa un objeto , este objeto puede ser lo que tiene adentro
		_id:{
			type:GraphQLNonNull(GraphQLID)
		},
		name:{
			type:GraphQLString
		},
		lastname:{
			type:GraphQLString
		},
        
        email:{
			type:GraphQLString
	    },

	    photo:{
			type:GraphQLString
	    },

	    is_admin:{
			type:GraphQLString
		},

		create_at:{
		type:GraphQLString
		},

		is_active:{
		type:GraphQLString
		},

	     client_id:{
		/*Este es para el procesador de pagos*/
		type:GraphQLString
		}

	})
});

export const UserInputType = new GraphQLInputObjectType({
		name:"AddUsers",
	description:"Agrega ,modifica nuevos usuarios de la BD",
	fields:() => ({//regresa un objeto , este objeto puede ser lo que tiene adentro
		_id:{
			type:GraphQLNonNull(GraphQLID)
		},
		name:{
			type:GraphQLString
		},
		lastname:{
			type:GraphQLString
		},

		password:{
			type:GraphQLString
		},
        
        email:{
			type:GraphQLString
	    },

	    photo:{
			type:GraphQLString
	    },

    })
})