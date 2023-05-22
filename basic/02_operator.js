//operator 연산자

// 1.산술 연산자
{
    // console.log(100 + 10)
    // console.log(100 - 10)
    // console.log(100 * 10)
    // console.log(100 / 10)
    // console.log(100 % 10)
    // console.log(2 ** 5)
    //infinty, nan 등이 출력되는거 확인하기
}

// 2. 문자열 연산자
{
    // const say1 = 'winter'
    // const say2 = 'is coming'

    // console.log(`${say1} ${say2}`)
}

// 3. 대입 연산자
{
    // let x = 10
    // let y = 5
    
    // x = x + y //15
    // // x += y
    // console.log(x)
    // x = x - y // x -= y
    // console.log(x)
    // x = x * y // x *= y
    // console.log(x)
    // x = x / y // x /=y
    // console.log(x)
    // x = x % y // x %=y
    // console.log(x)

    // let tbl = '<table border=1>'
    // tbl += '<tr>'
    // tbl += '<td>1</td><td>2</td><td>3</td>'
    // tbl += '</tr>'
    // tbl += '</table>'

    // document.write(tbl)
}

// 4. 증감 연산자
// {
//     let number = 8
//     console.log(number)
//     number++ //하나를 증가시킬때 number = number+ 1
//     console.log(number)
//     number-- //하나를 감소시킬때
//     console.log(number)

//     let num1 = 10
//     let num2 = ++num1 //++가 앞쪽에 있으면 먼저 증감 시킴
//     console.log(num1, num2)

//     let count1 = 10
//     let count2 = count1++
//     console.log(count1, count2) //++가 뒤에 있으면 아직 연산전이라 count2는 10으로 출력됨 

// }

// 5. 비교 연산자
{
    console.log(10 > 100)
    console.log(10 < 100)
    console.log(10 >= 100) //비교부터 나옴 '크거나'같다
    console.log(10 <= 100)
    console.log(10 == 100)
    console.log(10 != 100)
}


// 6. 논리 연산자 - ||(or), &&(and), !(not)
{
    let a = 100 > 50 //true
    let b = 10 < 5 //false
    let c = true //true

    // || -> 하나만 true 이면 -> true
    console.log(a ||b ||c)
    
    
    // && -> 전부 true 일때만 -> true (하나라도 false면 false)
    console.log(a &&b &&c)
    
    // ! -> 값을 반대로 변경
    console.log(a && !b &&c) //<- true로 바꾸려면 b앞에 not(!)붙여주기

}

// 7. 동등/ 일치 연산자 - ==, ===, !=. !==
{
    const value1 = '100'
    const value2 = 100
    console.log(value1 == value2) //문자와 숫자지만 java가 알아서 같다고 판단하여 true
    console.log(value1 === value2) //false 
    // ==는 값만 비교 - 비교적 유연함
    // ===는 값과 type을 같이 비교 - 비교적 엄격함
    console.log(value1 != value2) //true 이지만 같지 않다고 햇으므로 false
    console.log(value1 !== value2) //false인데 같지 않다 했으므로 맞으니까 true
    console.log('..............')
    console.log(0 == false)
    console.log(0 === false)
    console.log('' == false)
    console.log(' ' === false)
    console.log(null == undefined)
    console.log(null === undefined)

}

// 8. 삼항 연산자 - 조건을 삼 항 을 통해서 하는 연산(if문과 같은것. 줄인거임)
{
    let a = 10
    let b = 15

    const result = a > b ? '감사합니다' : '미안합니다'
                // 조건 ? A : B (조건이 참이면 A, 거짓이면 B)
    console.log(result)
}

// 적정체중 : (신장 - 100) * 0.9

{
    const name = prompt('당신의 이름은?')
    const height = prompt('당신의 키는?')
    const weight = prompt('당신의 체중은?')
    const normalWeight = (height-100) * 0.9
    const result = weight >= normalWeight - 5 && weight <= normalWeight +5
    const message = result ? '적정체중입니다.' : '적정체중이 아닙니다.'
    document.write(`${name}님은 ${message}`)
}






















