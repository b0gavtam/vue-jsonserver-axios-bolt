<template>
   <h1 class="text-center">Kosár</h1>
    <p v-if="Object.entries(botStore.cart).length < 1"> Üres a kosár!</p>
    <div v-else>
      <table class="table table-striped col-md-9">
        <thead>
          <tr>
            <th>Termék</th>
            <th>ár</th>
            <th>mennyiség</th>
            <th>összesen</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(v, k) in botStore.cart">
            <td>{{ botStore.products.find(p=> p.id === k).name}}</td>
              <td>{{ botStore.products.find(p=> p.id === k).price }}</td>
              <td>{{ v }}</td>
              <td>{{ v * parseFloat(botStore.products.find(p => p.id === k).price) }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="fs-5">
            <td colspan="3">Végösszeg: </td>
            <td>{{ botStore.countTotal() }}</td>
          </tr>
        </tfoot>
      </table>
      <button @click="botStore.emptyCart()"class="btn btn-outline-danger">Kosár ürítése</button>
    </div>
</template>
<script setup>
import { useRoute} from 'vue-router';
import { useBotStore } from '@/stores/bot';
import {ref} from 'vue';
const route = useRoute();
const botStore = useBotStore();
</script>
