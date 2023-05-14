"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const import_export_1 = __importDefault(require("./import-export"));
const module_system_1 = require("./module-system");
const add = (param1, param2) => {
    return param1 + param2;
};
const result = (0, module_system_1.add)(2, 6);
const result2 = add(4, 6);
console.log(result, result2);
const stringResult = (0, module_system_1.substr)('Muhammad ', 'SA');
console.log(stringResult);
//import-export file testing 
const multiply = import_export_1.default.multiply(3, 4);
const divide = import_export_1.default.divide(6, 2);
const average = import_export_1.default.average(3, 4);
console.log(multiply, divide, average);
