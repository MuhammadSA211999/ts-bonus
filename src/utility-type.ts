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