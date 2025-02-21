<script setup>
import {useBotStore} from '@/stores/bot.js'

const botStore = useBotStore()
</script>

<template>
  <div class="container">
    <h1 class="text-center">Termékek</h1>
    <div class="row">
      <div v-for="p in botStore.products":key="p.id" class="card col-12 col-md-4 col-lg-3 ">
        <p class="card-title">{{ p.name }}</p>
        <div class="card-body">
          <p class="card-text">{{ p.price }}</p>
        </div>
        <div class="card-footer text-center">
          <button :disabled="p.store < 1" @click="botStore.addToCart(p.id)" class="btn btn-outline-primary w-50">&#128722;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useBotStore } from '@/stores/bot';
  const botStore = useBotStore();

  
</script>