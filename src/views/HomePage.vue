<template>
  <div class="home">
    <div class="hero">
      <img
        class="avatar"
        src="/favicon/web-app-manifest-512x512.png"
        alt="novolife avatar"
      />
      <h1 class="name">{{ resume.basic.name }}</h1>
      <div class="tags">
        <span v-for="(tag, i) in resume.basic.homeTags" :key="i" class="tag">{{ tag }}</span>
      </div>
      <div class="actions">
        <RouterLink to="/resume" class="btn btn-primary">查看简历</RouterLink>
        <a :href="`mailto:${resume.basic.email}`" class="btn btn-outline">联系我</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { resume } from '../data/resume'
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
}

.hero {
  text-align: center;
  max-width: 32rem;
}

.avatar {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: block;
  object-fit: cover;
  border: 3px solid #fff;
  margin: 0 auto 1.25rem;
  box-shadow: var(--shadow-soft);
}

.name {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--heading);
  margin: 0 0 0.75rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin: 0 0 1.5rem;
}

.tag {
  font-size: 0.8125rem;
  padding: 0.3rem 0.65rem;
  background: var(--skill-bg);
  color: var(--text);
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transform: translateY(0);
  transition: transform 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease,
    border-color 0.18s ease;
  user-select: none;
}

.tag:hover {
  transform: translateY(-2px);
  background: rgba(94, 184, 232, 0.18);
  border-color: rgba(94, 184, 232, 0.35);
  box-shadow: var(--shadow-soft);
}

@media (prefers-reduced-motion: reduce) {
  .tag {
    transition: none;
  }
  .tag:hover {
    transform: none;
  }
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.25rem;
  border-radius: var(--card-radius);
  font-size: 0.9375rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--accent);
  color: var(--card-bg);
  box-shadow: var(--shadow-soft);
}

.btn-primary:hover {
  box-shadow: var(--shadow-strong);
}

.btn-outline {
  background: transparent;
  color: var(--accent);
  border: 2px solid var(--accent);
}

.btn-outline:hover {
  background: var(--accent);
  color: var(--card-bg);
}

@media (max-width: 480px) {
  .home {
    padding: 1.5rem 1rem;
  }
  .name {
    font-size: 1.5rem;
  }
  .tags {
    margin-bottom: 1.25rem;
  }
  .tag {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
  .actions {
    flex-direction: column;
  }
  .btn {
    width: 100%;
  }
}
</style>
