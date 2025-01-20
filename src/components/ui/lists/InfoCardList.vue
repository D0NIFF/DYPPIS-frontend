<script setup>
import InfoCard from '@/components/ui/cards/InfoCard.vue'
</script>
<template>
  <div class="info-cards-list">
    <div class="cards">
      <div class="card" v-for="infoCard in data">
        <InfoCard :content="infoCard" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.info-cards-list {
  margin-top: 30px;
}
.cards {
  display: flex;
  justify-content: space-between;
  grid-gap: 10px;
  margin-top: 10px;
  flex-flow: wrap;
}
.card {
  flex-basis: 32%;
  min-width: 320px;
  height: 350px;
}
@media only screen and (max-width: 1000px) {
  .cards {
    justify-content: center;
  }
}
@media only screen and (max-width: 500px) {
  .card {
    flex-basis: 100%;
  }
}
</style>
