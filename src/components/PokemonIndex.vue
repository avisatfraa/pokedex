<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <div class="grid grid-cols-3 gap-14 font-sans mt-5">
        <div class="rounded-xl bg-white w-100 p-10 py-16 relative flex items-center justify-between">
            <div class="absolute">
                <p>0001</p>
                <h4 class="font-bold text-2xl">Bulbasaur</h4>
            </div>
            <div class="absolute z-10 -top-12 -right-5">
                <img src="../assets/icon/poke-shadow.png" alt="" class="w-24">
            </div>
            <div class="absolute z-10 -top-14 -right-5">
                <img src="../assets/icon/bulbasaur.png" alt="" class="w-44 h-auto">
            </div>
        </div>
    </div>
</template>

