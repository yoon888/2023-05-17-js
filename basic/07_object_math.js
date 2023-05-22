{
    console.log(Math)

    const sum = 9.4
    const sum2 = '12.12463'

    console.log(Math.round(sum)) // 반올림
    console.log(Math.ceil(sum)) // 올림
    console.log(Math.floor(sum)) // 내림
    console.log(Math.pow(2,4)) // 거듭제곱
    console.log(parseInt(sum2)) // 문자를 숫자(정수)로 (.뒤 숫자는 안나옴)
    console.log(Number(sum2)) // 문자를 숫자로(전부다바꿔버림)
}

{
    // random number
    const num = Math.random()
    
    //0~1 사이 숫자 출력 (ex 0.2178947389 ~0.999-  까지)
    console.log(num) 
    console.log(num*10)

    // 0~9 사이의 정수 출력
    console.log(Math.floor(num*10)) 

    // 1~9 사이의 정수 출력
    console.log(Math.floor(num*10))
    
    // 1~10 사이의 정수 출력
    console.log(Math.ceil(num*10)+1) 

    // 배열 랜덤 출력
    const food = ['라면','김밥','우동','칼국수','햄버거']
    const randomNum = Math.floor(Math.random() * food.length)
    console.log(randomNum)
    document.write(food[randomNum])
}