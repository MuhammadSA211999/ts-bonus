interface IProperty {
    firstName: string;
    lastName: string;
    age: number;
}
interface IMethods {
    fullName(): string
}
//generic-type 
type GenericModel<TProperty, TMethod> = {
    data: TProperty;
    methods: TMethod
}
//generic Model by GenerictType
type Model = GenericModel<IProperty, IMethods>
//implement this Model in class
class Person implements Model {
    data: IProperty;
    methods: IMethods;
    constructor(firstName: string, lastName: string, age: number) {
        this.data = { firstName, lastName, age }
        this.methods = {
            fullName: () => `${firstName} ${lastName}`
        }
    }
}

const user1 = new Person('Muhammad', 'SA', 24)
const fullName = user1.methods.fullName()
console.log(fullName)
