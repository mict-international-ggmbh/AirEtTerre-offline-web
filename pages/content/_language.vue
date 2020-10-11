<template>
  <div>Say hello to:</div>
</template>

<script>
export default {
  name: 'Content',

  validate({ params }) {
    let valid = false
    const languages = ['a', 'b', 'c']
    valid = languages.includes(params.language)
    return valid
  }
}
</script>

<style></style>
