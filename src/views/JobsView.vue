<template>
  <div>
    <p v-for="job in this.jobs" :key="job.id">
      <a :href="job.url">{{ job.title }}</a><br>
      <small>{{ job.time_ago }} by {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  created() {
    this.$store.dispatch('FETCH_JOBS')
        .then(() => console.log('success'))
        .catch(() => console.log('fail'));
  },
  computed: {
    ...mapState({jobs: 'jobs'})
  }
}
</script>

<style>

</style>
