<template>
  <form v-on:submit.prevent="HandleSubmit">
    <h3>Create a new post</h3>
    <div>
      <label for="title">Post Title</label>
      <input type="text" id="title" v-model="title" />
    </div>
    <div>
      <label for="body">Post Title</label>
      <textarea id="body" cols="30" rows="10" v-model="text"></textarea>
    </div>

    <button :class="isFormValid ? '' : 'invalid'" :disabled="!isFormValid">ADD</button>
  </form>
</template>

<script setup>
import { usePostStore } from '@/stores/PostStore.js'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const title = ref('')
const text = ref('')
const router = useRouter()

const PostStore = usePostStore()

function HandleSubmit() {
  const newPost = {
    id: Math.floor(Math.random() * 10000),
    postTitle: title.value,
    postText: text.value,
    dateCreated: new Date().toLocaleDateString(),
    isFave: false
  }
  PostStore.AddNewPost(newPost)

  router.push('/')
}

const isFormValid = computed(() => {
  return title.value.trim() !== '' && text.value.trim() !== ''
})
</script>

<style scoped>
form {
  background-color: #ffffff;
  width: 100%;
  padding: 3rem 2rem;
  margin-top: 2rem;
  border-radius: 2rem;
  width: 100%;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0 2px 2px,
    rgba(0, 0, 0, 0.1) 0 4px 4px,
    rgba(0, 0, 0, 0.1) 0 8px 8px,
    rgba(0, 0, 0, 0.1) 0 16px 16px,
    rgba(0, 0, 0, 0.1) 0 32px 32px,
    rgba(0, 0, 0, 0.1) 0 64px 64px;
  min-width: 300px;
}

h3 {
  font-weight: 900;
  font-size: 3rem;
  margin-bottom: 2rem;
}
div {
  margin-bottom: 2rem;
}
label,
input,
textarea {
  display: block;
  width: 100%;
  font-size: 1.8rem;
  font-weight: 600;
  color: #6e6e6e;
}
input,
textarea {
  border: 1px solid #c5c6c5;
  border-radius: 0.4rem;
  padding: 1rem;
  margin-top: 0.5rem;
}
.invalid {
  background-color: #c5c6c5;
}
button {
  background-color: #1d3fad;
  color: #fefffe;
  width: 100%;
  outline: none;
  border: none;
  font-weight: 900;
  font-size: 1.8rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
}
</style>
