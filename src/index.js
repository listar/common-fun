/**
 *深拷贝
 *
 * @export
 * @param {*} source 要拷贝的对象
 * @returns 深拷贝结果
 */
export function deepCopy(source) {
    var dest
    if (Array.isArray(source)) {
        dest = []
        for (let i = 0; i < source.length; i++) {
            dest[i] = deepCopy(source[i])
        }
    }else if (toString.call(source) === '[object Object]') {
        dest = {}
        for (var p in source) {
            if (source.hasOwnProperty(p)) {
                dest[p] = deepCopy(source[p])
            }
        }
    }else {
        dest = source
    }
    return dest
}

/**
 *判断传入参数是否为函数
 *
 * @export
 * @param {*} func 参数（函数）
 * @returns true：是函数 false：不是函数
 */
export function isFunction(func) {
    if (!func || toString.call(func) !== '[object Function]') return false
    return true
}

/**
 * 生成uuid
 * @param {number} len 
 * @param {number} radix
 */
export function uuid(len, radix) {
  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  let uuid = [],
    i;
  radix = radix || chars.length;

  if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
    let r;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join('');
}

/**
 * 解析url get参数
 * @param {string} params 
 */
export function unParams(params = '?a=1&b=2&c=3') {
    let obj = {};
    params &&
        // eslint-disable-next-line no-useless-escape
        params.replace(/((\w*)=([\.a-z0-9A-Z]*)?)?/g, (m, a, b, c) => {
            if (b || c) obj[b] = c;
        });
    return obj;
}

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
 * [copyToClipboard 复制字符串到剪贴板]
 * @param  {String} [str=''] [需要复制的字符串]
 */
export function copyToClipboard(str = '') {
  try {
    const supported = document.queryCommandSupported('copy');
    if (!supported) {
      return false;
    }
    const input = document.createElement('textarea');
    input.value = str;
    input.style.cssText = 'position: absolute; top: -10000px; left: -10000px;';
    document.body.appendChild(input);

    input.setAttribute('readonly', ''); // 避免ios弹出键盘
    input.select();
    input.setSelectionRange(0, input.value.length); // 选中文本
    document.execCommand('copy');
    document.body.removeChild(input);
    return true;
  } catch (e) {
    return false;
  }
}