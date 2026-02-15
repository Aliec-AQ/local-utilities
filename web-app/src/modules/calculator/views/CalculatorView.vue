<script setup lang="ts">
import { ref, computed } from 'vue';

const display = ref('0');
const previousValue = ref<number | null>(null);
const operation = ref<string | null>(null);
const waitingForNewValue = ref(false);

const formattedDisplay = computed(() => {
  const num = parseFloat(display.value);
  if (isNaN(num)) return '0';
  return num.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 10
  });
});

const handleNumber = (num: string) => {
  if (waitingForNewValue.value) {
    display.value = num;
    waitingForNewValue.value = false;
  } else {
    display.value = display.value === '0' ? num : display.value + num;
  }
};

const handleDecimal = () => {
  if (waitingForNewValue.value) {
    display.value = '0.';
    waitingForNewValue.value = false;
  } else if (!display.value.includes('.')) {
    display.value += '.';
  }
};

const handleOperation = (op: string) => {
  const currentValue = parseFloat(display.value);
  
  if (previousValue.value === null) {
    previousValue.value = currentValue;
  } else if (operation.value) {
    const result = calculate(previousValue.value, currentValue, operation.value);
    display.value = result.toString();
    previousValue.value = result;
  }
  
  operation.value = op;
  waitingForNewValue.value = true;
};

const calculate = (prev: number, current: number, op: string): number => {
  switch (op) {
    case '+':
      return prev + current;
    case '-':
      return prev - current;
    case '×':
      return prev * current;
    case '÷':
      return prev / current;
    case '%':
      return prev % current;
    case '^':
      return Math.pow(prev, current);
    default:
      return current;
  }
};

const handleEquals = () => {
  if (operation.value && previousValue.value !== null) {
    const currentValue = parseFloat(display.value);
    const result = calculate(previousValue.value, currentValue, operation.value);
    display.value = result.toString();
    previousValue.value = null;
    operation.value = null;
    waitingForNewValue.value = true;
  }
};

const handleClear = () => {
  display.value = '0';
  previousValue.value = null;
  operation.value = null;
  waitingForNewValue.value = false;
};

const handleDelete = () => {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = '0';
  }
};

const handleSquareRoot = () => {
  const currentValue = parseFloat(display.value);
  display.value = Math.sqrt(currentValue).toString();
  waitingForNewValue.value = true;
};

const handleSquare = () => {
  const currentValue = parseFloat(display.value);
  display.value = (currentValue * currentValue).toString();
  waitingForNewValue.value = true;
};

const handleNegate = () => {
  const currentValue = parseFloat(display.value);
  display.value = (-currentValue).toString();
};

const handlePercentage = () => {
  const currentValue = parseFloat(display.value);
  display.value = (currentValue / 100).toString();
  waitingForNewValue.value = true;
};
</script>

<template>
  <div class="relative min-h-screen bg-neutral-950 text-white overflow-hidden">
    <div class="pointer-events-none absolute -top-16 -right-16 size-48 border-2 border-amber-500 rotate-12"></div>
    <div class="pointer-events-none absolute -bottom-24 -left-24 size-56 border border-amber-400/20 rotate-6"></div>
    
    <div class="relative z-10 px-5 sm:px-8 lg:px-12 py-10">
      <div class="max-w-lg">
        <p class="uppercase tracking-[0.4em] text-amber-400 text-xs">Calculator</p>
        
        <div class="mt-10 bg-neutral-900 border border-amber-500 rounded-lg p-6">

          <div class="bg-neutral-950 border border-amber-500 rounded p-4 mb-6 text-right">
            <div class="text-amber-100 text-xs opacity-70 h-5">{{ operation ? `${previousValue} ${operation}` : '' }}</div>
            <div class="text-4xl font-mono font-light text-amber-50 break-words">{{ formattedDisplay }}</div>
          </div>

          <div class="grid grid-cols-4 gap-3">
    
            <button @click="handleClear" class="col-span-2 bg-red-900 hover:bg-red-900 border border-red-500 hover:border-red-500 rounded p-3 font-medium text-sm transition">C</button>
            <button @click="handleDelete" class="bg-orange-900 hover:bg-orange-900 border border-orange-500 hover:border-orange-500 rounded p-3 font-medium text-sm transition">DEL</button>
            <button @click="handleOperation('÷')" class="bg-amber-600 hover:bg-amber-500 rounded p-3 font-medium text-sm transition">÷</button>


            <button @click="handleNumber('7')" class="bg-neutral-800 hover:bg-neutral-700 border border-amber-500 hover:border-amber-500 rounded p-3 font-medium text-sm transition">7</button>
            <button @click="handleNumber('8')" class="bg-neutral-800 hover:bg-neutral-700 border border-amber-500 hover:border-amber-500 rounded p-3 font-medium text-sm transition">8</button>
            <button @click="handleNumber('9')" class="bg-neutral-800 hover:bg-neutral-700 border border-amber-500 hover:border-amber-500 rounded p-3 font-medium text-sm transition">9</button>
            <button @click="handleOperation('×')" class="bg-amber-600 hover:bg-amber-500 rounded p-3 font-medium text-sm transition">×</button>


            <button @click="handleNumber('4')" class="bg-neutral-800 hover:bg-neutral-700 border border-amber-500 hover:border-amber-500 rounded p-3 font-medium text-sm transition">4</button>
            <button @click="handleNumber('5')" class="bg-neutral-800 hover:bg-neutral-700 border border-amber-500 hover:border-amber-500 rounded p-3 font-medium text-sm transition">5</button>
            <button @click="handleNumber('6')" class="bg-neutral-800 hover:bg-neutral-700 border border-amber-500 hover:border-amber-500 rounded p-3 font-medium text-sm transition">6</button>
            <button @click="handleOperation('-')" class="bg-amber-600 hover:bg-amber-500 rounded p-3 font-medium text-sm transition">−</button>


            <button @click="handleNumber('1')" class="bg-neutral-800 hover:bg-neutral-700 border border-amber-500 hover:border-amber-500 rounded p-3 font-medium text-sm transition">1</button>
            <button @click="handleNumber('2')" class="bg-neutral-800 hover:bg-neutral-700 border border-amber-500 hover:border-amber-500 rounded p-3 font-medium text-sm transition">2</button>
            <button @click="handleNumber('3')" class="bg-neutral-800 hover:bg-neutral-700 border border-amber-500 hover:border-amber-500 rounded p-3 font-medium text-sm transition">3</button>
            <button @click="handleOperation('+')" class="bg-amber-600 hover:bg-amber-500 rounded p-3 font-medium text-sm transition">+</button>


            <button @click="handleNumber('0')" class="col-span-2 bg-neutral-800 hover:bg-neutral-700 border border-amber-500 hover:border-amber-500 rounded p-3 font-medium text-sm transition">0</button>
            <button @click="handleDecimal" class="bg-neutral-800 hover:bg-neutral-700 border border-amber-500 hover:border-amber-500 rounded p-3 font-medium text-sm transition">.</button>
            <button @click="handleEquals" class="bg-green-700 hover:bg-green-600 rounded p-3 font-medium text-sm transition">=</button>


            <button @click="handleSquareRoot" class="bg-purple-900 hover:bg-purple-900 border border-purple-500 hover:border-purple-500 rounded p-2 font-medium text-xs transition">√</button>
            <button @click="handleSquare" class="bg-purple-900 hover:bg-purple-900 border border-purple-500 hover:border-purple-500 rounded p-2 font-medium text-xs transition">x²</button>
            <button @click="handleOperation('^')" class="bg-purple-900 hover:bg-purple-900 border border-purple-500 hover:border-purple-500 rounded p-2 font-medium text-xs transition">x^y</button>
            <button @click="handleNegate" class="bg-purple-900 hover:bg-purple-900 border border-purple-500 hover:border-purple-500 rounded p-2 font-medium text-xs transition">+/−</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>