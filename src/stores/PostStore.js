import { defineStore } from 'pinia'

export const usePostStore = defineStore('post-store', {
  state: () => ({
    posts: [],
    loading: true
  }),
  actions: {
    GetPosts() {
      fetch('http://localhost:3000/posts')
        .then((res) => res.json())
        .then((data) => {
          this.posts = data
          this.loading = false
        })
        .catch((error) => {
          console.error(error)
        })
    },
    AddNewPost(newPost) {
      this.posts.push(newPost)

      fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to add new post')
          }

          console.log('New Post added successfully')
        })
        .catch((error) => {
          console.error(error)
        })
    },
    DeleteNewPost(id) {
      this.posts = this.posts.filter((post) => {
        return post.id !== id
      })

      fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE'
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to delete new post')
          }

          console.log('Post deleted successfully')
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getFavoritePosts() {
      return this.posts.filter((post) => post.isFave)
    },
    AddtoFaves(id) {
      const post = this.posts.find((p) => p.id === id)
      post.isFave = !post.isFave
      fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isFave: post.isFave })
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to update favorite status')
          }
        })
        .catch((error) => {
          console.error('Error updating favorite status:', error)
        })
    }
  }
})
