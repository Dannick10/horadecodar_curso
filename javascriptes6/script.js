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

user.sayUserName()
user.seyuserNameARrow()