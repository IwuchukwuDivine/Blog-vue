<template>
  <div class="post-section" v-if="active == 'all'">
    <div class="post-item" v-for="post in PostStore.posts" :key="post.id">
      <div class="post-header">
        <p>{{ post.dateCreated }}</p>
        <div class="icons">
          <div v-on:click="PostStore.DeleteNewPost(post.id)">
            <span class="material-symbols-outlined delete"> delete_forever </span>
          </div>
          <div @click="PostStore.AddtoFaves(post.id)">
            <span v-if="!post.isFave" class="material-symbols-outlined fave"> heart_plus </span>
            <span v-else class="material-symbols-outlined fave"> heart_check </span>
          </div>
        </div>
      </div>
      <div class="body">
        <h3>{{ post.postTitle }}</h3>
        <p>{{ post.postText }}</p>
      </div>
    </div>
  </div>
  <div v-if="active === 'fav'">
    <div class="post-item" v-for="post in FavouritePosts" :key="post.id">
      <div class="post-header">
        <p>{{ post.dateCreated }}</p>
        <div class="icons">
          <div v-on:click="PostStore.DeleteNewPost(post.id)">
            <span class="material-symbols-outlined delete"> delete_forever </span>
          </div>
          <div @click="post.isFave = !post.isFave">
            <span v-if="!post.isFave" class="material-symbols-outlined fave"> heart_plus </span>
            <span v-else class="material-symbols-outlined fave"> heart_check </span>
          </div>
        </div>
      </div>
      <div class="body">
        <h3>{{ post.postTitle }}</h3>
        <p>{{ post.postText }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores/PostStore.js'
import { computed } from 'vue'

const PostStore = usePostStore()

const FavouritePosts = computed(() => PostStore.getFavoritePosts())

const props = defineProps({
  active: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.post-section {
}
.post-item {
  border-radius: 1.5rem;
  margin-bottom: 2rem;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0 2px 2px,
    rgba(0, 0, 0, 0.1) 0 4px 4px,
    rgba(0, 0, 0, 0.1) 0 8px 8px,
    rgba(0, 0, 0, 0.1) 0 16px 16px,
    rgba(0, 0, 0, 0.1) 0 32px 32px,
    rgba(0, 0, 0, 0.1) 0 64px 64px;
}
.post-header {
  background-color: #0083c6;
  color: #fefffe;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 2rem;
  border-radius: 1.5rem 1.5rem 0 0;
}
p {
  font-size: 1.5rem;
  line-height: 2rem;
}
.body {
  background-color: #fff;
  border-radius: 0 0 1.5rem 1.5rem;
  padding: 2rem;
}

h3 {
  font-weight: 900;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}
.icons {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.icons > div {
  width: 4rem;
  height: 4rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
}
.icons > div > span {
  font-size: 2.5rem;
  font-weight: 900;
}
.delete {
  color: #f5433e;
}
.fave {
  color: rgb(14, 168, 14);
}
</style>
