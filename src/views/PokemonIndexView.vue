<template>
	<Container>
    	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 font-sans mt-24">
			<PokemonCard v-for="pokemon in state.pokemons" :key="pokemon.id" :poke-id="pokemon.id" :poke-name="pokemon.name" :poke-img="pokemon.imageUrl"/>
		</div>
        <div class="flex items-center justify-center my-10">
            <InfiniteLoading @infinite="getPokemon" :pokemons="state.pokemons"/>
        </div>
	</Container>
</template>

<script>
	import PokemonCard from '@/components/PokemonCard.vue'
	import Container from '@/views/Container.vue'
    import PokemonAPI from '../api/PokemonAPI.js' 
    import { onMounted, reactive, ref } from "vue";
    import InfiniteLoading from "v3-infinite-loading";
    import "v3-infinite-loading/lib/style.css";

    export default{
        components: {
            Container,
            PokemonCard,
            InfiniteLoading
        },
        setup(){
            const state = reactive({
                pokemons: [],
                pokemonTemp: [],
                total: 0,
                nextUrl: '',
            })

            function capitalizeTheFirstLetterOfEachWord(words) {
                var separateWord = words.toLowerCase().split(' ');
                for (var i = 0; i < separateWord.length; i++) {
                    separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
                    separateWord[i].substring(1);
                }
                return separateWord.join(' ');
            }

            function getPokemon($state){
                var params = state.nextUrl.substring(state.nextUrl.indexOf('?'))

                PokemonAPI.getPokemon(params).then(res =>{
                    state.nextUrl = res.data.next
                    state.pokemonTemp = res.data.results
                    state.pokemonTemp.forEach(poke => {
                        state.total++
                        poke.id = state.total;
                        PokemonAPI.getPokemonUrl(poke.url).then(res=>{
                            poke.imageUrl = res.data.sprites.other['official-artwork']['front_default']
                        })
                        poke.name = capitalizeTheFirstLetterOfEachWord(poke.name)
                    });
                    state.pokemons = state.pokemons.concat(state.pokemonTemp)
                    $state.loaded()
                }).catch((e) =>{
                    $state.error()
                    console.error(e);
                })
            }

            return {
                state,
                capitalizeTheFirstLetterOfEachWord,
                getPokemon
            }
        }
    }
</script>
