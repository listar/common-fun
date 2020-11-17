# common-fun

公共JavaScript函数

        // import { uuid, unParams, deepCopy, isFunction} from '../../lib/index'

        import { uuid, unParams, deepCopy, isFunction } from '@qqfavcom/common-utils/lib/index'

        //uuid
        console.log(uuid());

        //unParams
        console.log(unParams(location.search))

        //deepCopy
        let user = {
            ID:1,
            nickName: 'star'
        }
        let newUser = deepCopy(user);
        newUser.ID = 2;
        console.log(user, newUser);

        //isFunction
        console.log(isFunction(deepCopy))
