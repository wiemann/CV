<template>
  <section class="section">
    <h2>{{ title }}</h2>
    <div class="main"><slot></slot></div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Section extends Vue {
  @Prop() private readonly title!: string;
}
</script>
