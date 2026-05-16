<script setup lang="ts">
import { modules } from '@/modules/modules';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};
</script>

<template>
  <div class="relative min-h-screen bg-neutral-950 text-white overflow-hidden">
    <div class="pointer-events-none absolute -top-16 -right-16 size-48 border-2 border-amber-500/40 rotate-12"></div>
    <div class="pointer-events-none absolute top-20 -left-12 size-36 border border-amber-400/30 -rotate-12"></div>
    <div class="pointer-events-none absolute bottom-20 right-10 size-28 border-2 border-amber-500/20 rotate-45"></div>
    <div class="pointer-events-none absolute -bottom-24 -left-24 size-56 border border-amber-400/20 rotate-6"></div>

    <div class="relative z-10 px-5 sm:px-8 lg:px-12 py-10">
      <div class="max-w-3xl">
        <p class="uppercase tracking-[0.4em] text-amber-400/80 text-xs">Local Utilities</p>
      </div>

      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <div
          v-for="module in modules"
          :key="module.id"
          class="group relative cursor-pointer border border-amber-500/30 bg-neutral-900/70 p-6 shadow-[0_0_0_1px_rgba(245,158,11,0.15)] transition hover:-translate-y-1 hover:border-amber-400/70 hover:bg-neutral-900"
          @click="navigateTo(module.path)"
        >
          <svg v-if="module.needsInternet" xmlns="http://www.w3.org/2000/svg" id="mdi-wifi" fill="currentColor" class="absolute bottom-4 right-4 size-6 text-white" viewBox="0 0 24 24"><path d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z" /></svg>
          <div class="flex items-center justify-between">
            <div class="size-12 grid place-items-center border border-amber-500/40 bg-black text-white text-2xl" v-html="module.icon">
            </div>
            <div class="size-3 rotate-45 bg-amber-500/80"></div>
          </div>
          <h3 class="mt-6 text-xl font-semibold tracking-wide">{{ module.name }}</h3>
          <p class="mt-2 text-sm text-amber-100/70 leading-relaxed">{{ module.description }}</p>
          <div class="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-amber-400/80">
            <span class="inline-block size-2 bg-amber-400"></span>
            <span>Open module</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>