<script setup>
	import PokemonCard from '@/components/PokemonCard.vue'
	import Container from '@/views/Container.vue'
</script>

<template>
	<Container>
    	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 font-sans mt-24">
			<PokemonCard v-for="pokemon in pokemons" :key="pokemon.id" :poke-id="pokemon.id" :poke-name="pokemon.name" :poke-img="pokemon.imageUrl"/>
		</div>
		<div class="flex justify-center items-center mt-10">
			<div class="rounded-xl bg-white px-6 py-2 w-fit cursor-pointer hover:bg-yellow-400" @click="getPokemon">
				<span class="font-medium text-base">Load More</span>
			</div>
		</div>
	</Container>
</template>

<script>
    import PokemonAPI from '../api/PokemonAPI.js' 

    export default{
        data() {
            return {
                pokemons: [],
                pokemonTemp: [],
                total: 0,
                nextUrl: ''
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
                var params = this.nextUrl.substring(this.nextUrl.indexOf('?'))
                PokemonAPI.getPokemon(params).then(res =>{
                    this.nextUrl = res.data.next
                    this.pokemonTemp = res.data.results
                    this.pokemonTemp.forEach(poke => {
                        this.total++
                        poke.id = this.total;
                        PokemonAPI.getPokemonUrl(poke.url).then(res=>{
                            poke.imageUrl = res.data.sprites.other['official-artwork']['front_default']
                        })
                        poke.name = this.capitalizeTheFirstLetterOfEachWord(poke.name)
                    });
                    this.pokemons = this.pokemons.concat(this.pokemonTemp)
                    
                }).catch(e =>{

                })
            },
            next(){
                
            }
        }, mounted(){
            this.getPokemon();
        }
    }
</script>
