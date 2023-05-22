{
    const today = new Date()
    console.log(today)

    const wday = new Date('2022/11/20')
    console.log(wday)
}

{
    const now = new Date()
    console.log(now)
    const year = now.getFullYear()
    console.log(year)
    const month = now.getMonth()
    console.log(month)
    const date = now.getDate()
    console.log(date)

    const today = `${year}년 ${month+1}월 ${date}일`
    document.write(today)
}

{
    // getTime() : 1970년 1월 1일 부터 경과된 시간을 밀리초 표기
    // 현재 날짜 부터 특정날짜 까지 몇일이 남았는지 구하는 공식
    // 남은일수(밀리초) = 특정날짜(밀리초) - 현재날짜(밀리초)

    // 1초 : 1000
    // 1분 : 1000 * 60
    // 1시간 : 1000 * 60 * 60
    // 1일 : 1000 * 60 * 60 * 24

    const today = new Date()
    const nowYear = today.getFullYear()
    const endDate = new Date(nowYear, 7, 21) //월 적을땐 하루 적게
    console.log(endDate);
    const remainDate = endDate.getTime() - today.getTime()
    console.log(remainDate)
    const result = Math.ceil(remainDate / (1000 * 60 * 60 * 24)) //Math.ceil은 반올림
    console.log(result)
} 