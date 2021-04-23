import { uuid, unParams, deepCopy, isFunction, copyToClipboard} from '../../lib/base'

// import { uuid, unParams, deepCopy, isFunction } from '@qqfavcom/common-utils/lib/index'

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

//copyToClipboard
copyToClipboard('copyToClipboard')


/**
 * 
 * @param {*} val 需要加密的数据
 * @param {*} secretKey 约定的密钥，用于加密数据
 */
function encrypt(val, secretKey) {
    // 假装这里面做了一系列很复杂的操作
    return val.split('').map(ch => String.fromCharCode(ch.charCodeAt(0) + secretKey % 26)).join('')
}

/**
 * 
 * @param {*} data 密文
 * @param {*} secretKey 加密时约定的密钥，用于解密密文 
 */
function decrypt(data, secretKey) {
    return data.split('').map(ch => String.fromCharCode(ch.charCodeAt(0) - secretKey % 26)).join('')
}

test()

function test() {
    const secretKey = 1000 // 约定的密钥

    var originData = "hello, I'm originData" // 原始明文
    let testObj = {
        userId:1,
        nickName: 'xiaoming',
        age: 12
    };

    var secretData = encrypt(JSON.stringify(testObj), secretKey) // 发送方使用密钥加密数据

    console.log(secretData) // rovvy6*S1w*y|sqsxNk~k，不知道密钥的话，无法直接猜出这个密文的原始含义
    console.log(decrypt(secretData, secretKey))

    console.log(originData === decrypt(secretData, secretKey)) // 接收方使用同样的密钥解密数据
}
