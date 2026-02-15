<script setup>
import { onMounted, onUnmounted } from 'vue';
import { usePWA } from '@/plugins/PWA';
import { RouterView } from 'vue-router';
import PWAInstallButton from './plugins/PWA/components/PWAInstallButton.vue';
import { NavBar } from './shared/components';

const { setup, cleanup } = usePWA();


onMounted (setup);
onUnmounted(cleanup);

</script>

<template>
  <PWAInstallButton customClass="fixed bottom-20 right-2 z-50" :showError="false" />
  <NavBar />
  <RouterView />
</template>

<style>
</style>