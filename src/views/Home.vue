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
          <p>Born: {{ data.birthYear }}, {{ data.birthCity }}</p>
        </div>
        <div class="tech-logos">
          <logo title="Vue.JS">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="tech-logo"
            >
              <title>Vue.js icon</title>
              <path
                d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"
              ></path>
            </svg>
          </logo>
          <logo title="Node.JS">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Node.js icon</title>
              <path
                d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
              ></path>
            </svg>
          </logo>
          <logo title="Rails">
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="rails-logo"
            >
              <title>Ruby on Rails icon</title>
              <path
                d="M7.523 7.781c-.187 0-.382.011-.582.035l.116.358c.175-.018.351-.024.527-.024h.06l-.12-.369zm2.315.358l-.024.4c.2.067.394.138.588.217l.026-.404c-.055-.03-.208-.104-.59-.213zm-4.988.23a9.597 9.597 0 00-.473.26l.28.426c.157-.097.308-.19.466-.268L4.85 8.37zm2.89.022a5.602 5.602 0 00-.654.027c-.443.04-.909.169-1.38.375-1.418.618-2.878 1.918-3.833 3.51-.955 1.591-1.291 3-1.4 3.603-.037.202-.05.313-.05.313h4.79s-.057-.26-.096-.678a8.18 8.18 0 01-.033-.732c0-.55.055-1.203.244-1.858.047-.163.103-.328.168-.49.065-.162.14-.321.225-.479.17-.314.381-.618.646-.894s.584-.525.963-.736c.248-.12.698-.365 1.346-.489.216-.041.453-.07.713-.076.26-.005.542.012.845.06.606.097 1.298.32 2.075.74.388.211.798.47 1.228.788.11-.09.211-.162.211-.162s-.196-.197-.547-.486c-.35-.29-.853-.672-1.467-1.043-.306-.186-.642-.37-.998-.538a8.852 8.852 0 00-1.129-.44 7.48 7.48 0 00-1.226-.27 6.048 6.048 0 00-.64-.045zm2.086 1.65l-.023.383c.2.006.4.03.6.072l.025-.375a4.32 4.32 0 00-.602-.08zm-1.418.146c-.206.061-.381.127-.533.194l.139.418c.175-.085.351-.157.527-.211l-.133-.4zm-6.008.024c-.157.151-.31.303-.449.455l.467.4c.127-.163.267-.327.412-.478l-.43-.377zm4.34.898c-.14.128-.266.267-.375.407l.291.435c.103-.151.224-.29.358-.43l-.274-.412zm.989.787v4.323h1.164v-1.043L9.9 16.219h1.721l-1.351-1.364s1.06-.09 1.06-1.46c0-1.37-1.285-1.499-1.285-1.499H7.729zm5.292.032c-.842 0-1.126.763-1.126 1.127v3.164h1.181v-.758h1.11v.758h1.146v-3.164c0-.922-.838-1.127-1.129-1.127h-1.182zm2.85 0v4.29h1.23v-4.29h-1.23zm1.733 0v4.291h2.88v-1.11h-1.656v-3.181h-1.224zm4.359 0c-.485 0-1.133.399-1.133 1.144v.383c0 .746.642 1.127 1.133 1.127 1.364.006-.327 0 .933 0v.533l-2.005.006v1.098h1.982c.406 0 1.103-.297 1.127-1.127v-.424c0-.71-.581-1.129-1.127-1.129h-.988v-.508h1.957v-1.103h-1.88zM5.668 12.8a5.75 5.75 0 00-.182.666l.49.388c.025-.236.069-.472.13-.709l-.438-.345zm7.771.15h.407c.327 0 .334.236.334.236v1.05h-1.11v-1.05s0-.236.37-.236zm-4.546.031h.933s.262.097.262.49c0 .395-.268.499-.268.499h-.927v-.989zm-8.59.061c-.115.26-.242.563-.303.727l.697.255c.08-.206.206-.504.303-.728l-.697-.254zm5.092 1.963c.012.321.043.584.074.765l.726.26a8.003 8.003 0 01-.144-.787l-.656-.238z"
              ></path>
            </svg>
          </logo>
          <logo title="Postgres">
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>PostgreSQL icon</title>
              <path
                d="M17.086 0a10.134 10.134 0 00-2.755.403l-.063.02a10.922 10.922 0 00-1.71-.165C11.38.238 10.368.524 9.552 1 8.748.721 7.08.24 5.322.336c-1.224.067-2.56.44-3.55 1.484C.785 2.865.262 4.482.372 6.682c.03.607.204 1.597.49 2.88.288 1.281.69 2.782 1.194 4.151.503 1.37 1.054 2.6 1.915 3.436.43.42 1.022.771 1.72.742.49-.02.933-.235 1.315-.552.186.245.385.352.566.451.228.125.45.21.68.266.413.103 1.12.241 1.948.1.282-.047.579-.139.875-.27.01.33.024.653.037.98.04 1.036.067 1.993.378 2.832.05.137.187.843.727 1.466.54.624 1.598 1.013 2.803.755.85-.182 1.93-.51 2.649-1.532.71-1.01 1.03-2.459 1.093-4.809a4.73 4.73 0 01.055-.336l.169.015h.02c.907.041 1.89-.088 2.713-.47.728-.337 1.279-.678 1.68-1.283.1-.15.21-.33.24-.643.03-.312-.15-.8-.446-1.025-.595-.452-.97-.28-1.37-.197a6.27 6.27 0 01-1.202.146c1.156-1.947 1.985-4.015 2.458-5.845.28-1.08.437-2.076.45-2.947.013-.87-.058-1.642-.58-2.309C21.318.6 19.025.024 17.25.004c-.055 0-.11-.002-.165 0zm-.047.64c1.678-.016 3.822.455 5.36 2.422.347.442.45 1.088.438 1.884-.013.795-.16 1.747-.43 2.79-.521 2.02-1.507 4.375-2.896 6.488a.756.756 0 00.158.086c.29.12.95.223 2.27-.048.332-.07.575-.117.827.075a.52.52 0 01.183.425.704.704 0 01-.13.336c-.255.383-.758.746-1.403 1.045-.571.266-1.39.405-2.116.413-.364.004-.7-.024-.985-.113l-.018-.007c-.11 1.06-.363 3.153-.528 4.108-.132.77-.363 1.382-.804 1.84-.44.458-1.063.734-1.901.914-1.038.223-1.795-.017-2.283-.428-.487-.41-.71-.954-.844-1.287-.092-.23-.14-.528-.186-.926-.046-.398-.08-.885-.103-1.434a51.426 51.426 0 01-.03-2.523 3.061 3.061 0 01-1.552.76c-.69.117-1.304.002-1.671-.09a2.276 2.276 0 01-.52-.2c-.17-.092-.332-.195-.44-.398a.56.56 0 01-.057-.38.61.61 0 01.218-.332c.198-.16.46-.25.855-.333.719-.148.97-.249 1.123-.37.13-.104.277-.314.537-.622a1.16 1.16 0 01-.003-.04 2.96 2.96 0 01-1.33-.359c-.15.158-.916.968-1.85 2.092-.393.47-.827.74-1.285.76-.458.02-.872-.212-1.224-.553-.703-.683-1.264-1.858-1.753-3.186-.488-1.328-.885-2.807-1.167-4.067-.283-1.26-.45-2.276-.474-2.766-.105-2.082.382-3.485 1.217-4.37.836-.885 1.982-1.22 3.099-1.284 2.005-.115 3.909.584 4.294.734.742-.504 1.698-.818 2.892-.798a7.39 7.39 0 011.68.218l.02-.009a6.854 6.854 0 01.74-.214 9.626 9.626 0 012.07-.25zm.152.67h-.146a8.74 8.74 0 00-1.704.192c1.246.552 2.187 1.402 2.85 2.25a8.44 8.44 0 011.132 1.92c.11.264.184.487.226.66.02.087.035.16.04.236a.44.44 0 01-.012.144c0 .003-.005.01-.006.013.03.876-.187 1.47-.213 2.306-.02.606.135 1.318.173 2.095.036.73-.052 1.532-.526 2.32.04.047.076.095.114.143 1.254-1.975 2.158-4.16 2.64-6.023.258-1.003.395-1.912.407-2.632.01-.72-.124-1.242-.295-1.46-1.342-1.716-3.158-2.153-4.68-2.165zm-4.79.256c-1.182.003-2.03.36-2.673.895-.663.553-1.108 1.31-1.4 2.085-.347.92-.466 1.81-.513 2.414l.013-.008c.357-.2.826-.4 1.328-.516.502-.115 1.043-.15 1.533.04s.895.636 1.042 1.314c.704 3.257-.22 4.468-.56 5.382a9.61 9.61 0 00-.33 1.013c.043-.01.086-.022.129-.026.24-.02.428.06.54.108.342.142.577.44.704.78.033.09.057.185.07.284a.336.336 0 01.02.127 55.14 55.14 0 00.014 3.738c.023.538.057 1.012.1 1.386.043.373.104.657.143.753.128.32.315.74.653 1.024.338.284.823.474 1.709.284.768-.165 1.242-.394 1.559-.723.316-.329.505-.787.626-1.488.18-1.05.545-4.095.589-4.668-.02-.432.044-.764.182-1.017.142-.26.362-.419.552-.505.095-.043.184-.072.257-.093a5.956 5.956 0 00-.243-.325 4.456 4.456 0 01-.666-1.099 8.296 8.296 0 00-.257-.483c-.133-.24-.301-.54-.477-.877-.352-.675-.735-1.493-.934-2.29-.198-.796-.227-1.62.28-2.2.45-.517 1.24-.73 2.427-.61-.035-.106-.056-.193-.115-.333a7.817 7.817 0 00-1.041-1.764c-1.005-1.285-2.632-2.559-5.146-2.6H12.4zm-6.642.052c-.127 0-.254.004-.38.011-1.01.058-1.965.351-2.648 1.075-.684.724-1.134 1.911-1.036 3.876.019.372.18 1.414.459 2.652.277 1.238.67 2.695 1.142 3.982.473 1.287 1.046 2.407 1.59 2.937.274.265.512.372.728.363.217-.01.478-.135.797-.518a43.244 43.244 0 011.81-2.048 3.497 3.497 0 01-1.167-3.15c.103-.739.117-1.43.105-1.976-.012-.532-.05-.886-.05-1.107a.336.336 0 010-.019v-.005l-.001-.006A9.893 9.893 0 017.7 4.307c.28-.744.697-1.5 1.322-2.112-.614-.202-1.704-.51-2.884-.568a7.603 7.603 0 00-.38-.01zM18.157 6.9c-.68.01-1.06.184-1.26.413-.283.325-.31.895-.134 1.597.175.703.537 1.49.877 2.142.17.327.335.621.468.86.134.24.232.41.292.555.055.134.116.252.178.362.263-.555.31-1.1.283-1.668-.035-.703-.198-1.422-.174-2.15.027-.85.195-1.405.21-2.063a5.793 5.793 0 00-.74-.048zm-8.234.115a2.82 2.82 0 00-.616.074 4.665 4.665 0 00-1.153.45 2.417 2.417 0 00-.35.227l-.021.02c.006.146.035.5.047 1.021.012.57-.002 1.297-.112 2.084-.24 1.71 1.002 3.126 2.46 3.128.085-.35.225-.707.365-1.082.406-1.094 1.205-1.892.532-5.006-.11-.51-.328-.716-.628-.832a1.474 1.474 0 00-.524-.084zm7.917.204h.05a.878.878 0 01.18.022c.054.012.1.03.138.055a.164.164 0 01.075.11l-.001.008a.24.24 0 01-.035.135.668.668 0 01-.11.15.677.677 0 01-.386.212.59.59 0 01-.41-.103.608.608 0 01-.13-.118.26.26 0 01-.063-.127.17.17 0 01.042-.128.384.384 0 01.117-.09c.096-.054.226-.094.373-.116.055-.008.109-.012.16-.013zm-7.82.168c.053 0 .109.005.166.013.153.021.289.062.393.122a.446.446 0 01.133.106.223.223 0 01.054.17.302.302 0 01-.075.154.649.649 0 01-.143.13.64.64 0 01-.448.113.728.728 0 01-.42-.228.71.71 0 01-.118-.164.28.28 0 01-.041-.177c.015-.108.104-.164.19-.195a.866.866 0 01.308-.04zm9.06 7.343l-.003.001c-.147.053-.268.075-.37.12a.452.452 0 00-.24.214c-.062.115-.116.32-.1.666a.51.51 0 00.148.07c.17.052.458.086.778.081.638-.007 1.423-.156 1.84-.35a3.95 3.95 0 00.943-.615h-.001c-1.393.288-2.18.211-2.663.012a1.315 1.315 0 01-.332-.2zm-8.031.094h-.021c-.053.005-.13.023-.28.188-.347.39-.47.635-.756.864-.287.228-.66.35-1.405.503a1.918 1.918 0 00-.461.144c.029.024.026.03.07.053.109.06.249.113.362.142.32.08.846.173 1.395.08.549-.094 1.12-.357 1.607-1.04.084-.118.093-.292.024-.479-.07-.187-.223-.348-.331-.393a.653.653 0 00-.204-.06z"
              ></path>
            </svg>
          </logo>
          <logo title="Lighthouse">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Lighthouse icon</title>
              <path
                d="M12 0l5.5 3.5v5H20v3h-2.25l2 12.5H4.25l2-12.5H4v-3h2.5V3.53zm2.94 13.25l-6.22 2.26L8 20.04l7.5-2.75zM12 3.56L9.5 5.17V8.5h5V5.15Z"
              ></path>
            </svg>
          </logo>
          <logo title="D3.js">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>D3.js icon</title>
              <path
                d="M13.312 12C13.312 5.718 8.22.625 1.937.625H0v5h1.938c3.521 0 6.375 2.854 6.375 6.375s-2.854 6.375-6.375 6.375H0v5h1.938c6.281 0 11.374-5.093 11.374-11.375zM24 7.563C24 3.731 20.893.625 17.062.625h-8a13.4154 13.4154 0 0 1 4.686 5h3.314c1.069 0 1.938.868 1.938 1.938 0 1.07-.869 1.938-1.938 1.938h-1.938c.313 1.652.313 3.348 0 5h1.938c1.068 0 1.938.867 1.938 1.938s-.869 1.938-1.938 1.938h-3.314a13.4154 13.4154 0 0 1-4.686 5h8c1.621 0 3.191-.568 4.438-1.605 2.943-2.45 3.346-6.824.895-9.77A6.9459 6.9459 0 0 0 24 7.563z"
              ></path>
            </svg>
          </logo>
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
        <h2>
          <a class="anchor" :id="`${titleToAnchor(category.title)}`"></a
          >{{ category.title }}
        </h2>

        <Section
          v-for="(item, index) in category.items"
          :key="index"
          :title="item.title"
          :timeRange="item.timeRange"
          :sector="item.sector"
          :location="item.location"
          :img="item.img"
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
import Logo from "@/components/Logo.vue";
import { CVData } from "@/interfaces";
// @ts-ignore
import cv from "@/cv.yaml";

function shortenTitle(title: string) {
  return title.split(" ")[0];
}

@Component({
  components: {
    Section,
    Logo
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
    padding-top: 2rem;
    a.anchor {
      display: block;
      position: relative;
      top: -4rem;
      visibility: hidden;
    }
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
    .vcard {
      margin-bottom: 1rem;
      p {
        margin: 0;
      }
      .title,
      .tel,
      .timezone {
        margin-bottom: 1rem;
      }
    }
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
    user-select: none;
    .toc-name,
    .toc-picture {
      display: none;
      overflow: hidden;
      .profile-picture {
        height: 1.5rem;
        width: 1.5rem;
        display: inline-block;
        vertical-align: middle;
        image-rendering: crisp-edges;
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
  .tech-logos {
    display: flex;
    margin-bottom: 20px;
    width: 100%;
    overflow: scroll;
  }

  @media only screen and (min-width: 600px) {
    header {
      flex-direction: row;
      .profile-picture {
        margin: 1rem;
      }
    }
    .toc.fixated {
      .toc-name {
        display: inline !important;
      }
    }
  }
}
</style>
