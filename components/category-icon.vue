<template>
  <div class="cat-icon">
    <img :src="require(`~/assets/icons/${categoryId}.svg`)" />
  </div>
</template>

<script>
export default {
  name: 'CategoryIcon',

  props: {
    categoryId: {
      type: String,
      default: undefined
    }
  }
}
</script>

<style scoped></style>
