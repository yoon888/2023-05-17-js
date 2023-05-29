// 1.함수 - 동작....
console.log('안녕하세요')

// 함수의 선언과 호출
function myFunc() {
    console.log('안녕하세요')
}

myFunc()

//매개변수 Parameter
function printMessage(message) {
    console.log(message)
}


printMessage('호호호')
printMessage('Hello Javascript')

//기본 매개변수
function showInfo(title, name = '스티브 잡스') {
    console.log(`${title} by ${name}`)
}

showInfo('게르리카','피카소')
showInfo('풍경')

// 스코프 scope
let movie = '하하하' //전 영역에서 유효함

function printMovie() { //함수의 스코프는 중괄호 안에서만 유효함 
    let myMovie = '생활의 발견'
    console.log(myMovie)
    console.log(movie)
}

printMovie()
// console.log(myMovie)


// return
function plus(a,b) {
    console.log(a+b)
    return a+b
}

const result = plus(10,12)
console.log(result)

function plus(a,b) {
    return a+b
    console.log(a+b)
}  //이렇게 쓰면 실행 안됨 함수를 빨리 끝내고싶을때 사용 가능

// Arrow function (화살표 함수)
const sum = add(5,15)
console.log(sum)

function add(a,b) {
    return a+b
}

const minus = function(a,b) {
    return a - b
}

const sum2 = minus(20,10)
console.log(sum2)

const minus2 = (a,b) => a-b //function생략하는대신(), {}생락하는대신 =>
const sum3 = minus2(50,25)
console.log(sum3)






