<script setup>
	import { RouterLink, RouterView } from 'vue-router'
	import PokemonIndex from '@/components/PokemonIndex.vue'
	import Container from '@/views/Container.vue'
</script>

<template>
	<Container>
		<PokemonIndex/>
	</Container>
</template>
