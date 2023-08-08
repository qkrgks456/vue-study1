<template>
  <div>
    <p v-for="item in this.news" :key="item.id">
      <a :href="item.url">{{ item.title }}</a><br>
      <small>
        {{ item.time_ago }}
        by
        <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  created() {
    this.$store.dispatch('FETCH_NEWS')
        .then(() => console.log('success'))
        .catch(() => console.log('fail'));
  },
  computed: {
    ...mapState({news: 'news'})
  }
}
</script>

<style>

</style>
