<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
$primaryLinkColor: blue;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5em;
  a {
    color: $primaryLinkColor;
    &:visited {
      color: darken($primaryLinkColor, 30%);
    }
  }
}
</style>
