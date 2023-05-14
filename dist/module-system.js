"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.substr = exports.add = void 0;
const add = (param1, param2) => {
    return param1 + param2;
};
exports.add = add;
const substr = (string1, string2) => {
    return string1.concat(string2);
};
exports.substr = substr;
const result = (0, exports.add)(2, 4);
