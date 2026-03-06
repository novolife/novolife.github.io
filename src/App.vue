<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const current = ref(0)
const themes = ['theme-bocchi', 'theme-nijika', 'theme-ryo', 'theme-ikuyo']

let timer: number

// 鼠标点击特效
interface ClickEffect {
  id: number
  x: number
  y: number
  text: string
}
const effects = ref<ClickEffect[]>([])
let effectId = 0

// 孤独摇滚相关元素
const bocchiItems = [
  '🎸', '🥁', '🎤', '🎵', '🎶', // 乐器与音乐
  '🗑️', '📦', '🥭', // 波奇（防空洞、纸箱、芒果盒）
  '🔺', '🧀', // 虹夏（多力多滋呆毛）
  '🌿', '💸', // 凉（吃草、借钱）
  '✨', '📸', // 郁代（现充光线、拍照）
]

function handleGlobalClick(e: MouseEvent) {
  const text = bocchiItems[Math.floor(Math.random() * bocchiItems.length)] || '🎸'
  const id = effectId++
  
  effects.value.push({
    id,
    x: e.clientX,
    y: e.clientY,
    text
  })

  // 动画结束后移除
  setTimeout(() => {
    effects.value = effects.value.filter(item => item.id !== id)
  }, 1000)
}

onMounted(() => {
  timer = window.setInterval(() => {
    current.value = (current.value + 1) % themes.length
  }, 6000)
  window.addEventListener('click', handleGlobalClick)
})

onUnmounted(() => {
  clearInterval(timer)
  window.removeEventListener('click', handleGlobalClick)
})
</script>

<template>
  <div class="app-bg">
    <div
      v-for="(theme, index) in themes"
      :key="theme"
      class="bg-layer"
      :class="[theme, { active: current === index }]"
    ></div>
  </div>

  <!-- 点击特效层 -->
  <div class="click-effects">
    <div
      v-for="item in effects"
      :key="item.id"
      class="click-item"
      :style="{ left: item.x + 'px', top: item.y + 'px' }"
    >
      {{ item.text }}
    </div>
  </div>

  <div class="app-content">
    <RouterView />
  </div>
</template>

<style scoped>
.app-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  background-color: var(--bg); /* fallback */
}

.bg-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

.bg-layer.active {
  opacity: 1;
}

/* 一里 - 波奇粉 (圆点底纹) */
.theme-bocchi {
  background-color: #fff0f5;
  background-image: radial-gradient(rgba(249, 168, 212, 0.4) 15%, transparent 15%),
                    radial-gradient(rgba(249, 168, 212, 0.4) 15%, transparent 15%);
  background-size: 40px 40px;
  background-position: 0 0, 20px 20px;
}

/* 虹夏 - 活力黄 (斜条纹底纹) */
.theme-nijika {
  background-color: #fffde7;
  background-image: repeating-linear-gradient(
    45deg,
    rgba(253, 224, 71, 0.3),
    rgba(253, 224, 71, 0.3) 20px,
    transparent 20px,
    transparent 40px
  );
}

/* 凉 - 冷淡蓝 (网格底纹) */
.theme-ryo {
  background-color: #f0f8ff;
  background-image: linear-gradient(rgba(147, 197, 253, 0.4) 1.5px, transparent 1.5px),
                    linear-gradient(90deg, rgba(147, 197, 253, 0.4) 1.5px, transparent 1.5px);
  background-size: 30px 30px;
}

/* 郁代 - 现充红 (方格交叉底纹) */
.theme-ikuyo {
  background-color: #fff0f2;
  background-image: 
    repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255, 180, 180, 0.25) 20px, rgba(255, 180, 180, 0.25) 40px),
    repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255, 180, 180, 0.25) 20px, rgba(255, 180, 180, 0.25) 40px);
}

.app-content {
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
}

/* 鼠标点击特效 */
.click-effects {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
}

.click-item {
  position: absolute;
  font-size: 1.5rem;
  user-select: none;
  pointer-events: none;
  transform: translate(-50%, -50%);
  animation: floatUpAndFade 1s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes floatUpAndFade {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.5) rotate(-15deg);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -120%) scale(1.2) rotate(10deg);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -180%) scale(1) rotate(20deg);
  }
}
</style>
