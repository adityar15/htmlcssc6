// console.log("Hello World!")

// let firstname 
// firstname = "ajdhaskjh"


// const tax = 100

// // let contact_address
// // let contactAddress

// let lastname = "dev"



// console.log(addition(34, 26))


// let fullname = firstname + " " + lastname


// const person = {
//     name: "Aditya",
//     profession: "Self Employed",
//     "home address": "Iasdasd"
// }
// console.log(person.name)
// console.log(person["name"])
// console.log(person["home address"])


// function addition(num1, num2)
// {
//     let sum = num1 + num2
//     return sum
// }

// console.log(addition(10, 30))


// console.log(addition(34, 26))


// const subtraction = (num1, num2) => {
//     return num1 - num2
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// for(let i = 0; i <= numbers.length - 1; i++)
// {
//     console.log(numbers[i])
// }

// let j = 0


// while(j <= numbers.length - 1)
// {
//     console.log(numbers[j])
//     j++
// }


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = numbers.filter((num, index)=>{
    return num % 2 == 0
})

console.log(evenNumbers)


const squaredNumbers = numbers.map((num, index)=>{
    return num * num
})

console.log(squaredNumbers)

const sum = numbers.reduce((accumulated, current)=>{
    accumulated = accumulated + current
    return accumulated
}, 0)

console.log(sum)


const pokemon = [
    {
        id: 1,
        name: "Bulbasaur",
        type: "Grass",
        hp: 10,
    },
    {
        id: 2,
        name: "Ivysaur",
        type: "Grass",
        hp: 30
    },
    {
        id: 3,
        name: "Charmander",
        type: "Fire",
        hp: 20
    }
]

const grassPokemon = pokemon.filter((poke, index)=>{
    return poke.type == "Grass"
})

let filtered = []

// const pokemonTypes = pokemon.map((poke, index)=>{
//     return poke.type
// }).filter((pokeType, index)=>{
//     if(filtered.indexOf(pokeType) == -1)
//     {
//         filtered.push(pokeType)
//         return true
//     }

//     return false
// })

// const pokemonTypes = new Set( pokemon.map((poke, index)=>{
//     return poke.type
// }))

// console.log(pokemonTypes)
const hpSum = pokemon.reduce((accumulated, currentValue)=>{
    accumulated = accumulated + currentValue.hp
    return accumulated
}, 0)

console.log(hpSum)