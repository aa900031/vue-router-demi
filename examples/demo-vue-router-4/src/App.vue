<script setup>
import { useRouteQuery } from 'awesome-router-lib'

const query = useRouteQuery()

const handleClick1 = () => {
  query.value = { test: 1 }
}
const handleClick2 = () => {
  query.value = { test: 2 }
}
</script>

<template>
  <div id="app">
    <button @click="handleClick1">Query Test = 1</button>
    <button @click="handleClick2">Query Test = 2</button>
    <router-view></router-view>
  </div>
</template>
