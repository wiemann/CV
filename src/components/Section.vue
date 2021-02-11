<template>
  <section class="section">
    <h3>{{ title }}</h3>
    <p class="time-range">{{ timeRange }}</p>
    <div class="main">
      <vue-markdown>
        <slot></slot>
      </vue-markdown>
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
  @Prop() private readonly timeRange!: string;
}
</script>
