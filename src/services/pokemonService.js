import axios from "axios"
import { Pokemon } from "../models/pokemons";


export class PokemonService{

constructor(){

}
//permet de stocker toute les info de lapi sur un pokemon precis
getPokemon(id){
    return new Promise((resolve, reject) =>{
        axios.get("https://pokeapi.co/api/v2/pokemon/"+id).then(response =>{
            //on stock les données json du pokemon dans la variable pokemondata
            let pokemondata = response.data;
           
            
            //je cree un new pokemon
            console.log(pokemondata)
            let pokemon = new Pokemon()
             //je lui affect les proprietes de lapi
            pokemon.base_experience = pokemondata.base_experience
            pokemon.sprite = pokemondata.sprites.front_shiny
            pokemon.name = pokemondata.name
            pokemon.hp = pokemondata.stats[0].base_stat
            pokemon.defense = pokemondata.stats[1].base_stat
            pokemon.attack = pokemondata.stats[2].base_stat
            pokemon.special_attack = pokemondata.stats[3].base_stat
            pokemon.special_defense = pokemondata.stats[4].base_stat
            pokemon.speed= pokemondata.stats[5].base_stat
            pokemon.abilities= pokemondata.abilities
            pokemon.types= pokemondata.types
            pokemon.sound = "https://www.pokebip.com/audio/cris-sl/"+id+".mp3"
           
            //jappelle resolve pour resoudre ma promesse ce qui va declencher le .then
            resolve(pokemon)
        })
        .catch(reason =>{
            reject("erreur lors de la recup des pokemons" + reason)
        })
    })
}
//permet de creer un objet en js
//on va stocker tout les pokemons du pokedex
getPokemons(){
    //promesse demande info a l'api
    return new Promise((resolve, reject) =>{
        let pokemons = []

        //bibliotheque qui permet utiliser api facilement
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=150').then(response => {
            console.log(response)
            let result = response.data.results;
            //permet afficher tout les pokemons
            result.forEach(p => {
                
                let substrings = p.url.split("/")
                let id = substrings[substrings.length - 2];
                p.id = id;
                p.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ id +".png";
            
                pokemons.push(p)
            })
            resolve(pokemons)
        })
        .catch(reason =>{
            reject("erreur lors de la recup des pokemons" + reason)
        })
        
    })



}


}
