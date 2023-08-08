<template>
  <div>
    <p v-for="ask in this.asks" :key="ask.id">
      <router-link :to="`/item/${ask.id}`">{{ ask.title }}</router-link>
      <br>
      <small>
        {{ ask.time_ago }}
        by
        <router-link :to="`/user/${ask.user}`">{{ ask.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  created() {
    this.$store.dispatch('FETCH_ASK')
        .then(() => console.log('success'))
        .catch(() => console.log('fail'));
  },
  computed: {
    ...mapState({asks: 'asks'})
  }
}
</script>

<style>

</style>
