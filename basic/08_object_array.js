// array 배열
// 1. 배열 만들기

{
    const arr1 = new Array ()
    arr1[0] = 10
    arr1[1] = 'hello' //첫번째 방법
    console.log(arr1)

    console.log('------------------')

    const arr2 = [1,3,5,7,9,'안녕',{},true]
    console.log(arr2)

    console.log('------------------')

    const arr3 = [
        'a',
        { model: 'apple', price: 1000},
        { model: 'galaxy', price: 2000}
    ]

    console.log(arr3)

    console.log('------------------')

    //접근방법
    console.log(arr2[5])
    // apple에 접근하기 배열은 인덱스번호로, 객체 안은 '.'으로
    console.log(arr3[1].model)
    console.log('------------------')
}

// 2. 배열 출력
{
    const books = ['html','css','javascript']
    console.log(books)
    console.log(books[books])
    console.log(books.length) //3
    console.log(books[0]) //html 배열의 첫 요소 반환
    console.log(books[books.length - 1]) // 배열의 마지막 요소 반환

    // for문
    for(let i = 0; i < books.length; i++) {
        console.log(books[i])
    }

    console.log('------------------')

    // for of---for문을 간단하게 for of로 나타낼수 있음. 대신 for문을 사용하면 'break', 이중for문 사용 가능
    for(let book of books) {
        console.log(book)
    }

    console.log('------------------')

    // for in
    for(let key in books) {
        console.log(key)
    }

    for(let i in books) {
        console.log(books[i])
    }

    console.log('------------------')

    // forEach
    books.forEach(function(){
        //
    })
    books.forEach((book)=>{console.log('📗'+ book)})

    //map : 새로운 배열을 리턴
    const newBooks = books.map(item => `${item} 🎃`)
    console.log(newBooks)
}

