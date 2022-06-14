<template>
    <div class="grid grid-cols-3 gap-14 font-sans mt-24">
        <router-link :to="{ name: 'pokemon-detail', params: { pokeId: poke.id} }" v-for="poke in pokemons" :key="poke.id">
            <div class="rounded-xl bg-white w-100 p-10 py-16 relative flex items-center justify-between mb-4 transition ease-in-out hover:-translate-y-2.5 duration-300">
                <div class="absolute">
                    <p>{{('000'+poke.id).slice(-4)}}</p>
                    <h4 class="font-bold text-2xl">{{poke.name}}</h4>
                </div>
                <div class="absolute z-10 -top-12 -right-5">
                    <img src="../assets/icon/poke-shadow.png" alt="" class="w-24">
                </div>
                <div class="absolute z-10 -top-14 -right-5">
                    <img :src="poke.imageUrl" alt="" class="w-44 h-auto">
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    import PokemonAPI from '../api/PokemonAPI.js' 

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
                PokemonAPI.getPokemon().then(res =>{
                    this.pokemons = res.data.results
                    this.pokemons.forEach(poke => {
                        this.total++
                        poke.id = this.total;
                        PokemonAPI.getPokemonUrl(poke.url).then(res=>{
                            poke.imageUrl = res.data.sprites.other['official-artwork']['front_default']
                        })
                        poke.name = this.capitalizeTheFirstLetterOfEachWord(poke.name)
                    });
                    
                }).catch(e =>{

                })
            },
        }, mounted(){
            this.getPokemon();
        }
    }
</script>
