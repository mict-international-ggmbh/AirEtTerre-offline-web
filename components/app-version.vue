<template>
  <div>v{{ version }}</div>
</template>

<script>
export default {
  name: 'AppVersion',

  data: () => ({
    version: process.env.version
  })
}
</script>
