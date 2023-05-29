const price = document.querySelector('.price')
const count = document.querySelector('.count')
const sum = document.querySelector('.sum')
// const btns = document.getElementById('btns')
const btns = document.querySelectorAll('button')

// console.log(price)
// console.log(count)
// console.log(sum)
// console.log(btns) // 꼭 확인하기


let num = 1
const unit_price = 30000

function printTotalPrice() {
    count.textContent = num
    sum.textContent = unit_price * num
}

btns.forEach(btn => {
//     btn.addEventListener('click', function(){
//         //
//     })
// })
    btn.addEventListener('click', (e)=> {
        if(e.target.className === 'plus'){
            num++
            printTotalPrice()
        } else if (e.target.className === 'minus') {
            num--
            if (num <= 1) num = 1
            printTotalPrice()
        } else {
            num = 1
            printTotalPrice()
        }
    })
})

function init() {
    price.textContent = unit_price
    printTotalPrice()
}

init()