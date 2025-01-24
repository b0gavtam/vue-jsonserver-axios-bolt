<template>
  <div class="container">
    <h1 class="text-center">Termékek</h1>
  </div>
</template>

<script setup>
  import { usetaskStore } from '@/stores/tasks';
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute()
  const router = useRouter()
  const taskStore = usetaskStore();
  
  const done = (id) =>{
    const feladat = taskStore.feladatok.find(t => t.id == id)
    if (feladat.isFinished == false) {
      feladat.isFinished = true;
    }
    else{
      feladat.isFinished = false;
    }
}
  
</script>
<style scoped>
.container{
    display: flex;
    min-height: 100vh;
    min-width: 100%;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    background: linear-gradient(135deg, #1e3c72, #2a5298);
}
.task{
    width: auto;
    height: auto;
    padding: 20px;
    border-radius: 12px;
    background: #f9f9f9;
}
p,h3,h1{
    display: block;
    margin-bottom: 5px;
    color: white;
    font-weight: bold;
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
.link{
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}
.linkcontainer{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 2%;
  width: 15vh;
  height: 15vh;
  background-color: #1e90ff;
  border: 1px solid antiquewhite;

}
</style>