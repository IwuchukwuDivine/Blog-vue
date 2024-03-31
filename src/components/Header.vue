<template>
  <header>
    <nav>
      <RouterLink class="nav-link" to="/">Home</RouterLink>
      <RouterLink class="nav-link" to="/create-post">Create Post</RouterLink>
      <span v-show="PostStore.loading" class="material-symbols-outlined refresh"> refresh </span>
    </nav>
  </header>
</template>

<script setup>
import { usePostStore } from '@/stores/PostStore.js'
const PostStore = usePostStore()
</script>

<style>
header {
  background-color: #1d3fad;
  color: #fefffe;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
nav {
  display: flex;
  align-items: center;
  gap: 3rem;
}
.nav-link {
  color: #fefffe;
  font-size: 2rem;
  font-weight: 600;
}
.refresh {
  animation: loading 0.6s linear infinite;
  transform-origin: center;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
