import utilsMethod from './import-export'
import { add as addTwo, substr } from './module-system'
const add = (param1: number, param2: number): number => {
    return param1 + param2
}

const result: number = addTwo(2, 6)
const result2: number = add(4, 6)
console.log(result, result2)
const stringResult: string = substr('Muhammad ', 'SA')
console.log(stringResult)

//import-export file testing 
const multiply = utilsMethod.multiply(3, 4)
const divide = utilsMethod.divide(6, 2)
const average = utilsMethod.average(3, 4)
console.log(multiply, divide, average)