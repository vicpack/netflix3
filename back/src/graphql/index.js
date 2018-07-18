import {
	GraphQLObjectType,
	GraphQLSchema
} from 'graphql';

import queries from './queries';
//agregado despues de mutations
import mutations from './mutations';

export default new GraphQLSchema({
	query: new GraphQLObjectType({
		name:'Query',
		fields:queries
	}),
	mutation:new GraphQLObjectType({
		name:"Mutation",
		fields:mutations
	})
})

//esquema de graphql, solo hay uno ,recibe otros tipos d edatos de graphql y trae todos los querys que hayamos hecho
//igual se deben agregar los mutations
