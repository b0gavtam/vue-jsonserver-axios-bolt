<template>
    <div class="container">
        <h1 class="text-center">Kosár</h1>
        <div>
            <p v-if="Object.entries(botStore.cart).length < 1">Üres a kosár</p>
            <table v-else>
                <tr v-for="p in botStore.cart">
                    <td> {{ p.key }}</td>

                </tr>
            </table>
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
