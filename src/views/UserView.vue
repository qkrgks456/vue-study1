<template>
  <div>
    <p>id : {{ fetchedUser.id }}</p>
    <p>karma : {{ fetchedUser.karma }}</p>
    <p>joined : {{ fetchedUser.created }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  created() {
    this.$store.dispatch('FETCH_USER', this.$route.params.id);
  },
  computed: {
    ...mapGetters(['fetchedUser']),
  },
}
</script>

<style>

</style>
