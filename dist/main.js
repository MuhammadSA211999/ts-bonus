"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_system_1 = require("./module-system");
const add = (param1, param2) => {
    return param1 + param2;
};
const result = (0, module_system_1.add)(2, 6);
const result2 = add(4, 6);
console.log(result, result2);
const stringResult = (0, module_system_1.substr)('Muhammad ', 'SA');
console.log(stringResult);
