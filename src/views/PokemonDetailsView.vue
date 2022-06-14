<script setup>
	import Container from '@/views/Container.vue'
</script>

<template>
	<Container>
        <div class="mt-6 grid grid-cols-2 gap-8">
            <div class="">
                <p class="w-full text-center">#{{ ('000'+pokemon.id).slice(-4)}}</p>
                <div class="flex w-full items-center justify-center">
                    <img src="../assets/icon/pokesmall.png" alt="" class="mr-2">
                    <p class="text-center font-bold text-3xl tracking-widest">{{ pokemon.name }}</p>
                </div>
                <div class="flex justify-center mb-5 z-10">
                    <img :src="pokemon.imgUrl" alt="pokemon" class="w-72">
                </div>
                <div class="flex justify-center">
                    <div class="bg-slate-100 flex px-5 py-2 rounded-2xl items-center hover:bg-yellow-400">
                        <img src="../assets/icon/pokecatch.png" alt="" class="w-8 mr-2 animate-bounce">
                        <span class="text-sm font-semibold">Catch {{ pokemon.name }}</span>
                    </div>
                </div>
            </div>
            <div class="rounded-3xl bg-white px-6 py-3 w-9/12">
                <div class="bg-white rounded-3xl shadow-2xl shadow-slate-300 px-1 lg:px-5 py-2 mb-8">
                    <div class="grid grid-cols-3 gap-5 text-center">
                        <div class="rounded-3xl px-5 py-1 text-sm w-fit cursor-pointer" :class="{'bg-yellow-400' : isActive.about}" @click="activate('about')">About</div>
                        <div class="rounded-3xl px-5 py-1 text-sm w-fit cursor-pointer" :class="{'bg-yellow-400' : isActive.stats}" @click="activate('stats')">Stats</div>
                        <div class="rounded-3xl px-5 py-1 text-sm w-fit cursor-pointer" :class="{'bg-yellow-400' : isActive.moves}" @click="activate('moves')">Moves</div>
                    </div>
                </div>
                <div class="">
                    <div class="px-7" :class="{hidden: !isActive.about}">
                        <div class="grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3 text-sm">
                            <p class="font-medium">Types</p>
                            <div class="flex col-span-2 items-center ">
                                <div class="rounded-md px-3 mr-2 w-fit text-base" :class="type.type.name" v-for="type in pokemon.types" :key="type.slot">{{ capitalizeTheFirstLetterOfEachWord(type.type.name)}}</div>
                            </div>
                        </div>
                        <div class="grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3 text-sm">
                            <p class="font-medium">Height</p>
                            <p class="col-span-2">{{pokemon.height}} (m)</p>
                        </div>
                        <div class="grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3 text-sm">
                            <p class="font-medium">Weight</p>
                            <p class="col-span-2">{{ pokemon.weight }} (kg)</p>
                        </div>
                        <div class="grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-1 text-sm">
                            <p class="font-medium">Abilities</p>
                            <div class="col-span-2">
                                <div class="flex items-center mb-3" v-for="ability in pokemon.abilities" :key="ability">
                                    <img src="../assets/icon/pikachu.png" alt="" class="w-4 mr-2">
                                    <p class="rounded-md bg-yellow-200 px-3 text-base">{{ability}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-rows-1 grid-cols-3 gap-3 mb-5 lg:mb-3 text-sm">
                            <p class="font-medium">Experience</p>
                            <p class="col-span-2">{{pokemon.experience}} (Exp)</p>
                        </div>
                    </div>
                    <div :class="{hidden: !isActive.stats}">
                        <div class="w-full lg:px-10">
                            <div class="mb-3.5" v-for="stat in pokemon.stats" :key="stat">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center mb-1">
                                        <img :src="'/src/assets/icon/stats/' + stat.stat.name + '.png'" alt="hp-icon" class="mr-2">
                                        <span class="text-sm font-semibold">{{capitalizeTheFirstLetterOfEachWord(stat.stat.name)}}</span>
                                    </div>
                                    <span class="mb-1 text-sm font-semibold">{{stat.base_stat}}</span>
                                </div>
                                <div class="w-full bg-red-100 rounded-full h-2">
                                    <div class="bg-yellow-400 h-2 rounded-full" :style="{'width': (stat.base_stat/200*100) + '%'}"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="{hidden: !isActive.moves}">
                        <div class="overflow-y-scroll h-80 moves-scroll">
                            <div class="grid grid-cols-3 gap-5 mb-5">
                                <div class="border border-dashed py-3 hover:border-yellow-400 w-full" v-for="move in pokemon.moves" :key="move">
                                    <p class="text-center text-sm">{{move}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</Container>
</template>

<script>
    import PokemonAPI from '../api/PokemonAPI.js' 

    export default{
        data(){
            return {
                isActive : {
                    about : true,
                    stats : false,
                    moves : false,
                },
                pokemon : {}
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
            activate(tab){
                this.isActive.about = false
                this.isActive.stats = false
                this.isActive.moves = false

                if(tab == 'about'){
                    this.isActive.about = true    
                }else if(tab == 'stats'){
                    this.isActive.stats = true    
                }else if(tab == 'moves'){
                    this.isActive.moves = true    
                }
            },
            pokemonDetails(pokeId){
                PokemonAPI.getPokemonDetails(pokeId).then((res) => {
                    var data = res.data;
                    this.pokemon.id = data.id;
                    this.pokemon.name = this.capitalizeTheFirstLetterOfEachWord(data.name);
                    this.pokemon.types = data.types;
                    this.pokemon.height = (data.height) / 10;
                    this.pokemon.weight = (data.weight / 10);
                    this.pokemon.abilities = data.abilities.map(({ ability }) => {
                        return ability.name
                    });
                    this.pokemon.experience = data.base_experience;
                    this.pokemon.stats = data.stats;
                    this.pokemon.moves = data.moves.map(({ move }) => {
                        return move.name
                    });
                    this.pokemon.imgUrl = data.sprites.other['official-artwork'].front_default;

                }).catch((e) => {
                    console.log(e);
                })
            }
        },
        mounted(){
            this.pokemonDetails(this.$route.params.pokeId)
        }
    }
</script>