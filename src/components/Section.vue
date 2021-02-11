<template>
  <section class="section">
    <h3 v-if="title">{{ title }}</h3>
    <i v-if="timeRange" class="time-range"
      >{{ timeRange }}
      <span v-if="sector" class="sector"> | Sector: {{ sector }}</span>
      <span v-if="location" class="location"> | {{ location }}</span>
    </i>
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
  @Prop() private readonly sector!: string;
  @Prop() private readonly location!: string;
}
</script>

<style scoped lang="scss">
.section {
  h3 {
    margin-top: 3rem;
  }
}
</style>
