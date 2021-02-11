<template>
  <div class="cv">
    <h1>Curriculum Vitae</h1>
    <div v-for="(category, index) in data.categories" :key="index">
      <h2>{{ category.title }}</h2>
      <Section
        v-for="(item, index) in category.items"
        :key="index"
        :title="item.title"
        :timeRange="item.timeRange"
      >
        {{ item.description }}
      </Section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Section from "@/components/Section.vue";
import yaml from "js-yaml";

@Component({
  components: {
    Section
  }
})
export default class CV extends Vue {
  private data: any = {};

  load() {
    fetch("/cv.yaml")
      .then(response => response.text())
      .then(text => yaml.load(text))
      .then(data => (this.data = data));
  }

  created() {
    this.load();
  }
}
</script>
