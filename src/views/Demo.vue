<template>
    <div class="container">
     <!-- <p>{{maVariable}}</p>
      <span>{{compteur}}</span>
      <br>
      <br>
      <input type="text" v-model="firstName">
      <br>
      <span v-if="firstName != ''">
        bonjour {{ firstName }}
        </span>
        <span v-else>Merci d'entrer votre prenom </span>
<br>
      <button v-on:click="direBonjour"> Bonjour </button>-->
      <br>
      <br>
       <br>
      <br>
  
<div> 

</div>
<br>
<div  class="maDiv" v-for=" (p, index) in pokemons" v-bind:key="index">
<h1>
  <!-- permet de faire la navigation et ca marche avec les paths -->
<router-link v-bind:to="'/pokemons/' + p.id">
<!-- //affiche image pokemon -->
<img v-bind:src="p.sprite">
<br>
{{p.name}}
 <!--<img v-bind:src="pokemon.sprites.back_default" alt="" width=10%>-->
</router-link>
</h1>
<span>
{{ p. description }}
</span>
<ul>
  <!-- v-for boucle /  v-bind transforme html en js-->
<li v-for='(t, i) in p.types' v-bind:key="i">
</li>
</ul>



        </div>
        </div>
</template>
<style scoped>
li{
  list-style-type: none;
}
</style>


<script>

import { PokemonService } from '../services/pokemonService.js'

export default {
  name: 'Demo',
 //permet de creer des variables
  data(){
    return{
      maVariable: "Bonjour",
      compteur : 0,
      firstName : "",
      pokemons: [
      

      ],
      //appeler objet
      service: new PokemonService
    }
  },
  //permet de stocker des fonctions et de les appeller avec vue js
  methods:{
direBonjour(){
  alert("Bonjour " + this.firstName)
}
  },
  created(){
    console.log('created')
  },
  mounted(){
    //compiler du js apres que la page html est fini de charger
    //cette fonction sera appele lorsque le composant est pret a lemploi
    //alert('composant pret'),
    setInterval(function(){
this.compteur++
    },1000)
this.service.getPokemons().then(pokemons=>{
  this.pokemons = pokemons
})

  }
}


</script>
<style scoped>
a{
  text-decoration: none;
  color: black;
}
.container {
   display: flex;
   flex-wrap: wrap;
   gap: 15px;}
rout-link{
  margin: 1%;
}
.maDiv{
  font-size: 10px ;
  
}
</style>