<template>
  <div class="cv">
    <h1>Curriculum Vitae</h1>
    <img
      class="profile-picture"
      :src="data.picture.src"
      :width="data.picture.width / 2"
      :height="data.picture.height / 2"
    />
    <div class="h-card vcard">
      <p class="p-name fn">{{ data.name }}</p>
      <p class="title">{{ data.title }}</p>
      <p class="email">
        Mail: <a :href="`mailto:${data.email}`"> {{ data.email }}</a>
      </p>
      <p class="p-tel tel">
        Phone: <a :href="`tel:${data.phone}`">{{ data.phone }}</a>
      </p>
      <p class="adr">Location: {{ data.address }}</p>
      <p class="timezone">
        Timezone: {{ data.timeZone
        }}<span class="tz">{{ data.timeZoneOffset }}</span>
      </p>
      <p>Year of Birth: {{ data.birthYear }}</p>
    </div>
    <div
      v-for="(category, index) in data.categories"
      :key="index"
      class="chapter"
    >
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
    <p class="last-update">Last update: {{ data.lastUpdate }}</p>
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

<style scoped lang="scss">
.cv {
  h2 {
    margin-top: 3rem;
  }
  .last-update {
    padding-top: 0.5rem;
    margin-top: 2rem;
    border-top: 1px solid black;
    text-align: right;
  }

  @media only screen and (min-width: 600px) {
    .profile-picture {
      float: right;
    }
  }
}
</style>
