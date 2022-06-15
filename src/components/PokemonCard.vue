<template>
        <router-link :to="{ name: 'pokemon-detail', params:  {pokeId: pokeId} }">
            <div class="rounded-xl bg-white w-100 p-10 py-16 relative flex items-center justify-between mb-4 transition ease-in-out hover:-translate-y-2.5 duration-300">
                <div class="absolute">
                    <p>{{('000'+pokeId).slice(-4)}}</p>
                    <h4 class="font-bold text-2xl">{{pokeName}}</h4>
                </div>
                <div class="absolute z-10 -top-12 -right-5">
                    <img src="../assets/icon/poke-shadow.png" alt="" class="w-24">
                </div>
                <div class="absolute z-10 -top-14 -right-5">
                    <img :src="pokeImg" alt="" class="w-40 xl:w-44 h-auto">
                </div>
            </div>
        </router-link>
</template>

<script>
    import PokemonAPI from '../api/PokemonAPI.js' 

    export default{
        props: {
            pokeId: String,
            pokeName: String,
            pokeImg: String
        },
        data() {
            return {
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
        }
    }
</script>
