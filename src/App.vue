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
    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="link">Termékek </RouterLink>
        <RouterLink to="/cart" class="link">Kosár</RouterLink>
        
      </nav>

    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
