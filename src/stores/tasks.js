import router from '@/router'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usetaskStore = defineStore(
    'task', () => {
  const feladatok = ref([
    {
        id: 1,
        title: "takarítás",
        desc: "ki kell takarítani",
        isFinished: false,
        deadline: "2025-01-20"
    },
    {
        id: 2,
        title: "felmosás",
        desc: "fel kéne mosni",
        isFinished: false,
        deadline: "2025-01-20"
    },
    {
        id: 3,
        title: "css",
        desc: "gpt-t meg kell kérni hogy írjon még css-t az enyémhez",
        isFinished: true,
        deadline: "2025-01-12"
    },

    

])

const edit = (id) =>{
    router.push(`/edittask/${id}`)
}

const add = (newtitle, newdesc, newdeadline) =>{
    let newid;
    feladatok.value.length == 0 ? newid = 1 : newid = feladatok.value.length+1;
    let newtask = {
        id: newid,
        title: newtitle || "nincs cím",
        desc: newdesc || "nincs leírás",
        isFinished: false,
        deadline: newdeadline || "nincs határidő"
    }
    feladatok.value.push(newtask);
}

const remove = (id) =>{
    feladatok.value.pop(id);
}

const back = () =>{
    router.push("/tasks");
  }
return {feladatok, edit, add, remove, back};
})