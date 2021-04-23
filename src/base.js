/**
 * common uitls
 */

/**
 *深拷贝
 *
 * @export
 * @param {*} source 要拷贝的对象
 * @returns 深拷贝结果
 */
export function deepCopy(source) {
  var dest;
  if (Array.isArray(source)) {
    dest = [];
    for (let i = 0; i < source.length; i++) {
      dest[i] = deepCopy(source[i]);
    }
  } else if (toString.call(source) === "[object Object]") {
    dest = {};
    for (var p in source) {
      if (source.hasOwnProperty(p)) {
        dest[p] = deepCopy(source[p]);
      }
    }
  } else {
    dest = source;
  }
  return dest;
}

/**
 *判断传入参数是否为函数
 *
 * @export
 * @param {*} func 参数（函数）
 * @returns true：是函数 false：不是函数
 */
export function isFunction(func) {
  if (!func || toString.call(func) !== "[object Function]") return false;
  return true;
}

/**
 * 生成uuid
 * @param {number} len
 * @param {number} radix
 */
export function uuid(len, radix) {
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
    ""
  );
  let uuid = [],
    i;
  radix = radix || chars.length;

  if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
    let r;
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";

    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join("");
}

/**
 * 解析url get参数
 * @param {string} params
 */
export function unParams(params = "?a=1&b=2&c=3") {
  let obj = {};
  params &&
    // eslint-disable-next-line no-useless-escape
    params.replace(/((\w*)=([\.a-z0-9A-Z]*)?)?/g, (m, a, b, c) => {
      if (b || c) obj[b] = c;
    });
  return obj;
}

/**
 * [copyToClipboard 复制字符串到剪贴板]
 * @param  {String} [str=''] [需要复制的字符串]
 */
export function copyToClipboard(str = "") {
  try {
    const supported = document.queryCommandSupported("copy");
    if (!supported) {
      return false;
    }
    const input = document.createElement("textarea");
    input.value = str;
    input.style.cssText = "position: absolute; top: -10000px; left: -10000px;";
    document.body.appendChild(input);

    input.setAttribute("readonly", ""); // 避免ios弹出键盘
    input.select();
    input.setSelectionRange(0, input.value.length); // 选中文本
    document.execCommand("copy");
    document.body.removeChild(input);
    return true;
  } catch (e) {
    return false;
  }
}

// 防抖
export function debounce(fn, delay) {
  let timer = null; //借助闭包
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, delay); // 简化写法
  };
}

//节流 fn:回调函数，wait：时间
export function throttle(fn, wait) {
  let flag = false;
  return function () {
    if (flag) return;
    flag = true;
    fn.call(this, arguments);
    setTimeout(() => {
      flag = false;
    }, wait);
  };
}

// 字符串截取
export function splitString(str, len = 6) {
  if (str.length >= len) {
    str = str.slice(0, len - 1);
    str += "..";
  }
  return str;
}

// 根据区间随机生成整数 [min, max]
export function getRangeValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 根据长度随机生成一个整数 [0, length)
export function randomValue(length) {
  return Math.floor(Math.random() * length);
}
