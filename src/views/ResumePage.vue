<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { resume } from '../data/resume'

const expandedWork = ref<boolean[]>(resume.works.map(() => false))
const expandedProj = ref<boolean[]>(resume.projects.map(() => false))
const expandedEdu = ref(false)

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const emphasizeWords = [
  'FreeRTOS',
  'μC/OS-II',
  'uGUI',
  'ARM',
  'RISC-V',
  'I²C',
  'IIC',
  'SPI',
  'UART',
  'USART',
  'ADC',
  'USB',
  'SD',
  'AVRCP',
  'A2DP',
  'TRDP',
  'Nordic',
  'nRF52',
  '32F4',
  'BSP',
  'SDK',
  'API',
] as const

const emphasizeRe = new RegExp(`(${emphasizeWords.map(escapeRegExp).join('|')})`, 'g')

function emphasizeParts(text: string): Array<{ t: string; em: boolean }> {
  const parts = text.split(emphasizeRe).filter((p) => p.length > 0)
  return parts.map((p) => ({ t: p, em: emphasizeWords.includes(p as (typeof emphasizeWords)[number]) }))
}

function toggleWork(i: number) {
  expandedWork.value = [...expandedWork.value]
  expandedWork.value[i] = !expandedWork.value[i]
}

function toggleProj(i: number) {
  expandedProj.value = [...expandedProj.value]
  expandedProj.value[i] = !expandedProj.value[i]
}

function toggleEdu() {
  expandedEdu.value = !expandedEdu.value
}
</script>

<template>
  <div class="page">
    <header class="page-header">
      <RouterLink to="/" class="back">← 返回首页</RouterLink>
      <h1 class="page-title">简历</h1>
    </header>

    <section class="block">
      <h2 class="block-title">技能概览</h2>
      <ul class="skills">
        <li v-for="(s, i) in resume.skills" :key="i">{{ s }}</li>
      </ul>
    </section>

    <section class="block">
      <h2 class="block-title">工作经历</h2>
      <article
        v-for="(work, i) in resume.works"
        :key="i"
        class="card collapsible"
        :class="{ expanded: expandedWork[i] }"
      >
        <button type="button" class="card-head" @click="toggleWork(i)">
          <span class="card-head-text">{{ work.company }}</span>
          <span v-if="work.period" class="card-head-meta">{{ work.period }}</span>
          <span class="card-arrow" aria-hidden="true">▼</span>
        </button>
        <div v-show="expandedWork[i]" class="card-body">
          <div class="work-title-row">
            <strong>{{ work.title }}</strong>
            <span v-if="work.department" class="work-dept">{{ work.department }}</span>
          </div>
          <h4>工作内容</h4>
          <ul>
            <li v-for="(d, j) in work.duties" :key="j">{{ d }}</li>
          </ul>
          <h4>工作成果</h4>
          <ul>
            <li v-for="(a, k) in work.achievements" :key="k">{{ a }}</li>
          </ul>
        </div>
      </article>
    </section>

    <section class="block">
      <h2 class="block-title">项目经历</h2>
      <article
        v-for="(proj, i) in resume.projects"
        :key="i"
        class="card collapsible"
        :class="{ expanded: expandedProj[i] }"
      >
        <button type="button" class="card-head" @click="toggleProj(i)">
          <span class="card-head-text">{{ proj.name }}</span>
          <span v-if="proj.period" class="card-head-meta">{{ proj.period }}</span>
          <span class="card-arrow" aria-hidden="true">▼</span>
        </button>
        <div v-show="expandedProj[i]" class="card-body">
          <h4>项目概述</h4>
          <ul class="project-points">
            <li v-for="(line, idx) in proj.description" :key="idx">
              <span
                v-for="(p, k) in emphasizeParts(line)"
                :key="k"
                :class="{ em: p.em }"
                >{{ p.t }}</span
              >
            </li>
          </ul>

          <p class="project-role">
            <strong>本人职责：</strong>
            <span
              v-for="(p, k) in emphasizeParts(proj.role)"
              :key="k"
              :class="{ em: p.em }"
              >{{ p.t }}</span
            >
          </p>
          <ul v-if="proj.highlights?.length" class="project-highlights">
            <li v-for="(h, j) in proj.highlights" :key="j">
              <span v-for="(p, k) in emphasizeParts(h)" :key="k" :class="{ em: p.em }">{{
                p.t
              }}</span>
            </li>
          </ul>
        </div>
      </article>
    </section>

    <section class="block">
      <h2 class="block-title">教育经历</h2>
      <article class="card collapsible" :class="{ expanded: expandedEdu }">
        <button type="button" class="card-head" @click="toggleEdu">
          <span class="card-head-text">{{ resume.education.school }}</span>
          <span class="card-head-meta">{{ resume.education.period }}</span>
          <span class="card-arrow" aria-hidden="true">▼</span>
        </button>
        <div v-show="expandedEdu" class="card-body">
          <div class="education">
            <span class="edu-college">{{ resume.education.college }}</span>
            <span class="edu-major">{{ resume.education.major }}</span>
            <span class="edu-period">{{ resume.education.period }}</span>
          </div>
          <ul v-if="resume.education.campusExperience?.length" class="campus-experience">
            <li v-for="(item, i) in resume.education.campusExperience" :key="i">{{ item }}</li>
          </ul>
        </div>
      </article>
    </section>

    <footer class="footer">
      <RouterLink to="/">返回首页</RouterLink>
      <span class="email-row">
        <span class="email-label">邮箱</span>
        <a :href="`mailto:${resume.basic.email}`" class="email-link">{{ resume.basic.email }}</a>
      </span>
    </footer>
  </div>
</template>

<style scoped>
.page {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1.5rem 3rem;
  color: var(--text);
  font-size: 0.9375rem;
  line-height: 1.65;
}

.page-header {
  margin-bottom: 2rem;
}

.back {
  display: inline-block;
  font-size: 0.875rem;
  color: var(--accent);
  text-decoration: none;
  margin-bottom: 0.5rem;
}

.back:hover {
  text-decoration: underline;
}

.page-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--heading);
  margin: 0;
}

.block {
  margin-bottom: 2rem;
}

.block-title {
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin: 0 0 1rem;
  padding-bottom: 0.35rem;
}

.skills {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
}

.skills li {
  padding: 0.25rem 0.6rem;
  background: var(--skill-bg);
  border-radius: var(--card-radius);
  font-size: 0.875rem;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transform: translateY(0);
  transition: transform 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease,
    border-color 0.18s ease;
  user-select: none;
}

.skills li:hover {
  transform: translateY(-2px);
  background: rgba(105, 210, 164, 0.2);
  border-color: rgba(105, 210, 164, 0.4);
  box-shadow: var(--shadow-soft);
}

@media (prefers-reduced-motion: reduce) {
  .skills li {
    transition: none;
  }
  .skills li:hover {
    transform: none;
  }
}

.card {
  background: var(--card-bg);
  border-radius: var(--card-radius);
  box-shadow: var(--shadow-soft);
  margin-bottom: 0.75rem;
  overflow: hidden;
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: var(--shadow-strong);
}

.card.collapsible .card-head {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem 1rem;
  padding: 1rem 1.25rem;
  border: none;
  background: transparent;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
}

.card-head-text {
  flex: 1;
  font-weight: 600;
  color: var(--heading);
}

.card-head-meta {
  font-size: 0.875rem;
  color: var(--muted);
}

.card-arrow {
  font-size: 0.7rem;
  color: var(--muted);
  transition: transform 0.25s ease;
}

.card.collapsible.expanded .card-arrow {
  transform: rotate(180deg);
}

.card-body {
  padding: 0 1.25rem 1.25rem;
  border-top: 1px solid var(--border);
  padding-top: 1rem;
  margin-top: 0;
}

.work-title-row {
  margin-bottom: 0.75rem;
}

.work-title-row strong {
  color: var(--heading);
}

.work-dept {
  font-size: 0.875rem;
  color: var(--muted);
  margin-left: 0.5rem;
}

.card-body h4 {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--muted);
  margin: 0.75rem 0 0.35rem;
}

.card-body h4:first-child {
  margin-top: 0;
}

.card-body ul {
  margin: 0 0 0 1rem;
  padding-left: 0.5rem;
}

.card-body li {
  margin-bottom: 0.25rem;
}

.project-desc,
.project-role {
  margin: 0 0 0.35rem;
}

.project-role {
  font-size: 0.875rem;
}

.project-points {
  margin: 0 0 0.5rem 1rem;
  padding-left: 0.5rem;
}

.project-points li {
  margin-bottom: 0.25rem;
}

.project-highlights {
  margin: 0.5rem 0 0 1rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
  color: var(--muted);
}

.project-highlights li {
  margin-bottom: 0.2rem;
}

.em {
  display: inline-block;
  padding: 0 0.18em;
  border-radius: 4px;
  background: rgba(94, 184, 232, 0.18);
  border: 1px solid rgba(94, 184, 232, 0.18);
  color: var(--heading);
  font-weight: 600;
}

.education {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  align-items: baseline;
}

.edu-school {
  font-weight: 600;
  color: var(--heading);
}

.edu-period {
  color: var(--muted);
  font-size: 0.875rem;
}

.edu-college,
.edu-major {
  font-size: 0.875rem;
}

.campus-experience {
  margin: 0.75rem 0 0 1rem;
  padding-left: 0.5rem;
}

.campus-experience li {
  margin-bottom: 0.25rem;
}

.footer {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  font-size: 0.875rem;
}

.footer a {
  color: var(--accent);
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.email-row {
  display: inline-flex;
  align-items: baseline;
  gap: 0.5rem;
}

.email-label {
  color: var(--muted);
}

.email-link {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
}

@media (max-width: 640px) {
  .page {
    padding: 1.5rem 1rem 2rem;
  }
  .card.collapsible .card-head {
    position: relative;
    flex-wrap: wrap;
    padding: 0.875rem 1rem;
  }
  .card-head-text {
    order: 1;
    width: calc(100% - 2rem);
  }
  .card-arrow {
    order: 2;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
  .card.collapsible.expanded .card-arrow {
    transform: translateY(-50%) rotate(180deg);
  }
  .card-head-meta {
    order: 3;
    width: 100%;
    margin-top: 0.25rem;
  }
  .card-body {
    padding: 0 1rem 1rem;
  }
}
</style>
