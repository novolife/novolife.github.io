<script setup lang="ts">
import { resume } from '../data/resume'
</script>

<template>
  <div class="page">
    <header class="hero">
      <h1 class="name">{{ resume.basic.name }}</h1>
      <p class="tagline">{{ resume.basic.summary }}</p>
      <div class="meta">
        <span>{{ resume.basic.gender }} · {{ resume.basic.age }} 岁</span>
        <a :href="`mailto:${resume.basic.email}`" class="email">{{ resume.basic.email }}</a>
      </div>
    </header>

    <section class="block">
      <h2 class="block-title">技能概览</h2>
      <ul class="skills">
        <li v-for="(s, i) in resume.skills" :key="i">{{ s }}</li>
      </ul>
    </section>

    <section class="block">
      <h2 class="block-title">工作经历</h2>
      <article v-for="(work, i) in resume.works" :key="i" class="work">
        <div class="work-head">
          <h3 class="work-title">{{ work.title }}</h3>
          <span class="work-company"
            >{{ work.company }}{{ work.department ? ` · ${work.department}` : '' }}</span
          >
        </div>
        <div class="work-body">
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
      <article v-for="(proj, i) in resume.projects" :key="i" class="project">
        <h3 class="project-name">{{ proj.name }}</h3>
        <p class="project-desc">{{ proj.description }}</p>
        <p class="project-role"><strong>本人职责：</strong>{{ proj.role }}</p>
        <ul v-if="proj.highlights?.length" class="project-highlights">
          <li v-for="(h, j) in proj.highlights" :key="j">{{ h }}</li>
        </ul>
      </article>
    </section>

    <section class="block">
      <h2 class="block-title">教育经历</h2>
      <div class="education">
        <span class="edu-school">{{ resume.education.school }}</span>
        <span class="edu-period">{{ resume.education.period }}</span>
        <span class="edu-college">{{ resume.education.college }}</span>
        <span class="edu-major">{{ resume.education.major }}</span>
      </div>
    </section>

    <footer class="footer">
      <a :href="`mailto:${resume.basic.email}`">联系我</a>
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

.hero {
  text-align: center;
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border);
}

.name {
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin: 0 0 0.5rem;
  color: var(--heading);
}

.tagline {
  margin: 0 0 1rem;
  color: var(--muted);
  font-size: 0.95rem;
  max-width: 36em;
  margin-left: auto;
  margin-right: auto;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem 1.25rem;
  font-size: 0.875rem;
  color: var(--muted);
}

.email {
  color: var(--accent);
  text-decoration: none;
}

.email:hover {
  text-decoration: underline;
}

.block {
  margin-bottom: 2.25rem;
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
  border-radius: 4px;
  font-size: 0.875rem;
}

.work {
  margin-bottom: 1.75rem;
}

.work:last-child {
  margin-bottom: 0;
}

.work-head {
  margin-bottom: 0.6rem;
}

.work-title {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.2rem;
  color: var(--heading);
}

.work-company {
  font-size: 0.875rem;
  color: var(--muted);
}

.work-body {
  padding-left: 0.5rem;
}

.work-body h4 {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--muted);
  margin: 0.6rem 0 0.35rem;
}

.work-body h4:first-child {
  margin-top: 0;
}

.work-body ul {
  margin: 0 0 0 1rem;
  padding-left: 0.5rem;
}

.work-body li {
  margin-bottom: 0.25rem;
}

.project {
  margin-bottom: 1.75rem;
}

.project:last-child {
  margin-bottom: 0;
}

.project-name {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.4rem;
  color: var(--heading);
}

.project-desc,
.project-role {
  margin: 0 0 0.35rem;
  color: var(--text);
}

.project-role {
  font-size: 0.875rem;
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
  color: var(--text);
}

.footer {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  text-align: center;
  font-size: 0.875rem;
}

.footer a {
  color: var(--accent);
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

@media print {
  .page {
    padding: 0.5rem 0;
  }
  .hero {
    border-bottom-color: #ccc;
  }
  .footer {
    border-top-color: #ccc;
  }
}
</style>
