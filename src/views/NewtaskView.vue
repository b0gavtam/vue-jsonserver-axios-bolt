<template>
  <div class="container">
    <div class="editordiv">
      <h2>Feladat hozzáadása</h2>
      <label for="nev">Név</label>
      <input type="text" name="nev" id="nev" v-model="newtitle">
      <br>
      <label for="desc" >Leírás</label>
      <input type="text" name="desc" id="desc" v-model="newdesc">
      <br>
      <label for="deadline">Határidő</label>
      <input type="date" name="deadline" id="deadline" v-model="newdeadline">
      <br>
      <button @click="taskStore.add(newtitle, newdesc, newdeadline), taskStore.back()">Hozzáadás</button>
    </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { usetaskStore } from '@/stores/tasks';
const taskStore = usetaskStore();
const newtitle = ref();
const newdesc = ref();
const newdeadline = ref();

</script>
<style scoped>
.container{
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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
  transition: border-color 0.3s;
}
</style>
