// array 배열
// 1. 배열 만들기

{
    const arr1 = new Array ()
    arr1[0] = 10
    arr1[1] = 'hello' //첫번째 방법
    console.log(arr1)

    const arr2 = [1,3,5,7,9,'안녕',{},true]
    console.log(arr2)

    const arr3 = [
        'a',
        { model: 'apple', price: 1000},
        { model: 'galaxy', price: 2000}
    ]

    console.log(arr3)

    //접근방법
    console.log(arr2[5])
    // apple에 접근하기 배열은 인덱스번호로, 객체 안은 '.'으로
    console.log(arr3[1].model)
}