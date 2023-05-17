//Variable 변수
//var,let,const

var title = 'html'
var age = 32
var age2 = '32'
var userNameIs='abc'
var userName = "Alice"
userName = '홍길동'
console.log(userName)

//1.var

//읽기, 쓰기 가능
//블럭을 무시한다
//요즘 잘 안쓰고 2,3번만 씀

var userName='Alice'
userName = '홍길동'
console.log(userName)

//규칙 : 앞이 숫자로 시작하거나 자바스크립트가 사용하고 있는 예약어는 사용안됨.(한글,'_,$'도가능)

console.log(age,title)
//2.Let.

//읽기, 쓰기 가능

{
    let title = 'htmml'
    title='css'
    console.log(title)
}

console.log(title)

//3. const
//읽기만 가능, 변하지 않는다.
//주로 사용 오류가 뜨면 2로 변경



{
    let title = 'javascropt'
    title = 'html'
    console.log(title)
}


// 4. 변수의 데이터 타입 - 자료형
// 원시데이타 : string, number, boolean(=true and false), null(비어있는변수), undefined(값이정의되지않은상태 ex:const title = ?)

//숫자형 Number
{
    const num = 10
    const PI = 3.14

    const a = 12
    const b =5

    console.log(a-b)
    console.log(a+b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)
}

{
    const a = 1 / 0             //Infinity
    const b = -1 / 0            //-Infinity
    const c = 'html' / 0        //NaN
    console.log(c)
}

//문자형 string

{
    const name1 = "Alice"
    const name2 = "alice"

    const firstName = 'John'
    const lastName = 'snow'
    const fullName = firstName + " " + lastName
    //공백을 주려면 변수에 띄어쓰기 해도 되고 연산에서 공백을줘도 됨
    console.log(fullName)
    console.log(`${firstName} ${lastName}`) //공백" "대신 `` 도 사용가능
}

// Boolean - true & false
{
    const a = true
    const b = false

    const name = 'Alice'
    const age = 21

    console.log(name == 'Alice')
    console.log(age > 20)

    if(age > 20) {
        console.log('입장!!!!')
    } else {
        console.log('퇴장!!!!')
    }
}

// null - 존재하지 않는 값
{
    const a = null //데이터를 보통 텅 비울때 사용
    console.log(`값은 ${a}이고 타입은 ${typeof a}입니다`)
    //type이 object로 표시되는건 오류임
}

// undefined - 값이 할당되지 않음
{
    let winter
    console.log(`값은 ${winter}이고 타입은 ${typeof winter}입니다.`)
}


// 5. 대화상자 - alert, prompt, confirm

{
    // const name = prompt('이름을 입력하세요','영업팀')
    // alert(`안녕하세요 ${name}님, 환영합니다.`)
    // const isCheck = confirm('확인하셨습니까?')
    // console.log(isC90heck)
}

//6. 형 변환

{
    // const mathScore = prompt('수학점수는?')
    // const engScore = prompt('영어수는?')
    // const score = (Number(mathScore) + Number(engScore)) / 2
    // alert(score)
}

{
    console.log(
        String(1234), //string으로 감싸면 숫자여도 문자
        String(true),
        String(null),
        String(undefined)
    )

    console.log(
        Number('1234'),
        Number('1234hello'),
        Number(true), //true는 숫자형으로 변경하면 숫자1이나옴
        Number(false), //false는 숫자형으로 변경하면 숫자0이나옴
        Number(null), //data가 없는것도 거짓, 숫자0도 거짓
        Number(undefined)
    )

    console.log(
        Boolean(0), //false
        Boolean('0'), //글자가 있는건 true
        Boolean(''), //아무것도없는것 false
        Boolean(' '), //공백도 글자이므로 true
        Boolean(null), //false
        Boolean(undefined), //false
        Boolean(NaN) //false
    )
}