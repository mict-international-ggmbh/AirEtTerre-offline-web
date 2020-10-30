<template>
  <div class="container">
    <div class="page">
      <Nuxt />
    </div>
  </div>
</template>

<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;

  height: 100%;
  box-sizing: border-box;
  color: #444444;
  overscroll-behavior-x: none;
  overflow-x: hidden;
}

body {
  min-height: 100%;
  overflow-anchor: none;
  overscroll-behavior-x: none;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

[id='__nuxt'],
[id='__layout'],
.container,
.page {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}

.page {
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

p:not(:last-child) {
  margin-bottom: 16px;
}

.page-enter-active,
.loading-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 100ms;
}
.page-enter,
.loading-leave-to {
  opacity: 0;
}
</style>
