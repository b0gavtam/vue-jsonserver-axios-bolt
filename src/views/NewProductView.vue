

<template>
    <h1>Új termék rögzítése</h1>
    <form @submit.prevent = "bolt.saveProduct()">
        <input class="form-control mb-2" v-model="product.name" placeholder="Termék Neve">
        <input class="form-control mb-2" v-model="product.price" placeholder="Ár">
        <input class="form-control mb-2" v-model="product.unit" placeholder="Kiszerelés">
        <input class="form-control mb-2" v-model="product.desc" placeholder="Termék Leírása">
        <input class="form-control mb-2" v-model.number ="product.store" placeholder="Raktárkészlet">
        <input class="btn btn-success" type="submit" value="Mentés">
    </form>
</template>

<script setup>
import { useBotStore } from '@/stores/bot';
import { ref } from 'vue';
const bolt = useBotStore();
const product = ref({
        "name": "",
        "unit": "",
        "desc": "",
        "store":"",
        "price":""

})

</script>