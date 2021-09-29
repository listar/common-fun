# 组件说明

    类似lodash组件的常用 util包, 有lodash没有的轻量函数
 

## 推荐使用[lodash](https://www.lodashjs.com/),直接使用lodash更香些



## 公共JavaScript函数

```JavaScript
// import { uuid, unParams, deepCopy, isFunction} from '../../lib/index'

import { uuid, unParams, deepCopy, isFunction } from 'utils-star'

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
```

 ## todo 
 
+ 准备改名字 util-star
+ 按照功能模块来     
