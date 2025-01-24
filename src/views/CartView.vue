<template>
    <div class="container">
        <h1 class="text-center">Kosár</h1>
    </div>
</template>
<script setup>
import { useRoute} from 'vue-router';
import {ref} from 'vue';
import { usetaskStore } from '@/stores/tasks';
const route = useRoute();
const taskStore = usetaskStore()
const task = ref(taskStore.feladatok.find(t => t.id == route.params.id))
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
.editordiv{
    width: 100%;
    max-width: 400px;
    padding: 20px;
    border-radius: 12px;
    background: #f9f9f9;
    
}
button{
    display: block;
    width: 100%;
    padding: 12px 20px;
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background: #1e90ff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
}
label,h2{
    display: block;
    margin-bottom: 5px;
    color: #555;
    font-weight: bold;
}
input{
    width: 95%;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    outline: none;
}


</style>