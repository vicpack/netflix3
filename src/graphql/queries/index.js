import genres from './genres';
import raitings from './ratings';
import user from './users';
import movies from './movies';

export default {
	...genres,
	...raitings,
	...user,
	...movies //los 3 puntos se refieren a la copia de todos los objetos
}