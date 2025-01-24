<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="link">Termékek</RouterLink>
        <RouterLink to="/cart" class="link">Kosár</RouterLink>
        
      </nav>

    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.wrapper{
  background: linear-gradient(-135deg, #1e3c72, #2a5298);
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  color: rgb(76, 98, 223);
}

nav a.router-link-exact-active {
  color: rgb(76, 98, 223);
}

nav a.router-link-exact-active:hover {
  color:rgb(76, 98, 223);
}
.link{
  color: rgb(76, 98, 223);
}
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;
  color: rgb(76, 98, 223);
  padding: 1rem 0;
  margin-top: 1rem;
}
</style>
