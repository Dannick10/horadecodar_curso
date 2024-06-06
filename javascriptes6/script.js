var x = 10
var y = 15

if( y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if(b > 10) {
    let b= 5
    console.log(b)
}

console.log(b)

let i = 20
console.log(i)

for(let i =0; i <5; i++){
    console.log(i)
}

console.log(i)

function logName() {
    const name = 'Daniel'
    console.log(name)
}

const name = 'a'

logName()

console.log(name)

// arrow function 
const sum = function sum(a,b) {
    return a + b
}

const arrowSum = (a,b) => {
    return a + b
}

console.log(sum(1,5))
console.log(arrowSum(1,5))

const greeting = (name) => {
    if(name) {
        return  `olá ${name}, tudo bem?` 
    } else{
        return 'Olá!'
    }
}

console.log(greeting('Daniel'))
console.log(greeting())

const testeArrow = () => console.log('testou')

testeArrow()

const user = {
    name: 'Theo',
    sayUserName() {
        var self = this
        setTimeout(function () {
            console.log(self)
            console.log('username' + this.name)
        }, 500)
    },
    seyuserNameARrow() {
        setTimeout(() => {
            console.log(this)
            console.log(`username` + this.name)
        }, 700)
    }
}

//user.sayUserName()
//user.seyuserNameARrow()

const arr = [1, 2, 3, 4, 5]

const highNumbers = arr.filter((n) => {
    if( n >= 3) {
        return n
    }
})

console.log(arr)
console.log(highNumbers)

const users = [
    {name: 'Daniel', avalible: true},
    {name: 'Pedro', avalible: true},
    {name: 'Matheus', avalible: false},
    {name: 'Marcos', avalible: true},

]

const avalibleUsers = users.filter((user) => user.avalible)
const notavaliableUsers = users.filter((user) => !user.avalible)

console.log(users)
console.log(avalibleUsers)
console.log(notavaliableUsers)


// map 

const products = [
    {name: 'Camisa', Price: 10.99, category: 'Roupas'},
    {name: 'chaleira eletrica', Price: 49.99, category: 'eletro'},
    {name: 'fogão', Price: 400, category: 'electro'},
    {name: 'calça jeans', Price: 10.99, category: 'Roupas'},
]

products.map((product) => {
    if(product.category == 'Roupas'){
        product.onsale = true
    }
})

products.map((product) => {
    if(product.onsale){
        product.salePrice = product.Price + 10
    }
})

console.log(products)

// template literals 

const userName = 'Daniel'
const age = 24

console.log(`${userName} têm ${age}`)

// destructing 

const fruits = ['maça','laranja','mamão']

const [f1, f2, f3] = fruits

console.log(f1)
console.log(f2)
console.log(f3)

const productDetails = {
    name: 'placa',
    price: 300.00,
    category: 'periferico',
    color: 'cinza'
}

const {name: productName, price, category, color} = productDetails

console.log(`nome do produto ${productName}, preço do produto é ${price}, pertece a categoria ${category} e é da cor ${color}`)

const a1 = [1, 2, 3]
const a2 = [4 ,5, 6]

const a3 = [...a1,...a2]

console.log(a3)

const a4 = [0, ...a1, 4]

console.log(a4)

const carName = {name: 'gol'}
const carBrand = {barnd: 'vw'}
const carinfo = {barnd: '1000', price: 49000}

const car = {...carName,...carBrand,...carinfo}

console.log(car)

class Product {
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productwithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product('Camisa gola v', 20)

console.log(shirt)
console.log(shirt.name)
console.log(shirt.price)
console.log(shirt.productwithDiscount(10))
console.log(shirt.productwithDiscount(50))

const tenis = new Product('tenis verde',120)
console.log(tenis)
console.log(tenis.productwithDiscount(50))