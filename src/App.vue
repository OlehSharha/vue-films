<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="sticky">
    <div>
      <nav class="header">
        <RouterLink to="/" class="link atuin-btn">Home</RouterLink>
        <RouterLink to="/favoruite" class="link atuin-btn">Favoruite</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style >
@import url('./assets/App.css')
</style>
