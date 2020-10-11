<template>
  <div class="wrapper">
    <language-button :language="'a'" class="lang">Aw dansè</language-button>
    <language-button :language="'b'" class="lang">Ne y waongo</language-button>
    <language-button :language="'c'" class="lang">Fôfô</language-button>
    <header>
      <h1>Air et terre</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>
<style scoped>
.wrapper {
  margin-top: 52px;
}

h1 {
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  /* or 129% */
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 7px #0c582e;
}

.lang {
  margin-bottom: 24px;
}
</style>
