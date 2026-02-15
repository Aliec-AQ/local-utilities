<script setup lang="ts">
import Logo from '@/assets/logo.png';


</script>

<template>
    <nav class="fixed z-50 bottom-0 w-full bg-black text-white border-t border-amber-500/60 backdrop-blur">
        <div class="mx-auto max-w-6xl px-4 py-2">
            <ul class="flex items-center justify-between">
                <li class="flex items-center gap-3">
                    <div class="size-3 rotate-45 bg-amber-500"></div>
                    <div class="size-2 bg-amber-500/70"></div>
                </li>
                <li>
                    <router-link to="/" class="flex items-center gap-3">
                        <img :src="Logo" alt="Logo" class="size-11 w-auto">
                        <span class="hidden sm:inline text-xs uppercase tracking-[0.35em] text-amber-300">Home</span>
                    </router-link>
                </li>
                <li class="flex items-center gap-3">
                    <div class="size-2 bg-amber-500/70"></div>
                    <div class="size-3 rotate-45 bg-amber-500"></div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
</style>