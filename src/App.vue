<script setup>
import './assets/styles.css'
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import { usePostStore } from '@/stores/PostStore.js'
const PostStore = usePostStore()

PostStore.GetPosts()
</script>

<template>
  <Header />

  <RouterView />
</template>

<style scoped></style>
