import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { Toast } from 'vue-toastification'

export const useBotStore = defineStore('bot', () => {
  const products = ref([])
  const toast = useToast();
  const cart = ref([]) //eleg a termek.id es a mennyiseg mint key-value
  //const doubleCount = computed(() => count.value * 2)
  //function increment() {
  //  count.value++
  // }
  const loadAll = () =>{
    fetch("http://localhost:3000/bolt")
    .then(resp=> resp.json())
    .then(data => products.value = data)
  }
  const addToCart = (id) =>{
    let o = {'id': id, 'q' : 1}
    if (cart.value.length == 0) {
      cart.value.push(o)
    } else{
      let index = cart.value.findIndex(p=>p.id == id)
      console.log(index)
      cart.value[index].q += 1;
    }
    //cart.value.push(products.value.find(p => p.id == id))
    // if (id in cart.value === false) {
    //   cart.value[id] = 1
    // }
    // else{
    //   cart.value[id] +=1
    // }
  }
  const saveProduct = (p) =>{
    console.log(p)
    products.value.push(p);
    axios.post("http://localhost:3000/bolt",p).then(resp =>{console.log(resp.statusText) toast("Sikeres Mentés")}).catch(() => toast.error("hiba"))
  }

  return { products, cart, loadAll, addToCart, saveProduct}
})
