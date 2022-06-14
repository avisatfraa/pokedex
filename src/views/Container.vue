<template>
	<div class="w-full bg-slate-200 px-5 lg:px-24 py-3 h-100 min-h-screen">
		<nav class="flex items-center justify-between">
			<router-link to="/">
				<img src="../assets/icon/pokemon-logo.png" alt="" class="w-36">
			</router-link>
			<button class="rounded-2xl bg-gray-100 px-5 py-2 flex items-center h-100 hover:bg-yellow-400 text-sm font-medium"> 0 Catch
				<img src="../assets/icon/pokecatch.png" alt="" class="w-7 pl-2">
			</button>
		</nav>
		
        <div class="flex justify-center items-center h-96" v-if="loading">
            <div class="rounded-3xl bg-white px-5 py-2.5 flex justify-center items-center">
                <img src="../assets/icon/pokesmall.png" alt="" class="animate-spin mr-2">
                <span class="font-semibold text-md">Loading...</span>
            </div>
        </div>
		<div v-if="!loading">
			<slot></slot>
		</div>
	</div>
</template>

