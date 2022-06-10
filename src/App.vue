<script setup>
	import { RouterLink, RouterView } from 'vue-router'
	import PokemonIndex from '@/components/PokemonIndex.vue'
</script>

<template>
	<div class="container bg-gray-200 px-24 py-3 h-screen">
		<nav class="pb-20">
			<button class="rounded-2xl bg-gray-100 px-5 py-2 flex h-100 float-right align-middle hover:bg-yellow-400"> 0 Catch
				<img src="./assets/icon/pokecatch.png" alt="" class="w-7 pl-2">
			</button>
			<img src="./assets/icon/pokemon-logo.png" alt="" class="w-36">
		</nav>
		<PokemonIndex/>
	</div>
</template>

<script>
	import { defineComponent } from '@vue/composition-api'

	export default defineComponent({
		setup() {
					
		},
	})
</script>
