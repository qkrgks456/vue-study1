<template>
  <div>
    <section class="header-container">
      <div class="user-container">
        <div>
          <font-awesome-icon :icon="['fas', 'users']" />
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
          <div class="time">{{ fetchedItem.time_ago }}</div>
        </div>
      </div>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content" class="content"></div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  components: {FontAwesomeIcon},
  mounted() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  },
  computed: {
    ...mapGetters(['fetchedItem'])
  },

}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
}

.fa-user-circle {
  font-size: 2.5rem;
}

.user-description {
  padding-left: 8px;
}

.time {
  font-size: 0.7rem;
}

h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}

.content {
  border: ridge;
  padding: 0.5rem;
}
</style>