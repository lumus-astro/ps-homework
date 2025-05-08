<script setup>
import Button from "./components/Button.vue"
import Toolbar from "./components/Toolbar.vue"
import Card from "./components/Card.vue"
import { reactive, ref } from "vue"

const score = ref(0)

const cards = reactive([
  {
    number: "01",
    word: "car",
    translation: "автомобиль",
    state: "closed",
    status: "pending",
  },
])

const onFlip = (number) => {
  console.log(number)
}
</script>

<template>
  <div class="page">
    <div class="header">
      <Toolbar :score="score" />
    </div>

    <div class="content">
      <Button>
        <template #default>Начать игру</template>
      </Button>

      <Card v-bind="cards[0]" @flip="onFlip" />
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: var(--color-bg-main);
}

.header {
  height: 120px;
  padding: 0 60px;
  display: flex;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
}
</style>
