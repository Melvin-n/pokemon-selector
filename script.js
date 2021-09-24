//declare variables
const team2 = document.getElementById("team2")


const name1 = document.getElementById("name1")
const img1 = document.getElementById("img1")
const name2 = document.getElementById("name2")

let typetext = document.getElementById("typetext")
let typeselector = document.querySelector("#typeSelector")
let teamdisplay = document.querySelector("#teamdisplay")
let modal = document.querySelector("#modal")
let overlay = document.querySelector("#overlay")

let currentMon = "" //set current mon variable

let colorArr = { //color array to match each type with a color
    fire: "#ff9741",
    water: "#3692dc",
    grass: "#38bf4b",
    electric: "#fbd100",
    bug: "#83c300",
    ghost: "#4c6ab2",
    psychic: "#ff6675",
    dragon: "#006fc9",
    normal: "#919aa2",
    fairy: "#fb89eb",
    ice: "#4cd1c0",
    flying: "#89aae3",
    rock: "#c8b686",
    steel: "#5a8ea2",
    ground: "#e87236",
    dark: "#5b5466",
    fighting: "#e0306a",
    posion: "#b567ce"
}

let pokemonsType = ""
const getPokemon = async(id, callback) => {  //fetch pokemon from pokeAPI, url => fetch => return as json. id is pokemons number
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const pokemon = await res.json()
    currentMon = pokemon
    pokemonsType = pokemon.types.map(el => {
        return el.type.name //use map to get the result of type (type is saved under another array named '0', el becomes 0
    })

    callback()
    

}

function populate(mon){ //populate DOM with generated random pokemon

            let pokname = (mon.name).charAt(0) //take the first letter in the string using charAt
            .toUpperCase() //change it to uppercase
            + (mon.name).slice(1) //add the rest of the string by slicing it from the original
           
            let newTeamMember = `<div id="team2" class="team" style="border-color:${colorArr[pokemonsType[0]]}; "> <img class="image" src=${mon.sprites.front_default} </img><h2 id="name2">${pokname}</h2>
            </div>`
            teamdisplay.innerHTML += newTeamMember
            currentMon = ""
        }
    

let count = 1 //set a count so that only 6 pokemon max
    typeselector.addEventListener('click', e => {
        if(e.target.tagName == 'BUTTON'){
            count++
            console.log(count)
        }
        })
        

//calculation for pokemon id
let randomPokemon = () => { 
    return Math.floor(Math.random() * 152)
}

//check if the type matches what the user chose using a callback method
let getType = (type, callback) => {
    typeString = type
    if(count > 7){
        console.log("done!")
        modal.classList.remove("hide")
        modal.classList.add("show")
        overlay.classList.add("dim")
        return
    }
    if(!pokemonsType.includes(typeString)){
        callback()
    } else  {
        typetext.classList.add("remove")
        populate(currentMon)

    }


}

//modal button functions
function closeModal() {
    modal.classList.add("hide")
    modal.classList.remove("show")
    overlay.classList.remove("dim")
}

function reset() {
    modal.classList.add("hide")
    modal.classList.remove("show")
    overlay.classList.remove("dim")
    teamdisplay.innerHTML = ""
    count = 1

}
//functions for all type buttons, uses callback method to gettype fuinction
function firetype() {
getPokemon(randomPokemon(), getType.bind(this, "fire", firetype))
}

function watertype() {
    getPokemon(randomPokemon(), getType.bind(this, "water", watertype))
}
function grasstype() {
    getPokemon(randomPokemon(), getType.bind(this, "grass", grasstype))
}
function darktype() {
    alert("No dark types in gen 1! :(")
    count --
}
function normaltype() {
    getPokemon(randomPokemon(), getType.bind(this, "normal", normaltype))
}
function bugtype() {
    getPokemon(randomPokemon(), getType.bind(this, "bug", bugtype))
}
function dragontype() {
    getPokemon(randomPokemon(), getType.bind(this, "dragon", dragontype))
}
function fairytype() {
    getPokemon(randomPokemon(), getType.bind(this, "fairy", fairytype))
}
function poisontype() {
    getPokemon(randomPokemon(), getType.bind(this, "poison", poisontype))
}
function icetype() {
    getPokemon(randomPokemon(), getType.bind(this, "ice", icetype))
}
function steeltype() {
    getPokemon(randomPokemon(), getType.bind(this, "steel", steeltype))
}
function rocktype() {
    getPokemon(randomPokemon(), getType.bind(this, "rock", rocktype))
}
function groundtype() {
    getPokemon(randomPokemon(), getType.bind(this, "ground", groundtype))
}
function flyingtype() {
    getPokemon(randomPokemon(), getType.bind(this, "flying", flyingtype))
}
function fightingtype() {
    getPokemon(randomPokemon(), getType.bind(this, "fighting", fightingtype))
}
function ghosttype() {
    getPokemon(randomPokemon(), getType.bind(this, "ghost", ghosttype))
}
function psychictype() {
    getPokemon(randomPokemon(), getType.bind(this, "psychic", psychictype))
}
function electrictype() {
    getPokemon(randomPokemon(), getType.bind(this, "electric", electrictype))
}
