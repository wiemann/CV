<template>
  <div class="cv">
    <header>
      <div class="intro">
        <h1>Curriculum Vitae</h1>
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
            Timezone: {{ data.timeZone }}
            <span class="tz">{{ data.timeZoneOffset }}</span>
          </p>
          <p>Year of Birth: {{ data.birthYear }}</p>
        </div>
      </div>
      <div class="profile-picture-holder">
        <img
          class="profile-picture"
          v-if="data.picture"
          :alt="data.name"
          :title="data.name"
          :src="data.picture.src"
          :srcset="`${data.picture.src} 1x, ${data.picture.srcHd} 2x`"
          :width="data.picture.width"
          :height="data.picture.height"
        />
      </div>
    </header>
    <main>
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
          :sector="item.sector"
          :location="item.location"
        >
          {{ item.description }}
        </Section>
      </div>
    </main>
    <footer>
      <p class="last-update">
        Last update: {{ data.lastUpdate }} |
        <a :href="data.source" targt="_blank">Source on GitHub</a>
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import Section from "@/components/Section.vue";
import { CVData } from "@/interfaces";
// @ts-ignore
import cv from "@/cv.yaml";

@Component({
  components: {
    Section
  }
})
export default class CV extends Vue {
  private data: CVData = cv;

  @Watch("data.name", { immediate: true })
  onNameChange(name: string) {
    document.title = `CV of ${name}`;
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
  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .profile-picture {
      border: 1px solid silver;
      background: #eee;
      border-radius: 50%;
      margin: 1rem;
    }
  }

  @media only screen and (min-width: 600px) {
    header {
      flex-direction: row;
    }
  }
}
</style>
