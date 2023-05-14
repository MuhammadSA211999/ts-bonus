//utility-type:kuno ekta type/interface er propety er type er upor nirbor kore notun type declear kora
interface Person {
    name: string;
    email: string;
    phone?: number;
    contact: boolean
}
type ContactNo = Pick<Person, 'phone' | 'email'>
//ContactNo er type hocce string|number
type Address = Omit<Person, 'name' | 'contact'>
//Address er type hocce Person class e name and contact er type chara baki gulu
type Optional = Partial<Person>
//Partial hocce optional
type RequiredProps = Required<Person>

//Record type with Literel and Index-signature 
//literel
type MyObj1 = {
    a: string;
    b: string;
    c: string;
}
//index-signature
type MyObj2 = {
    [key: string]: string
    //  key type: value return type
}
const myObj2: MyObj2 = {
    a: '1',
    b: '2',
    c: '3'
    //more string property will continueing
}

// type MyObj3=Record<string,string> //more property deya zay
type MyObj3 = Record<'a' | 'b' | 'c', string> //more secure and modern
const myObj3: MyObj3 = {
    a: '1',
    b: '2',
    c: '3'
    //property type MyObj3 er a,b,c porzonto hobe
}

