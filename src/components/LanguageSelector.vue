<template>
  <div class="language-selector">
    <!-- 지구본 아이콘 -->
    <v-btn
      icon
      @click="toggleMenu"
      class="language-button"
    >
      <v-icon large>mdi-earth</v-icon>
    </v-btn>

    <!-- 언어 선택 버튼 목록 -->
    <div
      class="language-options"
      :class="{ show: menu }"
    >
      <v-btn
        v-for="(language, index) in languages"
        :key="index"
        class="language-item"
        text
        block
        @click="selectLanguage(language)"
      >
        {{ language }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      menu: false, // 메뉴 열림/닫힘 상태
      languages: ["en", "kr"], // 언어 목록
    };
  },
  methods: {
    ...mapActions('language', ['updateLanguage']), // Vuex actions 연결
    toggleMenu() {
      this.menu = !this.menu; // 메뉴 상태 토글
    },
    selectLanguage(language) {
      this.updateLanguage(language); // Vuex 상태 업데이트
      this.menu = false; // 메뉴 닫기
    },
  },
};
</script>

<style scoped>
.language-selector {
  position: fixed;
  top: 100px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.language-button {
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.language-options {
  position: absolute;
  top: 60px;
  left: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 50px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease;
}

.language-options.show {
  max-height: 100px;
}

.language-item {
  font-size: 14px;
  text-align: center;
  padding: 10px 0;
  background-color: #f5f5f5;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.language-item:hover {
  background-color: #e0e0e0;
}

/* 모바일 화면에서 위치 조정 */
@media screen and (max-width: 768px) {
  .language-selector {
    top: auto; /* 기본 상단 위치 해제 */
    bottom: 20px; /* 화면 하단에서의 거리 */
    right: 20px; /* 화면 오른쪽에서의 거리 */
  }

  .language-options {
    top: auto; /* 기본 위치 해제 */
    bottom: 60px; /* 버튼 아래로 드롭다운 위치 */
  }
}
</style>
