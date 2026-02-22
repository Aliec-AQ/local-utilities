<script setup lang="ts">
import { computed, ref } from 'vue';

const selectedSize = ref<number | null>(null);
const selectedWidth = ref<number | null>(null);

const sizes = [
  { size : 41, diameter: 13.00 },
  { size : 42, diameter: 13.40 },
  { size : 43, diameter: 13.70 },
  { size : 44, diameter: 14.00 },
  { size : 45, diameter: 14.30 },
  { size : 46, diameter: 14.60 },
  { size : 47, diameter: 15.00 },
  { size : 48, diameter: 15.30 },
  { size : 49, diameter: 15.60 },
  { size : 50, diameter: 15.90 },
  { size : 51, diameter: 16.20 },
  { size : 52, diameter: 16.50 },
  { size : 53, diameter: 16.80 },
  { size : 54, diameter: 17.20 },
  { size : 55, diameter: 17.50 },
  { size : 56, diameter: 17.80 },
  { size : 57, diameter: 18.10 },
  { size : 58, diameter: 18.40 },
  { size : 59, diameter: 18.80 },
  { size : 60, diameter: 19.10 },
  { size : 61, diameter: 19.40 },
  { size : 62, diameter: 19.70 },
  { size : 63, diameter: 20.00 },
  { size : 64, diameter: 20.30 },
  { size : 65, diameter: 20.60 },
  { size : 66, diameter: 21.00 },
  { size : 67, diameter: 21.30 },
  { size : 68, diameter: 21.60 },
  { size : 69, diameter: 22.00 },
  { size : 70, diameter: 22.30 },
  { size : 71, diameter: 22.60 },
  { size : 72, diameter: 22.90 },
  { size : 73, diameter: 23.20 },
  { size : 74, diameter: 23.50 },
  { size : 75, diameter: 23.90 },
  { size : 76, diameter: 24.20 },
]

const wireWidth = [
  0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5
]

const calculatedValues = computed(() => {
  if (selectedSize.value === null || selectedWidth.value === null) return null;
  const sizeInfo = sizes.find(s => s.size === selectedSize.value);
  if (!sizeInfo) return null;
  return {
    circumference: (Math.PI * (sizeInfo.diameter + (selectedWidth.value || 0))).toFixed(2),
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

        <label for="ring-size" class="block text-sm font-medium text-amber-100 mb-2">Choose your ring size</label>
        <select id="ring-size" v-model="selectedSize" class="w-full max-w-xs bg-neutral-900 border border-amber-500 rounded p-2 text-white">
          <option value="null" disabled>Choose a size</option>
          <option v-for="size in sizes" :key="size.size" :value="size.size">{{ size.size }}</option>
        </select>

        <label for="wire-width" class="block text-sm font-medium text-amber-100 mb-2">Choose your wire width</label>
        <select id="wire-width" v-model="selectedWidth" class="w-full max-w-xs bg-neutral-900 border border-amber-500 rounded p-2 text-white">
          <option value="null" disabled>Choose a width</option>
          <option v-for="width in wireWidth" :key="width" :value="width">{{ width }} mm</option>
        </select>

        <div v-if="calculatedValues" class="mt-6 p-4 bg-neutral-900 border border-amber-500 rounded">
          <p><strong>Diameter:</strong> {{ calculatedValues.diameter }} mm</p>
          <p><strong>Wire Length:</strong> {{ calculatedValues.circumference }} mm</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>