import {graphql}  from 'graphql';
import schema from '../graphql/index';
import User from '../models/users';
import {setupTest} from './helpers';

beforeEach(async () => await setupTest());

describe('Probando User', () => {
    it('Probando query de me que deberia ser nulo',async () => {
        //language=GraphQL
        const query = `
        
            query{
                me{
                    _id,
                    name
                }
            }
        
        
        `;
    
        const result = await graphql(schema,query,{},{});
        const {data} = result;

        expect(data.me).toBe(null);
    })

    it('Probando query de me que deberia ser un usuario',async () => {
          //language=GraphQL
    const query= `
        
          query{
              me{
                  _id,
                  name
              }
          }
      
      
      `;
      const user = new User({
        "name" :"Prueba 1",
        "lastname" : "prueba",
        "email":"prueba@gmail.com",
        "password":"prueba1234"})
  
      const userSaved = await user.save();
      const context = {user:userSaved}
      const result = await graphql(schema,query,{},context);
      const {data} = result;

      expect(data.me._id).toBe(userSaved._id.toString());
    })

    it("suma de dos mas dos",() => {
        expect(2+2).toBe(4)
    })
})