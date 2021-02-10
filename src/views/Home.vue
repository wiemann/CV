<template>
  <div class="cv">
    <h1>Curriculum Vitae</h1>
    <Section title="First Qualification">
      <p>This is the text for the Qualification.</p>
    </Section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Section from "@/components/Section.vue";

@Component({
  components: {
    Section
  }
})
export default class CV extends Vue {}
</script>
