<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">LOGIN</router-link>
  </nav> -->
  <v-container
    v-bind:class="containerClass"
  >
    <router-view/>
  </v-container>
  <LanguageSelector />
</template>

<script>
import LanguageSelector from "./components/LanguageSelector.vue";

export default {
  components: {
    LanguageSelector,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  computed: {
    containerClass() {
      // 모바일일 때는 클래스를 사용하지 않음
      return this.isMobile ? 'px-1' : 'px-16';
    },
  },
  mounted() {
    // 초기 화면 크기를 확인
    this.checkIfMobile();

    // 화면 크기 변경 이벤트 추가
    window.addEventListener('resize', this.checkIfMobile);
  },
  beforeDestroy() {
    // 이벤트 리스너 제거
    window.removeEventListener('resize', this.checkIfMobile);
  },
  methods: {
    checkIfMobile() {
      // 모바일 환경인지 확인 (768px 이하를 모바일로 간주)
      this.isMobile = window.innerWidth <= 768;
    },
  },
};
</script>

<style>
html, body {
  margin: 0; /* 브라우저 기본 마진 제거 */
  padding: 0; /* 브라우저 기본 패딩 제거 */
  overflow-x: hidden; /* 가로 스크롤 방지 */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #F5F5F5;

  min-height: 100vh; /* 전체 화면 높이를 유지 */
  background-image: url('@/assets/background-high.webp'); /* 배경 이미지 경로 */
  background-size: cover; /* 이미지 비율을 유지하며 화면에 맞춤 */
  background-repeat: no-repeat; /* 이미지 반복 방지 */
  background-position: center center; /* 이미지 수직 및 수평 가운데 정렬 */
  background-attachment: fixed; /* 배경 고정 (스크롤 시 배경 고정) */
}
/* 
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
