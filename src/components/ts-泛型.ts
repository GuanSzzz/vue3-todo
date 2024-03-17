// 函数名之后使用 <> 定一个泛型 T，会在后面使用，相当于【type T = arg 的类型】，返回值使用 T 这个类型就完成了这个需求

function identity0(arg: any): any {
    return arg
}
// 相当于type T = arg的类型
function identity<T>(arg: T): T {
    return arg
}
identity<string>('玩转vue 3全家桶') // 这个T就是string，所以返回值必须得是string
identity<number>(1)


// keyof 语法 keyof 可以帮助我们拆解已有类型
interface VueCourse5 {
    name:string,
    price:number
}
type CourseProps = keyof VueCourse5 // 只能是name和price选一个
let k:CourseProps = 'name'
// let k1:CourseProps = 'p' // 改成price
let k1:CourseProps = 'price' // 改成price

// 使用 extends 来实现类型系统中的条件判断。我们定义类型函数 ExtendsType，接受泛型参数 T 后，通过判断 T 是不是布尔值来返回不同的类型字符串，我们就可以通过 ExtendsType 传入不同的参数去返回不同的类型。
// T extends U ? X : Y 类型三元表达式
type ExtendsType<T> = T extends boolean ? "重学前端" : "玩转Vue 3"
type ExtendsType1 = ExtendsType<boolean> // type ExtendsType1='重学前端'
type ExtendsType2 = ExtendsType<string> // type ExtendsType2='玩转Vue 3'


// extends 相当于 TypeScript 世界中的条件语句，然后 in 关键字可以理解为 TypeScript 世界中的遍历。下面的代码中我们通过 k in Courses 语法，相当于遍历了 Courses 所有的类型作为 CourseObj 的属性，值的类型是 number。
type Courses = '玩转Vue 3'|'重学前端'
type CourseObj = {
    [k in Courses]:number // 遍历Courses类型作为key
}
// 上面的代码等于下面的定义
// type CourseObj = {
//     玩转Vue 3: number;
//     重学前端: number;
// }


// getProperty 函数
// K extends keyof T限制K的类型必须是T的属性之一
// T[K]是值得类型
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]
}
const coursePrice:CourseObj = {
    "玩转Vue 3":129,
    "重学前端":129
}
getProperty(coursePrice,'玩转Vue 3')
// getProperty(coursePrice,'不学前端') // 报错
getProperty(coursePrice,'重学前端') 

// 关键字 infer。<T> 让我们拥有了给函数的参数定义类型变量的能力，infer 则是可以在 extends 之后的变量设置类型变量
type Foo = () => CourseObj

// 如果T是一个函数，并且函数返回类型是P就返回P
type ReturnType1<T> = T extends ()=>infer P ?P:never 
type Foo1 = ReturnType1<Foo>