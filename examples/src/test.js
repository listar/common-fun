import {base, validate} from '@qqfavcom/common-utils/lib/index'

import common from "@qqfavcom/common-utils/lib/index";
import * as test from "../../lib/base";


var once = require("once");
import utils from "util";


console.log(base, test, utils, common);
utils.log('1111111111');
utils.isFunction('')
utils.isArray('11')


console.log(base.uuid());

console.log(base.randomValue(7));

console.log(base.getRangeValue(0, 100));