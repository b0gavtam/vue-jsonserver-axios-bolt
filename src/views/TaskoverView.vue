<template>
  <div class="container">
    <div v-for="t in taskStore.feladatok" :key="t.id" class="task">
        <h3>{{ t.title }}</h3>
      <div>
        <p> Leírás: {{ t.desc }}</p>
        <p> Kész?: {{ t.isFinished ? "Kész" : "Nincs kész" }}</p>
        <p>Határidő: {{ t.deadline }}</p>
        <button @click="done(t.id)">{{ t.isFinished ? "Nincs Kész" : "Kész" }}</button>
        <button v-if="!t.isFinished" @click="taskStore.edit(t.id)">Szerkesztés</button>
        <button v-if="t.isFinished" @click="taskStore.remove(t.id)">Törlés</button>
      </div>
      
    </div>
    <div class="linkcontainer">
      <RouterLink to="/newtask" class="link">New Task</RouterLink>
    </div>
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
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #1e3c72, #2a5298);
}
.task{
    width: auto;
    height: auto;
    padding: 20px;
    border-radius: 12px;
    background: #f9f9f9;
}
p,h3{
    display: block;
    margin-bottom: 5px;
    color: #555;
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