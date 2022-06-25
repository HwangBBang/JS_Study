// 연산자 
// ( 대입 연산자 : 오른쪽의 값을 왼쪽에 대입)
let a = 2; let b = 6;
// ( 산술 연산자 : 사칙연산 )
console.log(a + b);     //  8

console.log(a - b);     //  -4

console.log(a * b);     //  12

console.log(a / b);     //  0.33333333

console.log(a % b);     //  2

console.log(a ** b);    //  64

a += b;     //a = a + b
console.log(a);

a -= b;     //a = a - b
console.log(a);

a *= b;     //a = a * b
console.log(a);

a /= b;     //a = a / b
console.log(a);

// ( 비교 연산자 )
let c = 1; let d = 2;
console.log(c < d);
console.log(c > d);
console.log(c <= d);
console.log(c >= d);

// 비교 연산자 
console.log(c == d);
console.log(c != d);

// 일치 연산자 (strict(엄격한) equality operators)
console.log(c === d); //값과 자료형이 모두 같다.
console.log(c !== d); //값이나 자료형이 같지 않다.

// 이진 논리 연산자
let e = true; let f = false;
console.log(e && f);  // e,f 의 and 연산 
console.log(e || f);  // e,f 의 or 연산 

// 조건부 연산자(삼항 연산자)
// 조건식 ? true일 경우 실행 : false 일 경우 실행
console.log(a ? 1 : 2); //a 가 true 이므로 true 실행 -> 1 
console.log(b ? 1 : 2); //b 가 false 이므로 false 실행 -> 2
