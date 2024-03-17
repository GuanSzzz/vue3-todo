let courseName:string = '玩转Vue 3全家桶'
let price:number = 129
// price = '89' //类型报错
let isOnline:boolean = true
let courseSales:undefined
let timer:null = null
let me:[string,number] = ["大圣",18]
// me[0] = 1 //类型报错


// 使用any可以为任意类型，跟js一样
let anyThing
let anyCourse :any = 1
anyCourse = 'xx'
console.log(anyCourse.a.b.c)



// enum 去定义枚举类型
enum 课程评分 {好,非常好,嘎嘎好}
console.log(课程评分['好']===0)
console.log(课程评分[0]==='好')
let scores = [课程评分['好'], 课程评分['嘎嘎好'], 课程评分['非常好']]


// 组合的方式组合出新的类型
let course1 : string|number = '玩转vue 3'
course1 = 1
// course1 = true // 报错
// 还可以用来限制变量只能赋值为几个字符串的一个，score 的取值只能是代码中三个值之一
type courseScore = '好' | '非常好' | '嘎嘎好'
let score1 :courseScore = '好'
// let score2 :courseScore = '一般好' // 报错


// 通过 interface 接口可以定义对象的类型限制
interface 极客时间课程 {
    课程名字:string,
    价格:number[],
    受众:string,
    讲师头像?:string|boolean,
    readonly 课程地址:string
}
let vueCourse: 极客时间课程 = {
    课程名字:'玩转Vue 3全家桶',
    // 价格:[59,'139'],  //报错
    价格:[59],  //报错
    受众:'我',
    讲师头像:false,
    课程地址:"time.geekbang.org"
}
// vueCourse.课程地址 = 'e3.shengxinjing.cn' // 报错


// 函数限制类型
// function 函数名(参数:参数类型):返回值类型{} //大致语法
function add(x: number, y: number): number {
    return x + y;
}
add(1, 2);
// 使用 type 或者 interface 关键字去定义函数的类型
let add1:(a:number,b:number)=>number = function(x: number, y: number): number {
    return x + y;
}
type addType = (a:number,b:number)=>number
let add2:addType  = function(x: number, y: number): number {
    return x + y;
}

interface addType1{
    (a:number,b:number):number
}
let add3:addType1  = function(x: number, y: number): number {
    return x + y;
}


// 函数既要支持字符串，也支持数字，需要函数重载，定义多个函数的输入值和返回值类型，更精确地限制函数的类型
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}


// 对于第三方库和宿主环境，已经提前定义好了