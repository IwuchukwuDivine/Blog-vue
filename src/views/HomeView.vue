<template>
  <main>
    <div>
      <button :class="active == 'all' ? 'active' : ''" @click="active = 'all'">All</button>
      <button :class="active == 'fav' ? 'active' : ''" @click="active = 'fav'">Favourites</button>
    </div>
    <PostItem :active="active" />
  </main>
</template>

<script setup>
import PostItem from '@/components/PostItem.vue'
import { ref } from 'vue'

const active = ref('all')
</script>

<style scoped>
main {
  padding: 1.5rem;
  width: 100%;
  max-width: 900px;
}
div {
  display: flex;
  justify-content: end;
  gap: 1rem;
  margin-bottom: 2rem;
}
button {
  border: none;
  outline: none;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1.6rem;
  cursor: pointer;
  border-radius: 2rem;
  min-width: 100px;
}
button.active {
  background-color: #1d3fad;
  color: #fefffe;
}
</style>
