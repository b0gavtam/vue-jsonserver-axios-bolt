<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useBotStore } from './stores/bot';
import { onMounted } from 'vue';
const botStore = useBotStore()
onMounted(()=>{
  botStore.loadAll()
})
</script>

<template>
  <header>
    <div class="container">
      <nav>
        <RouterLink to="/" class="btn button-outline-success m-2">Termékek </RouterLink>
        <RouterLink to="/cart" class="btn button-outline-success m-2">Kosár</RouterLink>
        <RouterLink to="/new" class="btn button-outline-success m-2">Új Termék</RouterLink>
        
      </nav>

    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
