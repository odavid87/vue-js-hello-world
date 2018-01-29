<template>
  <div>
    <h1>Form</h1>
    <form>
      <input type="text" name="github_url" v-model="githubURL" @input="updateUniqueId">
      <input type="text" name="unique_id" v-model="uniqueId">
    </form>
  </div>
</template>

<script>
export default {
  props: [
    'id'
  ],
  data () {
    return {
      githubURL: '',
      uniqueId: ''
    }
  },
  methods: {
    updateUniqueId () {
      let pieces = this.githubURL.split('/')
      this.uniqueId = pieces[4]
    }
  }
}
</script>
