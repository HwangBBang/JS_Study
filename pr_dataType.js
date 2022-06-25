// Number type
let n1 = 1234;
let n2 =  5.3132;

// String type
let s1 = " Hi";
let s2 = 'Hello';

// Boolean type
let b1 = true;
let b2 = false;

// Null type
let n = Null;

// Undefined type
let u1;
let u2 = undefined;

// Array type
let arr = [1,2,3,4];

// Object type  / js에서 객체는 key 와 value 로 이뤄진 쌍의 집합을 의미함
let obj = {a: "apple", b: "banana", c: "carrot" };


// <배열>
// Num으로만 이루어진 배열
let arr1 = [1,2,3,4,5];

// String으로만 이루어진 배열
let arr2 = ['h','e','y'];

// Num , String 으로 이루어진 배열
let arr3 = ['h',1,'3',3];

// 다양한 타입으로 이루어진 배열
let arr4 = ['h', 1, true, undefined, false, 1.32 , null,"3213"];



// <객체>
// 값으로 string 타입을 사용한 객체
let obj1 ={a: "apple",b: "banana", c: "carrot"};

// 값으로 num 타입을 사용한 객체
let obj2 = {a: 1,b: 2,c: 4};

// 값으로 다양한 타입을 사용한 객체
let obj3 = {a:"hello", b: 1, c: [1,2,4,3]};

// 값으로 객체를 사용한 객체
let obj4 = {
    a: {a1:1 ,b1:2, c1:3},
    b: {a2:4 ,b2:4, c2:3},
    c: {a3:1 ,b3:1, c3:1}
};



// <출력>
// 배열
console.log(arr1[2]);       // 3 출력

console.log(arr2[0]);       // h 출력

console.log(arr3[1]);       // 1 출력

console.log(arr4[4]);       // false 출력

//객체
console.log(obj1['a']);     // apple 출력

console.log(obj2.a);        // 1 출력

console.log(obj3['c']);     // [1,2,4,3] 츨력

console.log(obj4.c.c3);     // 1 출력