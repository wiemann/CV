<template>
  <section class="logo">
    <div class="inner">
      <div class="main">
        <slot></slot>
      </div>
      <p>{{ title }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VueMarkdown from "vue-markdown";

@Component({
  components: { VueMarkdown }
})
export default class Section extends Vue {
  @Prop() private readonly title!: string;
}
</script>

<style scoped lang="scss">
.logo {
  .inner {
    min-width: 50px;
    margin-right: 6px;
    border-radius: 3px;
    background: gray;
    background-image: linear-gradient(
      to top,
      #020202,
      #1f1f1f,
      #373737,
      #515151,
      #6c6c6c
    );
    color: white;
    padding: 6px;
  }
  p {
    margin: 0;
    margin-top: 3px;
    font-size: 12px;
    text-align: center;
  }
  .main {
    display: flex;
    align-items: center;
    min-height: 60px;
  }
  svg {
    max-width: 50px;
    max-height: 50px;
    path {
      fill: white;
    }
    margin: auto;
  }
}
</style>
