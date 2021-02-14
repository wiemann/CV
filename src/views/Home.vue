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
          :src="data.picture.src"
          :srcset="`${data.picture.src} 1x, ${data.picture.srcHd} 2x`"
          :width="data.picture.width"
          :height="data.picture.height"
        />
      </div>
    </header>
    <main>
      <ul class="toc">
        <li class="toc-picture">
          <a href="#">
            <img
              class="profile-picture"
              v-if="data.picture"
              :alt="data.name"
              :src="data.picture.src"
              :srcset="`${data.picture.src} 1x, ${data.picture.srcHd} 2x`"
            />
          </a>
        </li>
        <li class="toc-name">
          <a href="#">{{ data.name }}</a>
        </li>
        <li v-for="category in data.categories" :key="category.title">
          <a :href="`#${titleToAnchor(category.title)}`">{{
            shortenTitle(category.title)
          }}</a>
        </li>
      </ul>

      <div
        v-for="(category, index) in data.categories"
        :key="index"
        class="chapter"
      >
        <h2 :id="`${titleToAnchor(category.title)}`">{{ category.title }}</h2>
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

function shortenTitle(title: string) {
  return title.split(" ")[0];
}

@Component({
  components: {
    Section
  },
  methods: {
    titleToAnchor: (title: string) => {
      return shortenTitle(title).toLowerCase();
    },
    shortenTitle
  }
})
export default class CV extends Vue {
  private data: CVData = cv;
  private fixatedObserver: IntersectionObserver | null = null;

  @Watch("data.name", { immediate: true })
  private onNameChange(name: string) {
    document.title = `CV of ${name}`;
  }

  private mounted() {
    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle("fixated", e.intersectionRatio < 1),
      { threshold: [1] }
    );

    observer.observe(document.querySelector(".toc") as HTMLElement);
    this.fixatedObserver = observer;
  }

  private beforeDestroy() {
    this.fixatedObserver?.disconnect();
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
  }
  .profile-picture {
    border: 1px solid silver;
    background: #eee;
    border-radius: 50%;
    display: block;
    margin: auto;
  }
  ul.toc {
    list-style: none;
    position: -webkit-sticky;
    position: sticky;
    top: -1px;
    padding: 0.75rem 0 0.5rem 0;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    background: white;
    white-space: nowrap;
    .toc-name,
    .toc-picture {
      display: none;
      .profile-picture {
        height: 1.5em;
        width: 1.5em;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .toc-picture {
      // padding-right: 1em;
      vertical-align: middle;
    }
    li {
      display: inline;
      margin-right: 0.5rem;
    }
    &.fixated {
      .toc-picture {
        display: inline;
      }
      .toc-name {
        display: none;
      }
    }
  }

  @media only screen and (min-width: 600px) {
    header {
      flex-direction: row;
      .profile-picture {
        margin: 1rem;
      }
    }
    .toc {
      .toc-picture {
        display: none !important;
      }
      .toc-name {
        display: inline !important;
      }
    }
  }
}
</style>
