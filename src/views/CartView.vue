<template>
    <div class="container">
        <h1 class="text-center">Kosár</h1>
    </div>
</template>
<script setup>
import { useRoute} from 'vue-router';
import {ref} from 'vue';
const route = useRoute();
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