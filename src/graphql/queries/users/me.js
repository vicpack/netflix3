import User from '../../../models/users';
import {UserType} from '../../types/users';

export default{//funciona solo para un usuario autotenficado
	type:UserType,
	resolve(root,params,context){
		return context.user
	}
}