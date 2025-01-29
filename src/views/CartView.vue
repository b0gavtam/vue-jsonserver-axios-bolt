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

<style scoped>
.container{
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    display: flex;
    justify-content: center;

    min-height: 100vh;
    min-width: 100%;
    font-family: 'Arial', sans-serif;
}

</style>