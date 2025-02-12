<template>
    <div class="container">
        <h1 class="text-center">Kosár</h1>
        <p v-if="Object.entries(botStore.cart).length < 1">Üres a kosár</p>
        <div v-else>    
            <table>
                <tr v-for="p in botStore.cart">
                    <td> {{ p.key }}</td>

                </tr>
            </table>
            <button @click="botStore.emptycart()" class="btn btn-outline-danger m-2">Kosár Ürítése</button>
        </div>
    </div>
</template>
<script setup>
import { useRoute} from 'vue-router';
import { useBotStore } from '@/stores/bot';
import {ref} from 'vue';
const route = useRoute();
const botStore = useBotStore();
</script>
