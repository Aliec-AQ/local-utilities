<script setup lang="ts">
import { computed, ref } from 'vue';

const selectedSize = ref<number | null>(null);

const sizes = [
  { size : 32, diameter: 10.18 },
  { size : 33, diameter: 10.49 },
  { size : 34, diameter: 10.79 },
  { size : 35, diameter: 11.10 },
  { size : 36, diameter: 11.41 },
  { size : 37, diameter: 11.72 },
  { size : 38, diameter: 12.02 },
  { size : 39, diameter: 12.33 },
  { size : 40, diameter: 12.64 },
]

const calculatedValues = computed(() => {
  if (selectedSize.value === null) return null;
  const sizeInfo = sizes.find(s => s.size === selectedSize.value);
  if (!sizeInfo) return null;
  return {
    circumference: (Math.PI * sizeInfo.diameter).toFixed(2),
    diameter: sizeInfo.diameter.toFixed(2)
  };
});


</script>

<template>
  <div class="relative min-h-screen bg-neutral-950 text-white overflow-hidden">
    <div class="pointer-events-none absolute -top-16 -right-16 size-48 border-2 border-amber-500/40 rotate-12"></div>
    <div class="pointer-events-none absolute -bottom-24 -left-24 size-56 border border-amber-400/20 rotate-6"></div>
    
    <div class="relative z-10 px-5 sm:px-8 lg:px-12 py-10">
      <div class="max-w-3xl">
        <p class="uppercase tracking-[0.4em] text-amber-400 text-xs">Ring Size</p>
      </div>

      <div class="mt-10">
        <label for="ring-size" class="block text-sm font-medium text-amber-100 mb-2">Choose your ring size (not correct data)</label>
        <select id="ring-size" v-model="selectedSize" class="w-full max-w-xs bg-neutral-900 border border-amber-500 rounded p-2 text-white">
          <option value="null" disabled>Choose a size</option>
          <option v-for="size in sizes" :key="size.size" :value="size.size">{{ size.size }}</option>
        </select>
        <div v-if="calculatedValues" class="mt-6 p-4 bg-neutral-900 border border-amber-500 rounded">
          <p><strong>Diameter:</strong> {{ calculatedValues.diameter }} mm</p>
          <p><strong>Circumference:</strong> {{ calculatedValues.circumference }} mm</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>