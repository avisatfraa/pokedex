<template>
    <div class="grid grid-cols-3 gap-14 font-sans mt-5">
        <div class="rounded-xl bg-white w-100 p-10 py-16 relative flex items-center justify-between mb-4" v-for="poke in pokemons" @click="details(poke.id)" :key="poke.id">
            <div class="absolute">
                <p>{{poke.id}}</p>
                <h4 class="font-bold text-2xl">{{poke.name}}</h4>
            </div>
            <div class="absolute z-10 -top-12 -right-5">
                <img src="../assets/icon/poke-shadow.png" alt="" class="w-24">
            </div>
            <div class="absolute z-10 -top-14 -right-5">
                <img :src="poke.imageUrl" alt="" class="w-44 h-auto">
            </div>
        </div>
    </div>
</template>

<script>
    import PokemonDataService from '../services/PokemonDataService.js' 

    export default{
        data() {
            return {
                pokemons: [],
                total: 0
            }
        },
        methods: {
            capitalizeTheFirstLetterOfEachWord(words) {
                var separateWord = words.toLowerCase().split(' ');
                for (var i = 0; i < separateWord.length; i++) {
                    separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
                    separateWord[i].substring(1);
                }
                return separateWord.join(' ');
            },
            getPokemon(){
                PokemonDataService.getPokemon().then(res =>{
                    this.pokemons = res.data.results
                    this.pokemons.forEach(poke => {
                        this.total++
                        poke.id = ('000'+this.total).slice(-4)
                        PokemonDataService.getPokemonDetails(poke.url).then(res=>{
                            poke.imageUrl = res.data.sprites.other['official-artwork']['front_default']
                        })
                        poke.name = this.capitalizeTheFirstLetterOfEachWord(poke.name)
                    });
                    
                }).catch(e =>{

                })
            },
            details(id){
                
            }
        }, beforeMount(){
            this.getPokemon();
        }
    }
</script>
