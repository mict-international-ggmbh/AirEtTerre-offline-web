<template>
  <button><slot /></button>
</template>

<script>
export default {
  name: 'LanguageButton'
}
</script>

<style scoped>
button {
  color: #fff;
  background: #106b39;
  border-radius: 4px;
  min-width: 320px;
  height: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;
}
</style>
