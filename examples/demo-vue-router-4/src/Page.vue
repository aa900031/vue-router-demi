<script setup>
import { useRouteQuery } from 'awesome-router-lib'
const query = useRouteQuery()
</script>

<template>
  <h1>Router Query: {{ query }}</h1>
</template>
