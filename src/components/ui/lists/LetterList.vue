<template>
  <div class="list">
    <div class="letter" v-for="letter in letters" :key="letter" @click="this.letterClick(letter)">
      <p>{{ letter }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      letters: [
        'All',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
      ],
    }
  },
  methods: {
    letterClick(elem) {
      console.log(elem)
    },
  },
  props: {
    onclick: {
      type: Function,
      required: false,
    },
  },
}
</script>

<style>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.letter {
  padding: 10px;
  color: white;
  font-family: var(--default-font);
  font-weight: 600;
  background-color: var(--dark-light-background);
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.letter:hover {
  background-color: var(--dark-light-background-hover);
}
</style>
