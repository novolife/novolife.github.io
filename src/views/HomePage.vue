<template>
  <div class="home">
    <div class="hero">
      <div class="avatar">{{ resume.basic.name.charAt(0) }}</div>
      <h1 class="name">{{ resume.basic.name }}</h1>
      <p class="tagline">{{ resume.basic.summary }}</p>
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
  max-width: 28rem;
}

.avatar {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: var(--accent);
  color: var(--card-bg);
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  box-shadow: var(--shadow-soft);
}

.name {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--heading);
  margin: 0 0 0.75rem;
}

.tagline {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--text);
  margin: 0 0 1.5rem;
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
  .tagline {
    font-size: 0.875rem;
  }
  .actions {
    flex-direction: column;
  }
  .btn {
    width: 100%;
  }
}
</style>
