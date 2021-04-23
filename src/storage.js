/**
 * web  storage common  utils
 */



/**
 * 设置cookie
 * @param {string} name cookie的key
 * @param {*} value cookie的值
 * @param {number} expiredays 时间 单位/天
 */
export function setCookie(name, value, expiredays) {
    var exdate = {};
    if (typeof expiredays === 'number') {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
    } else if (typeof expiredays === 'object') {
        exdate = expiredays;
    }
    //domain=qqfav.com;
    document.cookie = `${name}=${encodeURIComponent(value)}${(expiredays == null) ? '' : `;expires=${exdate.toGMTString()};path=/`}`;
}

/**
 * 获取cookie
 * @param {string} name 
 */
export function getCookie(name) {
    if (document.cookie.length > 0) {
        let start = document.cookie.indexOf(`${name}=`);
        if (start != -1) {
            start = start + name.length + 1;
            let end = document.cookie.indexOf(';', start);
            if (end == -1) end = document.cookie.length;
            return decodeURIComponent(document.cookie.substring(start, end));
        }
    }
    return '';
}

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

